import { Avataar } from "./Avataar";
import { SkeletonLoader } from "./SkeletonLoader";

interface Author {
    firstName: string,
    lastName?: string
}

interface Blog {
    id: string;
    title: string;
    content: string;
    author: Author;
}

interface BlogCardTypes{
    FullBlog: Blog;
}

export const SingleBlog = ({ FullBlog } : BlogCardTypes )=>{
        return <>
            <div className="w-10/12 md:w-8/12 mt-16 xl:grid grid-cols-4">
                <div className="col-span-3">
                    <div className="text-2xl md:text-5xl font-bold">
                        {FullBlog.title}
                    </div>
                    <div className="text-slate-400 my-8">
                        Posted on December 2, 2023
                    </div>
                    <div>
                        {FullBlog.content}
                    </div>
                </div>
            <div className="xl:ml-4">
                <div className="mt-8 xl:mt-1">
                    Author
                </div>
                <div className="flex items-center mt-4">
                    <div>
                    <Avataar renderSize="medium" authorName={FullBlog.author.firstName + FullBlog.author.lastName}/>
                    </div>
                  
                    <div className="pl-6">
                        <div className="text-xl font-bold">
                                {FullBlog.author.firstName + " " + FullBlog.author.lastName}
                        </div>
                        <div>
                            Master of puns, person in the Kingdom.
                        </div>
                    </div>
                </div>  
            </div>
            </div>
        </>
}

export const SingleBlogSkeleton = ()=>{
    return <>
        <div className="w-10/12 md:w-8/12 mt-16 grid grid-cols-4">
            <div className="col-span-3">
                <SkeletonLoader className="text-5xl font-bold w-full rounded-md h-24"/>
                <SkeletonLoader className="text-slate-400 my-8 w-6/12 rounded-md h-6"/>
                <SkeletonLoader className="text-slate-400 my-8 w-full rounded-md h-36"/>
            </div>
            <div className="ml-4">
                <SkeletonLoader className="text-slate-400 w-6/12 rounded-md h-4"/>
                <div className="flex items-center mt-4">
                    <div>
                        <Avataar renderSize="medium" />
                    </div>
                    <div className="pl-6 w-full">
                        <SkeletonLoader className="text-slate-400 w-full rounded-md h-6"/>
                        <SkeletonLoader className="text-slate-400 w-full rounded-md h-12 mt-4"/>
                    </div>  
                </div>
            </div>
        </div>
    </>
}



