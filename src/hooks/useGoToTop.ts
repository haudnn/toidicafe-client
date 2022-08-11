import {useState, useEffect} from "react";

const useGoToTop = () => {
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
      if (pageY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, []);
  return {visible, scrollToTop}
};
export default useGoToTop

