import React from 'react';
import {Form} from "formik";
import {InputForm} from "@/components/inputForm";

const VerifyTemplate = () => {
    return (
        <div>
            <Form className="space-y-6">
                <div>
                    <InputForm name={"code"} label={"code"}  errorClassName={'text-red-500 text-xs'}/>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Verify Code
                    </button>
                </div>
            </Form>
        </div>
    );
};

export default VerifyTemplate;
