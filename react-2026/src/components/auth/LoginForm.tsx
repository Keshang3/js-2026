import FormLabel from "../ui/form/Label";
import { useForm } from "react-hook-form";
import { FormInput } from "../ui/form/input";
import { FormInputHook } from "../ui/form/input";
import { CancelButton } from "../ui/form/button";
import { SubmitButton } from "../ui/form/button";
import z from "zod"; //pnpm i install
import { zodResolver } from "@hookform/resolvers/zod"; //pnpm i @hookform/resolvers
import axiosInstance from "../../services/apiClient";

const LoginDTO = z.object({
  username: z.string().nonempty("Username is required").nonoptional(),
  password: z.string().nonempty("password is required").nonoptional(),
});

// import { useNavigate } from "react-router";

// export interface ICredentials {
//   username: string,
//   password: string
// }
export type ICredentials = z.infer<typeof LoginDTO>;
export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICredentials>({
    defaultValues: {
      username: "",
      password: "",
    },

    resolver: zodResolver(LoginDTO),
  });

  const loginApiCaller = async (data: ICredentials) => {
    try {
      const response = await axiosInstance.post("/auth/login",data);
      console.log(response);
      
    } catch (exception) {
      console.log(exception);
      
    }
  };

  return (
    <form
      onSubmit={handleSubmit(loginApiCaller)}
      action=""
      className="flex w-full flex-col gap-5"
    >
      <div className="w-full flex items-center">
        <FormLabel>Username: </FormLabel>
        <div className="w-3/4">
          <FormInput
            errMsg={errors?.username?.message}
            type="text"
            name="username"
            control={control}
          />

          {/* <Controller name="username" control={control} render={({field}) => {
          return  <input
            type="text"
           {...field}
            className={`w-3/4  p-3 rounded-md bg-white shadow`}
           
          />
        }} /> */}
          {/* 
        <Controller
          name="username"
          control={control}
          render = {({field}) => {
            return (
              <input
            type="text"
           {...field}
            className={`w-3/4  p-3 rounded-md bg-white shadow`}
           
          />
            )
          }}
        
        /> */}

          {/* <input
            type="text"
            {...register("username", {required: true})}
            className={`w-3/4  p-3 rounded-md bg-white shadow`}
           
          /> */}
        </div>
      </div>
      {/* <FormInput
        type="text"
        name="username"
        control={handler}
        placeholder="Enter your Value"
      /> */}
      <div className="w-full flex items-center">
        <FormLabel>Password: </FormLabel>
        <div className="w-3/4">
          <FormInputHook
            errMsg={errors?.password?.message}
            name="password"
            type="password"
            control={control}
          />
          {/* <Controller 
          name="password"
          control={control}
          render = {({field})=>{
            return(
              <input
            type="password"
            {...field}
            className={`w-3/4  p-3 rounded-md bg-white shadow`}
          />
            )
          }}
        /> */}
          {/* <input
            type="text"
            {...register("password", {required: true})}
            className={`w-3/4  p-3 rounded-md bg-white shadow`}
          /> */}

          {/* <FormInput
            name="password"
            type="password"
            control={handler}
           
            placeholder="Enter your password"
          /> */}
        </div>
      </div>
      <div className="w-full flex justify-between">
        <label htmlFor="" className="text-sm italic text-gray-400">
          By logging into the system, you agreed to{" "}
          <a href="/terms-and-conditions" className="text-teal-700 underline">
            {" "}
            u our terms and conditions
          </a>
        </label>
        <a
          className="text-teal-700 text-sm font-semibold underline hover:scale-102"
          href="/forget-password"
        >
          Forget Password
        </a>
      </div>
      <div className="w-full flex gap-5">
        <CancelButton>Reset</CancelButton>
        <SubmitButton>Login</SubmitButton>
      </div>
    </form>
  );
}
