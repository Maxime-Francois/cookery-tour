import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import AllRecpies from './pages/AllRecipes';
import './styles/App.css'





function App() {
  return (
    <div className="app">
     <BrowserRouter>
		 <Nav/>
		
		<Routes>
		<Route exact path="/" element={<Home/>} />
		<Route exact path="/allrecipes" element={<AllRecpies/>} />
		

		</Routes>
		
		</BrowserRouter>
     
     
    </div>
  );
}

export default App;
