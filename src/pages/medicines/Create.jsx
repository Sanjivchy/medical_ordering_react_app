import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RequestMedicine from "../../layouts/main.js/requestMedicine/Index";
import server from "../../lib/server";

function MedicineCreate(props) {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [requests, setRequests] = useState([]);
  const [doners, setDoners] = useState([]);
  const [status, setStatus] = useState("WAITING");
  const [medicineName, setMedicineName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [requestId, setRequestId] = useState("");
  const [donerId, setDonerId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!status || !medicineName || !quantity || !requestId) {
      setError("All fields are mendatory except Intrested.");
      return;
    }
    const res = await server.post(
      "medicine/list",
      {
        status,
        medicine_name: medicineName,
        quantity,
        request_id: requestId,
        interested: donerId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.status != 200) {
      setError("Error occured.");
    }
    navigate("/medicines");
  };

  const listDoners = async () => {
    const res = await server.get("donar/list", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    setDoners(res.data);
  };
  const listRequests = async () => {
    const res = await server.get("request/list", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    setRequests(res.data);
  };

  useEffect(() => {
    listDoners();
    listRequests();
  }, []);

  return (
    <div className="space-y-6 ml-[255px] p-10 max-w-5xl">
      <h1 className="text-2xl">Create Medicines</h1>
      <form className="space-y-8" onSubmit={handleSubmit}>
        {error && <p className=" text-red-500">{error}</p>}
        
        <div className="grid grid-cols-2 gap-6">
          {/* <div className='form-group flex flex-col'>
                        <label className='form-label'>Status</label>
                        <input className='form-control' type="text" placeholder='Enter the status ' value={status} onChange={(e) => setStatus(e.target.value)} />
                    </div> */}
          <div className="form-group flex flex-col">
            <label className="form-label">Medicine Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter medicine name"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
            />
          </div>
          <div className="form-group flex flex-col">
            <label className="form-label">Quantity</label>
            <input
              className="form-control"
              type="number"
              placeholder="Enter your quality"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="request">Request</label>
            <select
              name="request"
              id="request"
              value={requestId}
              onChange={(e) => setRequestId(e.target.value)}
            >
              <option>Select an Option</option>
              {requests &&
                requests.map((request) => {
                  return (
                    <option key={request.id} value={request.id}>
                      {request.id}
                    </option>
                  );
                })}
            </select>
          </div>
          {/* <div className="form-group flex flex-col">
                        <label htmlFor="interested">Interested</label>
                        <select name="interested" id="interested" value={donerId} onChange={(e) => setDonerId(e.target.value)}>
                            <option>Select an Option</option>
                            {doners && doners.map((doner) => {
                                return (
                                    <option key={doner.id} value={doner.id}>{doner.name}</option>
                                )
                            })}
                        </select>
                    </div> */}
        </div>
        <button
          type="submit"
          className="bg-primary  text-base leading-6 font-medium text-white px-10 py-[14px] rounded-lg"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default MedicineCreate;
