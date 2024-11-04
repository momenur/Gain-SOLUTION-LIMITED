import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-200 ">
        <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
