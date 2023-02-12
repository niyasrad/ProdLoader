import React from "react";
import Card from "../card/Card";
import './cardwrapper.css';

interface CardWrapperProps{
    data: Array<any>
}

export default function CardWrapper(props: CardWrapperProps) {

    return (
        <div className='card-wrapper'>
            {
                props.data.map((elem) => (
                    <Card img={elem.img} name={elem.name} price={elem.price}/>
                ))
            }
        </div>
    )
}