import { useState } from 'react'
import "bootswatch/dist/lux/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <div>
          <Routes>
            <Route path='/' element={<MovieList/>} />
          </Routes>
      </div>
      {/* <div className="App">

        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          
        </div>

      </div> */}
    </Router>
  )
}

export default App
