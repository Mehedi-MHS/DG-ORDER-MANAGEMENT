import CustomBadge from "./CustomBadge"
export default function TabButton(){
    return(
        <>
        <div id="buttonContainer" style={{backgroundColor:'rgba(213, 176, 245,0.3)',padding:"3px",borderRadius:"100px",display:'flex',flexDirection:'row',alignItems:'center',columnGap:"2px",maxWidth:"70%",height:"50px",columnGap:"9px"}}>
        <div id="tabButton" style={{fontFamily:"SolaimanLipi,sans-serif",fontWeight:'bold',fontSize:'20px',width:"180px",height:"100%",backgroundColor:"#ffffff",borderRadius:"100px",padding:"3px",display:"flex",columnGap:"5px",alignItems:"center",justifyContent:"center"}}>চলমান অর্ডার <CustomBadge value={"১০"}/></div>
        <div id="tabButton"style={{fontFamily:"SolaimanLipi,sans-serif",color:"rgb(118, 17, 186)",fontSize:"20px",fontWeight:"bold",marginRight:"7px"}}> মোট অর্ডার</div>
        </div>
 
        </>
    )
}