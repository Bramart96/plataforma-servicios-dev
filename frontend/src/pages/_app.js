
import { ThemeProvider } from "../contexts/ThemeContext";
import { CarritoProvider } from "../contexts/CarritoContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CarritoProvider>
        <Component {...pageProps} />
      </CarritoProvider>
    </ThemeProvider>
  );
}
