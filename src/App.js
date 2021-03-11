
import './App.css';
import Header from "./Components/Header";
import Layout from "./Components/Layout";
import Footer from "./Components/Footer";
import bg1 from './assets/bg1.jpg'

import bg2 from './assets/bg2.jpg'



const App=()=> {
  return (
    <>
    <Header title="Pokemon Game" content="Very cool!!!"/>
    <Layout title="Title 1" descr="Pokemon 1"  urlBg={bg1}/>
    <Layout title="Title 2" descr="Pokemon 2" colorBg="true" / >
	<Layout title="Title 3" descr="Pokemon 3" urlBg={bg2}/>
	 <Footer/>
    </>
  );
}

export default App;
