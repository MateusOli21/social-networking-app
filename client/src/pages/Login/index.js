import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

import Logo from '../../components/Logo';
import SignButton from '../../components/SignButton';
import SignImage from '../../components/SignImage';
import InputContainer from '../../components/InputContainer';
import SignPageSwitch from '../../components/SignPageSwitch';
import loginImg from '../../assets/images/conversation.svg';

import { LOGIN_USER } from '../../graphql/userQueries';
import { useAuthContext } from '../../Context/AuthContext';

import { Container, Content, Wrapper } from './styles';

const Login = ({ history }) => {
    const { login } = useAuthContext();

    const [errors, setErrors] = useState(null);
    const [values, setValue] = useState({
        username: '',
        password: '',
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

    const [addUser] = useMutation(LOGIN_USER, {
        update(_, { data }) {
            login(data.login);
            history.push('/');
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: values,
    });

    return (
        <Container>
            <SignImage src={loginImg} alt="likes" />

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
                            text="Senha"
                            type="password"
                            name="password"
                            placeholder="Digite a senha"
                            value={values.password}
                            onChange={handleChangeValues}
                        />

                        <SignButton>Entrar</SignButton>
                    </form>

                    <SignPageSwitch
                        switchText="Ainda não possui conta?"
                        linkText="Criar conta"
                        path="/signup"
                    />
                </Wrapper>
            </Content>
        </Container>
    );
};

export default Login;
