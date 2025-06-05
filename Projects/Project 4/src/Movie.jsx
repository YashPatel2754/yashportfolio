import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Movie = () => {

    const [inputValue,setInputValue] = useState('');
    const [inputClick, setInputClick] = useState();

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
                let respons = await fetch(`https://ghibliapi.vercel.app/films/${inputClick}`)
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
            <p>{user.title}</p>
            <img src={user.image} alt="" />
            <img src={user.movie_banner} alt="" />
            <p>{user.director}</p>
            <p>{user.producer}</p>
            <p>{user.release_date}</p>
        </div>
    ):(
        <p>ahi aa load thay chhe</p>
    )}
    </>
  )
}

export default Movie