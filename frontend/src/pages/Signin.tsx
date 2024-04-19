import { Quote } from "../components/Quote";
import { SignInInput } from "../components/SignInInput";

export const Signin = ()=>{
    return <>
        <div className="xl:grid xl:grid-cols-2">
            <SignInInput/>
            <div className="invisible xl:visible">
                <Quote/> 
            </div>
        </div>
    </>
}