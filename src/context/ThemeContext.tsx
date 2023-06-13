import { Box } from "@mui/system";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { DarkTheme, LightTheme } from "../theme";
import { ThemeProvider } from "@mui/material";

interface ThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

interface AppThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext({} as ThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("dark");

  const toggleTheme = useCallback(() => {
    setThemeName((OldThemeName) =>
      OldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;
    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100%" height="100vh">
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
