import React from "react";
import '../styles.css';
import Signup from "../components/RegistrationForm";
export function UserPage(){
    return(
        <>
            <main>
                <div className="main-part">
                    <div className="main__text">
                        <p>
                            <Signup />
                        </p>
                    </div>
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

export default UserPage;