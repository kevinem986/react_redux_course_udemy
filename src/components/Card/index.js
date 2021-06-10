import React from 'react'
import '../../assets/css/custom.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.avatar} alt="Avatar" style={{width:"100%"}} />
            <div className="container">
                <h4><b>{props.name}</b></h4> 
                <p>{props.title}</p> 
                <p><button className="button button-red" onClick={props.onDelete}>Delete</button></p>
                <div>{props.children}</div> 
            </div>
        </div>
    )
}

export default Card
