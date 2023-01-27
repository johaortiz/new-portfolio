import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Drawer = lazy(() => import("./components/Drawer/"));
import { Home, About, Projects, Contact } from "./pages/";

function App() {
  return <div>
    <Routes>
      <Route exact path='/' element={<Suspense fallback={<>Loading...</>}><Drawer Component={Home} /></Suspense>} />
      <Route exact path='/projects' element={<Suspense fallback={<>Loading...</>}><Drawer Component={Projects} /></Suspense>} />
      <Route exact path='/about' element={<Suspense fallback={<>Loading...</>}><Drawer Component={About} /></Suspense>} />
      <Route exact path='/contact' element={<Suspense fallback={<>Loading...</>}><Drawer Component={Contact} /></Suspense>} />
    </Routes>
  </div>
};

export default App;

