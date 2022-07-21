
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Create />} />
        <Route exact path='/read' element={<Read />} />
        <Route exact path='/update' element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
