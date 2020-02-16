import React from "react";
import { useParams } from "react-router-dom";

export default function CBRetrun() {
  let { accessToken } = useParams();
  localStorage.setItem("token", accessToken);
  return <div>Loading...</div>;
}
