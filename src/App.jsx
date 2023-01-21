import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Drawer = lazy(() => import("./components/Drawer/"));
import Home from "./pages/Home";
import About from './pages/About'
import Experiencie from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Suspense fallback={<>Loading...</>}><Drawer Component={Home} /></Suspense>} />
        <Route exact path='/projects' element={<Suspense fallback={<>Loading...</>}><Drawer Component={Experiencie} /></Suspense>} />
        <Route exact path='/about' element={<Suspense fallback={<>Loading...</>}><Drawer Component={About} /></Suspense>} />
        <Route exact path='/contact' element={<Suspense fallback={<>Loading...</>}><Drawer Component={Contact} /></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;

