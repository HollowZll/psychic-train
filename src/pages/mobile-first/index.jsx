import { useState } from "react";
import "./styles.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Mobile from "../../images/mobile.svg";
import Desktop from "../../images/desktop.svg"
import List from "../../images/icon-list.svg";
import { Link } from 'react-router-dom';

const Mobile_first = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [count, setCount] = useState(0);
  const buttonStyle = {
    backgroundColor: "#242742",
    textAlign: "center",
    display: "flex"
  };
  const inputStyle = {
    width: "100%",
    height: "56px",
    backgroundColor: isValidEmail ? '1px solid red' : '1px solid #dc3545',
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(e.target.value));
  };

  const handleSubscribe = () => {
   
    if (isValidEmail) {
      
      window.location.href = `/congratulations?email=${encodeURIComponent(email)}`;
    } else {
      console.log("Invalid email. Please enter a valid email address.");
    }
  };

  return (
    <>
      <div className="wrapper">
      <section className="cardname">
      <div className="d-flex justify-content-center flex-column mb-4">
        <img
          src={Mobile}
          alt="Mobile newsletter image"
          className="imageMobile"
        />
         <img
          src={Desktop}
          alt="Mobile newsletter image"
          className="imageDesktop"
        />
      </div>

      <div className="d-flex justify-content-left flex-column m-5">
        <h1 className="tittle">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates</p>
        <div className="d-flex align-items-baseline">
          <img src={List} className="icon" alt="list icons" />
          <p>Product discovery and building what matters</p>
        </div>
        <div className="d-flex align-items-baseline">
          <img src={List} className="icon" alt="list icons" />
          <p>Measuring to ensure updates are a success</p>
        </div>
        <div className="d-flex align-items-baseline">
          <img src={List} className="icon" alt="list icons" />
          <p>And much more!</p>
        </div>

        <Form className="d-flex flex-column justify-content-center">
          <FormGroup>
            <Label for="exampleEmail">Email address</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="email@company.com"
              type="email"
              value={email}
              onChange={handleEmailChange}
              style={inputStyle}
              className=""
            />
          </FormGroup>
          {/* Use Link for navigation */}
          <Link to={`/congratulations?email=${encodeURIComponent(email)}`}>
            <div className="d-flex justify-content-center align-items-center">
              <Button
                className="subscibeButton m-1"
                style={buttonStyle}
                disabled={!isValidEmail}
                onClick={handleSubscribe}
              >
                Subscribe to monthly newsletter
              </Button>
            </div>
          </Link>
        </Form>
      </div>
      </section>
      </div>
      
    </>
  );
};

export default Mobile_first;