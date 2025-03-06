import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';
import { Link, useNavigate } from 'react-router-dom';

function Admin() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    axios
      .get('http://localhost:3000/doctors')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to Delete?");
    if (confirm) {
      axios
        .delete(`http://localhost:3000/doctors/${id}`)
        .then((res) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="admin-container">
      <h1 className="heading">List of Doctors</h1>
      <div className="content-box">
        <div className="btndisplay">
          <Link to="/admin/create" className="btn4">
            Add+
          </Link>
        </div>
        <table className="table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Speciality</th>
              <th>Degree</th>
              <th>Experience</th>
              <th>Fees/Rs</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.speciality}</td>
                <td>{d.degree}</td>
                <td>{d.experience}</td>
                <td>{d.fees}</td>
                <td>
                  <Link to={`/admin/read/${d.id}`} className="btn1">
                    Read
                  </Link>
                  <Link to={`/admin/update/${d.id}`} className="btn2">
                    Edit
                  </Link>
                  <button onClick={(e) => handleDelete(d.id)} className="btn3">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;