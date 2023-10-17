import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Backbutton from './Backbutton';
function Updatebook() {
    const [tittle, setTittle] = useState(''); // Keeping the variable name as 'tittle'
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState(''); // Keeping the variable name as 'publishyear'
    const navigate = useNavigate();
    const {id}=useParams();

     useEffect(()=>{
        axios.get(`http://localhost:5000/books/${id}`)
        .then((response)=>{
         setAuthor(response.data.author);
         setTittle(response.data.tittle);
         setPublishYear(response.data.publishYear)
        })
        .catch((error)=>{
       console.log(error);
        })
     },[])


    const handleBook = () => {
        const data = {
            tittle, // Keeping the variable name as 'tittle'
            author,
            publishyear: publishYear, // Using 'publishyear' for the server
        };

        axios.put(`http://localhost:5000/books/${id}`, data)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Edit book</h1>
            <Backbutton />
            <h1>Form</h1>
            <label>Tittle</label> {/* Corrected label name */}
            <input
                type='text'
                value={tittle}
                onChange={(e) => { setTittle(e.target.value) }}
            />
            <label>Author</label>
            <input
                type='text'
                value={author}
                onChange={(e) => { setAuthor(e.target.value) }}
            />
            <label>Publish Year</label> {/* Corrected label name */}
            <input
                type='text'
                value={publishYear}
                onChange={(e) => { setPublishYear(e.target.value) }}
            />
            <button onClick={handleBook}>Submit</button>
        </div>
    );
}

export default Updatebook;
