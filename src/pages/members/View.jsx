import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import server from "../../lib/server";

function MemberView(props) {
  const { token } = useSelector((state) => state.auth);
  const { Id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState({});

  const fetchMember = async () => {
    const { data } = await server.get(`member/crud/${Id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setMember(data);
  };

  useEffect(() => {
    fetchMember();
  }, []);

  return <>{member && member.data}</>;
}

export default MemberView;
