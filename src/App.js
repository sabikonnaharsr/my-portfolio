import { RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import { router } from './Routes/Router/Router';


function App({children}) {
  return (
    <div>
       <RouterProvider router={router}>
         <Home></Home>
       </RouterProvider>
    </div>
  );
}

export default App;
