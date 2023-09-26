import React, {useEffect, useState} from "react";
import '../styles.css';
import {getList} from "../components/list";

export function AboutUsPage() {
    const [list, setList] = useState([]);
    console.log(list)
    useEffect(() => {
            getList()
                .then(items => {
                    setList(items);
                });
        },
        [])
    return (
        <>
            <main>
                <div className="main-part">
                    <img className="main__picture" src={require("./images_react/atmo1.png")} alt="autumn" />
                    <div className="main__text">

                    {/*One day the owner of CO&GO was so depressed and did not want to go out of her bed,*/}
                    {/*but the smell of the coffee from the nearest coffee shop made her get up.*/}
                    {/*She went out of her flat, took coffee and saw pictures that made her really happy.*/}
                    {/*She noticed leaves that had fallen to streets and people enjoying their life, and*/}
                    {/*she understood that this world is so beautiful with a cup of the greatest drink.*/}
                    {/*</p>*/}

                    {/*<p>*/}
                    {/*The other day the owner started to build her coffee business and chose the best*/}
                    {/*types of beans and barista.*/}
                    {/*</p>*/}

                    {/*<p>*/}
                    {/*So we hope that our coffee will help you in the darkest times and will be part of the brightest*/}
                    {/*ones!*/}
                        <table>
                            <tr> Order: </tr>
                            <tr>
                                <td>Americano: </td>
                                <td>280</td>
                            </tr>
                            <tr>
                                <td>Capuccino: </td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>Total price: </td>
                                <td>580</td>
                            </tr>
                        </table>

                    </div>
                    </div>
                    <div>
                    </div>
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

export default AboutUsPage;