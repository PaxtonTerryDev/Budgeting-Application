import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import AddButton from './AddButton';
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class Ledger extends React.Component {
  constructor(props) {
    super(props);
    this.newData = {
        transaction: '',
        date: '',
        description: '',
        amount: '',
        balance:'',
    }
    this.data = [
      {
        transaction: 0,
        date: '',
        description: '',
        amount: '',
        balance:'',
      },
      {
        transaction: 1,
        date: 'asdf',
        description: 'dsfsdf',
        amount: 'asdf',
        balance: 0,
      },
      {
        transaction: 2,
        date: 'asdf',
        description: 'dsfsdf',
        amount: 'asdf',
        balance: 0,
      }
    ]
  }
  
  
  render() {
  return (
    <div>
      <Container fluid>
      <Row className='pt-2 pb-2'>
        <Col>
        <Table striped bordered hover>
          <thead>
              <tr>
              <th></th>
              <th>Transaction</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Balance</th>
              </tr>
          </thead>
          <tbody>
            <NewRow />
            {/* creates a table based on the array information in DATA */}
            {this.data.map((x) => {
              return (<>
              <tr>
                <td>
                  <Container>
                    <Row>
                        <Col className='d-flex align-items-center justify-content-center'>
                          <Button variant="outline-danger">X</Button>{' '}
                        </Col>
                    </Row>
                  </Container>
                </td>
                <td>{x.transaction}</td>
                <td>{x.date}</td>
                <td>{x.description}</td>
                <td>{x.amount}</td>
                <td></td>
              </tr>
              </>)
            })}
          </tbody>
        </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddButton />        
        </Col>
      </Row>
    </Container>
        
    </div>
  );
}
}

// Creates new input row
function NewRow() {
  return (
      <tr>
          <td></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td></td>
      </tr>

  );
}

export default Ledger;