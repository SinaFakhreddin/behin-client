import React, {FC} from 'react';
import {Field , ErrorMessage} from "formik";

interface InputProps {
    labelClassname?:string
    label:string
    name:string
    type?:string
    fieldClassname?:string
    autoComplete?:string
    errorName?:string
    errorClassName?:string
    defaultValue?:string
}


export const InputForm:FC <InputProps>= ({fieldClassname, label, labelClassname, name,type='text',autoComplete,errorClassName}) => {

    return (
        <>
            <label htmlFor={name} className={`block text-sm font-medium text-gray-700 ${labelClassname}`}>
                {label}
            </label>
            <div className="mt-1">
                <Field  id={name} name={name} type={type} autoComplete={autoComplete} required
                        className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${fieldClassname}`}/>
                <ErrorMessage name={name}  component={"div"} className={`${errorClassName}`}/>
            </div>
        </>
    );
};


