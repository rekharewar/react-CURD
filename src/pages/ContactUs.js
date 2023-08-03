import React, { useEffect, useState } from "react";

const ContactUs = () => {
  const [userName, setUserNmae] = useState("");
  const [usercity, setUserCity] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [studentData, setStudentData] = useState([]);
  // const [indexUpdate, setIndexUpdate] = useState("");
  const [updateId, setUpdateId] = useState("");
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    let result = await fetch("http://localhost:3300/getUserDetails", {
      method: "get",
    });
    let finalRes = await result.json();
    setStudentData(finalRes.data);
  };
  const saveUserDetails = async () => {
    const values = {
      userName: userName,
      usercity: usercity,
      userMobile: userMobile,
    };
    let result = await fetch("http://localhost:3300/addUserDetails", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    result = await result.json();
    alert(result.message);
    getUserDetails();
  };
  const updateUserDetails = async () => {
    const values = {
      userName: userName,
      usercity: usercity,
      userMobile: userMobile,
      _id: updateId,
    };
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    let result = await fetch("http://localhost:3300/updateUserDetails", {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(values),
    });
    result = await result.json();
    alert(result.message);
    getUserDetails();
  };
  const deleteUserDetails = async (data) => {
    const values = {
      _id: data._id,
    };
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    let result = await fetch("http://localhost:3300/deleteUserDetails", {
      method: "delete",
      headers: headers,
      body: JSON.stringify(values),
    });
    result = await result.json();
    alert(result.message);
    getUserDetails();
  };

  const nameChangeFun = (e) => {
    setUserNmae(e.target.value);
  };
  const CityChangeFun = (e) => {
    setUserCity(e.target.value);
  };
  const MobileChangeFun = (e) => {
    setUserMobile(e.target.value);
  };

  // const SubmitDetail = () => {
  //   const values = {
  //     userName: userName,
  //     usercity: usercity,
  //     userMobile: userMobile,
  //   };
  //   setStudentData([...studentData, values]);
  //   setUserNmae("");
  //   setUserCity("");
  //   setUserMobile("");
  // };

  // const deleteFun = (value) => {
  //   console.log("i am delete fun", value);
  //   let arr = studentData;
  //   let ind = arr.indexOf(value);
  //   arr.splice(ind, 1);
  //   console.log(ind);
  //   setStudentData([...arr]);
  // };

  const Editbtnfun = (Data) => {
    console.log(Data);
    let array = studentData;
    //console.log(indexUpdate , Data)
    const ind = array.indexOf(Data);
    // console.log(ind)
    setUpdateId(Data._id);
    setUserNmae(Data.userName);
    setUserCity(Data.usercity);
    setUserMobile(Data.userMobile);
  };

  return (
    <div>
      <div>
        <h3 style={{ color: "green", textAlign: "center" }}>
          Please add Your Details Here
        </h3>
      </div>
      <div className="container" style={{ textAlign: "center" }}></div>

      <div style={{ width: "30%", margin: "auto" }}>
        <form>
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              value={userName}
              onChange={(e) => nameChangeFun(e)}
            />
          </div>
          <div class="form-group">
            <label for="city">City:</label>
            <input
              type="text"
              class="form-control"
              id="city"
              value={usercity}
              onChange={(e) => CityChangeFun(e)}
            />
          </div>

          <div class="form-group">
            <label for="Number">Number:</label>
            <input
              type="text"
              class="form-control"
              id="Number"
              value={userMobile}
              onChange={(e) => MobileChangeFun(e)}
            />
          </div>

          <button
            type="button"
            class="btn btn-primary mt-3"
            style={{ textAlign: "center", marginLeft: "20%" }}
            onClick={saveUserDetails}
          >
            Submit
          </button>
          <button
            type="button"
            class="btn btn-primary mt-3"
            style={{ marginLeft: "10%" }}
            onClick={updateUserDetails}
          >
            Update
          </button>
        </form>
      </div>
      <div>
        {studentData.map((data) => (
          <div className="container">
            <h3>Name :{data.userName} </h3>
            <h4>City : {data.usercity}</h4>
            <h4>Mobile Number : {data.userMobile}</h4>
            <button type="button" onClick={() => deleteUserDetails(data)}>
              Delete
            </button>
            <button type="button" onClick={() => Editbtnfun(data)}>
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
