import "./App.css";
import home from "./Components/Home";
import order from "./Components/order";
import history from "./Components/history";
import invoice from "./Components/invoice";
import makeOrder from "./Components/makeOrder"
import login from "./Components/login"
import signUp from "./Components/signUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/'  component={home} />
				    <Route path='/home' component={home} />
					<Route path='/orders' component={order} />
					<Route path='/invoice' component={invoice} />
					<Route path='/history' component={history} />
					<Route path='/makeOrder' component={makeOrder} />
					<Route path='/login' component={login} />
					<Route path='/signUp' component={signUp} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
