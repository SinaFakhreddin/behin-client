import React from 'react';
import {Autocomplete, Grid, Skeleton, TextField} from "@mui/material";
import {useCountries} from "@/helpers/utils/useCountries";
import {useAppDispatch} from "@/store/storeHooks";
import {setFromCurrency} from "@/store/currencySlice";


type Props = {
    label:string,
    fromCurrency?:string,

}

const InputFrom = ({fromCurrency,label}:Props) => {
    const {data,error,isLoading} = useCountries()
    const dispatch = useAppDispatch()

    if (isLoading){
        return (  <Grid item={true} xs={12} md={3} >
            <Skeleton
                variant={'rounded'}
                height={60}
            />
        </Grid>)
    }


    return (
        <Grid item={true} xs={12} md={3} >
            <Autocomplete
                value={fromCurrency}
                id="disable-clearable"

                options={data}
                onChange={(event,value)=>dispatch(setFromCurrency(value))}
                disableClearable
                renderInput={(params) => (
                    <TextField {...params} label={label} variant="standard" />
                )}
            />

        </Grid>
    );
};

export default InputFrom;
