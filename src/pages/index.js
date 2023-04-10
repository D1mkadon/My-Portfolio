import HomePage from "@/Components/Home/HomePage";
import theme from "@/theme/theme";
import { ThemeProvider } from "@mui/material";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </>
  );
}
