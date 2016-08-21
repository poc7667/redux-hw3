export function deposit(amount) {
    return {
        type: 'DEPOSIT_INTO_ACCOUNT',
        payload: {
            amount: amount
        }
    }
}

export function withdraw(amount) {
    return {
        type: 'WITHDRAW_FROM_ACCOUNT',
        payload: {
            amount: amount
        }
    }    
}