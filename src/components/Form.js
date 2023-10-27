import React from 'react';
import { useForm } from 'react-hook-form';
import Nav from './Nav2';
import bgImp from '../images/bckrnd.png';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    
  return (
    <section>
        <div className="register">
            <div className='col-2'>
                <img src={bgImp} alt='' />
            </div>
            <div className="col-1">
                <h2>Sign In</h2>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='Username' />
                    <input type="text" {...register("password")} placeholder='Password' />
                    <button className='btn' onClick={<Nav/>}>Sign In</button>
                </form>

            </div>
        </div>
    </section>
  )
}