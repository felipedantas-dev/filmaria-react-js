import React, {useEffect, useState} from 'react';
import "./filme.css";
import { useParams } from 'react-router-dom';
import APIFilmes from '../../services/api';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-toastify';

export default function Filme ()
{

    const { id } = useParams();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        async function loadFilme(){
            const response = await APIFilmes.get(`r-api/?api=filmes/${id}`);
            
            if (response.data.length === 0) {
                history.replace('/');
                return;
            }

            setFilme(response.data);
            setLoading(false);
        }

        loadFilme();

    }, [history, id]);


    function salvarFilme () {

        const minhaLista = localStorage.getItem("filmes");
        
        let filmesSalvos = JSON.parse(minhaLista) || [];

        // Se já está salvo ignorar
        // some mapeia o array e verifica se existe algo de acordo com o parametro passado, retornando bool de acordo com a resposta
        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id );

        if ( hasFilme ) {
            toast.error("Você já possui esse filme salvo!")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!")

    }

    if (loading) {
        return (
            <div className='container'>
                <div className='filme-info'>
                    <h1 style={{color: 'white'}}> Carregando seu filme... </h1>
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='filme-info'>
                <div className='image' style={{backgroundImage: "url("+filme.foto+")"}}></div>
               
                <div className='text'>
                    <h1>{filme.nome}</h1>
                    <h3>Sinopse:</h3>
                    {filme.sinopse}
                </div>

                <div className='botoes'>
                    <button onClick={salvarFilme}>Salvar</button>
                    <button>
                        <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>Trailer</a>
                    </button>
                </div>
            </div>
        </div>
    )
}