import './App.css';
import Auto from './components/Auto/Auto'
import {BrowserRouter, Route} from "react-router-dom";
import AutoDetails from "./components/AutoDetails/AutoDetails";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path='/main' render={ () => <Auto cars={props.cars}/> } />
                <Route exact path='/details/:id' render={ () => <AutoDetails cars={props.cars}/> } />
            </div>
        </BrowserRouter>
    );
}

export default App;
