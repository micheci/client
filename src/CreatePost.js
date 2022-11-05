import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'

const CreatePost = () => {
    const navigate = useNavigate();
    const [post,setPost]=useState({
        title:'',
        description:'',
    });

    const handleClick=(e)=>{
        e.preventDefault();
        axios.post("/create",post)
        .then(res=>console.log(res))
        .catch((err)=>console.log(err));
    }

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setPost((prev)=>{
            return{
                ...prev,
                [name]:value,
            }
        });}
    

    useEffect(()=>{
        console.log(post)
    },[post])


  return (
    <div style={{textAlign:"center"}}>
    <div >Create a Post</div>

    <Form>
        <Form.Group>
            <Form.Control  value={post.title} onChange={handleChange} style={{marginBottom:"1rem"}} name="title" placeholder='Title'/>
            <Form.Control value={post.description} style={{marginBottom:"1rem"}} name="description" placeholder="Description" onChange={handleChange}/>
        </Form.Group>
        <Button onClick={handleClick}></Button>
    </Form>

    <Button onClick={() => navigate("/")}>Back</Button>
    </div>
  )
}

export default CreatePost