import React from 'react';

import styles from './CadastrarExperiencia.module.css'

import * as Yup from 'yup';
import { Formik } from 'formik';
import Input from '../../../components/forms/Input/Input';
import Textarea from '../../../components/forms/Textarea/Textarea';
import Select from '../../../components/forms/Select/Select';

import { Experiencia, createOrUpdateExperiencia } from '../../../services/experienciaService';
import { useLocation, useNavigate } from 'react-router-dom';

import Form from '../../../components/forms/Form'
import Button from '../../../components/common/Button';


const CadastrarExperiencia: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const experiencia = location.state as Experiencia;

    const initialValues: Experiencia = {
        id: 0,
        titulo: '',
        descricao: '',
        tipo: '',
        anoInicio: 2022,
        anoFim: 2023,
    }

    const validationSchema = Yup.object().shape({
        id: Yup.number().required('Campo obrigatório'),
        titulo: Yup.string().required("Campo Obrigatório"),
        descricao: Yup.string(),
        tipo: Yup.string().required("Campo Obrigatório"),
        anoInicio: Yup.number().required("Campo Obrigatório").typeError("Um número é obrigatório"),
        anoFim: Yup.number().required("Campo Obrigatório").typeError("Um número é obrigatório")
    })

    const onSubmit = async (values: Experiencia, { resetForm }: { resetForm: () => void }) => {

        try {
            await createOrUpdateExperiencia(values)
            console.log(values);
            resetForm();
            navigate('/curriculo/experiencia/lista')
            alert("Formulário enviado com sucesso")
        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro ao enviar o formulário")
        }
    }

    return (
        <div className={styles.formWrapper}>

            <Form initialValues={experiencia || initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}

            >

                {({ errors, touched }) => (
                    <>
                        <h2 className={styles.title}> Cadastro de Experiência</h2>

                        <Input
                            label='Título'
                            name='titulo'
                            errors={errors.titulo}
                            touched={touched.titulo}
                        />

                        <Input
                            label='ano Inicio'
                            name='anoInicio'
                            errors={errors.anoInicio}
                            touched={touched.anoInicio}
                        />

                        <Input
                            label='ano Fim'
                            name='anoFim'
                            errors={errors.anoFim}
                            touched={touched.anoFim}
                        />

                        <Select
                            label='Tipo'
                            name='tipo'
                            options={[
                                { value: 'profissional', label: 'Profissional' },
                                { value: 'academico', label: 'Acadêmico' },
                            ]}
                            errors={errors.tipo}
                            touched={touched.tipo}
                        />


                        <Textarea
                            label='Descrição'
                            name='descricao'
                            errors={errors.descricao}
                            touched={touched.descricao}
                        />

                        <Button type='submit'>Salvar</Button>
                </>
                )}
            </Form>

        </div >
    )
}

export default CadastrarExperiencia;