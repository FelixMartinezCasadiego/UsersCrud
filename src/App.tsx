import './App.css';
import UsersContainer from './components/UsersContainer';
import UserProvider from './context/UserContext'

function App() {

  return (
    <UserProvider>
      <div className="App">
        <h2>CRUD PRACTICE</h2>
        <UsersContainer />
      </div>
    </UserProvider>
  )
}

export default App
