import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import {
  InputStyled,
  Separator,
  FormContainer,
  LabelStyled,
} from '../../styled';
import { goToSignUpAdress } from '../../routes/coordinator';
import { Singup } from '../../services/requests';
import SenhaImg from '../../assets/senha.svg';
import { InputPassword, InputPContainer, ImgPassword } from './styled';

export default function SignUpForm() {
  const [form, onChange, clear] = useForm({
    name: '',
    email: '',
    cpf: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const onChangeConfirm = (event) => {
    setConfirmPassword(event.target.value);
  };

  const onSubmitForm = (event) => {
    if (form.password === confirmPassword) {
      event.preventDefault();
      console.log(form);
      Singup(form, goToSignUpAdress, navigate, clear);
    } else {
      window.alert('As senhas devem ser a mesma');
    }
  };

  return (
    <FormContainer onSubmit={onSubmitForm}>
      <InputStyled
        placeholder="Nome e sobrenome"
        name={'name'}
        value={form.name}
        onChange={onChange}
        type={'text'}
        required
      />
      <LabelStyled>Nome*</LabelStyled>
      <Separator height={'16px'} />
      <InputStyled
        placeholder="email@email.com"
        name={'email'}
        value={form.email}
        onChange={onChange}
        type="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required
      />
      <LabelStyled>E-mail*</LabelStyled>
      <Separator height={'16px'} />
      <InputStyled
        placeholder="000.000.000-00"
        name={'cpf'}
        value={form.cpf}
        onChange={onChange}
        pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
        required
      />
      <LabelStyled>CPF*</LabelStyled>
      <Separator height={'16px'} />
      <InputPContainer>
        <InputPassword
          placeholder="Mínimo 6 caracteres"
          name={'password'}
          value={form.password}
          onChange={onChange}
          type="password"
          pattern="^(?=.*[a-z]).{6,10}$"
          required
        />
        <ImgPassword src={SenhaImg} />
      </InputPContainer>
      <LabelStyled>Senha*</LabelStyled>
      <Separator height={'16px'} />
      <InputPContainer>
        <InputPassword
          placeholder="Confirme a senha a senha anterior"
          name={'confirmPassword'}
          value={confirmPassword}
          onChange={onChangeConfirm}
          type="password"
          pattern="^(?=.*[a-z]).{6,10}$"
          required
        />
        <ImgPassword src={SenhaImg} />
      </InputPContainer>
      <LabelStyled>Confirmar*</LabelStyled>
      <Separator height={'16px'} />
      <Button
        onClick={() => goToSignUpAdress(navigate)}
        type={'submit'}
        title={'Criar'}
      />
    </FormContainer>
  );
}

// ajeitar os inputs e ver pq o navigate não está funcionando
