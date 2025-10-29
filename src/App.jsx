import useCheckAuthenticity from "./hooks/useCheckAuthenticity";
import PrimaryLayout from "./layouts/primary";
import Home from "./pages/home/Home";

function App() {
  // on page load check authenticity
  useCheckAuthenticity();
  return (
    <div>
      <PrimaryLayout />
    </div>
  );
}

export default App;
