import React,{useId} from 'react'

const Select = ({
    labels,
    options,
    className="",
    ...props
},ref) => {
    const id=useId();
  return (
    <div>
        {labels && <label className='inline-block mb-1 pl-1' htmlFor={id}></label>}
        <select>
            {...props}
            id={id}
            className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            {options?.map((option)=>{
               <options key={option} value={option}>
                {option.label}
               </options>
            })}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)