import React from 'react';
import WidgetOne from '../WIDGETS/WidgetOne';
import WidgetTwo from '../WIDGETS/WidgetTwo';


const Home = () => {
    return(        
        <div className="home">           
            <h3>Widget 1 : Compétences</h3>                       
            <WidgetTwo />
            <WidgetOne /> 
        </div>
    )
}






export default Home;