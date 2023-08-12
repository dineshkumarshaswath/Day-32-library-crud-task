import React from "react";
import *  as yup from 'yup'
import { useFormik } from 'formik'
import { Row, Col, Form, Button } from "react-bootstrap"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faAddressBook, faFilePen, faFolderPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Base from "./base";

const userSchema = yup.object({
    name: yup.string().required("* required"),
    department: yup.string().required("* required"),
    title: yup.string().required("* required"),
    startdate: yup.string().required(" * required"),
    duedate: yup.string().required(" * required")

})

function Adduser({ user, setUser }) {
    const history = useHistory()
    const { title } = useParams()

    const { handleSubmit, handleChange, values, handleBlur, touched, errors } = useFormik({
        initialValues: {
            name: "",
            department: "",
            title: title,
            startdate: "",
            duedate: "",

        },
        validationSchema: userSchema,
        onSubmit: (newuser) => {
            console.log(newuser)
            handleClick(newuser)
        }

    })

    async function handleClick(newuser) {
        const response = await fetch("https://64d259abf8d60b174361eb96.mockapi.io/library/users", {
            method: 'POST',
            body: JSON.stringify(newuser),
            headers: {
                "content-type": "application/json"
            }

        })
        const data = await response.json()
        console.log(data)
        if (data) {
            alert("successfully added")
            setUser([...user, data])
            history.push("/user")
        } else {
            console.log("did not get the data")
        }

    }
    return (
        <Base>
            <h1 style={{
                width: "100%", marginTop: "20px",
                textAlign: "center", color: "black", fontWeight: "bolder"
            }}>Get the Book here</h1>
            <Row xs={1} sm={1} md={1} lg={1} style={{ width: "100%", textAlign: "center" }}>
                <Form onSubmit={handleSubmit} style={{
                    marginTop: "20px",
                    width: "100%", display: "grid", placeItems: "center"
                }}>
                    <Col style={{ width: "40%", marginTop: "10px" }}><Form.Control name="name"
                        type="text"
                        placeholder=" Your Name"
                        value={values.name} onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </Col>
                    <Col style={{ width: "40%", marginTop: "10px", color: "crimson" }}>{touched.name ? errors.name : ""}
                    </Col>
                    <Col style={{ width: "40%", marginTop: "10px" }}><Form.Control
                        name="department"
                        placeholder=" Your Department"
                        type="text"
                        value={values.department} onBlur={handleBlur} onChange={handleChange} />
                    </Col>
                    <Col style={{ width: "40%", marginTop: "10px", color: "crimson" }}>{touched.department ? errors.department : ""}
                    </Col>

                    <Col style={{ width: "40%", marginTop: "10px" }}><Form.Control
                        name="title"
                        placeholder="Book Name"
                        type="text"
                        value={values.title} onBlur={handleBlur} onChange={handleChange} />
                    </Col>
                    <Col style={{ width: "40%", marginTop: "10px", color: "crimson" }}>{touched.title ? errors.title : ""}
                    </Col>
                    <Col style={{ width: "40%", marginTop: "10px" }}><Form.Control
                        name="startdate"
                        type="date"
                        placeholder=" start date"
                        value={values.startdate} onBlur={handleBlur} onChange={handleChange} />
                    </Col>
                    <Col style={{ width: "40%", marginTop: "10px", color: "crimson" }}>{touched.startdate ? errors.startdate : ""}
                    </Col>
                    <Col style={{ width: "40%", marginTop: "10px" }}><Form.Control
                        name="duedate"
                        type="date"
                        placeholder="due date"
                        value={values.duedate} onBlur={handleBlur} onChange={handleChange} />
                    </Col>
                    <Col style={{ width: "40%", marginTop: "10px", color: "crimson" }}>{touched.duedate ? errors.duedate : ""}
                    </Col>
                    <Col>
                        <Button type="submit"> <FontAwesomeIcon icon={faUserPlus} /> Register</Button>
                    </Col>


                </Form>



            </Row></Base>
    )
}
export default Adduser