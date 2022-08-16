import {useState} from "react";

const useToggle = () => {
    const [isToggle, setIsToggle] = useState<Boolean>(false)
    const handleToggle = () => {
        setIsToggle(prev => !prev)
    }
    return {isToggle,handleToggle}
}
export default useToggle