
import React, { useRef } from 'react'
import { SocialIcon } from 'react-social-icons'
import SimpleFooter from './Footer'
import Footer from './Footer'
import gif from '../assets/3d-casual-life-woman-in-online-meeting-with-graphic-tablet.png'


const Contact = () => {

  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    /* 
    Do something here !
    */
  }

  return (
    <div className="hidden relative mx-auto  w-full max-w-7xl bg-white text-gray-700 sm:flex">
      <div className="grid grid-cols-2">
        
       



       



        

      </div>
     
    </div>
  )
}

export default Contact
