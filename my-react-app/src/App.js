import React from 'react';
import Createbook from './Createbook';
import Deletebook from './Deletebook';
import Showbook from './Showbook';
import Updatebook from './Updatebook';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardBook from './CardBook';
function App(){
return<Router>
    <Routes>
     <Route path="/" element={<Home />}> </Route>
      <Route path="/books/create" element={<Createbook />} />
      <Route path="/books/update/:id" element={<Updatebook />} />
      <Route path='books/delete/:id' element={<Deletebook />} />
      <Route path="/books/show/:id" element={<Showbook/>} />
     <Route path="/CardBook" element={<CardBook/>}/>
    </Routes>
  </Router>
}
export default App;
