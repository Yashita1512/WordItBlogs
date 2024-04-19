import { Link } from "react-router-dom"


export const Subheading=({text, linkText, link}:{text:string, link:string, linkText: string})=>{
    return <>
    <div className="flex justify-center mb-8">
    <div className="text-slate-400 text-sm mr-1">
            {text}
        </div>
        <div className="text-slate-400 text-sm underline">
            <Link to={link}>{linkText}</Link>
        </div>
    </div>
  
    </>
}