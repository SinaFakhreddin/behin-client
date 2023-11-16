import React from 'react';
import { withFormik} from "formik";
import InnerRegisterFormHoc from "@/components/registerFormHOC/innerRegisterFormHoc";
import {InnerRegisterFormHocInterface} from "@/types";
import {registerFormSchema} from "@/schemas";
import callApi from "@/api";
import {toast} from "react-toastify";
import {SignUpValidationError} from "@/helpers/classes/SignUpValidationError";






interface RegisterFormProps {
    router:any
}

const RegisterFormHOC = withFormik<RegisterFormProps, InnerRegisterFormHocInterface>({

    mapPropsToValues:(props)=>{
        return {
            name:"",
            phone:""
        }
    },
    handleSubmit:async (values,{props}) => {
        try {
            const res = await callApi().post('/auth/register',values)
            console.log("props",props)
            if (res.status==201){
                props.router.push("/login")
                toast.success("successful")
            }
        } catch (e) {
            Object.values(e.message).forEach((err)=>toast.error(err))
        }
    },
    validationSchema : registerFormSchema
})(InnerRegisterFormHoc)


export default RegisterFormHOC;
