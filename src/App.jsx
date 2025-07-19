import FetchAPI from './components/FetchAPI'
import GetAxios from './components/GetAxios'
import PostAxios from './components/PostAxios'
import Reducer from './components/Reducer'
import Crud from './components/Crud'
import Read from './components/Read'
import Edit from './components/Edit'
import { Route , Routes } from 'react-router-dom'



function App() {
  return (
    <div className='container'>
      {/* <Reducer/> */}
      {/* <FetchAPI/> */}
      {/* <GetAxios/> */}
      {/* <PostAxios/> */}
      {/* <Crud /> */}
    <Routes>
      <Route path='/' element={<Read/>}></Route>
      <Route path='/create' element={<Crud/>}></Route>
      <Route path='/edit' element={<Edit/>}></Route>

    </Routes>
    </div>
  )
}

export default App
