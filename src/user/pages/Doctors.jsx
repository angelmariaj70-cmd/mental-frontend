
import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'flowbite-react'
import { Link } from 'react-router-dom';
import { viewAllDoctors } from '../../services/allApi';
import Button from '@mui/material/Button';
import { searchContext } from '../../context/ContextShare';
function Doctors() {
const {searchKey,setSearchKey}=useContext(searchContext)
console.log(searchKey);

  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState("");
 const handleSearch = () => {

  const result = doctors.filter((item) =>
    item.name.toLowerCase().includes(searchKey.toLowerCase())
  )

  setDoctors(result)
}
 
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 4;

  const fetchDoctors = async (token) => {
    try {

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const response = await viewAllDoctors(reqHeader);

      setDoctors(response.data.viewDoctor);

      console.log(response);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    const storedToken = sessionStorage.getItem("token");

    setToken(storedToken);

    if (storedToken) {
      fetchDoctors(storedToken);
    }

  }, []);

  // pagination logic
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;

  const currentDoctors = doctors.slice(
    indexOfFirstDoctor,
    indexOfLastDoctor
  );

  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

 return (

  <div className="min-h-screen bg-gray-200">

    <div className='flex gap-5 p-5'>

    

      

     

      <div className='flex-1'>

     

        <div className='flex justify-center items-center gap-2 pt-5 mb-5'>

         <input
  type="text"
  placeholder='Search doctor'
  value={searchKey}
  onChange={(e)=>setSearchKey(e.target.value)}
  className='w-[90%] md:w-[40%] p-3 rounded border border-gray-400 outline-none'
/>

          <Button variant="" onClick={handleSearch}>
  🔍
</Button>

        </div>

       

        <div className='flex gap-2 flex-wrap justify-center'>

          {currentDoctors?.length > 0 ? (

            currentDoctors.map((item, index) => (

              <Link to={`/view/${item._id}`} key={index}>

                <Card
                  className="max-w-sm m-5"
                  renderImage={() => (
                    <img
                      width={500}
                      height={500}
                      src={
                        item.profile ||
                        "https://t4.ftcdn.net/jpg/00/85/59/79/360_F_85597904_zbgRci3EYH8ufGk2gdtabD0yxACB3eQt.jpg"
                      }
                      alt="doctor"
                    />
                  )}
                >

                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>

                  <p className='font-bold'>{item.specialization}</p>

                </Card>

              </Link>

            ))

          ) : (
            <p>No doctors found</p>
          )}

        </div>

        {/* PAGINATION */}

        <div className='flex justify-center gap-3 pb-5'>

          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className='bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400'
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded 
              ${currentPage === index + 1
                  ? "bg-green-500 text-white"
                  : "bg-white"
                }`}
            >
              {index + 1}
            </button>

          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className='bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400'
          >
            Next
          </button>

        </div>

      </div>

    </div>

  </div>
)
}

export default Doctors