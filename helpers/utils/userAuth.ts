import callApi from "@/api";
import useSWR from "swr";
import Cookies from "universal-cookie";

const cookie = new Cookies()

export const  useAuth = ()=>{
    const {data,error,isLoading} = useSWR("user_me" , async ()=>{
        return  callApi().get("/user",{
            headers:{
                authorization:cookie.get("exchange-app")
            }
        })
    })

    return {user:data?.data?.user , isLoading , error}
}