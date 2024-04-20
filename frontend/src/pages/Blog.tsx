import { Appbar } from "../components/Appbar";
import { SingleBlog, SingleBlogSkeleton } from "../components/SingleBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
    const {id} = useParams();
    if (!id) {
        return <div>No blog ID provided.</div>;
      }

    const { loading, blog } = useBlog({id});

    if(loading){
        return <>
            <Appbar/>
            <div className="flex justify-center">
                <SingleBlogSkeleton/>
            </div>
        </>
    }

    if(!blog){
        return <>
            <Appbar button={true} buttonText="New Blog"/>
            <div>Can't fetch blog details</div>
        </>
    }

    return <>
        <Appbar  button={true} buttonText="New Blog"/>
        <div key = {id} className="flex justify-center">
           <SingleBlog FullBlog={blog} />
        </div>
    </>
}