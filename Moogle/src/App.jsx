import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
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
          <div className="bg-gray-200 h-screen w-screen flex flex-col dark:bg-gray-900 dark:text-gray-100 ">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}></Navbar>
            <Main></Main>
            <Footer></Footer>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
