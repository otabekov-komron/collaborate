import logo from './assets/logo.png'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Projects from './pages/projects/Projects'
import Register from './pages/register/Register'
function App() {
  return (
    <div className="App">
      <Header/>
      <Projects/>
    </div>
  )
}

export default App
