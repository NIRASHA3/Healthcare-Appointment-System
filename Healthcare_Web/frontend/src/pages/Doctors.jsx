import { useEffect } from "react";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "./Doctors.css"

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="doctors-container">
      <p>
        Explore doctors through speciality. Choose a specialist according to
        your specific medical condition or symptoms.
      </p>
      <div className="filter-section">
        <div className="filter-buttons">
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={`filter-button ${
              speciality === "General physician" ? "active" : ""
            }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`filter-button ${
              speciality === "Gynecologist" ? "active" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={`filter-button ${
              speciality === "Dermatologist" ? "active" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={`filter-button ${
              speciality === "Pediatricians" ? "active" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={`filter-button ${
              speciality === "Neurologist" ? "active" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={`filter-button ${
              speciality === "Gastroenterologist" ? "active" : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="doctors-grid">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              className="doctor-card"
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                window.scrollTo(0, 0);
              }}
            >
              <img className="doctor-image" src={item.image} alt={item.name} />
              <div className="doctor-details">
                <div className="availability">
                  <div className="availability-dot"></div>
                  <p className="availability-p">Available</p>
                </div>
                <p className="doctor-name">{item.name}</p>
                <p className="doctor-speciality">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
