import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
    };
    axios
      .put(
        `https://62d7ce5e49c87ff2af3d4ac6.mockapi.io/crud-react-api/${id}`,
        data
      )
      .then(() => {
        navigate("/read");
      });
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setEmail(localStorage.getItem("email"));
    setName(localStorage.getItem("name"));
  }, []);

  return (
    <div
      className="shadow-lg p-3 mb-5 bg-body rounded mx-auto"
      style={{ width: "40rem", marginTop: "40px" }}
    >
      <h1 className="text-center mb-3">Update</h1>
      <form>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email Adddress</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
