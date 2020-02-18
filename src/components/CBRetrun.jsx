import React from "react";
import { useParams } from "react-router-dom";

export default () => {
  let { accessToken } = useParams();
  localStorage.setItem("token", accessToken);
  return <div>Loading...</div>;
};
