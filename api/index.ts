import axios from "axios";
import {SignUpValidationError} from "@/helpers/classes/SignUpValidationError";


const callApi = ()=>{

    const axiosInstance = axios.create({
        baseURL:"http://localhost:5000/api",
    })


    axiosInstance.interceptors.request.use(
        (config)=>{
            config.withCredentials = true
            return config
        },
        (error)=>{
            throw error
        }


    )

    axiosInstance.interceptors.response.use(
        (res)=>{
            return res
        } ,
        (error )=>{
            const res = error?.response
           if (res.status==422){
               throw new SignUpValidationError(res?.data.errors)
           }
        }
    )

    return axiosInstance

}

export default callApi;