import { Heading } from "./Heading"
import { Subheading } from "./Subheading"
import { Inputpanes } from "./Inputpanes"
import { Button } from "./Button"
import { useState } from "react"
import { SigninInput } from "@yashita11/common"
import axios from "axios"
import { BACKEND_URL } from "../../config"
import { useNavigate } from "react-router-dom"

export const SignInInput = ()=>{
    
    const [postInputs, setPostInputs] = useState<SigninInput>({
        username: "",
        password:""
    })

    const navigate = useNavigate();
    return <>
    <div className="w-full h-screen flex justify-center items-center">
        <div className="w-8/12 sm:w-5/12">
            <Heading text="Sign in an account"/>
            <Subheading text="Do not have an account?" linkText="Signup" link="/signup"/>
            <Inputpanes saveInputs={(e)=>{setPostInputs({...postInputs, username: e.target.value})}}  label={"Username"} placeholder={"Enter your username"}/>
            <Inputpanes saveInputs={(e)=>{setPostInputs({...postInputs, password: e.target.value})}}  label="Password" placeholder=""/>
            <Button buttonLabel="Signin" sendData={async()=>{
               try{                                                                                                                                                                                                                                                                                                                                                                                                                                 
                const response = await axios.post(BACKEND_URL + "/api/v1/user/signin", postInputs)
                const token = response.data;
                localStorage.setItem('token',token)
                navigate('/blogs')
               }catch(err){
                alert("Signin failed: Please check your network and try again.");
               }
            }}/>
        </div>
    </div>
    </>
}