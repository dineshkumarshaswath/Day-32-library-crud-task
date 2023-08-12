import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Row, Col, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Base from "./base";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMarker, faTrashCan, faBook, faUserTie, faLocation, faLocationArrow,
  faLocationCrosshairs, faLocationDot
} from '@fortawesome/free-solid-svg-icons'

import bookpic from '../Images/book.jpg'


function Bookapi({ book, setBook }) {
  const history = useHistory()

  useEffect(() => {

    async function getBook() {
      const response = await fetch("https://64d259abf8d60b174361eb96.mockapi.io/library/books", {
        method: "GET",
      })
      const data = await response.json()
      if (data) {
        setBook(data)
      } else {
        console.log("didn't get the data")
      }

    }

    getBook()
  }, [])




  async function handleDelete(id) {
    const response = await fetch(`https://64d259abf8d60b174361eb96.mockapi.io/library/books/${id}`, {
      method: "DELETE"
    })
    const data = await response.json()
    if (data) {
      alert("successfully deleted")
      const filterBook = book.filter((book, idx) => book.id != id)
      setBook(filterBook)
    }
  }

  return (

    <Base>
      <h1 style={{
        width: "100%", marginTop: "20px",
        textAlign: "center", color: "black", fontWeight: "bolder"
      }}>Welcome  to the Library</h1>
      <Row xs={1} sm={2} md={2} lg={3} style={{ marginTop: '40px', rowGap: "15px", marginLeft: "10px" }}>

        {book.map((books, idx) => (
          <Col>
            <Card style={{ width: '20rem' }} key={idx} >
              <Card.Img variant="top" src={bookpic} style={{ height: "20rem", objectFit: "contain" }} />
              <Card.Body>
                <Card.Text>Book: {books.title}</Card.Text>
                <Card.Text>
                  Author:  {books.author}
                </Card.Text>
                <Card.Text>
                  country:  {books.country}
                </Card.Text>

                <Card.Text>
                  Pages:  {books.pages}
                </Card.Text>
                <Card.Text>
                  Year:  {books.year}
                </Card.Text>



                <Button variant="success" onClick={() => history.push(`/editbook/${books.id}`)} size="sm" style={{ margin: "2px" }}>
                  <FontAwesomeIcon icon={faMarker} /></Button>
                <Button variant="danger" onClick={() => handleDelete(books.id)} size="sm" style={{ margin: "2px" }}>
                  <FontAwesomeIcon icon={faTrashCan} /></Button>
                <Button variant="warning" size="sm" style={{ margin: "2px" }}
                  onClick={() => history.push(`/adduser/${books.title}`)}>Get book</Button>

              </Card.Body>
            </Card>
          </Col>
        ))}


      </Row>

    </Base>

  )
}
export default Bookapi



