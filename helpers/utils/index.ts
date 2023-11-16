import Cookies from "universal-cookie";
import useSWR from "swr";
import callApi from "@/api";



export const addJWTTokenToCookie =async (jwtToken:string , time:number=10)=>{
    const cookie = new Cookies()

    cookie.set("exchange-app" , jwtToken , {
        maxAge:time*24*60*60,
        path:"/",
        secure:true
    })



}


