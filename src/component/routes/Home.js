// import Footer from "../components/Footer";
import Navbar from '../Navbar'
import Build from '../Build'

function Home() {
//   return (
//     <>
//     <Navbar/>
//       <Build 
//       cName="build"/>
//     </>
//   );
// }
return (
  <div>
    <Navbar/>
   <Build 
  cName="build"/>
    <Banner/>
    <About />
    <Services />
  </div>
);
}


export default Home;
