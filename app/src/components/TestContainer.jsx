import { Container,Row,Col } from "react-bootstrap";
import TestButton from "./TestButton";
export default function TestContainer(){
    return(
        <>
        <Container>
            <Row>
                <Col md={8}>Wider</Col>
                <Col md={4}><TestButton/></Col>
            </Row>
        </Container>
        
        </>
    )
}