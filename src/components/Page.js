import React from 'react'
import Overview from './Overview'
import Expenses from './Expenses'
import Assets from './Assets'
import Transactions from './Transactions'
import Deposits from './Deposits'

const Page = (props) => {
const activePage = props.activePage;
    if (activePage === 'income') {
        return (
            <Deposits />
        )
    }
    else if (activePage === 'expenses') {
        return (
            <Expenses />
        )
    }
    else if (activePage === 'assets') {
        return (
            <Assets />
        )
    }
    else if (activePage === 'overview') {
        return (
            <Overview /> 
        )
    }
    else if (activePage === 'transactions') {
        return (
            <Transactions /> 
        )
    }
    else {
        return (
            <Transactions />
        )
    }
}

export default Page