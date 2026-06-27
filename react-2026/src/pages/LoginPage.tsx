// component Define
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AuthLeftSideComponent from "../components/auth/LeftSideComponent";
import { PageTitle } from "../components/ui/typography/PageTitle";
import LoginForm from "../components/auth/LoginForm";
import { Controller } from "react-hook-form";
// import CardWithoutImage from "../components/bnj ui/cards/CardWithoutImage";



function LoginPage() {
  return (
    <>    

     <Header />
     <section className="w-full flex">

      {/* <LeftSideComponent title="Login Here!!!"/> */}
      <AuthLeftSideComponent title="Login Here!!!">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, molestiae laudantium sit iste nesciunt eum modi aut velit possimus dolor?
      </AuthLeftSideComponent>

      <div className="w-2/3 px-5 py-10">
      <div className="w-full bg-gray-100 p-5 rounded-lg shadow-lg flex flex-col gap-5">
        <h1 className="text-3xl underline underline-offset-4  text-teal-900 ">
          <PageTitle className="text-teal-100 ">LogIn Here</PageTitle>
        </h1>

        <LoginForm />
        <div className="w-full flex justify-center">
          <span className="text-2xl font-semibold">or</span>
        </div>

        <div className="w-full flex justify-center">
          <a href="/register" className="bg-white w-full rounded-full border font-medium border-teal-400 text-teal-700  text-center hover:underline hover:scale-103 duration-500 p-3">Register from Here</a>
        </div>
      </div>
      </div>
     </section>

      <Footer />
    </>
   
  )
}

export default LoginPage;



     
    
       
       
       
    
