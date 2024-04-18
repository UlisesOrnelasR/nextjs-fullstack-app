import Navbar from "@/components/Navbar";
import "./globals.css";

const LandingLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default LandingLayout;
