export interface InnerRegisterFormHocInterface {
    name:string
    phone:string
}

export interface LoginFormTemplateInterface{
    phone:string
}

export interface VerifyTokenInterface{
    code:string,
    token:string
}

export interface User {
    id:string|undefined
    name:string|undefined
}