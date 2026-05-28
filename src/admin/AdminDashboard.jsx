 
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import {
  getAllDoctorsApi,
  getAlluserApi,
  rejectadoctor,
  approveDoctorApi
} from "../services/allApi";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
} from "flowbite-react";

import { updateAdminProfile } from "../services/allApi";
const data = [
  { name: "Jan", users: 40, doctors: 24 },
  { name: "Feb", users: 30, doctors: 13 },
  { name: "Mar", users: 20, doctors: 98 },
  { name: "Apr", users: 27, doctors: 39 },
  { name: "May", users: 18, doctors: 48 },
  { name: "Jun", users: 23, doctors: 38 },
];

function AdminDashboard() {

  const [active, setActive] = useState("dashboard");

  const [users, setUsers] = useState([]);
  const [therapists, setTherapists] = useState([]);
const [openModal, setOpenModal] = useState(false);

const [formData, setFormData] = useState({
  username: "",
  email: "",
  password: "",
  profile: null,
});
  // get users
  const getallUsers = async () => {

    const token = sessionStorage.getItem("token");

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {

      const response = await getAlluserApi(reqHeader);

      console.log(response);

      setUsers(response?.data?.allUsers);

    } catch (error) {
      console.log(error);
    }
  };

  // get doctors
  const getAllDoctors = async () => {

    const token = sessionStorage.getItem("token");

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {

      const response = await getAllDoctorsApi(reqHeader);

      console.log(response.data);

      setTherapists(response?.data?.viewDoctor);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    getallUsers();
    getAllDoctors();

  }, []);
const handledelete=async(id)=>{
  const token=sessionStorage.getItem("token");
  const reqHeader={
    Authorization:`Bearer ${token}`,
  }
  try {
    const response=await rejectadoctor(id,reqHeader)
    console.log(response);
    alert("Doctor deleted successfully")
    getAllDoctors()
  } catch (error) {
    console.log(error);
    
  }
}
useEffect(()=>{
  getAllDoctors();
  getallUsers()
},[])
const handleApprove = async (id) => {

  const token = sessionStorage.getItem("token");

  const reqHeader = {
    Authorization: `Bearer ${token}`,
  };

  try {

    const response =
      await approveDoctorApi(id, reqHeader);

    console.log(response);

    alert("Doctor Approved");

    getAllDoctors();

  } catch (error) {

    console.log(error);

  }
};
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleFileChange = (e) => {
  setFormData({
    ...formData,
    profile: e.target.files[0],
  });
};

const handleSubmit = async () => {

  const id = sessionStorage.getItem("adminId");

  const token = sessionStorage.getItem("token");

  const reqHeader = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  };

  const data = new FormData();

  data.append("username", formData.username);
  data.append("email", formData.email);
  data.append("password", formData.password);
  data.append("profile", formData.profile);

  try {

    const response = await updateAdminProfile(
      id,
      data,
      reqHeader
    );

    console.log(response);

    alert("Admin profile updated successfully");

    setOpenModal(false);

  } catch (error) {

    console.log(error);

  }
};
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-[#abbde4] text-dark p-5">

      

        <ul className="space-y-6 text-lg">

          <li
            onClick={() => setActive("dashboard")}
            className={`cursor-pointer hover:text-cyan-800 ${
              active === "dashboard" && "text-cyan-900"
            }`}
          >
            Dashboard
          </li>

          <li
            onClick={() => setActive("users")}
            className={`cursor-pointer hover:text-cyan-400 ${
              active === "users" && "text-cyan-400"
            }`}
          >
           👤 Users
          </li>

          <li
            onClick={() => setActive("doctors")}
            className={`cursor-pointer hover:text-cyan-400 ${
              active === "doctors" && "text-cyan-400"
            }`}
          >
            👨‍⚕️Therapists
          </li>
<li
  onClick={() => setOpenModal(true)}
  className="cursor-pointer hover:text-cyan-400"
>
  ⚙️ Admin Settings
</li>
        </ul>
      </div>

      {/* Main */}
      <div className="flex-1 p-8">
        <marquee behavior="" direction="">
<h1 className="text-3xl font-bold text-[#2c2b38] mb-6 text-center">
          Welcome Admin Her's the overview 
        </h1>
        </marquee>
        {/* DASHBOARD */}
        {active === "dashboard" && (
          <>

            {/* Top cards */}
            <div className="grid grid-cols-4 gap-6 mb-8">

              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-gray-500">
                  Total Users
                </h2>

                <h1 className="text-3xl font-bold mt-2">
                  {users?.length}
                </h1>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-gray-500">
                  Doctors
                </h2>

                <h1 className="text-3xl font-bold mt-2">
                  {therapists?.length}
                </h1>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-gray-500">
                  Bookings
                </h2>

                <h1 className="text-3xl font-bold mt-2">
                  860
                </h1>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-gray-500">
                  Revenue
                </h2>

                <h1 className="text-3xl font-bold mt-2">
                  $12K
                </h1>
              </div>

            </div>

            {/* Charts */}
            <div className="grid grid-cols-3 gap-6">

              {/* Line chart */}
              <div className="col-span-2 bg-white p-6 rounded-2xl shadow-md">

                <h2 className="text-xl font-bold mb-4">
                  Analytics
                </h2>

                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#4f46e5"
                      strokeWidth={3}
                    />

                    <Line
                      type="monotone"
                      dataKey="doctors"
                      stroke="#06b6d4"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>

              </div>

              {/* Bar chart */}
              <div className="bg-white p-6 rounded-2xl shadow-md">

                <h2 className="text-xl font-bold mb-4">
                  Weekly Report
                </h2>

                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />

                    <Bar
                      dataKey="users"
                      fill="#6366f1"
                      radius={[10, 10, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>

              </div>

            </div>
          </>
        )}

        {/* USERS */}
       {active === "users" && (

  <div>

    {/* Top section */}
    <div className="flex justify-between items-center mb-6">

      <h1 className="text-3xl font-bold">
        Users
      </h1>

      {/* <button
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-xl"
      >
        + Add User
      </button> */}

    </div>

    {/* Users Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {users?.length > 0 ? (

        users.map((item, index) => (

          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >

            {/* Avatar */}
           

            {/* Details */}
            <div className="text-center mt-4">

              <h2 className="text-2xl font-bold">
                {item.username}
              </h2>

              <p className="text-gray-500 mt-2">
                {item.email}
              </p>

            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">

              <button
                className="bg-cyan-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
              >
                Approve
              </button>

              <button
  onClick={() => handledelete(item._id)}
  className="bg-amber-900 hover:bg-red-700 text-white px-4 py-2 rounded-lg w-full"
>
  Reject
</button>

            </div>

          </div>
        ))

      ) : (
        <p>No Users Found</p>
      )}

    </div>

  </div>
)}

        {/* DOCTORS */}
       {active === "doctors" && (

  <div>

    {/* Top button */}
    <div className="flex justify-between items-center mb-6">

      <h1 className="text-3xl font-bold">
        Doctors
      </h1>

      {/* <button
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-xl"
      >
        + Add Doctor
      </button> */}

    </div>

    {/* Doctors grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {therapists?.length > 0 ? (

        therapists.map((item, index) => (

          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md"
          >

            <img
              src={item.profile}
              alt=""
              className="w-full h-52 object-cover rounded-xl"
            />

            <h2 className="text-2xl font-bold mt-4">
              {item.name}
            </h2>

            <p className="text-gray-500">
              {item.specialization}
            </p>

            <p className="text-cyan-500 mt-2">
              {item.status}
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mt-5">

              <button
  onClick={() => handleApprove(item._id)}
  className="bg-cyan-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
>
  Approve
</button>

                <button
  onClick={() => handledelete(item._id)}
  className="bg-amber-900 hover:bg-red-700 text-white px-4 py-2 rounded-lg w-full"
>
  Reject
</button>

            </div>

          </div>
        ))

      ) : (
        <p>No Doctors Found</p>
      )}

    </div>

  </div>
)}

     
      </div>
      <Modal
  show={openModal}
  onClose={() => setOpenModal(false)}
>

  <ModalHeader>
    Edit Admin Profile
  </ModalHeader>

  <ModalBody>

    <div className="space-y-4">

      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        type="file"
        onChange={handleFileChange}
        className="w-full border p-2 rounded"
      />

    </div>

  </ModalBody>

  <ModalFooter>

    <Button
      color="gray"
      onClick={() => setOpenModal(false)}
    >
      Cancel
    </Button>

    <Button onClick={handleSubmit}>
      Save Changes
    </Button>

  </ModalFooter>

</Modal>
    </div>
  );
}

export default AdminDashboard;