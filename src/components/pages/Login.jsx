import {Link} from 'react-router-dom'

import{useForm} from 'react-hook-form';

import React from "react";
import styles from './Login.module.css';




const Login = () => {

  const {
    register, 
    handleSubmit, 
    formState: { errors },
} = useForm();

  console.log(errors);

  const onSubmit = (data) =>{
    console.log(data)
  };

  console.log("RENDER");

    return (
      
      
      <div className={styles.container}>
        <form className={styles.form}>
          <h1 className={styles.titulo}>Login</h1>
        

          <div className={styles.box}>
            <label>CPF ou CFEP: </label>
            <input
              className={errors?.id && "input-error"}
              type="text"
              minLength="10"
              maxLength="14"
              text="CPF ou CFEP: "
              name="id"
              placeholder="CPF ou CFEP (com pontos e traços):"
              required
              {...register("id", { required: true, minLength: 10, maxLength: 14,})} />
            {errors?.id?.type == 'required' && (<p className={styles.error}>CPF ou CFEP é requerido</p>)}
            {errors?.id?.type == 'minLength' && (<p className={styles.error}> Necessário pelo menos 10 caracteres</p>)}
            
          </div>

          <div className={styles.box}>
          <label> Senha: </label>
          <input
            className={errors?.password && "input-error"}
            type="password"
            minLength="8"
            text="Senha: "
            name="password"
            placeholder="Digite uma senha de 8 ou mais digítos."
            required
            {...register("password", { required: true, minLength: 8 })} />

          {errors?.password?.type == 'minLength' && (<p className={styles.error}>Senha precisa de pelo menos 8 caracteres</p>)}

          {errors?.password?.type == 'required' && (<p className={styles.error}>Senha é requerida</p>)}
        </div>

          <div  className={styles.boxb}>
          
          <button className={styles.btn}
            text="Login"
            onClick={() => handleSubmit(onSubmit)()}
          >Login
          </button>

        
          </div>
          
          


        </form>
      </div>
    )
}

  
  export default Login