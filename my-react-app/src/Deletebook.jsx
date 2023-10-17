import React from 'react';
import Backbutton from './Backbutton';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';
import './Deleted.css';

function Deletebook(){
    const navigate = useNavigate();
    const {id}=useParams();
    function Deletebooks(){
        axios
        .delete(`http://localhost:5000/books/${id}`)
        .then(()=>{
            navigate('/');
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div className="deletebook-container">
          <Backbutton />
          <h1>Delete Book</h1>
          <h3 className="confirmation-message">Are you sure you're ready to delete?</h3>
          <button className="delete-button" onClick={Deletebooks}>Submit</button>
        </div>
      );
      
}
export default Deletebook;