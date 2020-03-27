import React, { Component } from 'react';
import tourdata from './TourData'
import './NewTour.css'
class NewTour extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tours:this.props
        }
    }
    render() {
        const {img,city,country,info,link,name}=this.state.tours
        return (
            
            <div className="container">
                <div className="card">
                    
                    <div className="face face1">
                    <div className="content">
                    <img src ={img} style={{width:'300px',height:'350px'}}/>
                    </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                              <h3>{name}</h3>
                       <h4>{city}</h4>
                         <h4>{country}</h4>
                               <p>{info}</p>
                               <div>
                            <a href={link}>MoreInfo</a></div>
                        </div>
                  </div>
                </div>
            </div>
            
        );
    }
}

export default NewTour;