import './App.css';
import TopCircle from './TopCircle';
import BottomCircle from './BottomCircle';
import TopPattern from './TopPattern';

function App() {
  return (
    <div>
      <div className='bg-custom-baseBG h-screen overflow-hidden'>
        <div className='container mx-auto  '>
          <div className='grid place-items-center h-screen '>
          <TopPattern/>
            {/* <div className='p-4 bg-white rounded-2xl z-30 drop-shadow-lg shadow-md'>
          
            </div> */}
          </div>
          {/* <BottomCircle /> */}
          {/* <TopCircle /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
