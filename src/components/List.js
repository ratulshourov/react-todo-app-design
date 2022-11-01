import React, { Component } from 'react'
import '../css/List.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class List extends Component {
    render() {
        return (
            <div className="body">
                    <h1 style={{ color: 'black' }}>To DO List</h1>
                    <Container>
                        <Row>
                            <Col>
                                Show Category: Personal |Work|All
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{ marginTop: '30px' }}>
                        <Row>
                            <Col xs lg="10">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        <h6>Buy Dog Food</h6>
                                    </label>
                                </div>
                            </Col>
                            <Col>
                                <CloseButton variant="black" />
                            </Col>

                            <Col xs lg="10">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        <h6><del>Go For Walk</del></h6>
                                    </label>
                                </div>
                            </Col>
                            <Col>
                                <CloseButton variant="black" />
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <br />
                    <hr />
                    <Form.Group className="mb-3">
                        <Form.Label className='lableStyle'>Add TO DO</Form.Label>
                        <Form.Control className='lableStyle' type='text' placeholder="" style={{ height: '50px', backgroundColor: '#FFFFFF' }} />
                    </Form.Group>
                    <br />
                    <Form.Group className="mb-3">
                        <Form.Label className='lableStyle'>Category</Form.Label>
                        <Container>
                            <Row>
                                <Col xs lg="8">
                                    <Form.Select disabled>
                                        <option>Choose Category</option>
                                    </Form.Select>

                                </Col>
                                <Col xs lg="3">
                                    <Button variant="secondary" style={{ backgroundColor: '#424349' }}>Add TO Do</Button>

                                </Col>
                            </Row>
                        </Container>

                    </Form.Group>
                    <hr />
                    <br />
                    <Form.Group className="mb-3">
                        <Form.Label className='lableStyle'><h4>Categories</h4></Form.Label>
                        <Container>
                            <Row>
                                <Col xs lg="8">
                                    <Form.Control className='lableStyle' type='text' placeholder="" style={{ height: '50px', backgroundColor: '#FFFFFF' }} />


                                </Col>
                                <Col xs lg="3">
                                    <Button variant="secondary" style={{ height: '50px', backgroundColor: '#424349' }}>Add Categories</Button>

                                </Col>
                            </Row>
                        </Container>

                    </Form.Group>

                </div>
        )
    }
}

export default List
