import './App.css';
import {Routes, Route} from 'react-router-dom'
import UsersContainer from './components/UsersContainer';
import UserProvider from './context/UserContext';
import EditUser from './components/EditUser';


function App() {

  return (
    <UserProvider>
      <div className="App">
        <h2>CRUD PRACTICE</h2>
        <Routes>
          <Route path='/' element={<UsersContainer />} />
          <Route path='/users/:id' element={<EditUser />} />
        </Routes>
      </div>
    </UserProvider>
  )
}

export default App
