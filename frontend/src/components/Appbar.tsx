
import { Avataar } from "./Avataar"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

interface AppBarTypes{
  button? : boolean, 
  buttonText?: string
}

export const Appbar=({button, buttonText}: AppBarTypes)=>{
  const [clicked, setClicked] = useState(false);
  const navigate= useNavigate();
  const author = localStorage.getItem('author')

  return <>
   <div className="sticky top-0 z-50 bg-white border-b-2 px-8 py-2">
      <div className="flex justify-between items-center">
      <Link to={'/blogs'}>
          <div className="font-semibold text-xl">
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
        <button onClick={()=>{setClicked((prevClicked)=>!prevClicked)}}>
          <Avataar renderSize="medium" authorName={author? author : null}/>
        </button>
      </div>
    </div>
    <div className="flex justify-end relative">
        {clicked? <button onClick={()=>{
            navigate('/signin');
            localStorage.clear();
          }} className="absolute top-0 p-2 text-lg font-semibold bg-slate-300 w-24 text-center mt-4">
                    Log out
                  </button>: null}
      </div> 
    </div>

  </>
}