import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Row, Col, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Base from "./base";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarker, faTrashAlt, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import userbook from "../Images/userbook.jpg"


function Userdata({ user, setUser }) {
  const history = useHistory()

  useEffect(() => {

    async function getUser() {
      const response = await fetch("https://64d259abf8d60b174361eb96.mockapi.io/library/users", {
        method: "GET",
      })
      const data = await response.json()
      if (data) {
        setUser(data)
      } else {
        console.log("didn't get the data")
      }

    }

    getUser()
  }, [])




  async function handleDelete(id) {
    const response = await fetch(`https://64d259abf8d60b174361eb96.mockapi.io/library/users/${id}`, {
      method: "DELETE"
    })
    const data = await response.json()
    if (data) {
      alert("successfully deleted")
      const filterUser = user.filter((user, idx) => user.id != id)
      setUser(filterUser)
    }
  }

  return (

    <Base>
      <h1 style={{
        width: "100%", marginTop: "20px",
        textAlign: "center", color: "black", fontWeight: "bolder"
      }}>Welcome to the user Dashboard</h1>
      <Row xs={1} sm={2} md={2} lg={3} style={{ marginTop: '40px', rowGap: "15px", marginLeft: "10px" }}>

        {user.map((users, idx) => (
          <Col>
            <Card style={{ width: '18rem' }} key={idx} >
              <Card.Img variant="top" src={userbook} style={{ height: "20rem", objectFit: "contain" }} />
              <Card.Body>
                <Card.Title>Name:  {users.name}</Card.Title>
                <Card.Text>
                  Department:  {users.department}
                </Card.Text>
                <Card.Text>
                  Book:  {users.title}
                </Card.Text>

                <Card.Text>
                  startdate:  {users.startdate}
                </Card.Text>
                <Card.Text>
                  Duedate:  {users.duedate}
                </Card.Text>



                <Button variant="info" onClick={() => history.push(`/edituser/${users.id}`)} size="sm" style={{ margin: "2px" }}>
                  <FontAwesomeIcon icon={faMarker} /></Button>
                <Button variant="secondary" onClick={() => handleDelete(users.id)} size="sm" style={{ margin: "2px" }}>
                  <FontAwesomeIcon icon={faTrashAlt} /></Button>



              </Card.Body>
            </Card>
          </Col>
        ))}


      </Row>

    </Base>

  )
}
export default Userdata


