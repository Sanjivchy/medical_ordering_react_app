import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import server from "../../lib/server";

function RequestView(props) {
  const { token } = useSelector((state) => state.auth);
  const { Id } = useParams();
  const navigate = useNavigate();
  const [request, setRequest] = useState({});

  useEffect(() => {
    const { data } = server.get(`donar/crud/${Id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data, "data");
    setRequest(data);
  }, []);

  return <>{request && request.id}</>;
}

export default RequestView;
