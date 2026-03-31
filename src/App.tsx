import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Background3D from './components/Background3D/Background3D'

export default function App() {
  return (
    <BrowserRouter basename="/meu-portfolio">
      <Background3D />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
