import React from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import SearchResultList from "../Pages/SearchResultList";
import TourDetails from "../Pages/TourDetails";
import Tours from "../Pages/Tours";

const Routers = () => {
//   const navigate = useNavigate();
//   navigate("/home");
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tours/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
