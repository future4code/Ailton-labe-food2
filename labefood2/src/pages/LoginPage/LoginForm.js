import React from "react";
import useForm from "../../hooks/useForm"
import {useNavigate} from "react-router-dom"
import Button from "../../components/Button/Button"
import { InputStyled, Separator, FormContainer} from "../../styled"

export default function LoginForm() {
  const [form, onChange,clear]= useForm({email:"",password:""})
  const navigate = useNavigate()
  
  const onSubmitForm = (event)=>{
    event.preventDefault()
    console.log(form)
    // tem que colocar o axios do login recebendo (form,clear,navigate)
  }

  return (
   <FormContainer onSubmit={onSubmitForm}>
      <InputStyled placeholder="email@email.com" name={"email"} value={form.email} onChange={onChange} type={"email"} required/>
      <Separator height={"16px"} />
      <InputStyled placeholder="Mínimo 6 caracteres" name={"password"} value={form.password} onChange={onChange} type={"password"} required/>
      <Separator height={"16px"} />
      <Button type={"submit"} title={"Entrar"}/>
   </FormContainer>
  )
}