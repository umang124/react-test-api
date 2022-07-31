import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [datas, setDatas] = useState([]);

  function getData() {
    axios
      .get("https://62d7ce5e49c87ff2af3d4ac6.mockapi.io/crud-react-api")
      .then((res) => {
        setDatas(res.data);
      });
  }

  useEffect(() => {
    getData();
  }, [datas]);

  const handleDelete = (id) => {
    axios
      .delete(
        `https://62d7ce5e49c87ff2af3d4ac6.mockapi.io/crud-react-api/${id}`
      )
      .then(() => {
        getData();
      });
  };

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <div
      className="shadow-lg p-3 mb-5 bg-body rounded mx-auto"
      style={{ width: "40rem", marginTop: "40px" }}
    >
      <h3 className="text-center">Read</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                  <Link to="/update">
                    <button
                      type="button"
                      onClick={() => {
                        setToLocalStorage(data.id, data.name, data.email);
                      }}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleDelete(data.id)}
                    className="btn btn-danger ms-3"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
