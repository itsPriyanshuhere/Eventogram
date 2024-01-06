import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import EventDetail from "./components/EventDetail"
import NoMatch from "./components/NoMatch"
import Login from "./components/Login"
import SignUp from "./components/SignUp"

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/shows" element={<Hero />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
    </>
  )
}