import React, { useEffect } from 'react'
import logo from "../../assets/logo.png"
import {
  Dropdown,
  Button,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom';

function Header() {

  const [token, setToken] = React.useState("")
  const [userDetails, setUserDetails] = React.useState({})

  const navigate = useNavigate()

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token")
    const storedUser = sessionStorage.getItem("existingUser")

    setToken(storedToken)

    if (storedUser) {
      setUserDetails(JSON.parse(storedUser))
    }
  }, [])   // ✅ FIXED (no loop)

  // ✅ Logout
  const handleLogout = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("existingUser")
    setToken("")
    setUserDetails({})
    navigate("/")
  }

  return (
    <div>
      <Navbar fluid rounded>

        <NavbarBrand href="#">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            WellMind
          </span>
        </NavbarBrand>

        <div className="flex md:order-2">

          {
            token ? (

              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <img
                    src={userDetails?.profile?.split("=")[0] + "=s400-c"}
                    referrerPolicy="no-referrer"
                    width="40"
                    style={{ borderRadius: "50%" }}
                  />
                }
              >
                <DropdownHeader>
                  <span className='block text-sm'>
                    {userDetails?.username}
                  </span>
                  <span className='block text-sm'>
                    {userDetails?.email}
                  </span>
                </DropdownHeader>

                <DropdownDivider />

                <DropdownItem onClick={handleLogout}>
                  Logout
                </DropdownItem>

              </Dropdown>

            ) : (

              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Button color="cyan" className='hover:bg-amber-600'>
                    Start now
                  </Button>
                }
              >
                <DropdownItem as={Link} to="/login">
                  Login
                </DropdownItem>

                <DropdownItem as={Link} to="/register">
                  Register
                </DropdownItem>
              </Dropdown>

            )
          }

          <NavbarToggle />
        </div>

      </Navbar>
    </div>
  )
}

export default Header