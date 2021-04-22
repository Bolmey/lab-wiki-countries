import Navbar from "./components/Navbar";
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList";
import { Route, Link, Switch } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />


      <Switch>
        <Route exact path="/country/:countryId" component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
