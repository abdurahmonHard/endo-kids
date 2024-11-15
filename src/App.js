import "./App.css";
import {
  Navbar,
  Hero,
  AdverseEffects,
  VitaminDeficiency,
  UsefulProperties,
  Contact,
  ProductContent,
  Recommendations,
  Qualifications,
  Opinions,
} from "./components";
function App() {
  return (
    <div className="App bg-mainColor">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Hero />
        <AdverseEffects />
        <VitaminDeficiency />
        <UsefulProperties />
        <Contact darkMode={true} />
        <ProductContent />
        <Recommendations />
        <Qualifications />
        <Opinions />
        <Contact darkMode={false} />
      </main>
    </div>
  );
}

export default App;
