import React, {useState} from "react";
import useOnClickOutside from "./useClickOutSide";

const useToggle = () => {
    const [isToggle, setIsToggle] = useState<Boolean>(false)
    const ref = React.useRef<HTMLDivElement | null>(null);
    useOnClickOutside(ref, () => setIsToggle(false));
  
    const handleToggle = () => {
        setIsToggle(prev => !prev)
    }
    return {isToggle, handleToggle, ref}
}
export default useToggle