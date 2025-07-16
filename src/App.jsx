import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/all';
import Navbar from './section/Navbar';
import Hero from './section/Hero';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
   <main>
   
  <Navbar></Navbar>
  <Hero></Hero>

   </main>
   
  )
}

export default App
