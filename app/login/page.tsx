"use client"
import React from 'react';
import LoginFormHOC from "@/components/loginForm/loginFormHoc";
import {useRouter} from "next/navigation";
import {useAppDispatch} from "@/store/storeHooks";
import {setToken} from "@/store/tokenSlice";
import {useAuth} from "@/helpers/utils/userAuth";

const Login = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const {user} =useAuth()
   const setTokenDispatch = (token:string)=>{
        dispatch(setToken(token))
   }

   if (user){
       router.push('/dashboard')
   }

    return (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">Login To My Exchange App</h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <LoginFormHOC router={router} setTokenDispatch={setTokenDispatch}/>
                </div>
            </div>
        </div>
    );
};

export default Login;
                