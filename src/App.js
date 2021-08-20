import './App.css';
import Auto from './components/Auto/Auto'
import {BrowserRouter, Route} from "react-router-dom";
import AutoDetails from "./components/AutoDetails/AutoDetails";

const App = (props) => {
    return (
            <div className="App">
                <Route exact path='/main'
                       render={ () => <Auto cars={props.state.cars} dispatch={props.dispatch}/> } />
                <Route exact path='/details/:id'
                       render={ () => <AutoDetails cars={props.state.cars} dispatch={props.dispatch}/> } />
            </div>
    );
}

export default App;
