import React, { useEffect, useState } from "react"

const App = () => {
    const [coffee, setCoffee] = useState([])

    const fetchData = () => {
        fetch("http://localhost:5000/coffee/findAllCoffee")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCoffee(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div >
            {coffee.length > 0 && (
                <div className="pict_menu">
                    {coffee.map(cof => (
                        <div>
                            <img className="picture" src={cof.image}/>
                            <div className="list_menu">{cof.name}</div>
                            <div className="list_menu">{cof.description}</div>
                            <div className="list_menu">{cof.price} rubles</div>
                        </div>

                    ))}
                </div>
            )}
        </div>
    );
}

export default App;