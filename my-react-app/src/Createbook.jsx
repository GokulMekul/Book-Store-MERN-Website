import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Backbutton from './Backbutton';
import './Createbook.css';

function Createbook() {
    const [tittle, setTittle] = useState(''); // Keeping the variable name as 'tittle'
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState(''); // Keeping the variable name as 'publishyear'
    const navigate = useNavigate();

    const handleBook = () => {
        const data = {
            tittle, // Keeping the variable name as 'tittle'
            author,
            publishyear: publishYear, // Using 'publishyear' for the server
        };

        axios.post('http://localhost:5000/books', data)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }  
    return (
        <div className="createbook-container">
          <h1>Createbook</h1>
          <Backbutton />
          <div className="form-container">
            <h1>Form</h1>
            <label>Title</label>
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
            <label>Publish Year</label>
            <input
              type='text'
              value={publishYear}
              onChange={(e) => { setPublishYear(e.target.value) }}
            />
            <button onClick={handleBook}>Submit</button>
          </div>
        </div>
      );
      
}

export default Createbook;
