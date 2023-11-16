"use client"
import React from 'react';
import LoginFormHOC from "@/components/loginForm/loginFormHoc";
import VerifyHoc from "@/components/verifyForm/verifyHoc";
import {useAppDispatch, useAppSelector} from "@/store/storeHooks";
import {User} from "@/types";
import {setToken, updateLoggedInUser} from "@/store/tokenSlice";
import {useRouter} from "next/navigation";

const VerifyToken = () => {
    const {token} =useAppSelector(state=>state?.token)
    const router = useRouter()
    const dispatch = useAppDispatch()



    const clearToken = ()=>{
        dispatch(setToken(undefined))
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
                    <VerifyHoc token={token} clearToken={clearToken} router={router}/>
                </div>
            </div>
        </div>
    );
};

export default VerifyToken;
