import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-200 ">
        <div className="px-4 md:px-8 lg:px-24">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
