import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddResto from './components/AddResto';
import ViewResto from './components/ViewResto';
import SearchResto from './components/SearchResto';
import DeleteResto from './components/DeleteResto';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<AddResto/>}/>
      <Route path='view' element={<ViewResto/>}/>
      <Route path='search' element={<SearchResto/>}/>
      <Route path='delete' element={<DeleteResto/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
