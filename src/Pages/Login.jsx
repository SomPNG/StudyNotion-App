import React from 'react'
import Template from '../Components/Template'
import LoginImg from '../assets/login.png'
const Login = ({setIsLog}) => {
  const pageData = {title:"Welcome Back",desc1:"Build skills for today, tomorrow, and beyond.",
                    desc2:"Education to future-proof your career.",formType:"login"};
  return (
    <div>
      <Template setIsLog={setIsLog} title={pageData.title} desc1={pageData.desc1} desc2={pageData.desc2} formType={pageData.formType} image={LoginImg} />
    </div>
  )
}

export default Login