import { Quote } from "../components/Quote";
import { SignUpInput } from "../components/SignUpInput";

export const Signup = ()=>{
    return <>
        <div className="xl:grid xl:grid-cols-2">
            <SignUpInput/>
            <div className="invisible xl:visible">
                <Quote/> 
            </div>
        </div>
    </>
}