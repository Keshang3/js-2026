import type { ReactNode } from "react"



interface IButtonProps {
  children: ReactNode,
  disabled?: boolean
}

export const CancelButton = ({children, disabled=false}: Readonly<IButtonProps>) => {
  return (
    <>
       <button
          disabled={disabled}
          type="reset"
          className="w-full bg-red-700 transition duration-300 hover:underline text-white rounded-lg p-3
          disabled:bg-red-500/50 disabled:cursor-not-allowed disabled: scale-100"
        >
          {children}
        </button>
    </>
  )
}

export const SubmitButton = ({children, disabled=false}: Readonly<IButtonProps>) => {
  return (
    <button
        disabled={disabled}
          type="submit"
          className="w-full bg-teal-800 transition duration-300 hover:underline text-white rounded-lg p-3
          disabled:bg-red-800/50 disabled:cursor-not-allowed disabled: scale-100"
        >
         {children}
        </button>
  )
}