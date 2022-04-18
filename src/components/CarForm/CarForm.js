import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register, reset, handleSubmit} = useForm();

    const submit = (data) => {
console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model:<input type="text" {...register('model')} /></label></div>
            <div><label>Price:<input type="text" {...register('price')}/></label></div>
            <div><label>Year<input type="text"{...register('year')}/></label></div>
        </form>
    );
};

export {CarForm};
