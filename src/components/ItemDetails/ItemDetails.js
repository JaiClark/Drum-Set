import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';
import './ItemDetails.css';

export default class ItemDetails extends Component {
constructor(props) {
    super(props);
    this.state = {
        // toggling the open state of the class
        open: false
    };
}
render() {
    return (
        <div>
            <Button className="item-details-button" bsStyle="link"
            onClick={() => this.setState({open: !this.state.open})}>
            
            {this.state.open === false ? `See` : `Hide`} item details
            {this.state.open === false ? `+` : `-`}</Button>
            <Collapse in={this.state.open}>
            <div>
                <Well>
                    <Media>
                        <Media.Left>
                            <img
                            width={100}
                            height={100}
                            src="http://az632705.vo.msecnd.net/cmsroot/mapexdrums/media/mapex-media/products/drum-sets/bpnw628xflk/b/ow/angle1/bpnw628xflkbow_1.jpg"
                            />
                        </Media.Left>
                        <Media.Body>
                            <p>Black and White Drum Set</p>
                            <Row className="show-grid">
                            <Col md={6}>
                            <strong>{`$${this.props.price}`}</strong>
                            <br />
                            <strong className="price-strike"> {`$${this.props.price}`}
                            </strong>
                            </Col>
                            <Col md={6}> Qty: 1</Col>
                            </Row>
                        </Media.Body>
                    </Media>
                </Well>
            </div>
            
            </Collapse>
        </div>
    )
}

}