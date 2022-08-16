import React from "react";
import Header from "../../components/Header/Header";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import {
  InputStyled,
  Separator,
  FormContainer,
  LabelStyled,
} from "../../styled";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { UpdateProfile } from "../../services/requests";
import { goToUserProfile } from "../../routes/coordinator";

export default function EditProfilePage() {
  useProtectedPage();
  const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "" });
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    UpdateProfile(form, goToUserProfile, navigate);
  };
  
  return (
    <div>
      <Header type={"seta"} largura={"121.5px"} title={"Editar"} />
      <Separator height={"16px"} />
      <FormContainer onSubmit={onSubmitForm}>
        <InputStyled
          placeholder="Nome e sobrenome"
          name={"name"}
          value={form.name}
          onChange={onChange}
          type={"text"}
          required
        />
        <LabelStyled>Nome*</LabelStyled>
        <Separator height={"16px"} />
        <InputStyled
          placeholder="email@email.com"
          name={"email"}
          value={form.email}
          onChange={onChange}
          type={"email"}
          required
        />
        <LabelStyled>E-mail*</LabelStyled>
        <Separator height={"16px"} />
        <InputStyled
          placeholder="000.000.000-00"
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          type={""}
          required
        />
        <LabelStyled>CPF*</LabelStyled>
        <Separator height={"16px"} />
        <Separator height={"16px"} />
        <Button type={"submit"} title={"Salvar"} />
      </FormContainer>
     
    </div>
  );
}
