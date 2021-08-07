import "../styles/globals.css";
import "react-activity-feed/dist/index.css";
import { Nav } from "../components/Nav";
function MyApp({ Component, pageProps }) {
  return (
    <Nav>
      <Component {...pageProps} />
    </Nav>
  );
}

export default MyApp;
