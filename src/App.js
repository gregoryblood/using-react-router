import React from 'react';
import './App.css';

const menu = {
  tacos: "https://media.giphy.com/media/KfxPgR9Xb6lRvlFa8x/giphy.gif",
  pizza: "https://media.giphy.com/media/VCDSo9xqCJOjC/giphy.gif",
  sushi: "https://media1.tenor.com/images/a7087e13ce68524779c9b6946818986b/tenor.gif"
};

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Menu() {
  return <h1>Menu</h1>;
}

function App() {
  return (
    <Home />
  );
}

export default App;
