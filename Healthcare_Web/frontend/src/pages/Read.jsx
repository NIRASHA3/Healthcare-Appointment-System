import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Read() {
  const [data, setData] = useState([])
  const { id } = useParams();//get id from url
  const numericId = parseInt(id, 30);

  useEffect(() => {
    axios.get('http://localhost:3000/doctors/'+id)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Detail of Doctor</h3>
        <div className="mb-2 text-start" >
          <strong>Name: {data.name}</strong>
        </div>
        <div className="mb-2 text-start">
          <strong>Speciality: {data.speciality}</strong>
        </div>
        <div className="mb-2 text-start">
          <strong>Degree: {data.degree}</strong>
        </div>
        <div className="mb-2 text-start">
          <strong>Experience: {data.experience}</strong>
        </div>
        <div className="mb-2 text-start">
          <strong>Fees: {data.fees}</strong>
        </div>
        <Link to={`/admin/update/${id}`} className="btn btn-success">Edit</Link>
        <Link to="/admin" className="btn btn-primary ms-3">Back</Link>
      </div>
    </div>
  );
}

export default Read