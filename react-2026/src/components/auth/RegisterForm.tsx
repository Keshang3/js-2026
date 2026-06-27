// import {  type BaseSyntheticEvent } from "react"
import { useForm } from "react-hook-form";
import {FormInput}  from "../ui/form/input";
import { SelectInput } from "../ui/form/input";
import FormLabel from "../ui/form/Label";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";



const RegisterDTO = z.object({
  fullName: z.string().min(2, "Full name must be of atleast 2 characters").max(50, "Full name should not exceed more than 50 characters").nonempty("full Name is required").nonoptional(),
  email: z.string().nonempty("Should be a valid email format").nonoptional(),

  username: z.string().nonempty().nonoptional(),

  password: z.string()
  .regex(/[a-z]/, "Must have atleast 1 samll letter")
  .regex(/[A-Z]/, "Must have atleast 1 upper letter")
  .regex(/[0-9]/, "Must have atleast 1 number")
  .regex(/[\W]/, "Must have atleast special Character")
  .min(8, "Must have atleast 1 upper letter")
  .max(25, "Must have atleast 1 upper letter")
  .nonempty().nonoptional(),
  confirmPassword: z.string().nonempty().nonoptional(),

  phone: z.string().nonempty().nonoptional(),

  role: z.string().regex(/^(customer|seller)$/, 'Role must be either Customer or Seller').nonempty().nonoptional()
}).refine((val)=> val.password === val.confirmPassword,{
  message: "Password and Confirm-Password must macth",
  path: ['confirmPassword']
}
)

export type RCredentials = z.infer<typeof RegisterDTO>

export default function RegisterForm(){
  const {control, handleSubmit, formState: {errors}} = useForm<RCredentials>({
    defaultValues:{
      fullName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      phone:"",
      role:""

    },

    resolver: zodResolver( RegisterDTO )
  })

  const registerUser = (data: RCredentials) => {
    console.log(data);
    
  } 

  console.log(errors);
  

  return(
    <>
      <form onSubmit={handleSubmit(registerUser)} action="" className="flex flex-col gap-3 w-full">
        <div className="flex w-full items-center">
          {/* <label htmlFor="" className="w-1/3 font-semibold text-lg">FullName: </label> */}
          <FormLabel >FullName: </FormLabel>
          <div className="w-2/3 ">
          <FormInput errMsg={errors?.fullName?.message} type="text"  name="fullName" control={control}  placeholder="Enter your fullname"/>
          {/* <input 
          type="text"
          {...register("fullName")}
         
       
          className="w-full border border-gray-300 p-3 rounded-md shadow-md"
           /> */}
          </div>
        </div>
        <div className="flex w-full items-center">
          {/* <label htmlFor="" className="w-1/3 font-semibold text-lg">FullName: </label> */}
          <FormLabel >UserName: </FormLabel>
          <div className="w-2/3 ">
          <FormInput errMsg={errors?.username?.message} type="text"  name="username" control={control}  placeholder="Enter your fullname"/>
          {/* <input 
          type="text"
          {...register("fullName")}
         
       
          className="w-full border border-gray-300 p-3 rounded-md shadow-md"
           /> */}
          </div>
        </div>
        <div className="flex w-full items-center">
         <FormLabel >Email: </FormLabel>
          <div className="w-2/3 ">
          <FormInput  errMsg={errors?.email?.message} type="email"  name="email" control={control}  placeholder="Enter your Email"/>
          </div>
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="password" className="w-1/3 font-semibold text-lg">Password: </label>
          <div className="w-2/3 ">
          <FormInput errMsg={errors?.password?.message} type="password"  name="password" control={control}  placeholder="Enter your password"/>
          </div>
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="confirpassword" className="w-1/3 font-semibold text-lg">Re-Passowrd: </label>
          <div className="w-2/3 ">
          <FormInput errMsg={errors?.confirmPassword?.message} type="password"  name="confirmPassword" control={control}  placeholder="Re-Enter your password"/>
          </div>
        </div>
        <div className="flex w-full items-center">
          <label htmlFor="phone" className="w-1/3 font-semibold text-lg">Phone: </label>
          <div className="w-2/3 ">
          <FormInput errMsg={errors?.phone?.message} type="tel"  name="phone" control={control}  placeholder="Enter your Phone Number"/>
          </div>
        </div>
        <div className="flex w-full items-center">
          <FormLabel>Role: </FormLabel>
          <div className="w-2/3 ">
            <SelectInput errMsg={errors?.role?.message} name="role" control={control} options={[{label: "Buyer", value: "customer"}, {label: "Vendor/Seller", value: "seller"}]}/>
          </div>
        </div>
        
            
      <div className="w-full flex gap-5">
        <button
          type="reset"
          className="w-full bg-red-700 transition duration-300 hover:underline text-white rounded-lg p-3"
        >
          Reset
        </button>
        <button
          type="submit"
          className="w-full bg-green-700 transition duration-300 hover:underline text-white rounded-lg p-3"
        >
          Register
        </button>
      </div>
        
        
      </form>
    </>
  )
}
         