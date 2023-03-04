import React, { useState } from "react";
import "./style.css";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.target;

    if (name === "firstName") {
      setFormData({ ...formData, firstName: value });
    } else if (name === "lastName") {
      setFormData({ ...formData, lastName: value });
    } else if (name === "password") {
      setFormData({ ...formData, password: value });
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if (formData.firstName && formData.lastName && formData.password.length >= 8) {
      alert(`Hello ${formData.firstName} ${formData.lastName}`);
      setFormData({
        firstName: "",
        lastName: "",
        password: ""
      });
    } else {
      alert("Please fill in all fields and ensure your password is at least 8 characters long.");
    }
  };

  return (
    <div>
      <p>Hello {formData.firstName} {formData.lastName}</p>
      <form className="form">
        <input
          value={formData.firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={formData.lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={formData.password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
