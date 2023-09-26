import {json} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

export function getList() {
    return fetch('http://localhost:5000/user/allUsers')
        .then(data => data.json())
}

export function getCoffee() {
    return fetch('http://localhost:5000/coffee/findAllCoffee')
        .then(data => data.json())
}

export default function CoffeeMenu({image, name, description, price}) {
    return (
        <div>
            <img className="picture" src={image} alt="americano"/>
            <div className="list_menu">{name}</div>
            <div className="list_menu">{description}</div>
            <div className="list_menu">{price} rubles</div>
        </div>
    );
}

// export function coffeeManager(){
//     state = {days: []}
//     const url = await fetch(`http://localhost:5000/coffee/findAllCoffee`);
//     const data = await url.json();
//     this.setState({days: data.list[1].main.temp});
// }

// CoffeeMenu.propTypes = {
//     image: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
// }
