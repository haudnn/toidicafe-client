import {useState, useEffect} from "react";

const useOnScroll = (position: number) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleShow = () => {
      let pageY = window.pageYOffset ;
      if (pageY > position) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, [position]);
  return visible
};
export default useOnScroll
