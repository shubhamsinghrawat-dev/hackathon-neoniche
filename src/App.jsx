import React, { Suspense, lazy } from 'react';

const HeroSection = lazy(() => import('./components/HeroSection'));
const About = lazy(() => import('./components/About'));
const GameGrid = lazy(() => import('./components/GameGrid'));
const HackathonRules = lazy(() => import('./components/HackathonRules'));
const Rewards = lazy(() => import('./components/Rewards'));
const Panel = lazy(() => import('./components/Panel'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
      <About />
      <GameGrid />
      <HackathonRules />
      <Rewards />
      <Panel />
      <Footer />
    </Suspense>
  );
}

export default App;
