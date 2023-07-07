import { useContext } from "react"
import DefaultContext from "../context/DefaultProvider"


const useDefault = () => {
  return useContext(DefaultContext)
}

export default useDefault