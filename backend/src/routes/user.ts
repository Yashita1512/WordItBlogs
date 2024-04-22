import {Hono} from "hono"; 
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput, signinInput } from "@yashita11/common";

export const userRouter = new Hono<{Bindings:{DATABASE_URL: string, JWT_SECRET: string}}>();

userRouter.post('/signup', async (c) => {
    const unparsedBody = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())
    
    const body = signupInput.safeParse(unparsedBody);

    if(!body.success){
      c.status(411);
      return c.json({msg: "Data validation for signup failed!"})
    }

    try{
      const user = await prisma.user.create({
        data:{
          username : body.data.username,
          password: body.data.password, 
          firstName: body.data.firstName, 
          lastName: body.data.lastName
        }
      })
      const name = user.firstName + " " + user.lastName;
      const token = await sign(user.id, c.env.JWT_SECRET)
      return c.json({
        name,
        token
      })
    } catch(err){
      console.log(err)
      c.status(411)
      return c.text('Invalid credentials!')
    }
  })
  
  userRouter.post('/signin', async (c) => {
    const unparsedBody = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())
    
    const body = signinInput.safeParse(unparsedBody);

    if(!body.success){
      c.status(411);
      return c.json({msg: "Data validation for signin failed!"})
    }

    try{
      const user = await prisma.user.findUnique({
        where:{
          username : body.data.username,
          password: body.data.password
        }
      })
  
      if(!user){
        c.status(403)//unauthorized
        return c.text('User doesnt exist');
      }
      const name = user.firstName + " " + user.lastName;
      const token = await sign({id : user.id}, c.env.JWT_SECRET)
      return c.json({
        name,
        token
      })
  
    } catch(err){
      console.log(err)
      c.status(411)
      return c.text('Invalid credentials!')
    }
  })
  