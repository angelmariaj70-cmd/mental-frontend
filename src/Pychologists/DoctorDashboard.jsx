import React, { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
} from "react-icons/hi";
import { PieChart } from "@mui/x-charts/PieChart";
import { getAllBookingsApi } from "../services/allApi";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "flowbite-react";
import { updateDoctorProfileApi, viewAllDoctors } from "../services/allApi";
import Footers from "../user/components/Footers";
function DoctorDashboard() {
  const [patients, setPatients] = useState([]);
  const [openModal, setOpenModal] = useState(false);
const [doctorId, setDoctorId] = useState("");

const [formData, setFormData] = useState({
  name: "",
  specialization: "",
  experience: "",
  about: "",
  profile: null,
});
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
 const id = doctorId;

if (!id) {
    alert("Doctor ID missing ");
    return;
  }
// sessionStorage.setItem("doctorId", item._id)
  const token = sessionStorage.getItem("token");

  const reqHeader = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  };

  const data = new FormData();

  data.append("name", formData.name);
  data.append("specialization", formData.specialization);
  data.append("experience", formData.experience);
  data.append("about", formData.about);
  data.append("profile", formData.profile);

  try {
    await updateDoctorProfileApi(id, data, reqHeader);
    alert("Profile Updated ✅");
    setOpenModal(false);
  } catch (err) {
    console.log(err);
  }
};
  const navigate = useNavigate();

  const fetchPatients = async () => {
    const token = sessionStorage.getItem("token");

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const res = await getAllBookingsApi(reqHeader);
      setPatients(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPatients();
    fetchDoctor();
  }, []);
const fetchDoctor = async () => {
  const token = sessionStorage.getItem("token");

  const reqHeader = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const res = await viewAllDoctors(reqHeader);
    const doc = res.data.viewDoctor[0]; // temp
    setDoctorId(doc._id);
  } catch (err) {
    console.log(err);
  }
};
  return (
    <div className="flex w-screen min-h-screen bg-gray-200">

      {/* Sidebar */}
      <div className="w-64">
        <Sidebar className="bg-gray-200">
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem icon={HiChartPie}>Dashboard</SidebarItem>
              <SidebarItem icon={HiInbox}>Appointments</SidebarItem>
              <SidebarItem icon={HiUser}>Patients</SidebarItem>
              <SidebarItem icon={HiShoppingBag}>Reports</SidebarItem>
              <SidebarItem icon={HiArrowSmRight}>Logout</SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        <h1 className="text-3xl font-bold text-[#2c2b38] mb-6 text-center">
          Welcome Doctor 👨‍⚕️
        </h1>
<button
  onClick={() => setOpenModal(true)}
  className="bg-indigo-600 text-white px-4 py-2 rounded mb-4"
>
  Edit Profile
</button>
        {/* Cards */}
        <div className="flex gap-6 mb-10">
          <div className="w-1/3 bg-indigo-400 p-4 rounded-lg shadow text-center">
            <h2 className="text-xl font-bold">Total Patients</h2>
            <p className="text-2xl mt-2">{patients.length}</p>
          </div>

          <div className="w-1/3 bg-indigo-400 p-4 rounded-lg shadow text-center">
            <h2 className="text-xl font-bold">Appointments</h2>
            <p className="text-2xl mt-2">{patients.length}</p>
          </div>

          <div className="w-1/3 bg-indigo-400 p-4 rounded-lg shadow text-center">
            <h2 className="text-xl font-bold">Pending</h2>
            <p className="text-2xl mt-2">
              {patients.filter(p => p.status !== "Booked").length}
            </p>
          </div>
        </div>

        {/* Table + Chart */}
        <div className="flex gap-6">

          {/* Table */}
          <div className="w-[70%] bg-white p-4 rounded-lg shadow">
            <Table striped>
              <TableHead>
                
                <TableHeadCell>Patient email</TableHeadCell>
                <TableHeadCell>Status</TableHeadCell>
                <TableHeadCell>Chat</TableHeadCell>
              </TableHead>

              <TableBody className="divide-y">
                {patients.length > 0 ? (
                  patients.map((item, index) => (
                    <TableRow key={index}>
                      {/* <TableCell className="font-medium">
                        {item.name}
                      </TableCell> */}

                      <TableCell>{item.brought}</TableCell>

                      <TableCell>
                        {item.status === "Booked" ? (
                          <Button color="success">Approved</Button>
                        ) : (
                          <Button color="failure">Pending</Button>
                        )}
                      </TableCell>

                      {/* 🔥 CHAT BUTTON */}
                      <TableCell>
                        <Button
                          onClick={() =>
                            navigate(`/chat?role=doctor&room=${item._id}`)
                          }
                          className="bg-indigo-500"
                        >
                          Chat
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4}>No Data</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

         
          <div className="w-[30%] bg-white p-4 rounded-lg shadow flex justify-center items-center">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: patients.length, label: "Patients" },
                    {
                      id: 1,
                      value: patients.filter(p => p.status === "Booked").length,
                      label: "Approved",
                    },
                    {
                      id: 2,
                      value: patients.filter(p => p.status !== "Booked").length,
                      label: "Pending",
                    },
                  ],
                },
              ]}
              width={250}
              height={250}
            />
          </div>

        </div>
<Footers/>
      </div>
    <Modal show={openModal} onClose={() => setOpenModal(false)} size="md">
  <ModalHeader className="text-indigo-700 font-bold">
    Edit Profile
  </ModalHeader>

  <ModalBody>
    <div className="space-y-4">

      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter name"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Specialization
        </label>
        <input
          type="text"
          name="specialization"
          onChange={handleChange}
          placeholder="Enter specialization"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Experience
        </label>
        <input
          type="text"
          name="experience"
          onChange={handleChange}
          placeholder="Years of experience"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">
          About
        </label>
        <textarea
          name="about"
          onChange={handleChange}
          placeholder="Write something..."
          rows={4}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Profile Image
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

    </div>
  </ModalBody>

  <ModalFooter className="flex justify-end gap-3">
    <Button
      color="gray"
      onClick={() => setOpenModal(false)}
    >
      Cancel
    </Button>

    <Button
      onClick={handleSubmit}
      className="bg-indigo-600 hover:bg-indigo-700"
    >
      Save Changes
    </Button>
  </ModalFooter>
</Modal>
    </div>
  );
}

export default DoctorDashboard;