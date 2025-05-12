import { Container,Row,Col } from "react-bootstrap";
import Logo from '../assets/logo.svg';
import TabButton from "./TabButton";
export default function Header(){
    return(
        <>
        <Container className="mt-3">
            <Row>
                <Col md={3}>
                <img src={Logo.src} alt="Design Ghor Offset Press" />
                </Col>
                <Col md={9} className="d-flex flex-column align-items-center"><h1 style={{fontFamily:"SolaimanLipi,sans-serif",fontWeight:500, fontSize:"50px"}}>অর্ডার ম্যানেজমেন্ট</h1>
            
                <TabButton/>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}