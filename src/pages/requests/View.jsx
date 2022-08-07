import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import server from "../../lib/server";

function RequestView(props) {
  const { token } = useSelector((state) => state.auth);
  const { Id } = useParams();
  const navigate = useNavigate();
  const [request, setRequest] = useState({});
  const getdata = async () => {
    const { data } = await server.get(`request/crud/${Id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(data, "data");
    setRequest(data);
  }
  useEffect(() => {
    getdata();
  }, []);

  return <>
    <div className="ml-[255px] p-10">
      {request && <div>
        <div>
          <Link to="/requests" className="flex items-center  space-x-2">
            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.75 5.25095H3.81045L7.7802 1.2812L6.7197 0.220703L0.939453 6.00095L6.7197 11.7812L7.7802 10.7207L3.81045 6.75095H14.75V5.25095Z" fill="black" />
            </svg>
            <span>back</span>
          </Link>
          <h3 className="text-2xl text-primary font-bold pt-2">All Request Details</h3>
          <div className="bg-white text-center  max-w-5xl mx-auto shadow-lg m-10 p-10">
            <div className="flex justify-between items-center">
              <div>
                <span>Ugency: </span>
                <span>{request.urgency == 1 ?
                  <span className="bg-[#FFC107] px-[5px] py-[10px] text-[10px] text-white uppercase rounded-lg">urgent</span>
                  : <span className="bg-primary px-[5px] py-[10px] text-[10px] text-white uppercase rounded-lg"> Less urgent</span>
                }
                </span>
              </div>
              <div className="text-xs text-primary">
                <span>Date</span>
                <span>{request.request_date}</span>
              </div>
            </div>
            <div className="text-primary">
              <span>Request ID:</span>
              <span className="font-bold">{request.id}</span>
            </div>
            <div className="text-primary">
              <span>Request accepted: </span>
              <span className="font-bold">{request.accepted === 'true' ? 'Accepted' : "Not Accepted"}</span>
            </div>
            <div className="text-primary ">
              <span>Request Member ID:</span>
              <span className="font-bold">{request.member_id}</span>
            </div>


            <div className="pt-6 pb-3 text-sm font-bold text-primary">
              <span>Supporting Document</span>
              <figure className="max-w-2xl aspect-video mx-auto pt-2">
                <img src={request.document} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>}
    </div></>;
}

export default RequestView;
