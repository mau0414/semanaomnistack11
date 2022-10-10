import {React, useState} from "react";
import './style.css';
import logoImg from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'
import api from '../../services/api';

export default function Register(){
    const [ name, setName ]         = useState('');
    const [ email, setEmail ]       = useState('');
    const [ whatssap, setwhatssap ] = useState('');
    const [ city, setCity ]         = useState('');
    const [ uf, setUf ]             = useState('');

    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name, 
            email, 
            whatssap,
            city,
            uf,
        };
        
        const response = await api.post('/ongs', data);
        try{
            alert(`Seu ID de acesso: ${response.data.id}`);
            navigate('/');
        } catch(err) {
            alert('Cadastro com erro. Tente novamente');
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo Be The Hero" />
                    <h1 className="title">Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos da sua ONG.</p>
                    <Link className="back-link" to={'/'}>
                        <BiArrowBack size={16} color="#E02041" />
                        <h1>Voltar para o Logon.</h1>
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da Ong" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                        placeholder="Whatssap"
                        value={whatssap}
                        onChange={e => setwhatssap(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}    
                        />

                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />

                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}