import React, { useEffect ,useState} from 'react';
import Backbutton from './Backbutton';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Showbook.css';


function Showbook(){
const[book,setbook]=useState({});
const{id}=useParams();
const navigate = useNavigate();

useEffect(() => {
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setbook(response.data);
      })
      .catch((error) => {
        console.log('Error:', error);
        if (error.response) {
          console.log('Status:', error.response.status);
          console.log('Data:', error.response.data);
        } else if (error.request) {
          console.log('Request made but no response received');
        } else {
          console.log('Error setting up the request');
        }
      });
}, []);

return (
  <div className="showbook-container">
    <h1>Showbook</h1>
    <Backbutton />
    <div className="book-details">
      <h1>Book Detail</h1>
      <p>Title: {book.tittle}</p>
      <p>Author: {book.author}</p>
      <p>Publish Year: {book.publishyear}</p>
      <p>Created At: {new Date(book.createdAt).toString()}</p>
      <p>Updated At: {new Date(book.updatedAt).toString()}</p>
    </div>
    <button className="back-button" onClick={() => navigate('/')}>Back</button>
  </div>
);

}
export default Showbook;