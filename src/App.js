import { useState } from 'react';
import './App.css';
import bg from './assets/bg.jpg'
import SideNav from './components/SideNavbar'

function App() {
  const [flex, setFlex] = useState(12)
  return (
    <div className="App" style={{ backgroundImage: `url('${bg}')` }}>
      <div className={flex === 12 ? 'SideNav' : 'SideNav active'}>
        <SideNav setFlex={setFlex} flex={flex} />
      </div>
      <div className='MainBody' style={{ flex: `${flex}` }}></div>
    </div>
  );
}

export default App;
