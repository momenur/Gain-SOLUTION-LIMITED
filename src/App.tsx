import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen px-24 bg-gray-200">
        <Home />
      </div>
    </>
  );
}

export default App;
