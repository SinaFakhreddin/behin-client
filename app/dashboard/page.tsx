"use client"
import React, {useEffect, useState} from 'react';
import {useAuth} from "@/helpers/utils/userAuth";
import {useRouter} from "next/navigation";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import InputAmount from "@/components/inputAmount/InputAmount";
import InputFrom from "@/components/inputFrom";
import SwitchCurrency from "@/components/switchCurrency";
import SelectCountry from "@/components/selectCountry";
import {useAppSelector} from "@/store/storeHooks";
import axios from "axios";
import {shallowEqual} from "react-redux";
import {API_KEY, CURRENCY_API} from "@/constants";

const Dashboard = () => {
    const {user} = useAuth()
    const router = useRouter()
    const [resultCurrency, setResultCurrency] = useState<number>(0);
    const {currencyState , amount} = useAppSelector((state)=>({
        currencyState: state.currency,
        amount:state.currency.amount
    }),shallowEqual)

    useEffect(() => {
        if (amount) {
        axios.get(CURRENCY_API,{
            params:{
                apikey:API_KEY,
                base_currency:currencyState?.fromCurrency?.split(" ")[1],
                currencies:currencyState?.toCurrency?.split(" ")[1],
            }
        }).then((res)=>setResultCurrency(res?.data?.data[currencyState?.toCurrency?.split(" ")[1]]))
        }
    }, [amount]);



    if (!user){
        router.push("/login")
    }

    const containerStyles = {
        background:"#fdfdfd",
        textAlign:"center",
        color:"#222",
        minHeight:"20rem",
        borderRadius:2,
        padding:"4rem 2rem",
        boxShadow:"0px 10px 15px -3px rgba(0,0,0,0.1)",
        position:"relative",
        marginTop:"10rem"
    }


    return (
        <Container maxWidth={'md'} sx={containerStyles}>
           <Typography variant={'h5'} sx={{marginBottom:"2rem"}}>{ `Welcome ${user?.name}`}</Typography>
            <Grid container={true} spacing={2} xs={12}>
                <InputAmount/>
                <InputFrom
                    fromCurrency={currencyState?.fromCurrency}  label={"from"}
                />
                <SwitchCurrency/>
                <SelectCountry
                    toCurrency={currencyState?.toCurrency}  label={"to"}
                />
            </Grid>
            {
                amount ?
                    <Box sx={{textAlign:"left" , marginTop:"1rem"}}>
                        <Typography>{amount} {currencyState?.fromCurrency} = </Typography>
                        <Typography sx={{marginTop:".5rem" , fontWeight:"bold"}} variant={"h5"} >{amount * resultCurrency} {currencyState?.toCurrency}  </Typography>
                    </Box> : ""
            }
        </Container>
    );
};

export default Dashboard;
