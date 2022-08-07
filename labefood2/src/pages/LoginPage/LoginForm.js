import React from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { InputStyled, Separator, FormContainer, LabelStyled } from "../../styled";
import { Login } from "../../services/requests";
import { goToHome } from "../../routes/coordinator";

export default function LoginForm() {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    Login(form, goToHome, navigate, clear);
  };

  return (
    <FormContainer onSubmit={onSubmitForm}>
      <InputStyled
        placeholder="email@email.com"
        name={"email"}
        value={form.email}
        onChange={onChange}
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        type="email"
        required
      />
      <LabelStyled>
        E-mail*
      </LabelStyled>
      <Separator height={"16px"} />
      <InputStyled
        placeholder="Mínimo 6 caracteres"
        name={"password"}
        value={form.password}
        onChange={onChange}
        type="password"
        pattern="^.{6,10}$"
        required
        title="A senha precisa ter no mínimo 6 caracteres e no máximo 10"
      />
      <LabelStyled>
        Senha*
      </LabelStyled>
      <Separator height={"16px"} />
      <Button type={"submit"} title={"Entrar"} />
    </FormContainer>
  );
}
