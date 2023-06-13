import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./context/ThemeContext";
import { MobileMenu } from "./components/Menu/Menu";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter basename={`/`}>
        <MobileMenu>
          <AppRoutes />
        </MobileMenu>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
