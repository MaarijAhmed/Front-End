import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AppRouter from './config/approuter';
function App() {
  return(

    <AppRouter />

  )
}

export default App;
