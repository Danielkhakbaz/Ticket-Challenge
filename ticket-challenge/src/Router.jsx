import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/pages/home/Home";
import StadiumsDetails from "./views/pages/stadiums-details/StadiumsDetails";
import Stadiums from "./views/pages/stadiums/Stadiums";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/stadiums/:id" component={StadiumsDetails} />
                <Route path="/stadiums" component={Stadiums} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
