import logo from './assets/logo.png'
import Header from './components/header/Header'
import EditProject from './pages/editproject/EditProject'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Project from './pages/project/Project'
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
