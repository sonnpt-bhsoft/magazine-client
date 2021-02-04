import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Header from '../Header'
import LeftMenu from '../LeftMenu'
import './style.css'

const Layout = (props) => {
    return (
        <>
            <Header />
            <Row style={{ minHeight: '100vh' }}>
                <Col xs={12} md={2} >
                    <LeftMenu />
                </Col>
                <Col xs={12} md={10}>
                    {props.children}
                </Col>
            </Row>
        </>
    )
}

export default Layout