import React, { useState,useEffect } from 'react'
import {Switch,Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bookapi from './Components/books'
import Addbook from './Components/addbook'
import Editbook from './Components/editbook'
import Userdata from './Components/user';
import Adduser from './Components/adduser';
import Edituser from './Components/edituser';
import Frontpage from './Components/frontpage';

function App() {
  const[book,setBook]=useState([]);
const[user,setUser]=useState([])
  
  

  return (
    <Switch>
      <Route exact path="/">
        <Frontpage/>
      </Route>
      
      <Route path="/admin">
      <Bookapi
      book={book}
      setBook={setBook}/>
      </Route>

      <Route path="/addbook">
       <Addbook
        book={book}
        setBook={setBook}/>
      </Route>

      <Route path="/editbook/:id">
       <Editbook
        book={book}
        setBook={setBook}/>
      </Route>
      <Route path="/user">
      <Userdata
      user={user}
      setUser={setUser}/>
      </Route>
      <Route path="/adduser/:title">
        <Adduser
         user={user}
         setUser={setUser}/>
      </Route>
      <Route path="/edituser/:id">
        <Edituser
         user={user}
         setUser={setUser}/>
      </Route>

    </Switch>
  )
}

export default App
