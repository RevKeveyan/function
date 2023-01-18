import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import {Routes,Route} from "react-router-dom";
import { Header } from "./Component/Header"
import { Footer } from "./Component/footer"



function App() {
  return (
    <div className="App">
        <Header/>
        
      <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/*" element={<Home />}/>
      </Routes>

        <Footer/>
      
    </div>

  );
}

export default App;
