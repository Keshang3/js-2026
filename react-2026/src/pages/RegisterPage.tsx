// component Define
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AuthLeftSideComponent from "../components/auth/LeftSideComponent";
import RegisterForm from "../components/auth/RegisterForm";
// import SignupForm from "../components/auth/SignupForm";
// import { PageTitle } from "../components/ui/typography/PageTitle";
// import CardWithoutImage from "../components/ui/cards/CardWithoutImage";


function RegisterPage() {
  return (
    <>    

     <Header />
     <section className="w-full flex">

      {/* <LeftSideComponent title="SignUp Here!!!" /> */}
      <AuthLeftSideComponent title="SignUp Here!!!">
        <em>Hello there</em>
        <em>I am there</em>
      </AuthLeftSideComponent>
      <div className="w-2/3 px-5 py-10">
      <div className="w-full p-5 bg-gray-100 shadow-lg rounded-lg flex flex-col gap-5">
        <h1 className="text-teal-900 text-2xl underline underline-offset-4">SignUp Here</h1>
        <RegisterForm />
          <div className="w-full flex justify-center">
            <span className="font-semibold text-2xl">or</span>
      </div>
           {/* <div className="w-full flex justify-center">
          <a href="/register" className="bg-white w-full rounded-full border font-medium border-teal-400 text-teal-700  text-center hover:underline hover:scale-103 duration-500 p-3">Register from Here</a>
        </div> */}
        <div className="w-full flex justify-center ">
          <a href="/" className="bg-whitel border w-full text-center p-3 text-teal-600 border-teal-600 bg-white rounded-xl shadow-sm hover:underline hover:scale-102  duration-600">Login From Here</a>
          </div>      
          </div>
      </div>
       
      
     </section>

      <Footer />
    </>

   
  )
}

export default RegisterPage;



     
    
       
       
       
    
