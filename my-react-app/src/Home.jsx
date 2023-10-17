import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Spinner from './Spinner';
import {Link} from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox } from 'react-icons/md';
import CardBook from './CardBook';
import './Homes.css'

function Home(){
 const [Books,setBooks]=useState([]);
 const [Loading,setLoading]=useState(false);
 useEffect(()=>{
     setLoading(true);
     axios
     .get('http://localhost:5000/books')
     .then((response)=>{
       setBooks(response.data.data);
       setLoading(false);
     })
     .catch((error)=>{
        console.log(error);
        setLoading(false);
     })
 },[]);
 console.log(Books);
 return (
    <div className="home-container">
      <h1>Home</h1>
      <div className="book-list">
        <h1>Books List</h1>
        <Link to='/CardBook' className="add-book-button">Card</Link>
        <Link to='/books/create' className="add-book-button">
          <MdOutlineAddBox/> Add Book
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publish Year</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {Books.map((book, index) => (
            <tr key={book._id}>
              <td>{index + 1}</td>
              <td>{book.tittle}</td>
              <td>{book.author}</td>
              <td>{book.publishyear}</td>
              <td>
                <div className="operation-icons">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Home;