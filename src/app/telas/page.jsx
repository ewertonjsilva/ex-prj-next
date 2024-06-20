import Link from 'next/link';

export default function Telas() {
    return(
        <div className="container">
            <Link href="/">Home</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/usuarios/login">Login</Link>
            <Link href="/usuarios/cadastro">Cadastro de Usuário</Link>
        </div>
    );
}