import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black' }}>
      <Container>
        <div className="wrapper">
          <div className="content">
            <p className='text-center py-3' >Copyright &copy; Pakretails</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
