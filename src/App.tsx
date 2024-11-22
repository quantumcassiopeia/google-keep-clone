import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Note } from "./components/Note";

function App() {
  return (
    <div className="App">
      <main className=" flex flex-col overflow-y-auto items-center bg-gray-50 w-full h-screen">
        <Header />
        <Note />
        <Note />
        <Note />
        <Note />
        <Footer />
      </main>
    </div>
  );
}

export default App;
