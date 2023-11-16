import React from 'react';
import {Button, Grid} from "@mui/material";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import {useAppDispatch, useAppSelector} from "@/store/storeHooks";
import {setFromCurrency, setToCurrency} from "@/store/currencySlice";

const SwitchCurrency = () => {
    const {fromCurrency , toCurrency} = useAppSelector(state=>state.currency)
    const dispatch = useAppDispatch()

    const currencySwitchHandler = ()=>{
        dispatch(setToCurrency(fromCurrency))
        dispatch(setFromCurrency(toCurrency))
    }


    return (
        <Grid item={true} xs={12} md={'auto'}>
            <Button onClick={currencySwitchHandler} sx={{borderRadius:1 , height:"100%"}}>
                <CompareArrowsIcon sx={{fontSize:30}}/>
            </Button>

        </Grid>
    );
};

export default SwitchCurrency;
