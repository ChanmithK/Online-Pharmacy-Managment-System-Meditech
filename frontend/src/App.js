import "./App.css";
import home from "./Components/Home";
import order from "./Components/Orders2";
import history from "./Components/history";
import invoice from "./Components/Invoice2";
import imageViwer from "./Components/ImageViwer";
import makeOrder from "./Components/makeOrder"
import login from "./Components/Login2"
import signUp from "./Components/signUp";
import profileUpdate from "./Components/cusProfileUpdate2"
import profile from "./Components/cusProfile2"
import invoiceView from "./Components/invoiceView"
import description from "./Components/description"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function App() {

	const [{user}, dispatch] = useStateValue();

	let savedUser = localStorage.getItem('user');

	if(savedUser !== null && user===null) {
		savedUser = savedUser.split(",");
		dispatch({
			type: actionTypes.SET_USER,
			user: savedUser[0],
			token: savedUser[1],
		});
	}

	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/'  component={login} />
				    <Route path='/home' component={home} />
					<Route path='/orders' component={order} />
					<Route path='/invoice' component={invoice} />
					<Route path='/history' component={history} />
					<Route path='/makeOrder' component={makeOrder} />
					<Route path='/login' component={login} />
					<Route path='/signUp' component={signUp} />
					<Route path='/imageViwer' component={imageViwer} />
					<Route path='/invoiceView/:id' component={invoiceView} />
					<Route path='/profile' component={profile} />
					<Route path='/profileUpdate' component={profileUpdate} />
					<Route path='/description' component={description} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
