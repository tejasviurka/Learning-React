// to use any comp in app, we have to import it and write it
import KgButton from "./KgButton";
import Hello from "./Hello.jsx";
import Random from "./Random.jsx";

// creating comp- start with fun and then give comp name
function App() {
  return <div>
    <h1>
      Hello
    </h1>
    <KgButton />
    <Hello/>
    <Random/>
  </div>
}
export default App;