import Navbar from './Components/Navbar';
import TopHeader from './Components/TopHeader';
import ProductDisplay from './Pages/ProductDisplay';
import Card from './Components/Card';
import './App.css';

function App() {
  return (
    // <div className='layout'>
    //   <div className='col-1'>
    //     <Navbar />
    //   </div>
    //   <div className='col-2'>
    //     <div className='row-1'>
    //       <TopHeader />
    //     </div>
    //     <div className='row-2'>
    //       <ProductDisplay />
    //     </div>
    //   </div>
    // </div>
    <div className='app'>
        <Card />
    </div>
  );
}

export default App;
