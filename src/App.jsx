import React from 'react'
import './App.css'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx';
// import { Canvas } from "@react-three/fiber";
// import { Experience } from "./components/Experience";
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import { Suspense } from 'react';

const LazySpline = React.lazy(() =>
  import('@splinetool/react-spline')
);

export default function App() {
  return (
    <>
      <Nav />
      <section className='hero-section'>
        {/* <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
          <color attach="background" args={["#ececec"]} />
          <Experience />
        </Canvas> */}
      </section>
      <section className='work-with-me-section'>
        <Wrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <LazySpline className='spline' scene="https://prod.spline.design/3ArfHPRWmgJbL5vN/scene.splinecode" />
          </Suspense>
          <Content>
            <h1>Work With Me</h1>
            <p>Take your design to the next level.</p>
            <p>Create elegantly built websites with clean and easily maintainable codes.</p>
          </Content>
        </Wrapper>
      </section>
      <section className='about-me-section'>About me section</section>
      <section className='projects-section'>Projects section</section>
      <section className='resume-section'>Resume section</section>
      <section id='contact-section'>Contact section</section>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
    font-family: "Spline Sans" sans-serif;
    font-size: 16px;
    color: white;
    position: relative;
`;

const Content = styled.div`
  position: absolute;
  top: 30px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-family: "Spline Sans Mono" sans-serif;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 700px;
    width: 600px;
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  h1, p {
    margin: 0 30px 0 100px;
  }
`;
