import React, {useEffect, useState} from "react";
import '../styles.css';
import CoffeeMenu, {getCoffee, getList} from "../components/list";
import coffeeManager from "../components/list";
import App from "../components/sortCoffee";

export function MenuPage (){
    return(
        <>
            <main>
                <div className="list_menu">HOT BEVERAGES</div>
                <App />
            </main>
            <footer>
                <ul>Contacts:
                    <li>Address: Saint-Petersburg, Lenin Street, 12</li>
                    <li>Email: co_n_go@gmail.com</li>
                </ul>
            </footer>
        </>
    )
}

export default MenuPage;