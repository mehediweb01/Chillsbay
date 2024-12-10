/* eslint-disable react/prop-types */
import { useState } from "react";
import PayModal from "./PayModal";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Button } from "@nextui-org/react";

const PaymentPage = ({cartItem, setCartItem}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [cartItem, setCartItem] = useState([
  //   {
  //     id: 1,
  //     image: "/productImage1.png",
  //     title: "The 90s with Dj Neptune",
  //     price: 4500000,
  //     quantity: 1,
  //     date: "Dec 12 2024",
  //     location: "Quilox Club",
  //     time: "9:00 PM ",
  //   },
  //   {
  //     id: 2,
  //     image: "/productImage2.png",
  //     title: "Water Sports at Ikoyi Bay ",
  //     price: 9000000,
  //     quantity: 1,
  //     date: "Dec 12 2024",
  //     location: "Quilox Club",
  //     time: "10:00 PM ",
  //   },
  // ]);
  // update quantity
  const updateQuantity = (id, increment) => {
    setCartItem((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(item.quantity + increment, 1),
              price:
                Math.max(item.quantity + increment, 1) *
                (item.price / item.quantity),
            }
          : item
      )
    );
  };
  // remove items
  const removeItem = (id) => {
    setCartItem((items) => items.filter((item) => item.id !== id));
  };
  // add items
  const addItems = () => {
    const newItem = {
      id: cartItem.length + 1,
      image: "/productImage1.png",
      title: "The 90s with Dj Neptune",
      price: 3000,
      quantity: 1,
      date: "Dec 12 2024",
      location: "Quilox Club",
      time: "1:00 PM ",
    };
    setCartItem([...cartItem, newItem]);
  };

  return (
    <section className="w-[85%] mx-auto my-6 sm:my-12 border border-[#F5FAFF]">
      <h5 className="text-gray-400 font-RedHotDisplay text-sm ">Your cart</h5>
      <div className="flex md:flex-row flex-col justify-between items-start">
        {/* left section */}
        <div className="flex-1 p-3 sm:p-6 space-y-3 mb-3">
          {cartItem.map((item) => (
            <div key={item.id}>
              <div className="flex gap-3">
                <img src={item.image} alt="" className="w-24 h-24 rounded-md" />
                <div className="flex flex-col gap-1">
                  <div className="flex gap-8">
                    <h3 className="font-RedHotDisplay font-bold text-[#26395C] text-xl leading-7 -tracking-[1%]">
                      {item.title}
                    </h3>
                    <p>₦{item.price}</p>
                  </div>
                  <div className="flex gap-4">
                    <p className="flex gap-1 items-center ">
                      <img
                        src="./Calendar.png"
                        alt=""
                        className="size-[15px]"
                      />
                      {item.date}
                    </p>
                    <p className="flex gap-1 items-center">
                      <img src="./Mark.png" alt="" className="size-[15px]" />
                      {item.location}
                    </p>
                  </div>
                  <p className="flex gap-1 items-center">
                    <img src="/Clock.png" alt="" className="size-[15px]" />
                    {item.time}
                  </p>
                  {/* button */}
                  <div className="flex justify-center gap-3 bg-gray-200 rounded-md w-[30%]">
                    <button
                      className="font-RedHotDisplay font-bold text-base"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <p className="font-RedHotDisplay font-bold text-base sm:text-xl">
                      {item.quantity}
                    </p>
                    <button
                      className="font-RedHotDisplay font-bold text-base sm:text-xl"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button type="button" onClick={() => removeItem(item.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#000"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          <div>
            <Button
              variant="solid"
              color="primary"
              size="md"
              onClick={addItems}
            >
              Add New Item
            </Button>
          </div>
        </div>
        {/* right section */}
        <div className="flex-1 p-6 border-s-1 border-slate-200 space-y-3">
          <div>
            <div>
              <div className="flex items-center gap-1">
                <RiCheckboxCircleFill className="text-blue-500" />
                <p className="text-[#26395C] font-RedHotDisplay font-bold text-xl -tracking-[1%]">
                  Account information
                </p>
              </div>
              <div className="ms-5">
                <p className="text-[#26395C] font-RedHotDisplay text-sm leading-[27px] -tracking-[1%]">
                  Tunde Chukwu
                </p>
                <p className="text-[#26395C] font-RedHotDisplay text-sm leading-[27px] -tracking-[1%]">
                  tundechukwu12@gmail.com
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <RiCheckboxCircleFill className="text-blue-500" />
                <p className="text-[#26395C] font-RedHotDisplay font-bold text-xl -tracking-[1%]">
                  phone Number
                </p>
              </div>
              <div className="ms-5">
                <p className="text-[#26395C] font-RedHotDisplay text-sm leading-[27px] -tracking-[1%]">
                  +2341123465799
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <RiCheckboxCircleFill className="text-blue-500" />
                <p
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-1 hover:cursor-pointer text-[#26395C] font-RedHotDisplay font-bold text-xl -tracking-[1%]"
                >
                  Payment <span className="text-gray-400">card</span>
                  <RiArrowDropDownLine
                    className={
                      isOpen
                        ? "size-[35px] rotate-360 transition-all duration-300"
                        : "size-[35px] rotate-90 transition-all duration-300"
                    }
                  />
                </p>
              </div>
              {/* dropdown */}
              <div>
                {isOpen && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                    <input
                      type="number"
                      placeholder="Card Number"
                      className="w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Card Holder Name"
                      className="w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="date"
                      placeholder="MM/YY"
                      className="w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                )}
              </div>
              {/* dropdown end */}
              <div className="ms-5">
                <p className="text-[#26395C] font-RedHotDisplay text-sm leading-[27px] -tracking-[1%]">
                  1111 2222 3333 4444
                </p>
                <p className="text-[#26395C] font-RedHotDisplay text-sm leading-[27px] -tracking-[1%]">
                  10/20
                </p>
              </div>
            </div>
          </div>
          {/* tax & amount */}
          <div>
            <p className="flex justify-between border-t border-gray-200 mt-3">
              subTotal
              <span>
                ₦
                {cartItem
                  .reduce((sum, item) => sum + item.price, 0)
                  .toLocaleString()}
              </span>
            </p>
            <p className="flex justify-between border-t border-gray-200 mt-3">
              Tax
              <span>
                ₦
                {cartItem.reduce((sum, item) => sum + item.price, 0) *
                  (0.05).toLocaleString()}
              </span>
            </p>
            <p className="flex justify-between border-t border-gray-200 mt-3">
              Total amount
              <span>
                ₦
                {cartItem.reduce((sum, item) => sum + item.price, 0) *
                  (1.05).toLocaleString()}
              </span>
            </p>
          </div>
          <PayModal />
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
