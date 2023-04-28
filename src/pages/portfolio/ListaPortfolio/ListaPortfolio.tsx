import React, { useEffect, useState } from "react";

import styles from './ListaPorfolio.module.css'
import { number } from "yup";
import { deletePortfolio, getPortfolios, Portfolio} from "../../../services/portfolioService";
import { useLocation, useNavigate } from "react-router-dom";



const ListaPortfolio: React.FC = () => {

    const navigate = useNavigate();

    const [portfolio, setPortfolio] = React.useState<Portfolio[]>([]);

    const fetchPortfolio = async () => {
        try {
            const portfolio = await getPortfolios();
            setPortfolio(portfolio);
        } catch (error) {
            console.log('Erro ao buscar experiências', error);
        }
    };

    useEffect(() => {
        fetchPortfolio();
    }, [])


    const handleEdit = (portfolio: Portfolio) => {
        navigate('/portfolio/cadastro', { state: portfolio })
    }

    const handleDelete = async (id: number) => {
        try {
            await deletePortfolio(id)
            fetchPortfolio();
            alert('Portfolio excluído com sucesso!')
        } catch (error) {
            console.log('Erro ao excluir a experiência');
            
        }
    }
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Imagem</th>
                    <th>Link</th>
                    <th>Ações</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {portfolio.map((itemPortfolio, index) => (
                    <tr key={index}>
                        <td>{itemPortfolio.title}</td>
                        <td><img src={itemPortfolio.image} alt={itemPortfolio.title} className={styles.image} ></img></td>
                        <td><a href={itemPortfolio.link} target="_blank" rel='noreferrer'> {itemPortfolio.link}</a></td>
                        <td>
                            <button onClick={() => handleEdit(itemPortfolio)}>Editar</button>
                            <button onClick={() => handleDelete(itemPortfolio.id)}>Excluir</button>
                        </td>
                        <td>{itemPortfolio.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListaPortfolio;