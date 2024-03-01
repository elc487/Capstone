import { useState } from 'react'
import './LandingPage.css'
const LandingPage =()=>{
    const [currentPhoto, setCurrentPhoto]=useState(0)
const data= [
// men 
'https://images.unsplash.com/photo-1677179659560-d61cd11c6413?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


// women 
,'https://images.unsplash.com/photo-1439158771502-46975f6e44e9?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

// fun 
,'https://images.unsplash.com/photo-1658801956904-43841e89d831?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

// jewelery 
,'https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

// electronics 
,'https://plus.unsplash.com/premium_photo-1684512989514-f0e4db5cc44d?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

const prevPhoto =() =>{
   setCurrentPhoto(currentPhoto === 0 ? 4: currentPhoto-1)
    }    

const nextPhoto =() =>{
    setCurrentPhoto(currentPhoto === 4 ? 0: currentPhoto+1)
}    

    return(
        <div className="landing">
            <div className="container"style={{transform:`translateX(-${currentPhoto * 100}vw)`}}>
                <img src={data[0]} alt=''/>
                <img src={data[1]} alt=''/>
                <img src={data[2]} alt=''/>
                <img src={data[3]} alt=''/>
                <img src={data[4]} alt=''/>
            </div>
            <div className="icons">
                <div className="icon" onClick={prevPhoto}>left</div>
                <div className="icon" onClick={nextPhoto}>right</div>
            </div>
        </div>
    )
}

export default LandingPage