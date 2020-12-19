import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

import signUpImg from '../../assets/images/likes.svg';
import REGISTER_USER from './query';

import Logo from '../../components/Logo';
import SignButton from '../../components/SignButton';
import SignImage from '../../components/SignImage';
import SignPageSwitch from '../../components/SignPageSwitch';
import InputContainer from '../../components/InputContainer';

import { Container, Content, Wrapper } from './styles';

const SignUp = ({ history }) => {
    const [errors, setErrors] = useState(null);
    const [values, setValue] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    useEffect(() => {
        if (errors) Object.values(errors).map((value) => toast.warning(value));
    }, [errors]);

    const handleChangeValues = (event) =>
        setValue({ ...values, [event.target.name]: event.target.value });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        addUser();
    };

    const [addUser] = useMutation(REGISTER_USER, {
        update(_, result) {
            history.push('/login');
            toast.success('Conta criada! Faça login com usuário e senha.');
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: values,
    });

    return (
        <Container>
            <SignImage src={signUpImg} alt="likes" />

            <Content>
                <Logo bigger />
                <Wrapper>
                    <form onSubmit={handleFormSubmit}>
                        <InputContainer
                            text="Usuário"
                            type="text"
                            name="username"
                            placeholder="Digite o seu usuário"
                            value={values.username}
                            onChange={handleChangeValues}
                        />

                        <InputContainer
                            text="E-mail"
                            type="email"
                            name="email"
                            placeholder="Digite o seu endereço de e-mail"
                            value={values.email}
                            onChange={handleChangeValues}
                        />

                        <InputContainer
                            text="Senha"
                            type="password"
                            name="password"
                            placeholder="Digite a senha"
                            value={values.password}
                            onChange={handleChangeValues}
                        />

                        <InputContainer
                            text="Confirmar senha"
                            type="password"
                            name="confirmPassword"
                            placeholder="Digite a senha novamente"
                            value={values.confirmPassword}
                            onChange={handleChangeValues}
                        />

                        <SignButton>Criar conta</SignButton>
                    </form>

                    <SignPageSwitch
                        switchText="Já possui conta?"
                        linkText="Entrar"
                        path="/login"
                    />
                </Wrapper>
            </Content>
        </Container>
    );
};

export default SignUp;
