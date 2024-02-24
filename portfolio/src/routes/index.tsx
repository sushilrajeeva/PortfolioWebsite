import "../index.css";
import { Route, Routes as AppRoutes } from "react-router-dom";
import Navigation from "@/components/Navigation/Navigation";
import { ThemeProvider } from "@/components/theme-provider";
import Error404Page from "@/components/EssentialComponents/Error404Page";
import Landing from "@/components/EssentialComponents/Landing";
function Routes() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="App">
        <header >
          <Navigation />
        </header>
        <AppRoutes>
          <Route path="/" element={<Landing />} />
          
          <Route path="/*" element={<Error404Page />}></Route>
        </AppRoutes>
      </div>
    </ThemeProvider>
  );
}

export default Routes;