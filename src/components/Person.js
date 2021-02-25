import React from 'react'
import './components.css'

const Person = ({img, name, nickname, birthday}) => {
    return (
        <section className='card info'>
            <img className='img' src={img} alt={name}/>
            <p>Name: {name}</p>
            <p>Nickname: {nickname}</p>
            <p>Birthday: {birthday}</p>
        </section>
    )
}

export default Person
