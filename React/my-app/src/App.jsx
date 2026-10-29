
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Events from './components/Events/Events'
import Form from './components/form/Form'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {

  return (

    <>
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/events" element={<Events />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
