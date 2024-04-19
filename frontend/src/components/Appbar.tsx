import { Avataar } from "./Avataar"
import { Link } from "react-router-dom"


interface AppBarTypes{button? : boolean, buttonText?: string}

export const Appbar=({button, buttonText}: AppBarTypes)=>{
    return <>
    <div className="border-b-2 flex justify-between items-center px-8 py-2">
        <Link to={'/blogs'}>
            <div>
                Medium
            </div>
        </Link> 
        <div className="flex gap-4 items-center">
        {button?  <Link to='/publish'>
            <div  className="flex items-center justify-center">
                <button type="button" className="text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5">
                    {buttonText}
                </button>
            </div>
        </Link> : null}
        <Avataar renderSize="medium" authorName="Yashita Sharma"/>
        </div>
    
    </div>
    </>
}