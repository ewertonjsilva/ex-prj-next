"use client"

import { useState } from 'react';

export default function Login() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState(''); 

    function VisualizaInfo() {
        alert(`${nome} - ${email}`);
    }

    return (
        <div className="container">
            <h1>Tela de Cadastro de usuários</h1>

            <label>Nome</label>
            <input
                type="text"
                id="nome"
                placeholder="Nome completo"
                onChange={v => setNome(v.target.value)}
                value={nome}
            />

            <label>E-mail</label>
            <input
                type="text"
                id="email"
                placeholder="E-mail"
                onChange={v => setEmail(v.target.value)}
                value={email}
            />

            <button type="button" onClick={() => VisualizaInfo()}>Visualizar informações</button>
        </div>
    )
}