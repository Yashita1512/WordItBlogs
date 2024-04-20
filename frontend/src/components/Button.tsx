interface buttonInputTypes {
    buttonLabel: string, 
    sendData?: (e:any)=>void
}

export const Button = ({buttonLabel, sendData}:buttonInputTypes)=>{
    return <>
        <button onClick={sendData} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 font-lg rounded-lg text-md px-5 py-2.5 me-2 mb-2 ">{buttonLabel}</button>
    </>
}