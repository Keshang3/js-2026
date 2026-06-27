import { NavLink } from "react-router"

export const NotFoundComponent = ({redirectTo}: Readonly<{redirectTo: string}>) => {
  return (
    <>
      <section className="bg-red-50 p-8shadow-lg shadow-red-100 max-w-5xl mx-auto flex flex-col gap-5 ">
        <h1 className="text-4xl text-red-800 text-center text-shadow-sm text-shadow-red-500">Oops!!</h1>
        <p className="text-center text-red-900 text-lg">
          The resource you are trying to access does not exists or has been moved to somewhere else.
        </p>
        <NavLink to={redirectTo} className={'w-full border border-red-500 p-1 rounded-full text-center font-semibold hover:scale-103 transition duration-300 hover:bg-red-200'}>
          Go Back
        </NavLink>
      </section>
    </>
  )
} 