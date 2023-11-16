import React from 'react';
import {Grid, InputAdornment, TextField} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/store/storeHooks";
import {setAmount} from "@/store/currencySlice";

const InputAmount = () => {
    const amount = useAppSelector(state=>state?.currency?.amount)
    const dispatch =useAppDispatch()
    console.log("amount",amount)
    return (
        <Grid item={true}>
            <TextField
                value={amount}
                onChange={(e)=>dispatch(setAmount(e?.target?.value))}
            label={"amount"}
            fullWidth={true}
            InputProps={{
                type:"text",
                startAdornment:<InputAdornment position={'start'}>$</InputAdornment>
            }}
            />
        </Grid>
    );
};

export default InputAmount;
