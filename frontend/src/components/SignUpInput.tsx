import { Heading } from "./Heading"
import { Subheading } from "./Subheading"
import { Inputpanes } from "./Inputpanes"
import { Button } from "./Button"
import { useState } from "react"
import { SignupInput } from "@yashita11/common";
import axios from "axios"
import {BACKEND_URL } from "../../config"
import { useNavigate } from "react-router-dom"

export const SignUpInput = ()=>{

    const [postInputs, setPostInputs] = useState<SignupInput>({
        username: "",
        firstName: "",
        lastName:"",
        password:""
    })

    const navigate = useNavigate();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    return <>
    <div className="w-full h-screen flex justify-center items-center">
        <div className="w-8/12 sm:w-6/12">
            <Heading text="Create an account"/>
            <Subheading text="Already have an account?" linkText="Signin" link="/signin"/>
            <Inputpanes saveInputs={(e)=>{setPostInputs({...postInputs,username:e.target.value })}} label="Email" placeholder="m@example.com"/>
            <Inputpanes saveInputs={(e)=>{setPostInputs({...postInputs,firstName:e.target.value })}} label="First Name" placeholder="John"/>
            <Inputpanes saveInputs={(e)=>{setPostInputs({...postInputs,lastName:e.target.value })}} label="Last Name" placeholder="Doe"/>
            <Inputpanes saveInputs={(e)=>{setPostInputs({...postInputs,password:e.target.value })}} label="Password" type="password"/>
            <Button buttonLabel="Signup" sendData={async ()=>{
                try{
                    const response = await axios.post(BACKEND_URL + "/api/v1/user/signup", postInputs);
                    const token = response.data.token;
                    const name = response.data.name;
                    localStorage.setItem('token', token)
                    localStorage.setItem('author', name)
                    navigate('/blogs')
                }catch(err){
                    alert("Signup failed: Please check your network and try again.");
                }
            }}/>
        </div>
    </div>
    </>
}