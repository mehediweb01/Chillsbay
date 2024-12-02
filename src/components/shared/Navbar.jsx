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
import { LuUser2 } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
const NavbarArea = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <Navbar onMenuOpenChange={setIsOpen} className="w-full">
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
              <NavLink to="/Eat" className="font-[500] text-[18px] leading-5">
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
              <Badge content="3" placement="top-left" color="primary">
                <MdOutlineShoppingCart className="size-6" />
              </Badge>
            </NavbarItem>
            <NavbarItem>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="none"
                    size="sm"
                    className="text-black font-[500] text-[18px] leading-5"
                  >
                    <LuUser2 /> Account
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem>My Profile</DropdownItem>
                  <DropdownItem>My History</DropdownItem>
                  <DropdownItem>Sign out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
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
            <NavLink to="/Eat" className="font-[500] text-[18px] leading-5">
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
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="none"
                  size="sm"
                  className="text-black font-[500] text-[18px] leading-5 -left-3"
                >
                  <LuUser2 /> Account
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>My Profile</DropdownItem>
                <DropdownItem>My History</DropdownItem>
                <DropdownItem>Sign out</DropdownItem>
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
    </section>
  );
};

export default NavbarArea;
