import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

const useCardAnimation = () => {
  return useEffect(() => {
  AOS.init({ duration: 500 })
}, [])
}


export default useCardAnimation