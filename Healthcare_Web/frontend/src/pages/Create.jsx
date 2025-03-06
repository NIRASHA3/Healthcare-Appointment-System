import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Create() {
 
 const [values,setValues]=useState({
  name:"",
  speciality: "",
  degree:"",
  experience:"",
  fees: ""
 })

 
  const navigate=useNavigate();
  const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:3000/doctors',values)
    .then(res => {console.log(res)
                 navigate('/admin')})
    .catch(err => console.log(err));
  }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded ">
        <h1>Add a Doctor</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 text-start">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              
              className="form-control"
              placeholder="Enter Name"
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
              onChange={e =>setValues({...values,degree:e.target.value})}
            />
          </div>
          <div className="mb-2 text-start">
          <label htmlFor="experience" className="form-label">Experience:</label>
            <input
              type="text"
              experience="experience"
              className="form-control"
              placeholder="Enter Experience"
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
              onChange={e =>setValues({...values,fees:e.target.value})}
            />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
          <Link to="/admin" className="btn btn-primary ms-3">Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create