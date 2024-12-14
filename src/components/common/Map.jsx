/* eslint-disable react/prop-types */
import { cn } from "@nextui-org/theme";

const MyMap = ({isDark}) => {
  return (
    <section className={cn("w-[85%] mx-auto bg-[#F5FAFF] p-0 sm:p-8 border border-slate-100", isDark && "bg-black border-slate-800")}>
      <img src="/map.png" alt="" />
    </section>
  );
};

export default MyMap;
