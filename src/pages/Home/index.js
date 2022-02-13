import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./home.css";
import APIFilmes from "../../services/api";

export default function Home ()
{

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes () {
            const response = await APIFilmes.get("r-api/?api=filmes");
            setFilmes(response.data);
        }

        loadFilmes();
    });

    return (
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id} style={{backgroundImage: "url("+filme.foto+")"}}>
                            <div className='background-shadow'>
                                <div className='content-text'>
                                    <strong>{filme.nome}</strong>
                                    <Link to={`/filme/${filme.id}`}>
                                        Acessar
                                    </Link>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}