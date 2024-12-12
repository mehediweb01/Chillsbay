/* eslint-disable react/prop-types */
import NavbarArea from "../shared/Navbar";
import Footer from "../shared/Footer";
import { themeColor } from './../../lib/utils';

const Warper = ({ isDark, children }) => {
  return (
    <div className={themeColor(isDark)}>
      <NavbarArea isDark={isDark} />
      {children}
      <Footer isDark={isDark} />
    </div>
  );
};

export default Warper;
