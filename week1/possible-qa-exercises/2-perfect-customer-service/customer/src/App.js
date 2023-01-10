import './App.css';
import Guarantee from './Guarantee';
import chat from './assets/chat.png'
import coin from './assets/coin.png'
import delivery from './assets/f-delivery.png'

function App() {
  return (
    <div className="App">
      <Guarantee img={chat} title={'First Photo'} description={'Description1'} />
      <Guarantee img={coin} title={'Second Photo'} description={'Description2'} />
      <Guarantee img={delivery} title={'Third Photo'} description={'Description3'} />
    </div>
  );
}

export default App;
