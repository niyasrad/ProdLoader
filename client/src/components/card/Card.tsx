import React, { useEffect, useState } from "react";
import './card.css';

interface CardProps {
    img: string,
    name: string,
    price: string
}

export default function Card(props: CardProps) {

    const [isLoading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, [])

    return (
        <div className="card">
            <img className={isLoading ? "card-img no" : "card-img"} src={props.img} alt={props.name}/>
            <div className={isLoading ? "card-load" : "card-load no"}/>
            <span className="card-item">{props.name}</span>
            <span className="card-price">{props.price}</span>
        </div>
    )
}