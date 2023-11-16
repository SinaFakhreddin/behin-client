import React from 'react';
import {InputForm} from "@/components/inputForm";
import {Form} from "formik";
import Link from "next/link";

const InnerRegisterFormHOC = () => {
    return (
        <Form className="space-y-6">
            <div>
                <InputForm name={'name'} label={"name"} errorClassName={'text-red-500 text-xs'}/>
            </div>
            <div>
                <InputForm name={'phone'} label={'phone'}  errorClassName={'text-red-500 text-xs'}/>
            </div>
            <div className={'text-sm '}>
                <span>if you have account go to<Link className={'text-blue-300'}href={'/login'}> LOGIN </Link>
                page
            </span>
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Register
                </button>
            </div>
        </Form>
    );
};

export default InnerRegisterFormHOC;
