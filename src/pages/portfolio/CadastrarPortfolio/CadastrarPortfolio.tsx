import React from 'react';

import styles from './CadastrarPortfolio.module.css'

import { Formik, Field, ErrorMessage } from 'formik'

import { Form as FormikForm } from 'formik';

import * as Yup from 'yup'
import Input from '../../../components/forms/Input';

import { Portfolio, createOrUpdatePortfolio } from '../../../services/portfolioService';
import { useNavigate, useLocation } from 'react-router-dom';

import Button from "../../../components/common/Button";
import Form from '../../../components/forms/Form';

const CadastrarPortfolio: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const portfolio = location.state as Portfolio;


    const initialValues: Portfolio = {
        id: 0,
        link: '',
        image: '',
        title: '',
        description: ''
    };

    const validationSchema = Yup.object().shape({
        id: Yup.number().required('Campo obrigatório'),
        link: Yup.string().required('Campo obrigatório'),
        image: Yup.string().required('Campo obrigatório'),
        title: Yup.string().required('Campo obrigatório'),
        description: Yup.string().required('Campo obrigatório')
    })


    const onSubmit = async (values: Portfolio, { resetForm }: { resetForm: () => void }) => {
        try {
            await createOrUpdatePortfolio(values);
            console.log(values);
            resetForm();
            navigate('/portfolio/lista')
            alert("Formulário enviado com sucesso")
        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro ao enviar o formulário")
        }


    }

    return (
        <div className={styles.formWrapper}>

            <Form initialValues={portfolio || initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <>
                            <h2 className={styles.title}>Cadastro de Portfolio</h2>

                            <Input
                                label='Link'
                                name='link'
                                errors={errors.link}
                                touched={touched.link}
                            />

                            <Input
                                label='Imagem'
                                name='image'
                                errors={errors.image}
                                touched={touched.image}
                            />

                            <Input
                                label='Título'
                                name='title'
                                errors={errors.title}
                                touched={touched.title}
                            />
                            <Input
                                label='Description'
                                name='description'
                                errors={errors.description}
                                touched={touched.description}
                            />

                            <Button type='submit'> Salvar</Button>
                    </>
                )}
            </Form>

        </div>
    )
}

export default CadastrarPortfolio;