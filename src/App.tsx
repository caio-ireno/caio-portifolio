import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./context/ThemeContext";
import { MobileMenu } from "./components/Menu/Menu";
import { LanguageProvider } from "./context/LanguageContext";

export const App = () => {
  return (
    <AppThemeProvider>
      <LanguageProvider>
        <BrowserRouter basename={`/`}>
          <MobileMenu>
            <AppRoutes />
          </MobileMenu>
        </BrowserRouter>
      </LanguageProvider>
    </AppThemeProvider>
  );
};
