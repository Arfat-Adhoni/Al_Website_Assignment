import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home '
import Contact from './Pages/Contact';

const App = () => {
  return (
    <Router>
    <div>

     <Routes>
     
     <Route path="/" element={<Home/>} />
     <Route path="/ContactUs" element={<Contact/>} />


     </Routes>



    </div>
    </Router>
  )
}

export default App