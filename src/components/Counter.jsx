import { useMachine } from '@xstate/react';
import {counterMachine} from '../machine/counterMachine';


function Counter() {
  const [state,setState]   = useMachine(counterMachine)
  const increment = () => {
    setState({type:'INCREMENT'});
    
  };

  const decrement = () => {
    setState({type:'DECREMENT'});
  };

  const reset = () => {
    setState({type:'RESET'});
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-24">Counter App</h1>
      <div className="flex items-center space-x-12">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={decrement}
        >
          Decrement
        </button>
        <span data-testid="count"  className="text-2xl font-bold">{state.context.counter}</span>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          Increment
        </button>
      </div>
      <button
        className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  )
}

export default Counter