import React, { useState } from "react";

function App() {
    const [inputList, setInputList] = useState([{ medicineName: "", medicineQuantity: "" }]);
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    const handleAddClick = () => {
        setInputList([...inputList, { medicineName: "", medicineQuantity: "" }]);
    };

    return (
        <div className="border border-gray-10 px-10 py-6 rounded-lg ">
            {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
            {inputList.map((x, i) => {
                return (
                    <div className="flex flex-col gap-6 divide-y">
                        <div className="flex gap-6 pt-6">
                            <div className="flex flex-col">
                                <label className="form-label">S.N</label>
                                <span>{i + 1}</span>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="form-label">Medicine Name</label>
                                <input
                                    name="medicineName"
                                    placeholder="Medicine Name"
                                    value={x.medicineName}
                                    onChange={e => handleInputChange(e, i)}
                                    type='text'
                                />
                            </div>
                            <div className="flex items-center">
                                <div className="flex flex-col">
                                    <label htmlFor="" className="form-label">Medicine Quantity</label>
                                    <input
                                        name="medicineQuantity"
                                        placeholder="Medicine Quantity"
                                        value={x.medicineQuantity}
                                        onChange={e => handleInputChange(e, i)}
                                        type="number"
                                    />
                                </div>
                                <div className="mt-[30px] ml-4">
                                    {inputList.length !== 1 && <button
                                        onClick={() => handleRemoveClick(i)}>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 6H18C18 5.46957 17.7893 4.96086 17.4142 4.58579C17.0391 4.21071 16.5304 4 16 4C15.4696 4 14.9609 4.21071 14.5858 4.58579C14.2107 4.96086 14 5.46957 14 6ZM12 6C12 4.93913 12.4214 3.92172 13.1716 3.17157C13.9217 2.42143 14.9391 2 16 2C17.0609 2 18.0783 2.42143 18.8284 3.17157C19.5786 3.92172 20 4.93913 20 6H28C28.2652 6 28.5196 6.10536 28.7071 6.29289C28.8946 6.48043 29 6.73478 29 7C29 7.26522 28.8946 7.51957 28.7071 7.70711C28.5196 7.89464 28.2652 8 28 8H26.872L24.462 25.676C24.2985 26.8739 23.7066 27.9719 22.7958 28.7669C21.885 29.5619 20.717 30 19.508 30H12.492C11.283 30 10.115 29.5619 9.2042 28.7669C8.29338 27.9719 7.70145 26.8739 7.538 25.676L5.128 8H4C3.73478 8 3.48043 7.89464 3.29289 7.70711C3.10536 7.51957 3 7.26522 3 7C3 6.73478 3.10536 6.48043 3.29289 6.29289C3.48043 6.10536 3.73478 6 4 6H12ZM14 13C14 12.7348 13.8946 12.4804 13.7071 12.2929C13.5196 12.1054 13.2652 12 13 12C12.7348 12 12.4804 12.1054 12.2929 12.2929C12.1054 12.4804 12 12.7348 12 13V23C12 23.2652 12.1054 23.5196 12.2929 23.7071C12.4804 23.8946 12.7348 24 13 24C13.2652 24 13.5196 23.8946 13.7071 23.7071C13.8946 23.5196 14 23.2652 14 23V13ZM19 12C18.7348 12 18.4804 12.1054 18.2929 12.2929C18.1054 12.4804 18 12.7348 18 13V23C18 23.2652 18.1054 23.5196 18.2929 23.7071C18.4804 23.8946 18.7348 24 19 24C19.2652 24 19.5196 23.8946 19.7071 23.7071C19.8946 23.5196 20 23.2652 20 23V13C20 12.7348 19.8946 12.4804 19.7071 12.2929C19.5196 12.1054 19.2652 12 19 12Z" fill="#3A3A3A" />
                                        </svg>
                                    </button>}
                                </div>
                            </div>
                        </div>
                        <div>
                            {inputList.length - 1 === i && <button className="flex items-center text-xs text-[#1890FF] space-x-2 border border-[#1890FF] p-3 " onClick={handleAddClick}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="14" height="14" fill="white" fill-opacity="0.01" />
                                    <path d="M7.46838 1.375H6.53088C6.44755 1.375 6.40588 1.41667 6.40588 1.5V6.40625H1.75C1.66667 6.40625 1.625 6.44792 1.625 6.53125V7.46875C1.625 7.55208 1.66667 7.59375 1.75 7.59375H6.40588V12.5C6.40588 12.5833 6.44755 12.625 6.53088 12.625H7.46838C7.55172 12.625 7.59338 12.5833 7.59338 12.5V7.59375H12.25C12.3333 7.59375 12.375 7.55208 12.375 7.46875V6.53125C12.375 6.44792 12.3333 6.40625 12.25 6.40625H7.59338V1.5C7.59338 1.41667 7.55172 1.375 7.46838 1.375Z" fill="#007BFF" />
                                </svg>
                                <span>
                                    Add items
                                </span>
                            </button>}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default App;