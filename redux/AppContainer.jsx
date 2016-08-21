import {connect} from 'react-redux';
import {deposit, withdraw} from './actions';
import App from './App.jsx';

const mapStateToProps = (state) => {
	return state;
	// return { balance: state };
};

const mapDispatchToProps = (dispatch) => {
	return {
		deposit: (amount) => {
			dispatch(deposit(amount))
		},
		withdraw: (amount) => {
			dispatch(withdraw(amount))
		}
	};
};

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default AppContainer;