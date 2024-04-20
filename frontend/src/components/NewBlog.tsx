import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"
import { BACKEND_URL } from "../../config";
import axios from "axios";

export const NewBlog = () => {

    const [blogInputs, setBlogInputs] = useState({
        title: "",
        content: "",
    })

    return <>
        <div className="flex justify-center mt-10">
            <div className="w-7/12">
                <div className="mb-3 text-slate-500 text-lg font-medium">
                    Title of the Blog :
                </div>
                <input className="w-full mb-5 p-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-md" onChange={(e:ChangeEvent<HTMLInputElement>)=>{setBlogInputs({...blogInputs, title: e.target.value})}} placeholder="Blog Title"/>
                <div className="mb-3 text-slate-500 text-lg font-medium">
                    Write the content for the blog :
                </div>
                <textarea  rows={10} className="p-2.5 mb-4 w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-md" onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>{setBlogInputs({...blogInputs, content: e.target.value})}} placeholder="Blog Content..."></textarea>
                <Link to='/blogs'>
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-10 py-2.5" onClick={async()=>{
                        await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                            title : blogInputs.title,
                            content : blogInputs.content
                        },{
                            headers:{
                                Authorization : localStorage.getItem('token')
                            }
                        })
                    }}>
                        Publish
                    </button>
                </Link>
            </div>
        </div>
    </>
}