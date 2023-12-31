"use client"
import React, {useEffect} from 'react';
import RegisterFormHOC from "@/components/registerFormHOC";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {useSelector} from "react-redux";
import {useAuth} from "@/helpers/utils/userAuth";

const SignupPage = () => {
    const router = useRouter()
    const {user} = useAuth()
        const state = useSelector(state=>state)

    useEffect(() => {
        if (user){
            router.push('/dashboard')
        }
    }, [user]);


    return (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">Register In My Exchange APP</h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <RegisterFormHOC router={router}/>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
