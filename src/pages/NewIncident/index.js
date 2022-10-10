import React, { useState } from "react";
import './styles.css';
import logoImg from '../../assets/logo.svg';
import {BiArrowBack} from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import api from "../../services/api";

export default function NewIncident() {
    const [ title, setTitle ]            = useState('');
    const [ description, setDescription] = useState('');
    const [ value, setValue ]            = useState('');
    const navigate = useNavigate();
    const ongId = localStorage.getItem('ongId');
    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            title, 
            description,
            value,
        };

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            navigate('/profile');
        } catch(err) {
            alert('Erro cadastro do caso. Tente novamente');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo Be The Hero" />
                    <h1 className="title">Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to={'/profile'}>
                        <BiArrowBack size={16} color="#E02041" />
                        <h1>Voltar para home</h1>
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Título do caso" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição do caso" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}