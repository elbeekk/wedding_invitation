import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DekstopOrchid from "./pages/DekstopOrchid";
import MobileUI from './pages/HPOrchid'
import useScreenSize from "./use-screen-size";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const screenSize = useScreenSize();

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={screenSize.width < 768 ? <MobileUI /> : <DekstopOrchid />} />
    </Routes>
  );
}
export default App;
