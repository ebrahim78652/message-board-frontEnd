import "./App.css";
import { Header } from "./Components/Header";
import { ContainerCards } from "./Components/ContainerCards";
import { useCards } from "./Hooks/useCards";

function App() {
  const [arrCards, setArrCards] = useCards();

  return (
    <div className="App">
      <Header></Header>
      <div className="new">New Message</div>
      <ContainerCards arrCards={arrCards} />
    </div>
  );
}

export default App;
