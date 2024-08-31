"use client";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import {
  Switch,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import { AppBar, CssBaseline } from "@mui/material";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#ff7043",
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState(theme.palette.mode);

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={inter.className}>
        {" "}
         
        <CssBaseline />
        <AppRouterCacheProvider>
          <ThemeProvider theme={createTheme({ ...theme, palette: { mode } })}>
            <AppBar position="fixed">
              <Toolbar>
                <Switch onClick={toggleMode}/>
              </Toolbar>
            </AppBar>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
