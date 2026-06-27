import { Outlet } from "react-router"
import { NavLink } from "react-router"

export default function AdminLayout() {
  return (
    <>
   <section className="w-full flex h-screen">
      <aside className="hidden lg:block lg:w-1/4 bg-gray-100 shadow p-5">
          <div className="w-full text-center p-5">
           <h1 className="text-2xl font-semibold font-amber-800 text-shadow-lg ">Admin CMS Panel</h1>
          </div>
          <ul className="p-5 flex flex-col gap-3  ">
            <li className="w-full bg-white p-3 rounded-md shadow-lg text-lg font-semibold text-shadow-sm">
              <NavLink to="/admin">Dashboard</NavLink>
            </li>
            <li className="w-full bg-white p-3 rounded-md shadow-lg text-lg font-semibold text-shadow-sm">
               <NavLink to="/admin/category">Category</NavLink>
            </li>
            <li className="w-full bg-white p-3 rounded-md shadow-lg text-lg font-semibold text-shadow-sm">
               <NavLink to="/admin/message">Message</NavLink>
            </li>
          </ul>
        </aside>

      

      <section className="w-full lg:w-3/4 flex flex-col">
      <header className="w-full bg-gray-300 p-5 flex justify-between">
        <span>Hide</span>
        <span>Keshang Gurung</span>
      </header>
      <section className="w-full p-3">
        <div className="bg-gray-100 p-3 rounded-md">
          <Outlet />
        </div>
        
      </section>
      </section>
    </section>    
    
    
    
    </>
    
  )

}