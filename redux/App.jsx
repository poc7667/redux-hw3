import React from 'react';

class App extends React.Component {
	deposit() {
		this.props.deposit(Number(this.amount.value));
		this.amount.value = '';
	}

	withdraw() {
		this.props.withdraw(Number(this.amount.value));
		this.amount.value = '';
	}

	render() {
		return(
			<div>
				<header>FluxTrust Bank</header>
				<h1>Your balance is ${(this.props.balance).toFixed(2)}</h1>
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