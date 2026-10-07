import './App.css'
import {Routes, Route} from "react-router-dom";
import BookHome from "./components/BookHome.jsx";
import About from "./components/About.jsx";
import BookDetails from "./components/BookDetails.jsx";
import NavLinkBar from "./components/NavLinkBar.jsx";
import {Link} from "react-router-dom";
import Create from "./components/Create.jsx";

function App() {
  return (
      <>
          <NavLinkBar />
          <h2> Books 4 U </h2>
          <div className='container'>

              <div className='row'>
                  <div className='col-md-3'>
                      <h2> Now on sale</h2>
                  </div>
                  <div className='col-md-9'>
                      <h2> Right is right</h2>
                      <Routes>
                          <Route path="/" element={<BookHome />} />
                          <Route path="/About" element={<About />} />
                          <Route path="/Create" element={<Create />} />
                          <Route path="/bookdetails/:id" element={<BookDetails />} />
                          <Route path='*' element={
                              <div className='text-center mt-5'>
                                  <h2>404 — Page Not Found</h2>
                                  <Link to='/'>Back to Home</Link>
                              </div>
                          } />

                      </Routes>
                  </div>
              </div>
          </div>
      </>
  )
}

export default App
