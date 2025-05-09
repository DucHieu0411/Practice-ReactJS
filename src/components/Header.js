import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";

const Header = (props) => {
  const { logoutContext } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutContext();
    navigate("/");
    toast.success("Log out success!");
  };
  const checkUser = localStorage.getItem("token")
    ? [
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>

            <NavLink to="/users" className="nav-link">
              Manage Users
            </NavLink>
          </Nav>
          <Nav>
            <NavDropdown title="Setting">
              <NavDropdown.Item onClick={() => handleLogout()}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>,
      ]
    : [
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>

            <NavLink to="/users" className="nav-link">
              Manage Users
            </NavLink>
          </Nav>
          <Nav>
            <NavDropdown title="Setting">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </NavDropdown>
          </Nav>
        </div>,
      ];
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {checkUser.map((user, index) => {
              return <div key={index}>{user}</div>;
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
