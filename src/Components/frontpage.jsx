import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import library from "../Images/library.jpg"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Frontpage() {
    const history = useHistory()
    return (
        <>
            <Row xs={1} sm={1} md={1} lg={1} style={{ textAlign: "center" }}>
                <Col>  <h1 style={{
                    width: "100%", marginTop: "20px"
                    , textAlign: "center", color: "black", fontWeight: "bolder"
                }}>Welcome  to the Library</h1>
                </Col>
                <Col ><h3 style={{
                    width: "100%", marginTop: "20px"
                    , textAlign: "center", color: "black", fontWeight: "bolder"
                }}>Click here</h3></Col>
                <Col ><Button style={{ marginTop: "20px" }}
                    onClick={() => history.push("/admin")} variant="success"> Dashboard</Button></Col>
                <Col  ><img src={library} style={{ width: "100%", height: "300px", marginTop: "20px" }} /></Col>
            </Row>
        </>
    )
}
export default Frontpage