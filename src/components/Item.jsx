import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

export default function Item ({ id, title, url, amount, free_shipping }) {
  return (
    <li>
      <Container>
        <Link key={id} to={`items/${id}`}>
          <Row className='p-5'>
            <Col md={3}>
              <figure>
                <img src={url} alt={title} id={id} />
              </figure>
            </Col>
            <Col md={6} className='d-flex justify-content-start'>
              <p>{amount}</p>
              {free_shipping && (
                <img src='./ic_shipping.png' alt='free shipping' />
              )}
              <p>{title}</p>
            </Col>
            <Col md={3}>Ciudad?</Col>
          </Row>
        </Link>
      </Container>
    </li>
  )
}
