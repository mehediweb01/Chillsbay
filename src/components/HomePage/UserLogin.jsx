import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { LuUser2 } from "react-icons/lu";

const UserLogin = () => {
  return (
    <div>
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
    </div>
  );
};

export default UserLogin;
