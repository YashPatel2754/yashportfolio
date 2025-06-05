import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Yash = () => {

    const [inputValue,setInputValue] = useState('');
    const [inputClick, setInputClick] = useState(1);

    const handlChange = (e) => {
        setInputValue(e.target.value)
    }

    const handlClik = ()=>{
        setInputClick(inputValue)
    }

    const [user, setData] = useState(null);

    useEffect(() => {
        const API = async () => {
            try{
                let respons = await fetch(`https://jsonplaceholder.typicode.com/users/${inputClick}`)
                let data = await respons.json();
                // console.log(respons);
                setData(data);
            }
            catch(error){
                console.log(error);
            }
        }

        API()
    }, [inputClick])

  return (
    <>
    <input type="text" value={inputValue} onChange={handlChange} />
    <button onClick={handlClik}>Add Value</button>
    {user ? (
        <div>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
            <p>{user.address.street}</p>
        </div>
    ):(
        <p>ahi aa load thay chhe</p>
    )}
    </>
  )
}

export default Yash