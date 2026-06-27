import { NotFoundComponent } from "../../../components/errors/NotFoundComponent"

export const NotFound = () => {
  return(
    <>
      <section className="w-full flex  h-screen items-center justify-center">
        <NotFoundComponent redirectTo="" />
      </section>
    </>
  )
}