import { Heading } from "../components/Heading"
import { Button } from "../components/Button"
import { Link } from "react-router-dom"

export const Home = () => {
    return <>
        <div className="flex flex-col justify-center h-screen items-center">
            <div>
                <Heading text="Word - It - Blogs" className="md:text-3xl"/>
                <div className="flex items-center justify-center pt-4 pb-8 md:p-8">
                    <div className="w-max">
                        <h1 className="animate-typing overflow-hidden whitespace-nowrap pr-5 text-md md:text-4xl text-gray-400">Words that Sparkle, Ideas that Shine.  .</h1>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 md:gap-8">
                <div>
                <Link to='/signup'><Button buttonLabel="Signup"/></Link>
                </div>
                <div>
                <Link to='/signin'><Button buttonLabel="Signin"/></Link>
                </div>
            </div>
        </div>
        
    </>
}

