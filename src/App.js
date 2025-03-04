/* eslint-disable no-unused-vars */
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
// import SideBar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
import Hydrostatic from "./scenes/hydrostatic/Hydrostatic";
// import Faq from "./scenes/faq/Faq";
import DSComponent from "./scenes/ds";
import Login from "./scenes/login";
import Topbar from "./scenes/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            {/* <Login /> */}
            {/* <DSComponent /> */}
            <Hydrostatic />
            {/* <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Hydrostatic" element={<Hydrostatic />} />
              <Route path="/ds" element={<DS />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/dsManual" element={<DSManualComponent />} />
            </Routes> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
