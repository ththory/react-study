import "./App.css";
import Accordion from "./sharing-state-between-components/Accordion";
import FilterableList from "./sharing-state-between-components/FilterableList";
import SyncedInputs from "./sharing-state-between-components/SyncedInputs";
function App() {
    return (
        <section>
            <FilterableList></FilterableList>
        </section>
    );
}

export default App;
