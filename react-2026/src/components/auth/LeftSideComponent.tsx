import type{ ReactNode } from "react"

export default function AuthLeftSideComponent({title, children}: Readonly<{title: String, children?:ReactNode}>) {
 
  
  return(
    <>
     <div className="w-1/3 min-h-screen bg-emerald-900 items-center justify-center flex ">
      <div className="w-full flex flex-col items-center justify-center gap-10 text-white">
      <div className="size-25">
        <img  className="rounded-full" src="https://placehold.co/200x200" alt="profile" />
      </div>
      <h1 className="font-semibold">
        {title}
      </h1>
      <p className="text-center text-sm ">{children}</p>
      </div>

      </div>
    </>
  )
}