import { Switch, Route } from 'react-router-dom';
// page components
import HomePage from '../pages/HomePage';

const AppRouters = () => {
    return (
        <div>
            <div className="container-fluid">
                <Switch>
                <Route path='/' exact component={HomePage} />
                </Switch>

            </div>
        </div>
    )
}

export default AppRouters;