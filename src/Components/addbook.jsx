import React from "react";
import *  as yup from 'yup'
import { useFormik } from 'formik'
import { Row, Col, Form, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Base from "./base";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faAddressBook, faFolderPlus } from '@fortawesome/free-solid-svg-icons'

const bookSchema = yup.object({
    title: yup.string().required("* required"),
    author: yup.string().required("* required"),
    country: yup.string().required("* required"),
    pages: yup.string().required(" * required"),
    year: yup.string().required(" * required")

})

function Addbook({ book, setBook }) {
    const history = useHistory()

    const { handleSubmit, handleChange, values, handleBlur, touched, errors } = useFormik({
        initialValues: {
            title: "",
            author: "",
            country: "",
            pages: "",
            year: "",

        },
        validationSchema: bookSchema,
        onSubmit: (newbook) => {
            console.log(newbook)
            handleClick(newbook)
        }

    })

    async function handleClick(newbook) {
        const response = await fetch("https://64d259abf8d60b174361eb96.mockapi.io/library/books", {
            method: 'POST',
            body: JSON.stringify(newbook),
            headers: {
                "content-type": "application/json"
            }

        })
        const data = await response.json()
        console.log(data)
        if (data) {
            alert("successfully added")
            setBook([...book, data])
            history.push("/admin")
        }

    }
    return (
        <>
            <Base >
                <h1 style={{
                    width: "100%", marginTop: "20px",
                    textAlign: "center", color: "black", fontWeight: "bolder"
                }}>Add the new Book</h1>
                <Row xs={1} sm={1} md={1} lg={1} style={{ width: "100%", textAlign: "center" }}  >
                    <Form onSubmit={handleSubmit} style={{ marginTop: "20px", width: "100%", display: "grid", placeItems: "center" }}>
                        <Col style={{ width: "40%", marginTop: "10px" }}><Form.Control name="title"
                            type="text"
                            value={values.title} onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Book name"
                        />
                        </Col>
                        <Col style={{ width: "40%", marginTop: "10px", color: "crimson" }} >{touched.title ? errors.title : ""}
                        </Col>
                        <Col style={{ width: "40%", marginTop: "10px" }}><Form.Control
                            name="author"
                            type="text"
                            placeholder="Book Author"
                            value={values.author} onBlur={handleBlur} onChange={handleChange} />
                        </Col>
                        <Col style={{ width: "40%", marginTop: "10px", color: "crimson" }}>{touched.author ? errors.author : ""}
                        </Col>

                        <Col style={{ width: "40%", marginTop: "10px" }}><Form.Control
                            name="country"
                            type="text"
                            placeholder="Country"
                            value={values.country} onBlur={handleBlur} onChange={handleChange} />
                        </Col>
                        <Col style={{ width: "40%", marginTop: "10px", color: "crimson" }}>{touched.country ? errors.country : ""}
                        </Col>
                        <Col style={{ width: "40%", marginTop: "10px" }}><Form.Control
                            name="pages"
                            type="number"
                            placeholder="pages"
                            value={values.pages} onBlur={handleBlur} onChange={handleChange} />
                        </Col>
                        <Col style={{ width: "40%", marginTop: "10px", color: "crimson" }} >{touched.pages ? errors.pages : ""}
                        </Col>
                        <Col style={{ width: "40%", marginTop: "10px" }}><Form.Control
                            name="year"
                            type="number"
                            placeholder="Year"
                            value={values.year} onBlur={handleBlur} onChange={handleChange} />
                        </Col>
                        <Col style={{ width: "40%", marginTop: "10px", color: "crimson" }}>{touched.year ? errors.year : ""}
                        </Col>
                        <Col style={{ width: "40%", marginTop: "10px" }}>
                            <Button type="submit"><FontAwesomeIcon icon={faFolderPlus} />  Addbook</Button>
                        </Col>


                    </Form>



                </Row>
            </Base></>
    )
}
export default Addbook