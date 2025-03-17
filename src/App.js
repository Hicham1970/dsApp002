/* eslint-disable no-unused-vars */
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
// import SideBar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
import Hydrostatic from "./scenes/hydrostatic/Hydrostatic";
// import Faq from "./scenes/faq/Faq";
import DSComponent from "./scenes/ds";
import TopBar from "./scenes/global/TopBar";
import Navbar from "./scenes/global/Navbar";
import LoadingPage from "./scenes/loadingPage";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            {/* <TopBar /> */}
            <Navbar />

            <Routes>
              <Route path="/" element={<LoadingPage />} />
              <Route path="/ds" element={<DSComponent />} />
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
              <Route path="/Hydrostatic" element={<Hydrostatic />} />
              {/* <Route path="/faq" element={<Faq />} /> */}

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
