import React, { Component } from 'react';
import  './Tourlist.css'
import tourData from './TourData'
import NewTour from './NewTour';
class Tourlist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tours:tourData
        }
    }
    
    render() {
        return (
            <div className="tourlist">
           {this.state.tours.map(tour=>
               (
               <NewTour key={tour.id} name={tour.name} city={tour.city} 
                country={tour.country}
                img={tour.img} link={tour.link}info={tour.info}/>)  
           )}  
       </div>
        );
    }
}

export default Tourlist;