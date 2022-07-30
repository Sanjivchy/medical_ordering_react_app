import React, { useState } from "react";

function App() {
    const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
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
        setInputList([...inputList, { firstName: "", lastName: "" }]);
    };

    return (
        <div className="App">
            {inputList.map((x, i) => {
                return (
                    <tr className="ml-[255px]">
                        <td>
                            <input
                                name="firstName"
                                placeholder="Enter First Name"
                                value={x.firstName}
                                onChange={e => handleInputChange(e, i)}
                                type='text'
                            />
                        </td>
                        <td>
                            <input
                                name="lastName"
                                placeholder="Enter Last Name"
                                value={x.lastName}
                                onChange={e => handleInputChange(e, i)}
                                type="text"
                            />
                        </td>
                        <td>
                            <div className="btn-box">
                                {inputList.length !== 1 && <button
                                    onClick={() => handleRemoveClick(i)}>Remove</button>}
                            </div>
                        </td>
                        <div className="block">
                            {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                        </div>
                    </tr>
                );
            })}
            <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
        </div>
    );
}

export default App;