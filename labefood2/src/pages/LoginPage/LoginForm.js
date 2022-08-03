import React from "react";
import useForm from "../../hooks/useForm"
import {useNavigate} from "react-router-dom"
import Button from "../../components/Button/Button"
import { InputStyled, Separator, FormContainer} from "../../styled"
import { Login } from "../../services/requests";
import { goToHome } from "../../routes/coordinator";

export default function LoginForm() {
  const [form, onChange,clear]= useForm({email:"",password:""})
  const navigate = useNavigate()
  
  const onSubmitForm = (event)=>{
    event.preventDefault()
    console.log(form)
    Login(form,goToHome,navigate, clear)
  }

  return (
   <FormContainer onSubmit={onSubmitForm}>
      <InputStyled placeholder="email@email.com" name={"email"} value={form.email} onChange={onChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" type="email" required/>
      <Separator height={"16px"} />
      <InputStyled placeholder="Mínimo 6 caracteres" name={"password"} value={form.password} onChange={onChange} type="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" required/>
      <Separator height={"16px"} />
      <Button type={"submit"} title={"Entrar"}/>
   </FormContainer>
  )
}