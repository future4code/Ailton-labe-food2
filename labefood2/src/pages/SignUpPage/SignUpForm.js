import React from "react";
import useForm from "../../hooks/useForm"
import {useNavigate} from "react-router-dom"
import Button from "../../components/Button/Button"
import { FormContainer } from "../LoginPage/styled";
import { InputStyled, Separator} from "../../styled"
import { goToSignUpAdress } from "../../routes/coordinator";

export default function SignUpForm() {
  const [form, onChange,clear]= useForm({name:"",email:"",cpf:"",password:""})
  const navigate = useNavigate()
  
  const onSubmitForm = (event)=>{
    event.preventDefault()
    console.log(form)
    // tem que colocar o axios do signup recebendo (form,clear,navigate)
  }

  return (
   <FormContainer onSubmit={onSubmitForm}>
      <InputStyled placeholder="Nome e sobrenome" name={"name"} value={form.name} onChange={onChange} type={"text"} required/>
      <Separator height={"16px"} />
      <InputStyled placeholder="email@email.com" name={"email"} value={form.email} onChange={onChange} type={"email"} required/>
      <Separator height={"16px"} />
      <InputStyled placeholder="000.000.000-00" name={"cpf"} value={form.cpf} onChange={onChange} type={""} required/>
      <Separator height={"16px"} />
      <InputStyled placeholder="Mínimo 6 caracteres" name={"password"} value={form.password} onChange={onChange} type={"password"} required/>
      <Separator height={"16px"} />
      <InputStyled placeholder="tenho que ver como fazer isso"/>
      <Separator height={"16px"} />
      <Button onClick={()=>goToSignUpAdress(navigate)} type={"submit"} title={"Criar"}/>
   </FormContainer>
  )
}

// ajeitar os inputs e ver pq o navigate não está funcionando