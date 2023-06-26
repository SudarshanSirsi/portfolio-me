// np
import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Introduction from './components/Introduction'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Projects from './components/projects/Projects'
import Skills from './components/Skills'
import Certification from './components/Certification/Certification'

function App() {
  

  return (
    <>
     <div>
      <Navbar />
      <Main />
      <Skills />
      <Projects />
      {/* <Introduction /> */}
      <Certification />
      <Contact /> 
      <Footer />
      </div> 
    </>
  )
}

export default App
