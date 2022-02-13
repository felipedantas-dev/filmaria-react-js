import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "./favoritos.css";
import { toast } from 'react-toastify';

export default function Favoritos ()
{

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
    
        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista) || []);
    
    }, [])

    function handleDelete (id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id);
        });

        setFilmes(filtroFilmes);
        localStorage.setItem("filmes", JSON.stringify(filtroFilmes));
        toast.success("Filme excluído com sucesso!");
    }

    return (
        <div className='container'>
            <h1>Meus filmes</h1>
            {filmes.length === 0 && <span>Você não possui filme(s) salvo(s).</span>}
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id} style={{backgroundImage: "url("+filme.foto+")"}}>
                            <div className='background-shadow'>
                                <div className='content-text'>
                                    <strong>{filme.nome}</strong>
                                    <Link to={`/filme/${filme.id}`}>
                                        Ver detalhes
                                    </Link>
                                    <button onClick={ () => handleDelete(filme.id) }>
                                        Excluir
                                    </button>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}