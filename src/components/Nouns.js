import React, { useEffect, useState } from 'react'
import Person from './Person';

import './components.css'


const Nouns = () => {

    const [info, setInfo] = useState([]);
    const [value, setValue] = useState('');



    useEffect(() => {
        getNouns();
    }, [])
    
    const getNouns = async() => {
        
        const url = `https://www.breakingbadapi.com/api/characters`;
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data);
        setInfo(data)
    }
    
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const filterNames = info.filter(person => {
        return person.name.toLowerCase().includes(value.toLowerCase())
    })

    

    return (
        <main>
            <input 
                type='text'
                placeholder='Search'
                className='form-control'
                onChange={handleChange}
                value={value}
            />

            <ul>
                {
                    filterNames.map(noun => <Person key={noun.char_id} {...noun} />)
                }
            </ul>
        </main>
    )
}

export default Nouns
