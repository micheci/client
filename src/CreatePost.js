import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";


const CreatePost = () => {
    const navigate = useNavigate();
  return (
    <div style={{textAlign:"center"}}>
    <div >Create a Post</div>afaf

    <Form>
        <Form.Group>
            <Form.Control  style={{marginBottom:"1rem"}} name="title" placeholder='Title'/>
            <Form.Control style={{marginBottom:"1rem"}} name="description" placeholder="Description"/>
        </Form.Group>
    </Form>

    <Button onClick={() => navigate("/")}>Back</Button>
    </div>
  )
}

export default CreatePost