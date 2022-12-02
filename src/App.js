
import './App.css';

// import WeatherComponent from './components/WeatherComponent'
// import Clock from './components/ClockComponent.js'
// import Greeting from './components/GreetingComponent';
import Emmoji from './components/emojis';
// import WelcomeClassComponent from './components/WelcomeClassComponent'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <WeatherComponent></WeatherComponent> */}
        {/* <Clock></Clock>
        <Greeting></Greeting> */}
       <Emmoji></Emmoji>
        {/* <WelcomeClassComponent name="Willy2"></WelcomeClassComponent> */}
      </header>

    </div>
  );
}

export default App;
