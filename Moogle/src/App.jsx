import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Route } from "./components/Route";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  useEffect(() => {
    console.log(darkTheme);
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);
  return (
    <>
      <BrowserRouter>
        <div className={darkTheme ? "dark" : ""}>
          <div className="bg-gray-200 h-screen w-screen flex flex-col dark:bg-gray-700 ">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}></Navbar>
            <Route></Route>
            <Footer></Footer>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
