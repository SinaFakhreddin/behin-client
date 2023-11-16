// "use client"
import callApi from "@/api";
import useSWR from "swr";
import Cookies from "universal-cookie";

const cookie = new Cookies()

export const  useAuth = ()=>{
    console.log("here")
    console.log(cookie.get("exchange-app"))
    const {data,error,isLoading} = useSWR("user_me" , async ()=>{
        return  callApi().get("/user",{
            headers:{
                authorization:cookie.get("exchange-app")
            }
        })
    })

    console.log(data)
    return {user:data?.data?.user , isLoading , error}
}