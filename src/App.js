import "./App.css";
import {
  Navbar,
  PageOne,
  PageTwo,
  PageThree,
  PageFour,
  PageFive,
  Footer,
} from "./Components/export";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <Footer />
    </div>
  );
}

export default App;
