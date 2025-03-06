import React,{useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Update() {
 
 const{id}=useParams();
 const numericId = parseInt(id, 30);
 const [values,setValues]=useState({
   name:"",
   speciality: "",
   degree:"",
   experience:"",
   fees: ""
  })
  const navigate=useNavigate();

 useEffect(()=>{
  axios.get('http://localhost:3000/doctors/'+id)
    .then( res =>{setValues(res.data);})
    .catch(err => console.log(err));
 },[])

 
 
  const handleUpdate=(event)=>{
    event.preventDefault();
    axios.put('http://localhost:3000/doctors/'+id,values)
    .then(res => {console.log(res);
                 navigate('/admin')})
    .catch(err => console.log(err));
  }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded ">
        <h1>Update a Doctor</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2 text-start">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={values.name}
              onChange={e =>setValues({...values,name:e.target.value})}
            />
            </div>
          <div className="mb-2 text-start">
            <label htmlFor="speciality" className="form-label">Speciality:</label>
            <input
              type="text"
              speciality="speciality"
              className="form-control"
              placeholder="Enter Speciality"
              value={values.speciality}
              onChange={e =>setValues({...values,speciality:e.target.value})}

            />
          </div>
          <div className="mb-2 text-start">
          <label htmlFor="degree" className="form-label">Degree:</label>
            <input
              type="text"
              degree="degree"
              className="form-control"
              placeholder="Enter Degree"
              value={values.degree}
              onChange={ e =>setValues({...values,degree:e.target.value})}
            />
          </div>
          <div className="mb-2 text-start">
          <label htmlFor="experience" className="form-label">Experience:</label>
            <input
              type="text"
              experience="experience"
              className="form-control"
              placeholder="Enter Experience"
              value={values.experience}
              onChange={e =>setValues({...values,experience:e.target.value})}
            />
          </div>
          <div className="mb-3 text-start">
          <label htmlFor="fees" className="form-label">Fees:</label>
            <input
              type="text"
              fees="fees"
              className="form-control"
              placeholder="Enter Fees"
              value={values.fees}
              onChange={e =>setValues({...values,fees:e.target.value})}
            />
          </div>
          <button type="submit" className="btn btn-success">Update</button>
          <Link to="/admin" className="btn btn-primary ms-3">Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Update