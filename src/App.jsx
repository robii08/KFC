import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landingpage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
 

  return (
    <>
        <Header />
        <Routes>
          <Route path='/' element={<Landing/>}/>
        </Routes>
        <Footer />
    </>
  )
}

export default App
