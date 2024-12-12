import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";

const ContactPage = () => {
  return (
    <section className="w-[80%] mx-auto my-12 md:my-20 lg:my-24">
      <div className="flex flex-col sm:flex-row justify-between gap-3">
        {/* left side */}
        <div className="space-y-4">
          <h1 className="text-[#26395C] font-PlusJakartaSans font-bold text-3xl sm:text-[42px]  leading-10s m:leading-[54px]">
            Contact Us
          </h1>
          <p className="max-w-md text-[#656B89] font-RedHotDisplay text-base tracking-[1%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nunc,
            quisque ultricies netus elit massa aliquam quis cras. Enim leo, in
            massa sapien facilisi netu.
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-3 text-[#26395C] text-base leading-4 -tracking-[2%]">
              <img src="/call.png" alt="" />
              <span>(840) 371 - 2514</span>
            </p>
            <p className="flex items-center gap-3 text-[#26395C] text-base leading-4 -tracking-[2%]">
              <img src="/message.png" alt="" />
              <span>chills@chillsbay.com</span>
            </p>
          </div>
        </div>
        {/* right side */}
        <div>
          <form className="space-y-6 bg-[#E4E7EC]/25 p-4 rounded-md">
            <div className="flex flex-col md:flex-row gap-8">
              <Input
                isRequired
                className="w-full "
                placeholder="First Name"
                label="First Name"
                labelPlacement="outside"
                type="text"
              />
              <Input
                isRequired
                className="w-full "
                placeholder="Last Name"
                label="Last Name"
                labelPlacement="outside"
                type="text"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <Input
                isRequired
                className="w-full "
                placeholder="mehedi@gmail.com"
                label="Email"
                labelPlacement="outside"
                type="email"
              />
              <Input
                isRequired
                className="w-full"
                placeholder="+880xxxxxxxx"
                label="Phone Number"
                labelPlacement="outside"
                type="number"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <Select
                isRequired
                className="w-full"
                label="Subject"
                labelPlacement="outside"
                placeholder="Select Option"
              >
                <SelectItem value="item 1">item 1</SelectItem>
              </Select>
            </div>
            <div>
              <Textarea
                isRequired
                label="Description"
                labelPlacement="outside"
                placeholder="Enter your description"
              />
              <Button color="primary" className="w-full mb-4 mt-5" radius="sm">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
      
    </section>
  );
};

export default ContactPage;
