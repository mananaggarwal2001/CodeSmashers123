import React from 'react'
import Landingpage from './Landingpage'
import Navbar from './Navbar'

const MainBody = () => {
    return (
        <>
            <Navbar />
            <div className='landingPage'>
                <Landingpage/>
            </div>
        </>
    )
}

export default MainBody