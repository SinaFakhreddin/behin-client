import React from 'react';
import {withFormik} from "formik";
import {LoginFormTemplateInterface} from "@/types";
import {loginFormSchema} from "@/schemas";
import LoginFormTemplate from "@/components/loginForm/loginFormTemplate";
import callApi from "@/api";
import {toast} from "react-toastify";



interface LoginFormProps {
    router:any
    setTokenDispatch:(token:string)=>void

}
const LoginFormHOC = withFormik<LoginFormProps, LoginFormTemplateInterface>({
    mapPropsToValues:(props)=>{
        return {
            phone:""
        }
    },
    handleSubmit: async (values , {props, setFieldError}) => {
        try {
            const res = await callApi().post("/auth/login" , values)
            console.log("res",res)
            if (res.status==200){
                alert("HI")
                await toast.success("code sent")
                props.router.push("/verify")
                props.setTokenDispatch(res?.data?.token)
            }
        }catch (e) {
            console.log(e)
        }

    },
    validationSchema : loginFormSchema
})(LoginFormTemplate)


export default LoginFormHOC;
