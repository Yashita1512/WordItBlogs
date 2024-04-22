import { Appbar } from "../components/Appbar"
import { NewBlog } from "../components/NewBlog"

export const PublishBlog = ()=>{
    return <>
    <div className="sticky">
        <Appbar/>
        </div>
        <NewBlog/>
    </>
}