import {Center, Text, Box, Image, BackgroundImage } from '@mantine/core';
import nigward from "./assets/nigward.png";
import edge from "./assets/edge.gif";
import './App.css'

export default function App() {
  const styles = {
    backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("${nigward}")`
  };

  return (
<div>
  <section style={styles}>
<Image 
src={edge}
height="200px"
width="auto">

</Image>

  </section>

</div>

  );

}
