import { useState } from "react";
import "./App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Mobile from "../images/mobile.svg"
import List from "../images/icon-list.svg"

function App() {
  const [count, setCount] = useState(0);
  const buttonStyle = {
    backgroundColor: 'hsl(234, 29%, 20%)',
  };

  return (
    <>
    <div className="d-flex justify-content-center flex-column mb-4">
    <img src={Mobile} alt="Mobile newsletter image" className="imageMobile" />
    </div>

    <div className="d-flex justify-content-left flex-column">
    <h1>Stay updated</h1>
    <p>Join 60,000+ product managers receiving monthly updates</p>
    <div className="d-flex align-item-start">
      <img src={List} alt="list icons" />
      <p>Product discovery and building what matters</p>
    </div>
    <div className="d-flex align-item-start">
      <img src={List} alt="list icons" />
      <p>Measuring to ensure updates are a success</p>
    </div>
    <div className="d-flex  align-items-start">
      <img src={List} alt="list icons" />
      <p>And much more!</p>
    </div>


    <Form>
    <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="email@company.com"
      type="email"
    />
  </FormGroup>
  
    <Button
    className="subscibeButton"
    style={buttonStyle}
    size="lg"
  >
    Subscribe to monthly newsletter
  </Button>
  </Form>

    </div>
    </>
  );
}

export default App;
