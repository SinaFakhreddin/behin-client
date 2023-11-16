import useSWR from "swr";
import axios from "axios";


export const useCountries = ()=>{
    const  {data,error,isLoading} = useSWR("countries" , async ()=>{
         return axios.get("https://restcountries.com/v3.1/all")

    })


    const filteredData  =data?.data?.filter((data)=> "currencies" in data)
    const dataCountries = filteredData?.map((data)=>{
        return `${data.flag} ${Object.keys(data.currencies)} - ${data.name.common}`
    })


return {data:dataCountries,error,isLoading}

}