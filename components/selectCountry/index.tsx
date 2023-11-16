import React from 'react';
import {Autocomplete, Grid, Skeleton, TextField} from "@mui/material";
import {useCountries} from "@/helpers/utils/useCountries";
import {useAppDispatch} from "@/store/storeHooks";
import {setToCurrency} from "@/store/currencySlice";


type Props = {
    label:string
    toCurrency:string
}


const SelectCountry = ({toCurrency,label}:Props) => {
    const {data,isLoading} = useCountries()
    const dispatch =useAppDispatch()


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
                value={toCurrency}
                id="disable-clearable"
                options={data}
                onChange={(event,value)=>dispatch(setToCurrency(value))}
                disableClearable
                renderInput={(params) => (
                    <TextField {...params} label={label} variant="standard" />
                )}
            />

        </Grid>
    );
};

export default SelectCountry;
