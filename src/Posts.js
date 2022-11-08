import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';


const Posts = () => {

    //contains posts using state
    const [posts,setPosts]=useState([]);
    const [updatedPost,setUpdatedPost]=useState({})

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    //use Effect/axios to send request to back end via routes
    useEffect(()=>{
        axios.get("/posts")
        .then((res)=>{
            console.log(res)
        setPosts(res.data)})
        .catch((err)=>console.log(err))
    },[])

    //deletes post
const deletePost=(id)=>{
    axios.delete(`/delete/${id}`)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}

const updatePost=(post)=>{
    setUpdatedPost(post)
    handleShow();
    console.log(post)
}

const handleChange=(e)=>{
    const {name,value}=e.target;
    setUpdatedPost(prev=>{
        return{
            ...prev,
            [name]:value,
        }
    })
}
const saveUpdatedPost=()=>{
    axios.put(`/update/${updatedPost._id}`,updatedPost)
    .then(res=>console.log(res))
    .catch((err)=>console.log(err))
    console.log(updatedPost)
}

  return (
    <div style  ={{width:"90%",textAlign:"center", margin:"auto auto"}}>
    <div>Posts</div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <Modal.Body><form>
            <Form.Group>
                <Form.Control placeholder="title" name="title" value={updatedPost.title ? updatedPost.title:""} onChange={handleChange}>

                </Form.Control>
                <Form.Control placeholder="description" name="description" value ={updatedPost.description ? updatedPost.description:""} onChange={handleChange}>

                </Form.Control>
                </Form.Group></form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 
   {posts ? (
    <>
        {posts.map((post)=>{
            return(
                <div style={{border:"solid lightgray 1px", borderRadius:"8px",marginBottom:"1rem",padding:"1rem"}}>
                    <h4>{post.title}</h4>
                    <h4>{post.description}</h4>
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <Button onClick={()=>updatePost(post)}>Update</Button>
                    <Button onClick={()=>deletePost(post._id)}>Delete</Button>
                    </div>
                </div>
   )
})}
</>
):(
    "")}
   
    </div>
  )
}

export default Posts