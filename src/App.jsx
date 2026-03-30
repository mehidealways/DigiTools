import './App.css';
import HeroBody from './Component/HeroBody';
import NavBar from './Component/NavBar';
import Counting from './Component/Counting';
// const getInfo = async () => {
//   const res = await fetch('/public/information.json');
//   return res.json();
// };
// const infoPromise = getInfo();

function App() {
  return <>

    <NavBar />
    <HeroBody  />
   <Counting/>
  </>;
}

export default App;
