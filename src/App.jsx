import Navbar from "./components/Navbar"
import Feeds from './components/Feeds'
import {BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom"
import Watch from "./components/Watch"

function App() {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feeds />}/>
          <Route path="/watch/:id" element={<Watch />}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
