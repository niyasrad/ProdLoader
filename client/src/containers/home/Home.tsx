import React, { useState } from "react";
import CardWrapper from "../../components/cardwrap/CardWrapper";
import './home.css';

export default function Home() {

    const [data, setData] = useState<Array<any>>([]);
    const [active, setActive] = useState<string>("home-top")
    const [loading, setLoading] = useState<boolean>(false);
    const handleClick = () => {
        setLoading(true);
        fetch("http://prod-loader-pbqf.vercel.app/images")
        .then((res) => res.json())
        .then((res) => {
            setData(res.data)
            setLoading(false)
            setActive("home-top active")
        })
    }

    return (
        <div className="home">
            <div className={active}>
                <h1>Fetch your Dreams</h1>
                <button onClick={handleClick}>FETCH</button>
            </div>
            <div className="home-main">
                {
                    data.length === 0 ? null:
                    <CardWrapper data={data}/>
                }
            </div>
        </div>
    );
}