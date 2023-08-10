
import Home from "./pages/Home"
import './App.css'
import { Route,BrowserRouter as  Router, Routes } from "react-router-dom"
import { routePath } from "./constant/route"
import Category from "./pages/Category"
function App() {
 
  return(

      <Router>
        <Routes>
    <Route  path={routePath.home} element={<Home/>}/>
    <Route path={routePath.categories} element={<Category />}/>
        <Route path={routePath.invalid} element={<Home />}/>
        </Routes>
      </Router>
   
 
  )
}

export default App
