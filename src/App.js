import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import AllRoutes from './AllRoute'
import { Routes, Route } from 'react-router-dom'
import Gallery from './Components/Gallery/Gallery'

const App = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<AllRoutes />} />
                <Route exact path='/gallery' element={<Gallery />} />
            </Routes>
        </>
    )
}

export default App