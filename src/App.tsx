import { useEffect, useState } from "react";
import WebFont from "webfontloader";

import "./App.css";
import styled from "styled-components";
import Form from "./components/Form";
import Stepper from "./components/Stepper";

const Layout = styled.div`
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  padding: 2rem;

  background-image: url(https://cdn2.vectorstock.com/i/1000x1000/13/41/abstract-background-with-purple-straight-lines-vector-12101341.jpg);
  background-size: cover;
  padding: 1rem;

  display: flex;
  gap: 5rem;
  justify-content: center;
  align-items: start;

  @media only screen and (max-width: 670px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
`;

function App() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter"],
      },
    });
  }, []);

  return (
    <main>
      <Layout>
        <Stepper step={step} setStep={setStep} />
        <Form step={step} setStep={setStep} />
      </Layout>
    </main>
  );
}

export default App;
