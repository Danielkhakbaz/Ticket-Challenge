import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/pages/home/Home";
import Stadiums from "./views/pages/stadiums/Stadiums";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/stadiums" component={Stadiums} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
