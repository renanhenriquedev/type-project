import React from 'react';

import styles from './ListaExperiencia.module.css'

interface Experiencia {
    titulo: string;
    descricao: string;
    tipo: string;
    anoFim: string;
}

const ListarExperiencia: React.FC = () => {

    const [experiencias, setExperiencias] = React.useState<Experiencia[]>([
        {
            titulo:'Estágio em Desenvolvimento de Software',
            descricao: 'Desenvolvimento de aplicações web utilizando React e Node.js',
            tipo: 'profissional',
            anoFim: '2020'
        },
        {
            titulo:'Iniciação Científica em Ciência da Computação',
            descricao: 'Pesquisa em algoritmos de otimização de rotas de veículos',
            tipo: 'academica',
            anoFim: '2019'
        },
        {
            titulo:'Monitória em Estruturas de Dados e Algoritmos',
            descricao: 'Auxílio na correção de trabalhos e dúvidas dos alunos',
            tipo: 'academica',
            anoFim: '2022'
        }

    ])

    const handleDelete = (index: number) => {
        //lógica para excluir
    }

    const handleEdit = (experiencia: Experiencia) => {
        //lógica para editar
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
                            <button onClick={() => handleDelete(index)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ListarExperiencia