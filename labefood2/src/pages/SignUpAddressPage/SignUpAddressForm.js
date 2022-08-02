import React from "react";
import useForm from "../../hooks/useForm"
import {useNavigate} from "react-router-dom"
import Button from "../../components/Button/Button"
import { InputStyled, Separator, FormContainer} from "../../styled"
import { goToHome } from "../../routes/coordinator";

export default function SignUpAddressForm() {
  const [form, onChange,clear]= useForm({street:"",number:"",neighbourhood:"",city:"",state:"",complement:""})
  const navigate = useNavigate()
  
  const onSubmitForm = (event)=>{
    event.preventDefault()
    console.log(form)
    // tem que colocar o axios do add adress recebendo (form,clear,navigate)
  }

  return (
   <FormContainer onSubmit={onSubmitForm}>
      <InputStyled placeholder="Rua/Av." name={"street"} value={form.street} onChange={onChange} type={"text"} required/>
      <Separator height={"16px"} />
      <InputStyled placeholder="Número" name={"number"} value={form.number} onChange={onChange} required/>
      <Separator height={"16px"} />
      <InputStyled placeholder="Apto./Bloco" name={"complement"} value={form.complement} onChange={onChange} required/>
      <Separator height={"16px"} />
      <InputStyled placeholder="Bairro" name={"neighbourhood"} value={form.neighbourhood} onChange={onChange} required/>
      <Separator height={"16px"} />
      <InputStyled placeholder="Cidade" name={"city"} value={form.city} onChange={onChange} required/>
      <Separator height={"16px"} />
      <InputStyled placeholder="Estado" name={"state"} value={form.state} onChange={onChange} required/>
      <Separator height={"16px"} />
      <Button onClick={()=>goToHome(navigate)} type={"submit"} title={"Salvar"}/>
   </FormContainer>
  )
}

// pesquisar os tipos de type, essa função dentro do form não pega 