import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom"
import "./_page404.scss"



const page404 = () => {
    return (
        <div>
            <div className='marginBody'>
                <Header/>
                <div className='containerError'>
                    <div className='errorNumber'>404</div>
                    <p className='msgError'>Oups! La page que vous demandez n'existe pas.</p>
                    <Link 
                        to={`/`}
                        aria-label={``}>
                        Retourner sur la page d’accueil
                    </Link>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default page404;