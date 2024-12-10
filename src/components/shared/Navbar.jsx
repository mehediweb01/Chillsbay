/* eslint-disable react/prop-types */
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Badge,
} from "@nextui-org/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import SignUpForm from "../HomePage/SignUpForm";
import UserLogin from "../HomePage/UserLogin";
const NavbarArea = ({ cartItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = true;
  return (
    <section>
      <Navbar onMenuOpenChange={setIsOpen} maxWidth="xl">
        {/* desktop device */}
        <NavbarContent className="hidden sm:flex">
          <NavbarContent>
            <NavbarBrand className="float-start">
              <NavLink to="/">
                <img src="/logo.png" className="w-44" alt="" />
              </NavLink>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent>
            <NavbarItem>
              <NavLink to="/drink" className="font-[500] text-[18px] leading-5">
                Eat & Drink
              </NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink to="/club" className="font-[500] text-[18px] leading-5">
                Club
                <sup className="bg-[#0E8BFF] px-2 py-[1px] rounded-full text-[8px] text-white font-bold tracking-tight">
                  +HOT
                </sup>
              </NavLink>
            </NavbarItem>
            <NavbarItem>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="none"
                    size="sm"
                    className="text-black font-[500] text-[18px] leading-5"
                  >
                    Things to do <RiArrowDropDownLine className="size-6" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem>New file</DropdownItem>
                  <DropdownItem>Copy link</DropdownItem>
                  <DropdownItem>Edit file</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
            <NavbarItem>
              <NavLink to="/payment">
                <Badge
                  content={cartItem
                    .reduce((total, item) => total + item.quantity, 0)
                    .toLocaleString()}
                  placement="top-left"
                  color="primary"
                >
                  <MdOutlineShoppingCart className="size-6" />
                </Badge>
              </NavLink>
            </NavbarItem>
            <NavbarItem>
              {value === true ? <SignUpForm /> : <UserLogin />}
            </NavbarItem>
            <NavbarItem>
              <Button variant="solid" color="primary" size="md">
                <NavLink
                  to="/contact"
                  className="font-[500] text-[18px] leading-5"
                >
                  Contact us
                </NavLink>
              </Button>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>
        {/* mobile menu  */}
        <NavbarContent className="sm:hidden">
          <NavbarBrand className="float-start">
            <NavLink to="/">
              <img src="/logo.png" alt="" className="w-36" />
            </NavLink>
          </NavbarBrand>
          <NavbarContent justify="center">
            <Badge content="3" placement="top-left" color="primary">
              <MdOutlineShoppingCart className="size-6" />
            </Badge>
          </NavbarContent>
          <NavbarMenuToggle
            aria-level={isOpen ? "Close menu" : "Open menu"}
            className="float-end"
          />
        </NavbarContent>
        {/* menu list */}
        <NavbarMenu className="bg-[#FBFCFF]">
          <NavbarMenuItem>
            <NavLink to="/drink" className="font-[500] text-[18px] leading-5">
              Eat & Drink
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavLink to="/club" className="font-[500] text-[18px] leading-5">
              Club
              <sup className="bg-[#0E8BFF] px-2 py-1 rounded-full text-[8px] text-white font-bold tracking-tight">
                +HOT
              </sup>
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="none"
                  size="sm"
                  className="text-black font-[500] text-[18px] leading-5 -left-3"
                >
                  Things to do <RiArrowDropDownLine />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>New file</DropdownItem>
                <DropdownItem>Copy link</DropdownItem>
                <DropdownItem>Edit file</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button variant="solid" color="primary" size="md" type="button">
              <NavLink
                to="/contact"
                className="font-[500] text-[18px] leading-5"
              >
                Contact us
              </NavLink>
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
      {/* login form */}
      <div className="sm:hidden flex items-center justify-center w-[90%] mx-auto my-3 bg-blue-400 rounded-full">
        {value === true ? <SignUpForm /> : <UserLogin />}
      </div>
    </section>
  );
};

export default NavbarArea;
