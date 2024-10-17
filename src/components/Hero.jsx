/* eslint-disable react/prop-types */

const Hero = ({ 
    message = 'Welcome, What are you looking for ?', 
    bg = 'bg-amber-400' }) => {
  return (
    <>
        <div className={`${bg} my-2 p-5 text-center text-white font-bold text-2xl`}>
            <h1>{ message }</h1>
        </div>
    </> 
  )
}

export default Hero