import type{ ReactNode } from "react"

export type FormLabelPropsType = {
  htmlFor?:string,
  children:ReactNode,
  className?: String
}

export default function  FormLabel({htmlFor="", children, className="w-1/3"}: Readonly<FormLabelPropsType> ) {
  return(
    <>
    <label htmlFor={htmlFor} className={`text-lg font-semibold ${className}`}>
     {children}
    </label>
            {/* text, number, url, date, url, time, datetime-local, email, password, radio, checkbox, file, tel, submit, reset, button, hidden */}
    
    </>
  )
}