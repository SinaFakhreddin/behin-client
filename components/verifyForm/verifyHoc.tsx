import React from 'react';
import {withFormik} from "formik";
import {User, VerifyTokenInterface} from "@/types";
import {VerifyCodeSchema} from "@/schemas";
import VerifyTemplate from "@/components/verifyForm/verifyTemplate";
import callApi from "@/api";
import {toast} from "react-toastify";
import {addJWTTokenToCookie} from "@/helpers/utils";



interface VerifyTokenHOCProps {
    router:any
    clearToken:()=>void
    router:()=>any
}
const VerifyToken = withFormik<VerifyTokenHOCProps, VerifyTokenInterface>({
    mapPropsToValues:(props)=>{
    console.log("props",props)
        return {
            code:"",
            token:props?.token
        }
    },
    handleSubmit: async (values , {props, setFieldError}) => {
        try {
            const res = await callApi().post("/auth/login/verify-phone",values)
            if (res.status==200){
                await addJWTTokenToCookie(res?.data?.user?.token , 4)
                props.clearToken()
                toast.success(`welcome ${res?.data?.user?.name}`)
                props.router.push("/dashboard")

            }
        }catch (e) {

            Object.values(e.message).forEach((err)=>toast.error(err))

        }
    },
    validationSchema : VerifyCodeSchema
})(VerifyTemplate)


export default VerifyToken;
