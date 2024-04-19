import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from 'hono/jwt';
import { createBlogInput, updateBlogInput } from "@yashita11/common";
export const blogRouter = new Hono();
blogRouter.use("/*", async (c, next) => {
    //extract the user id
    const authHeader = c.req.header("Authorization") || "";
    if (!authHeader) {
        c.status(401);
        return c.json({ error: "unauthorized" });
    }
    try {
        const user = await verify(authHeader, c.env.JWT_SECRET);
        if (user) {
            c.set("userId", user.id);
            await next();
        }
        else {
            c.status(403);
            return c.json({
                msg: "You are not logged in"
            });
        }
    }
    catch (err) {
        console.error(err);
        c.status(403);
        return c.json({ msg: "Verification Failed." });
    }
});
blogRouter.post('/', async (c) => {
    const unparsedBody = await c.req.json();
    //pass it down to  the route handler
    const authorId = parseInt(c.get("userId"));
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const body = createBlogInput.safeParse(unparsedBody);
    if (!body.success) {
        c.status(411);
        return c.json({ msg: "Invalid data posted" });
    }
    try {
        const blog = await prisma.blog.create({
            data: {
                title: body.data.title,
                content: body.data.content,
                authorId: authorId
            }
        });
        return c.json({
            blog
        });
    }
    catch (err) {
        console.log(err);
        c.status(411);
        c.json({
            msg: "Blog creation failed"
        });
    }
});
blogRouter.put('/', async (c) => {
    const unparsedBody = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const body = updateBlogInput.safeParse(unparsedBody);
    if (!body.success) {
        c.status(411);
        return c.json({ msg: "Invalid data to update" });
    }
    try {
        const blog = await prisma.blog.update({
            where: {
                id: body.data.id
            },
            data: {
                title: body.data.title,
                content: body.data.content
            }
        });
        return c.json({ blog });
    }
    catch (err) {
        console.log(err);
        c.status(411);
        return c.json({
            msg: "Blog updation failed"
        });
    }
});
//adding pagination
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    });
    try {
        const blog = await prisma.blog.findMany({});
        return c.json({ blog });
    }
    catch (err) {
        console.log(err);
        c.status(411);
        return c.json({
            msg: "Blogs fetching failed"
        });
    }
});
blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    });
    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: Number(c.req.param("id"))
            }
        });
        return c.json({ blog });
    }
    catch (err) {
        console.log(err);
        c.status(411);
        return c.json({
            msg: "Blog fetching failed"
        });
    }
});
