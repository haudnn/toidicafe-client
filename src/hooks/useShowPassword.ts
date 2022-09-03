import {useState} from "react"

const useShowPassword = () => {
    const [isShow, setIsShow] = useState<Boolean>(false)
    const handleShow = () => {
        setIsShow(prev => !prev)
    }
    return { isShow, handleShow}

}
export default useShowPassword