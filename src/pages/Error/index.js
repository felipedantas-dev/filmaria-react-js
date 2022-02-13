import React from "react";
import { Link } from "react-router-dom";
import { Container, Span } from "../../styles";

export default function Error ()
{
    return (
        <Container>
            <Span>Página não encontrada!</Span>
            <Link to="/">Voltar ao início</Link>
        </Container>
    )
}