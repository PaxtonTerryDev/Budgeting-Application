import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddButton(props) {
  return (
    <Container>
        <Row>
          <Col></Col>
            <Col className='d-flex align-items-center justify-content-center'>
              <Button variant="outline-success">ADD</Button>{' '}
            </Col>
            <Col></Col>
        </Row>
    </Container>

  );
}

export default AddButton;