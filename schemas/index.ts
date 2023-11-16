import * as Yup from "yup"

export const registerFormSchema = Yup.object({
    name:Yup.string().required().min(3).max(666666),
    phone:Yup.string().required().matches(/(\/+98|0|98|0098)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/g , "Phone Number Is Not correct")
})

export const loginFormSchema = Yup.object({
    phone:Yup.string().required().matches(/(\/+98|0|98|0098)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/g , "Phone Number Is Not correct")
})

export const VerifyCodeSchema = Yup.object({
    code:Yup.number().required().min(6)
})