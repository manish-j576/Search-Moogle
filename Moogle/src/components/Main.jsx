import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Results } from "./Results";
export const Main = () => {
  return (
    <div className="bg-red-400 h-screen w-screen">
      <Routes>
        <Route path="/" element={<Navigate to="/serch" replace />}></Route>
        <Route path="/news" element={<Results></Results>}></Route>
        <Route path="/images" element={<Results></Results>}></Route>
        <Route path="/video" element={<Results></Results>}></Route>
      </Routes>
    </div>
  );
};
