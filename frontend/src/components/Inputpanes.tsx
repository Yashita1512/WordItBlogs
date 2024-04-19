import { ChangeEvent } from "react"

interface inputPaneTypes{
    label:string, 
    placeholder?: string, 
    saveInputs: (e:ChangeEvent<HTMLInputElement>)=>void
    type? : string;
}

export const Inputpanes = ({label,placeholder, saveInputs, type}:inputPaneTypes )=>{

    return <>
    <div className="my-6">
        <div className="text-md font-bold mb-2">
            {label}
        </div>
        <input onChange={saveInputs} type={type || "text"} className="rounded-lg border border-gray-200 text-gray-600 text-sm block w-full p-2.5" placeholder={placeholder} required />
    </div>
    </>
}                                                               