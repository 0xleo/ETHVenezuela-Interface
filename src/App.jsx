import { Navbar } from '/src/Navbar.jsx'
import { Buttom } from '/src/Buttom.jsx'
// import { FAQ } from '/src//FAQ.jsx'
import './App.css'


function App() {

  return (
    <>
    <Navbar/>
      <h1>ETHVenezuela<br/>Community</h1>
      <h2>Enseñar, desarrollar e integrar sobre el internet 3.0</h2>
      <div className='containBtnIntro'>
      <div className='buttomIntro'>Join</div>
      <div className='buttomIntro'>Contribute</div>
      </div>
      <Buttom/>
      {/* <FAQ/> */}
    </>
  )
}

export default App
