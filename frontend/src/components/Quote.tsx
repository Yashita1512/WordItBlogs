import { Heading } from "./Heading"


export const Quote = ()=>{
    return <>
        <div className="bg-slate-100 w-full h-screen flex justify-center items-center">
            <div className="w-9/12">
                    <Heading text ={'"The customer support was exceptional. The support team went above and beyond to address my concerns."'}/>
                <div className="text-lg font-semibold">
                    Jules Winnfield
                </div>
                <div className="text-sm text-gray-500">
                    CEO | Acme Inc.
                </div>
            </div>
        </div>
    </>
}