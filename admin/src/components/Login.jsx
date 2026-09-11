import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  function handleUserName(e) {
    const userName = { ...inputValue, username: e.target.value };
    setInputValue(userName);
  }
  function handlePassword(e) {
    const password = { ...inputValue, password: e.target.value };
    setInputValue(password);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.username === "" || inputValue.password === "") {
      alert("fill the username or password input");
      return
    }
    axios
      .post(
        "http://localhost:5000/api/auth/login",
        {
          username: inputValue.username,
          password: inputValue.password,
        },
        {
          withCredentials: true,
        },
      )
      .then(function (response) {
        if (response.status === 200) {
          navigate("/home");
        }
      })
      .catch(function (error) {
        if (error.response?.status === 401) {
          alert("Username or password is invalid");
        } else if (error.response?.status === 500) {
          alert("Server error. Please try again later.");
        } else {
          console.log(error);
        }
      });
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-12 col-sm-10 col-md-6 col-lg-4">
            <form
              onSubmit={handleSubmit}
              className="p-4 p-md-5 border rounded-4 shadow-sm bg-white"
            >
              <h2 className="text-center mb-4">Admin Login</h2>

              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  UserName
                </label>

                <input
                  onChange={handleUserName}
                  value={inputValue.username}
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Enter your username"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="inputPassword" className="form-label">
                  Password
                </label>

                <input
                  onChange={handlePassword}
                  value={inputValue.password}
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Enter your password"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
