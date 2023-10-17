import React, { useState } from 'react';
import Backbutton from './Backbutton';
import { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox } from 'react-icons/md';
import'./cardbook.css';
function CardBook(){
    const [Book,setBook]=useState([]);
    useEffect(()=>{
     axios
     .get('http://localhost:5000/books')
     .then((response)=>{
        setBook(response.data.data);
     })
     .catch((error)=>{
        console.log(error);
     })
    },[])

    
    return (
        <div className="cardbook-container">
          <Backbutton />
          <h1>Cards on Book</h1>
          {Book.map((book) => (
            <div className="card" key={book._id}>
              <div className="card-content">
                <p>Title: {book.tittle}</p>
                <p>Author: {book.author}</p>
                <p>Publish Year: {book.publishyear}</p>
              </div>
              <div className="icon-container">
                <Link to={`/books/show/${book._id}`}>
                  <BsInfoCircle />
                </Link>
                <Link to={`/books/update/${book._id}`}>
                  <AiOutlineEdit />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineAddBox />
                </Link>
              </div>
            </div>
          ))}
        </div>
      );
      

}
export default CardBook;