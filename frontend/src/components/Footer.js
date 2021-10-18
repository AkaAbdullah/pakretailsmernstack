import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black' }}>
      <Container>
        <Row>
          <Col style={{ color: '#fff' }} className='text-center py-3'>Copyright &copy; Pakretails</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
