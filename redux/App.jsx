import React from 'react';

class App extends React.Component {
	constructor(props, context) {
		super(props, context);
		// this.state = {
		// 	balance: 0,
		// 	isError: false,
		// 	errMsg: ""
		// };
	}

	// componentDidMount() {
	// 	this.storeSubscription = BankReducerStore.addListener(
	// 		data => this.handleStoreChange()
	// 	);
	// 	BankActions.createAccount(1000);
	// }

	componentWillUnmount() {
		this.storeSubscription.remove();
	}

	// handleStoreChange() {
	// 	var resp = BankReducerStore.getState();
	// 	console.log(resp.balance);
	// 	if (resp.state){
	// 		this.setState({isError: false});
	// 		this.setState({balance: resp.balance});
	// 	}else{
	// 		this.setState({isError: true});
	// 		this.setState({errMsg: resp.msg});
	// 	}
	// }

	deposit() {
		this.props.deposit(Number(this.amount.value));
		this.amount.value = '';
	}

	withdraw() {
		this.props.withdraw(Number(this.amount.value));
		this.amount.value = '';
	}

	render() {
		var showError;
		if (!this.props.state) {
			showError = <h1 id="banner" className="error">{JSON.stringify(this.props.msg)}</h1>;
		} else {
			showError = "";
		}

		return(
			<div>
				<header>FluxTrust Bank</header>
				<h1>Your balance is ${(this.props.balance).toFixed(2)}</h1>
				{showError}
				{/*{JSON.stringify(this.props)}*/}
				<div className="atm">
					<input type="text" placeholder="Enter Amount" ref={(ref) => this.amount = ref} />
					<br />
					<button onClick={this.withdraw.bind(this)}>Withdraw</button>
					<button onClick={this.deposit.bind(this)}>Deposit</button>
				</div>
			</div>
		);
	}
};

export default App;