import type { ReactNode } from "react"



export const PageTitle = ({children, className="text-4xl"}: Readonly<{children: ReactNode, className?:String}>)  => {
  return(
    <p className={`underline underline-offset-4 text-teal-900 ${className}`}>{children}</p>
  )
}