import React from "react";

import styles from './Login.module.css'

import { useNavigate } from "react-router-dom";
// import { Formik, Form } from "formik";
import * as Yup from 'yup';

import Input from "../../components/forms/Input";
import { login as loginService } from "../../services/authService";
import { useAuth } from "../../contexts/AuthContetx";
import Form from "../../components/forms/Form";


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
            {/* <div className={styles.formWrapper}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <Form className={styles.form}>
                            <h1 className={styles.form}>Meu Site Pessoal</h1>

                            <Input
                                label='Email'
                                name='email'
                                type='email'
                                errors={errors.email}
                                touched={touched.email}
                            />

                            <Input
                                label='Password'
                                name='password'
                                type='password'
                                errors={errors.password}
                                touched={touched.password}
                            />

                            <button type='submit' className={styles.button}>
                                Login
                            </button>

                        </Form>
                    )}
                </Formik>
            </div>
 */}
            <Form initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <>
                        <h1 className={styles.title}>Meu Site Pessoal </h1>
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

                        <button type='submit' className={styles.button}>
                            Login
                        </button>
                    </>

                )}
            </Form>

        </div>
    )
}

export default Login