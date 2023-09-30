
import './App.css'
import { trafficLightMachine } from './machine';
import { useMachine } from '@xstate/react';

function App() {
  const [current, send] = useMachine(trafficLightMachine);

  return (
    <div className="container">
      <div className="pole" />
      <div className="traffic-light">
        <input type="radio" readOnly className="light red" checked={current.matches({ ON: 'red' })} />
        <input type="radio" readOnly className="light yellow" checked={current.matches({ ON: 'yellow' })} />
        <input type="radio" readOnly className="light green" checked={current.matches({ ON: 'green' })} />
        <button onClick={() => send('NEXT')}>NEXT</button>
        <button onClick={() => send("TURN_ON")}>TURN ON</button>
        <button onClick={() => send("TURN_OFF")}>TURN OFF</button>
      </div>
    </div>
  );
};

export default App;
