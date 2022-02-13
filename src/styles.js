import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        margin-top: 20px;
        min-width: 200px;
        height: 40px;
        background: #ffffff15;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 16px;
        text-transform: uppercase;
        border: 1px solid #ffffff25;
        transition: .5s ease all;
    }

    a:hover {
        margin-top: 17px;
        background: #ffffff25;
    }
`;

export const Span = styled.span`
    margin-top: 100px;
    color: white;
    font-size: 24px;
`;