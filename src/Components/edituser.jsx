import React from "react";
import *  as yup from 'yup'
import { useFormik } from 'formik'
import { Row, Col, Form, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Base from "./base";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faAddressBook, faEdit, faFilePen, faFolderPlus } from '@fortawesome/free-solid-svg-icons'


const userSchema = yup.object({
    name: yup.string().required("* required"),
    department: yup.string().required("* required"),
    title: yup.string().required("* required"),
    startdate: yup.string().required(" * required"),
    duedate: yup.string().required(" * required")

})

function Edituser({ user, setUser }) {
    const { id } = useParams()
    const a = user.find((book, idx) => book.id == id)
    console.log(a)
    const history = useHistory()



    const { handleSubmit, handleChange, values, handleBlur, touched, errors } = useFormik({
        initialValues: {
            name: a.name,
            department: a.department,
            title: a.title,
            startdate: a.startdate,
            duedate: a.duedate,

        },
        validationSchema: userSchema,
        onSubmit: (edituser) => {

            handleEdit(edituser)
        }

    })
    async function handleEdit(edituser) {
        const response = await fetch(`https://64d259abf8d60b174361eb96.mockapi.io/library/users/${id}`, {
            method: "PUT",
            body: JSON.stringify(edituser),
            headers: {
                "content-type": "application/json"
            }

        })
        const data = await response.json()
        if (data) {
            user[a.id] = edituser
            setUser([...user])
            alert("successfully edited")
            history.push("/user")

        } else {
            console.log("didn't the edit the data")
        }
    }

    return (

        <Base>
            <h1 style={{
                width: "100%", marginTop: "20px",
                textAlign: "center", color: "black", fontWeight: "bolder"
            }}>Edit the user data here</h1>
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
                        <Button type="submit" variant="warning"> <FontAwesomeIcon icon={faEdit} /> Edit</Button>
                    </Col>


                </Form>



            </Row></Base>


    )
}
export default Edituser