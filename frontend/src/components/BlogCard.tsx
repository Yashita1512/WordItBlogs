import { Link } from "react-router-dom";
import { Avataar } from "./Avataar"
import { SkeletonLoader } from "../components/SkeletonLoader";

interface Author {
    firstName: string;
    lastName: string;
}

interface Blog {
    id: string;
    title: string;
    content: string;
    author: Author;
}

interface BlogCardTypes {
    blogArray: Blog[]; 
}

export const BlogCard = ({blogArray}: BlogCardTypes)=>{
    return <>
        {blogArray.slice().reverse().map((blog)=>(
            <Link to={`/blog/${blog.id}`}>
            <div className="border-b-2 pt-6">
                <div className="flex items-center mb-4">
                    <Avataar renderSize="small" authorName={blog.author.firstName + "" + blog.author.lastName}/> 
                    <div className="ml-3 text-sm font-light">
                        {blog.author.firstName +  " " + blog.author.lastName}   
                    </div>
                    <div className="ml-2 mt-1 w-1 h-1 rounded-lg bg-slate-500">
                    </div>
                    <div className="text-slate-400 text-sm ml-2">
                        {"2 dec 2000"}
                    </div>
                </div>
                <div className="text-xl font-bold mb-2">
                    {blog.title}
                </div>
                <div className="mb-6">
                    {blog.content.slice(0,200) + "..."}
                </div>
                <div className="text-slate-400 text-sm mb-6">
                    {Math.ceil(blog.content.length/1000)} {blog.content.length/200 > 1 ? "minute read" : "minutes read"}
                </div>
            </div>
            </Link>
        ))}
    </>
}

export const BlogCardSkeleton = () => {
    return <>
        <div className="border-b-2 pt-6">
                <div className="flex items-center mb-4">
                    <Avataar renderSize="small"/> 
                    <SkeletonLoader className="ml-3 text-sm font-light w-10 h-3 rounded-sm"/>
                    <div className="ml-2 mt-1 w-1 h-1 rounded-md bg-slate-500"></div>
                    <SkeletonLoader className="ml-3 text-sm font-light w-10 h-3 rounded-sm"/>
                </div>
                <SkeletonLoader className="rounded-md text-xl font-bold mb-2 w-full h-5"/>
                <SkeletonLoader className="rounded-md mb-6 w-full h-10"/>
                <SkeletonLoader className="text-slate-400 text-sm mb-6 w-10 h-4 rounded-md"/>
            </div>
    </>
}