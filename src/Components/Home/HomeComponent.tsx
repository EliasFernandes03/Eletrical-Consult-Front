import { useState } from 'react';
import { Link } from 'react-router-dom';
import FrontImage from '../../assets/26_t.jpg';
import './Home.css';

export function HomeComponent() {
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <section id='home-container'>
                <div>
                    <img src={FrontImage} alt="" />
                </div>
                <div id='home-container-input'>
                    <input
                        type="text"
                        placeholder='Digite seu consumo diário'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Link id='button' to={`/listCompanies?consumo=${encodeURIComponent(inputValue)}`}>
                        Buscar
                    </Link>
                </div>
            </section>
        </>
    );
}