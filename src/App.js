import "./App.css";
import Sidebar from "./Components/Sidebar";
import MainContainer from "./Components/MainContainer";
import home from "./Components/home";
import order from "./Components/order";
import history from "./Components/history";
import invoice from "./Components/invoice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className='App'>
				<MainContainer />
				<Switch>
				    <Route path='/home' component={home} />
					<Route path='/orders' component={order} />
					<Route path='/invoice' component={invoice} />
					<Route path='/history' component={history} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
