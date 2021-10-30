import React from 'react';
import WidgetOne from '../WIDGETS/WidgetOne';



const Home = () => {
    return(
        <div className="home">           
            <h3>Widget 1 : Compétences</h3>
            <WidgetOne />
            
            
            
            <h1>Ceci  est la page d'accueil ou seront affichés les widgets</h1>
        </div>
    )
}

export default Home;