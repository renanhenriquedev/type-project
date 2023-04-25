import React from 'react';

import styles from './CadastrarExperiencia.module.css'

import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Input from '../../../components/forms/Input/Input';
import Textarea from '../../../components/forms/Textarea/Textarea';


interface FormValues {
    titulo: string;
    descricao: string;
    tipo: string;
    anoFim: string;
}

const CadastrarExperiencia: React.FC = () => {

    const initialValues: FormValues = {
        titulo: '',
        descricao: '',
        tipo: '',
        anoFim: '',
    }

    const validationSchema = Yup.object().shape({
        titulo: Yup.string().required("Campo Obrigatório"),
        descricao: Yup.string().required("Campo Obrigatório"),
        tipo: Yup.string().required("Campo Obrigatório"),
        anoFim: Yup.string().required("Campo Obrigatório")
    })

    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        console.log(values);
        resetForm();
        alert("Formulário enviado com sucesso")
    }

    return (
        <div className={styles.formWrapper}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <h2 className={styles.title}> Cadastro de Experiência</h2>

                        <Input
                            label='Título'
                            name='titulo'
                            errors={errors.titulo}
                            touched={touched.titulo}
                        />

                        <Input
                            label='ano Fim'
                            name='anofim'
                            errors={errors.anoFim}
                            touched={touched.anoFim}
                        />

                        <Textarea
                            label='Descrição'
                            name='descricao'
                            errors={errors.descricao}
                            touched={touched.descricao}
                        />

                        <button type='submit' className={styles.button}>
                            Cadastrar
                        </button>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default CadastrarExperiencia;