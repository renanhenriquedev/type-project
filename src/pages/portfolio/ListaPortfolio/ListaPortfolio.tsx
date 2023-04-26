import React, { useState } from "react";

import styles from './ListaPorfolio.module.css'
import { number } from "yup";

    interface Portfolio {
        link: string;
        image: string;
        title: string;
    }


    const ListaPortfolio: React.FC = () => {
        
        const [portfolio, setPortfolio] = useState<Portfolio[]> ([
            {
                link: "https: //pixelart-project.surge.sh/",
                image: "https://github.com/renanhenriquedev/portfolio-react/blob/main/src/imagens/pixel-art.png?raw=true",
            title: 'Projeto 1'
        },
        {
            link: "https://github.com/renanhenriquedev/to-do-list",
            image: "https://github.com/renanhenriquedev/portfolio-react/blob/main/src/imagens/list.png?raw=true",
            title: 'Projeto 2'
        },
        {
            link: "https://github.com/renanhenriquedev/hamburger-shop",
            image: "https://github.com/renanhenriquedev/portfolio-react/blob/main/src/imagens/burguer.png?raw=true ",
            title: 'Projeto 3'
        }
    ]);
    
    const handleEdit = (index: number) => {
        // Lógica para lidar com a edição do item de indíce index
    }    
    
    const handleDelete = (index: number) => {
        setPortfolio(portfolio.filter((_, i) => i !== index));
    }    
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Imagem</th>
                    <th>Link</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {portfolio.map((itemPortfolio, index) => (
                    <tr key={index}>
                        <td>{itemPortfolio.title}</td>
                        <td><img src={itemPortfolio.image} alt={itemPortfolio.title} className={styles.image} ></img></td>
                        <td><a href={itemPortfolio.link} target="_blank" rel='noreferrer'> {itemPortfolio.link}</a></td>
                        <td>
                            <button onClick={() => handleEdit(index)}>Editar</button>
                            <button onClick={() => handleDelete(index)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListaPortfolio;