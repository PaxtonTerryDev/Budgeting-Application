import Nav from 'react-bootstrap/Nav';
import React from 'react'
import Page from './Page';


class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activePage: ''
    }
    this.transactionTab = this.transactionTab.bind(this);
    this.incomeTab = this.incomeTab.bind(this);
    this.expensesTab = this.expensesTab.bind(this);
    this.assetsTab = this.assetsTab.bind(this);
    this.overviewTab = this.overviewTab.bind(this);
  }
  transactionTab(e){
    e.preventDefault();
    return (
      this.setState({
        activePage: 'transactions'
      })
    )
  }
  incomeTab(e){
    e.preventDefault();
    return (
    this.setState({
      activePage: 'income'
    })
  )}
  expensesTab(e){
    e.preventDefault();
    return (
      this.setState({
        activePage: 'expenses'
      })
    )
  }
  assetsTab(e){
    e.preventDefault();
    return (
      this.setState({
        activePage: 'assets'
      })
    )
  }
  overviewTab(e){
    e.preventDefault();
    return (
      this.setState({
        activePage: 'overview'
      })
    )
  }
  render() {
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" onClick={this.transactionTab}>Transactions</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={this.incomeTab}>Deposits</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={this.expensesTab}>Expenses</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" onClick={this.assetsTab}>Assets</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" onClick={this.overviewTab}>Overview</Nav.Link>
        </Nav.Item>
      </Nav>

      <Page activePage = {this.state.activePage}/>
    </>
      
    )
  }
}

export default Navbar