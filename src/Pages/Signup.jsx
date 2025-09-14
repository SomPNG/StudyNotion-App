import React from 'react'
import Template from '../Components/Template'
import SignupImg from '../assets/signup.png'

const Signup = ({setIsLog}) => {
  const pageData = {title:"Join the millions learning to code with StudyNotion for free",desc1:"Build skills for today, tomorrow, and beyond.",
                    desc2:"Education to future-proof your career.",formType:"signup"};
  return (
    <div className='max-h-[12000px] bg-gray-900 '>
      <Template setIsLog={setIsLog} title={pageData.title} desc1={pageData.desc1} desc2={pageData.desc2} formType={pageData.formType} image={SignupImg} />
    </div>
  )
}

export default Signup