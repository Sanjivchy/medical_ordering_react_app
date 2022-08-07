import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import server from "../../lib/server";

function InterestedList() {
  const { token } = useSelector((state) => state.auth);
  const [interested, setInterested] = useState([]);

  const listInterested = async () => {
    const res = await server.get("interest/list", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(res);
    setInterested(res.data);
  };

  useEffect(() => {
    listInterested();
  }, []);

  const handleDelete = async (id) => {
    const res = await server.delete(`interest/crud/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    listInterested();
  };

  return (
    <>
      <h1 className="text-3xl">List Interested</h1>
      <Link
        to={`/interested/create`}
        className="border bg-blue-500 text-white mr-1 px-4 py-1"
      >
        Create
      </Link>
      <table className="table">
        <thead>
          <tr className="font-semibold">
            <td>doner ID</td>
            <td>medicine</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {interested &&
            interested.map((interest, key) => {
              return (
                <tr key={key}>
                  <td>{interest.interested}</td>
                  <td>{interest.medicine}</td>
                  <td>
                    <Link
                      to={`/interested/${interest.id}/`}
                      className="border bg-yellow-500 text-white mr-1 px-4 py-1"
                    >
                      Detail
                    </Link>
                    <Link
                      to={`/interested/${interest.id}/edit`}
                      className="border bg-yellow-500 text-white mr-1 px-4 py-1"
                    >
                      Edit
                    </Link>
                    <button
                      className="border bg-red-500 text-white px-4 py-1"
                      onClick={() => handleDelete(interest.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default InterestedList;
