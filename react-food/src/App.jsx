
import Mainpage from './component/Mainpage';
import { Route, Routes } from 'react-router-dom';
import Mealinfo from './component/MealInfo';
function App() {


  return (
    // <Mainpage />
    <Routes>
      <Route path='/' element={<Mainpage />} />
      <Route path='/:mealid' element={<Mealinfo />} />
    </Routes >

  );
}

export default App;
