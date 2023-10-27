import React from 'react';
import { useForm } from 'react-hook-form';
import Nav from './Nav2';
import bgImp from '../images/bckrnd.png';
import Header from './Header';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const containerStyle = {
    background: `url(${bgImp}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  };

  // <Header />
  // <div style={{ width:'100%'}} >
  // <div className=' Adiv1'>Welcome Remy sharp</div>
  return (
    <section>
      <div style={containerStyle} className="register">
        <div className="col-1">
          <h2>Sign In</h2>

          <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("username")} placeholder='Username' />
            <input type="text" {...register("password")} placeholder='Password' />
            <button className='btn' onClick={<Nav />}>Sign In</button>
          </form>
        </div>
      </div>
    </section>
  );
}
