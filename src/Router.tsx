import { Route, Switch } from 'react-router-dom';

import MilhoNumeroEspigas from "./pages/MilhoNumeroEspigas";
import MilhoPesoMedio from "./pages/MilhoPesoMedio";
import MilhoMediaEspigas from "./pages/MilhoMediaEspigas";
import Soja from "./pages/Soja";

const Routes = () => {
   return(
       <Switch>
           <Route path="/" exact component={ MilhoPesoMedio }/>
           <Route path="/MilhoNumeroEspigas" exact component={ MilhoNumeroEspigas }/>
           <Route path="/MilhoPesoMedio" exact component={ MilhoPesoMedio }/>
           <Route path="/MilhoMediaEspigas" exact component={ MilhoMediaEspigas }/>
           <Route path="/Soja" exact component = { Soja } />
       </Switch>
   )
}

export default Routes;