import { BlogCard, BlogCardSkeleton } from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks";

export const Blogs = ()=>{
    const {loading, blogs} = useBlogs();

    if(loading){
        return  <> 
        <Appbar button={true} buttonText="New Blog"/>
        <div className="flex flex-col items-center">
            <div className="py-6 w-10/12 md:w-8/12 lg:w-6/12">
                <BlogCardSkeleton/> 
                <BlogCardSkeleton/> 
                <BlogCardSkeleton/> 
                <BlogCardSkeleton/>
                <BlogCardSkeleton/> 
            </div>
        </div>
        </>
    }

    return (<>
        <Appbar button={true} buttonText="New Blog"/>
        <div className="flex flex-col items-center">
            <div className=" py-6 w-10/12 md:w-8/12 lg:w-6/12">
                <BlogCard blogArray={blogs}/> 
            </div>
        </div>
    </>)
}