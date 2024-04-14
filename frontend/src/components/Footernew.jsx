import React from "react";
import useFooterWindow from "./FooterWindow";
import AccordianFooter from "./Secondfooter";
import Footer from "./Footer";

const Footernew = () => {
  const { width, height } = useFooterWindow();
  return (
    <>
      {width > 750 ? (
        <>
        <Footer/>
        </>
      ) : (
        <>
         <AccordianFooter/>
        </>
      )}
    </>
  );
};

export default Footernew;