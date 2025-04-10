import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Company } from "../Interfaces/Company";
import FrontImage from '../assets/26_t.jpg';
import '../Components/Home/Home.css';
export function ListComapaniesPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const consumo = queryParams.get('consumo');

    const [companies, setCompanies] = useState<Company[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/api/fornecedores?consumo=${consumo}`);
            const data = await response.json();
            console.log(data);
            setCompanies(data);
        };
        fetchData();
    }, [consumo]);

    return (
        <>
            <div>
                {companies.map((company, index) => (
                    <div id="cardList" key={index} >
                        <div id="cardListImage">
                            <img id="logoList" src={FrontImage} alt="" />
                        </div>
                        <div id="cardListText">
                            <h3>{company.name}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi inventore {company.estado} est quae nostrum nemo at enim reiciendis {company.custoPorKWh} vero perspiciatis dolore.</p>
                            <button id="botao">Contratar</button>
                        </div>
                    </div>
                ))}

            </div>
        </>
    );
}