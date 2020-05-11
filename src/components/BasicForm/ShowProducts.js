import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class ShowProducts extends Component {

    render() {
        const productsName = this.props.productsNames;

        return (
            <div>
                <Container>
                    {Object.entries(productsName).map(([key, value], index) =>
                        <Row styled="color:red">
                            <Col sm={8}>{key}</Col>
                            <Col sm={4}>{value}</Col>
                        </Row>
                    )}
                </Container>
            </div>
        );
    }
}
