import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
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

  return <>
    <div className="ml-[255px] p-10">
      {member &&
        <div>
          <Link to="/members" className="flex items-center  space-x-2">
            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.75 5.25095H3.81045L7.7802 1.2812L6.7197 0.220703L0.939453 6.00095L6.7197 11.7812L7.7802 10.7207L3.81045 6.75095H14.75V5.25095Z" fill="black" />
            </svg>
            <span>back</span>
          </Link>
          <h3 className="text-2xl text-primary font-bold pt-2">Request Details</h3>
          <div className="shadow-lg bg-white m-10 p-10">
            <div>
              <span>Member ID</span>
              <span> {member.id}</span>
            </div>
            <div>
              <span>Member ID</span>
              <span> {member.medicine_name}</span>
            </div>
            <div>
              <span>Member ID</span>
              <span> {member.quantity}</span>
            </div>
            <div>
              <span></span>
              <div>{member.request_date}</div>
            </div>
            <div>
            <span></span>
            
            </div>
          </div>
        </div>
      }
    </div>
  </>;
}

export default MemberView;
