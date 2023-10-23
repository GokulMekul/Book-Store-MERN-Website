import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Backbutton from './Backbutton';
import './Updatebook.css'; // Import your CSS file

function Updatebook() {
    const [tittle, setTittle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/books/${id}`)
            .then((response) => {
                setAuthor(response.data.author);
                setTittle(response.data.tittle);
                setPublishYear(response.data.publishYear);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleBook = () => {
        const data = {
            tittle,
            author,
            publishyear: publishYear,
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
        <div className="updatebook-container">
            <h1>Edit book</h1>
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

export default Updatebook;
