import { Button } from "@nextui-org/react";

const FooterDetails = {
  logo: "/logo.png",
  copyRight: "Copyright 2024 ©  ",
  socialMedia: [
    { icon: "/facebook.png" },
    { icon: "/Twitter.png" },
    { icon: "/Instagram.png" },
    { icon: "/linkedI.png" },
    { icon: "/youtube.png" },
    { icon: "/tiktok.png" },
  ],
  title: "MENU",
  Menus: [
    { link: ["Home", "Eat", "Drink", "Events", "Clubs", "Recreation"] },
    { link: ["Blog", "Careers", "Contact", "FAQs"] },
  ],
  titles: "UTILITIES PAGE",
  UtilitiesPage: [
    {
      link: [
        "Start Here",
        "Pay with Crypto",
        "Style Guide",
        "Password Protected",
        "404 Not Found",
        "Licenses",
        "Changelog",
      ],
    },
  ],
  Partners: [
    {
      image: "/partnerLogo.png",
      title: "Become a Partner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere.",
    },
  ],
};
const Footer = () => {
  const {
    logo,
    socialMedia,
    copyRight,
    Menus,
    title,
    UtilitiesPage,
    Partners,
    titles,
  } = FooterDetails;
  return (
    <footer className="container lg:w-full w-[80%] mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* left side */}
        <div className="col-span-1">
          <img src={logo} alt="" />
          <p className="font-RedHotDisplay text-base leading-6">{copyRight}</p>
          <div className="flex items-center gap-3 mt-4">
            {socialMedia.map((social, index) => (
              <div key={index}>
                <img src={social.icon} alt="" />
              </div>
            ))}
          </div>
        </div>
        {/* right side */}
        <div className="col-span-1 md:col-span-3 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-bold font-RedHotDisplay text-base leading-4 tracking-[8%] text-[#26395C] mb-6 border-b border-b-slate-400">
                {title}
              </h2>
              <div className="flex gap-10 text-xl ">
                {Menus.map((menus, index) => (
                  <div key={index}>
                    <ul className="space-y-2">
                      {menus.link.map((link, index) => (
                        <li className="text-[#656B89]" key={index}>
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-bold font-RedHotDisplay text-base leading-4 tracking-[8%] text-[#26395C] mb-6 border-b border-b-slate-400">
                {titles}
              </h2>
              <div className="text-xl">
                {UtilitiesPage.map((page, index) => (
                  <ul key={index} className="space-y-2">
                    {page.link.map((link, index) => (
                      <li key={index} className="text-[#656B89]">
                        {link}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
            <div className=" mt-3 bg-[#F5FAFF] p-4 rounded-md">
              {Partners.map((partner, index) => (
                <div key={index} className="space-y-4">
                  <img src={partner.image} alt="" />
                  <div className="space-y-2">
                    <h4 className="text-[#26395C] font-bold font-RedHotDisplay text-[22px] leading-7 -tracking-[2%]">
                      {partner.title}
                    </h4>
                    <p className="text-[#656B89] text-base leading-7 tracking-[1%]">
                      {partner.description}
                    </p>
                  </div>
                  <Button
                    variant="solid"
                    size="lg"
                    color="primary"
                    className="font-bold text-[15px] leading-4 -tracking-[1%] font-RedHotDisplay text-white"
                    fullWidth
                  >
                    Join Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
