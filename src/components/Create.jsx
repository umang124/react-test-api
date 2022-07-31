import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
    };
    console.log(data);
    axios
      .post("https://62d7ce5e49c87ff2af3d4ac6.mockapi.io/crud-react-api", data)
      .then(() => {
        history("/read");
      });
  };

  return (
    <div
      className="shadow-lg p-3 mb-5 bg-body rounded mx-auto"
      style={{ width: "40rem", marginTop: "40px" }}
    >
      <h1 className="text-center mb-3">Create</h1>
      <form>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email Adddress</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Create
        </button>
        <Link to="/read">
          <button type="button" className="btn btn-primary ms-3">
            View Data
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Create;
