import type { HTMLInputTypeAttribute } from "react";
import {
  Controller,
  useController,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
// import { useController, type Control, type FieldValues} from "react-hook-form"
// import { Controller, } from "react-hook-form"
// import type { Path } from "react-hook-form"

export type FormInputPropsType<T extends FieldValues> = {
  type: HTMLInputTypeAttribute;
  name: Path<T>;
  className?: string;
  placeholder?: string;
  control: Control<T>;
  errMsg?: string
};


export function FormInput<T extends FieldValues>({
  type = "text",
  name,
  className = "",
  placeholder = "",
  control,
  errMsg = ''
}: Readonly<FormInputPropsType<T>>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <>
          <input
            type={type}
            placeholder={placeholder}
            {...field}
            className={`w-full border border-gray-300 p-3 rounded-md shadow-md${className}`}
          />
          <span className="text-red-800 text-sm text-shadow-md ">{errMsg}</span>
          </>
        );
      }}
    />
  );
}

export  function FormInputHook<T extends FieldValues>({
  type = "text",
  name,
  className = "",
  placeholder = "",
  control,
  errMsg =''
}: Readonly<FormInputPropsType<T>>) {
  const { field } = useController({
    name: name,
    control: control,
  });
  return (
    <>
    <input
      type={type}
      placeholder={placeholder}
      {...field}
      className={`w-full border border-gray-300 p-3 rounded-md shadow-md  ${className}`}
    />
     <span className="text-red-800 text-sm ">{errMsg}</span>
    </>
  );
}

export interface ISingleOption {
  label: string
  value: string,
}

// export type SelectInputType<> = {
export interface SelectInputType<T extends FieldValues> {
  name: Path<T> ,
  control: Control<T>,    
  className?: string,
  options: Array<ISingleOption>,
  errMsg?:string
}


export function SelectInput<T extends FieldValues> ({name, control, className="", options, errMsg=''}: Readonly<SelectInputType<T>>){
  const {field} = useController({
    name: name,
    control:control
  })
  return(
    <>
    <select
    {...field}
     className="w-full border border-gray-300 p-3 rounded-md shadow-md"
     >
        <option value="">--Select Any One--</option>
        {
          options && options.map((val: ISingleOption, i: number) => {
            return (

              <option key={i} value={val.value} >{val.label}</option>
            )
          })
        }
        
        </select>
         <span className="text-red-800 text-sm ">{errMsg}</span>
    
    </>
  )
}