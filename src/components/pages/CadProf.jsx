import React from 'react';
import styles from './Cadastro.module.css';

import{useState} from 'react';
import{useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';

import validator from 'validator';

  
  const CadProf = () => {

    const {
      register, 
      handleSubmit, 
      formState: { errors },
      watch,
  } = useForm();

    console.log(errors);

    const onSubmit = (data) =>{
      alert(JSON.stringify(data));
    };

    const watchPassword = watch("senha");
    
    return(
      
      <div className={styles.container}>

        <form className={styles.form}>

          <h1>Cadastro Professor</h1>
          <div className={styles.box}>
            <label>Nome Completo</label>
            <input
              className={errors?.nome && "input-error"}
              type="text"
              text="Nome Completo: "
              name="nome"
              placeholder="Nome Completo"
              {...register("nome", { required: true })} />
            {errors?.nome?.type == 'required' && <p className={styles.error}>Nome é requerido</p>}
          </div>

          <div className={styles.box}>
            <label>CFEP: </label>
            <input
              className={errors?.id && "input-error"}
              type="text"
              text="CFEP: "
              minLength = "10"
              maxLength="10"
              name="cfep"
              placeholder="CFEP (com pontos e traços):"
              required
              {...register("id", { required: true, minLength: 10, maxLength: 10,})} />
            {errors?.id?.type == 'required' && (<p className={styles.error}>CFEP é requerido</p>)}
            {errors?.id?.type == 'minLength' && (<p className={styles.error}> Necessário pelo menos 10 caracteres</p>)}
            
          </div>
          <div className={styles.box}>
            <label> E-mail: </label>
            <input
              className={errors?.email && "input-error"}
              type="email"
              text="E-mail: "
              name="email"
              placeholder="E-mail"
              required
              {...register("email", { required: true, validate: (value) => validator.isEmail(value) })} />
            {errors?.email?.type == 'required' && (<p className={styles.error}>E-mail é requerido</p>)}
            {errors?.email?.type == 'validate' && (<p className={styles.error}>E-mail é invalido</p>)}
          </div>

          <div className={styles.box}>
            <label> Sexo: </label>
            <select
              name="sexo"
              placeholder="Selecione um Gênero"
              {...register("sexo", {validate:(value) =>(
                value != "0"),
              
             })}
              className ={errors?.sexo && "input-error"}
            >
              <option value="0">Seleciona uma opção: </option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
            {errors?.sexo?.type =='validate' &&(<p className={styles.error}>Sexo requerido</p>)}
          </div>
        <div className={styles.box}>
          <label> Senha: </label>
          <input
            className={errors?.password && "input-error"}
            type="password"
            minLength="8"
            text="Senha: "
            name="senha"
            placeholder="Digite uma senha de 8 ou mais digítos."
            required
            {...register("senha", { required: true, minLength: 8})} />

          {errors?.senha?.type == 'minLength' && (<p className={styles.error}>Senha precisa de pelo menos 8 caracteres</p>)}

          {errors?.senha?.type == 'required' && (<p className={styles.error}>Senha é requerida</p>)}
        </div>
        
        <div className={styles.box}>
          <label> Confirmar Senha: </label>
          <input
            className={errors?.passwordConfirmation && "input-error"}
            type="password"
            text="Confirmar Senha: "
            name="passwordConfirmation"
            placeholder="Confirme a senha."
            required
            {...register("passwordConfirmation", { required: true, minLength: 8, validate:(value) => value == watchPassword })} />
          {errors?.passwordConfirmation?.type == 'minLength' && (<p className={styles.error}>Confirmação de Senha precisa de pelo menos 8 caracteres</p>)}
          {errors?.passwordConfirmation?.type == 'validate' && (<p className={styles.error}>Senhas não são iguais.</p>)}
          {errors?.passwordConfirmation?.type == 'required' && (<p className={styles.error}>Confirmação de Senha é requerida</p>)}   
        </div>
        <div>
          <input
            type="checkbox"
            name="privacy-policy"
            {...register("privacyTerms", { required: true })} />
            
            <label> Eu concordo com os  </label> 
              
              <Link to="/termos">
                 Termos de Privacidade.
              </Link>
          {errors?.privacyTerms?.type == "required" &&(<p className={styles.error}>Você precisa concordar com os termos de privacidade.</p>)}
          
        </div>

        <div className={styles.buttonBox}>
          <button
            text="Criar Conta" className={styles.btn}
            onClick={() => handleSubmit(onSubmit)()}
          >Criar Conta
          </button>

        </div>
              
            
          </form>
      </div>

    )  
  }   
  
  
export default CadProf