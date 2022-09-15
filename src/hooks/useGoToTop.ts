import {useState, useEffect} from "react";

const useGoToTop = (possition:number) => {
  const [visible, setVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleShow = () => {
      let pageY = window.pageYOffset;
      if (pageY > possition) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, [possition]);
  return {visible, scrollToTop}
};
export default useGoToTop

