import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Tourism from './pages/Tourism';
import Fitness from './pages/Fitness';
import Technology from './pages/Technology';
import Bollywood from './pages/Bollywood';
import Food from './pages/Food';
import { ArticleContextProvider } from './Context';

function App() {
  return (
    <ArticleContextProvider>

 
    <BrowserRouter>
    <Routes>
     <Route path={'/'} element={<Home/>} />
      <Route path={'/pages/Tourism'} element={<Tourism/>} />
      <Route path={'/pages/Fitness'} element={<Fitness/>} />
      <Route path={'/pages/Technology'} element={<Technology/>} />
      <Route path={'/pages/Bollywood'} element={<Bollywood/>} />
      <Route path={'/pages/Food'} element={<Food/>} />

    </Routes>
    </BrowserRouter>
    </ArticleContextProvider>
  );
}
export default App;
