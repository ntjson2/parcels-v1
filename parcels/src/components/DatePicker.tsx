import {Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const DatePicker = () => {
    return (
    <div className="m-3">
    <Form>
        <Row>
            <Col>
                <Form.Group className="mb-3">
                    <Form.Label>From Date</Form.Label>
                    <Form.Control type="date" placeholder="From Date"></Form.Control>    
                </Form.Group>
            </Col>
            <Col>
                <Form.Group className="mb-3">
                    <Form.Label>To Date</Form.Label>
                    <Form.Control type="date" placeholder="To Date"></Form.Control>    
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Col>
        </Row>
    </Form>
    </div>
    );
}
export default DatePicker;