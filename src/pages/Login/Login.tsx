import React from "react";

import styles from './Login.module.css'

import { useNavigate } from "react-router-dom";
// import { Formik, Form } from "formik";
import * as Yup from 'yup';

import Input from "../../components/forms/Input";
import { login as loginService } from "../../services/authService";
import { useAuth } from "../../contexts/AuthContetx";
import Form from "../../components/forms/Form";
import Button from "../../components/common/Button";
import Title from "../../components/common/Title";


interface LoginValues {
    email: string;
    password: string;
}

const initialValues: LoginValues = {
    email: '',
    password: '',
};

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail inválido'),
    password: Yup.string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Senha é obrigatório')

})


const Login = () => {

    const navigate = useNavigate()

    const { login } = useAuth()

    const onSubmit = async (values: LoginValues) => {

        try {
            const user = await loginService(values.email, values.password);
            login(user)
            navigate('/');
            console.log(values);


        } catch (error) {

            console.log(error);
            alert('Erro ao realizar Login')
        }

    };

    return (
        <div className={styles.loginWrapper}>
            <Form initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <>

                        <Title>Meu Site Pessoal</Title>


                        <Input
                            label="Email"
                            name='email'
                            type='email'
                            errors={errors.email}
                            touched={touched.email}
                        />

                        <Input
                            label="Password"
                            name='password'
                            type='password'
                            errors={errors.password}
                            touched={touched.password}
                        />

                        <Button type='submit'>
                            Login
                        </Button>
                    </>

                )}
            </Form>

        </div>
    )
}

export default Login