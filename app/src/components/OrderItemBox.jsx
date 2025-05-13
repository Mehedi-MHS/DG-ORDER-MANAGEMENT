
import '../styles/OrderItemBox.css'
import PenIcon from '../assets/penIcon.png'
import CustomerIcon from '../assets/customer-icon.svg'
import LocationIcon from '../assets/location-icon.svg'
import TimeIcon from '../assets/time-icon.svg'
import { ListGroup } from 'react-bootstrap'


export default function OrderItemBox({OrderNumber,Name,Address,Date}){
    return(
    <>
        <div id="card-container">
            <div id="card-header">
<div className="order-number">অর্ডার নং : <br/><span style={{fontFamily:"arial",fontSize:"19px"}}>{OrderNumber} </span></div>
<div className="edit-icon"> 
        <img src={PenIcon.src} alt="icon"/>
       <div className='edit-option'>
        <p>অর্ডারটি সম্পন্ন হয়েছে</p>
        <input type="checkbox" name="isComplete" id="" />
       </div>
    </div>
            </div>
        
            <div id="card-body">
                <div className="customer-name"><img src={CustomerIcon.src} alt="icon" />{Name}</div>
                <div className="customer-location"><img src={LocationIcon.src} alt="icon" />{Address}</div>
                <div className="order-date"><img src={TimeIcon.src} alt="icon" />{Date}</div>
            </div>
            <div id="card-footer">
<ListGroup as="ul" id='listGroup'>
<ListGroup.Item as="li" active>
    <div style={{fontWeight:"bold",padding:"0px auto"}}>অর্ডার আইটেম</div>
</ListGroup.Item>
<ListGroup.Item as="li" id='list-item'>
<input type="checkbox" name="isComplete" id="" /> ভিজিটিং কার্ড - 1000 পিস - গুটি স্পট - ব্যাক টু ব্যাক - ড্রাই কাটিং
</ListGroup.Item>
<ListGroup.Item as="li">
<input type="checkbox" name="isComplete" id="" /> ভিজিটিং কার্ড - 1000 পিস 
</ListGroup.Item>
</ListGroup>
            </div>

        </div>
    </>
        )
}