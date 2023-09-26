import React, {useEffect, useState} from "react";
import '../styles.css';
import {getList} from "../components/list";

export function CartPage (){
    return(
        <>
            <main>
                <p> Your cart:
                    {/*{list.map(item => <li key={item.item}>{item.item}</li>)}*/}
                </p>
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

export default CartPage;