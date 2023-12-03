import "./succsess.css";
import CheckMark from "../../images/icon-success.svg";
import { Button } from "reactstrap";
import { useParams } from 'react-router-dom';


const Mobile_approved = () => {

 

  const buttonStyle = {
    backgroundColor: "#242742",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const {email} = useParams()

  console.log(email)

  return (
    
    <>
      <section className="pageCongrats">
      <div className="cardCongrats">
      <img src={CheckMark} className="checkmark"alt="" />
      <h1 className="titulo">Thanks for subscribing!</h1>
      <p className="paragraph">
        A confirmation email has been sent to {email}. Please open
        it and click the button inside to confirm your subscription
      </p>
      <div className="desktopButtonFlex">
      <Button href="/home" style={buttonStyle} className="newButton">Dismiss message</Button>
      </div>
      </div>
      </section>
    </>
  );
};
export default Mobile_approved;
