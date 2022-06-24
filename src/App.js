import './App.css';
import TopCircle from './TopCircle';
import BottomCircle from './BottomCircle';
import TopPattern from './TopPattern';
import BottomCard from './BottomCard';
import FullCard from './FullCard';

function App() {
  return (
    <div>
      <div className='bg-custom-baseBG h-screen overflow-hidden'>
        <div className='container mx-auto  '>
          <div className='grid place-items-center h-screen '>
            
          <FullCard/>
           
          
          </div>
          {/* <BottomCircle /> */}
          {/* <TopCircle /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
