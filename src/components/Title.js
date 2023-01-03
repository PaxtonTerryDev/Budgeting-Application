import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Title(props) {
  return (
    <Container fluid>
      <Row className='m-2'>
        <Col>
            <h1>{props.name}</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Title;