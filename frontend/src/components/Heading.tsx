export const Heading = ({text, className}:{text:string, className?:string})=>{
    return <>
        <div className={`${className} text-xl font-bold mb-3 flex justify-center`}>
            {text}
        </div>
    </>
}