import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './ListaExperiencia.module.css'
import { Experiencia, deleteExperiencia, getExperiencias, updateExperiencia } from '../../../services/experienciaService';



const ListarExperiencia: React.FC = () => {

    const navigate = useNavigate();

    const [experiencias, setExperiencias] = React.useState<Experiencia[]>([]);

    const fetchExperiencias = async () => {
        try {
            const experiencias = await getExperiencias();
            setExperiencias(experiencias);
        } catch (error) {
            console.log('Erro ao buscar experiências', error);
        }
    };

    useEffect(() => {
        fetchExperiencias();
    }, [])

    const handleEdit =  (experiencia: Experiencia) => {
        navigate('/curriculo/experiencia/cadastro', { state: experiencia});
    }

    const handleDelete = async (id: number) => {
        try {
            await deleteExperiencia(id);
            fetchExperiencias();
            console.log('Experiencia excluída com sucesso');
        } catch (error) {
            console.log('Erro ao excluir experiência', error);
            alert('Ocorreu um erro ao excluir a experiência');
        }
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Descrição</th>
                    <th>Tipo</th>
                    <th>Ano Fim</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {experiencias.map((experiencia, index) => (
                    <tr key={index}>
                        <td>{experiencia.titulo}</td>
                        <td>{experiencia.descricao}</td>
                        <td>{experiencia.tipo}</td>
                        <td>{experiencia.anoFim}</td>
                        <td>
                            <button onClick={() => handleEdit(experiencia)}>Editar</button>
                            <button onClick={() => handleDelete(experiencia.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ListarExperiencia