import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
const Drawer = lazy(() => import("./components/Drawer/"));
import SideBar from "./components/SideBar/SideBar";
import ButtonTheme from "./components/ButtonTheme/ButtonTheme";
import Home from "./pages/Home/Home";
import About from './pages/About/About'
import Experiencie from "./pages/Experience/Experiencie";
import Contact from "./pages/Contact/Contact";

const obj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  bgcolor: "background.default",
  color: "text.primary",
};

function App() {

  const contextTheme = useSelector((state) => state.theme.theme);
  const theme = createTheme({
    palette: {
      mode: contextTheme,
    },
  });

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Suspense fallback={<>Loading...</>}><Drawer Component={Home} /></Suspense>} />
        <Route exact path='/projects' element={<Suspense fallback={<>Loading...</>}><Drawer Component={Experiencie} /></Suspense>} />
        <Route exact path='/about-me' element={<Suspense fallback={<>Loading...</>}><Drawer Component={About} /></Suspense>} />
        <Route exact path='/contact-me' element={<Suspense fallback={<>Loading...</>}><Drawer Component={Contact} /></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;


{/* <ThemeProvider theme={theme}>
      <>
        <SideBar contextTheme={contextTheme} />
        <Box
          component="main"
          sx={{
            ...obj,
            width: "75vw",
          }}
        >
          <ButtonTheme />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/experience' element={<Experiencie />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='*' element={<>Not Found</>} />
          </Routes>
        </Box>
      </>
    </ThemeProvider> */}