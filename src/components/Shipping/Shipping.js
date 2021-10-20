import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => console.log(data);

    return (
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} />
        <input {...register("email", { required: true })} />
        {errors.email && <span className='error'>This field is required</span>}
        <input placeholder="address" defaultValue="" {...register("address")} />
        <input placeholder="phone number" defaultValue="" {...register("phone")} />
        <input placeholder="city" defaultValue="" {...register("address")} />
        
      
      <input type="submit" />
    </form>
    );
};

export default Shipping;