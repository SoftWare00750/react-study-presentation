import { useState, useEffect } from 'react';

export default function InteractiveDemo() {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState([]);

  // Simulating Lifecycle: Runs on mount
  useEffect(() => {
    setLogs(prev => [...prev, 'Component Mounted (Virtual DOM rendered)']);
    
    // Cleanup function mimicking componentWillUnmount
    return () => console.log('Component unmounted');
  }, []);

  // Simulating Lifecycle: Runs on state update
  useEffect(() => {
    if (count > 0) {
      setLogs(prev => [...prev, `State Updated: Count is now ${count}`]);
    }
  }, [count]);

  // Event Handler
  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <p className="mb-4">Current State (Count): <span className="font-bold text-blue-600 text-xl">{count}</span></p>
        <button 
          onClick={handleIncrement}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition-colors"
        >
          Trigger Event Handler
        </button>
      </div>
      
      <div className="flex-1 bg-slate-900 text-green-400 p-4 rounded font-mono text-sm h-48 overflow-y-auto">
        <p className="text-slate-400 mb-2">// Lifecycle & State Logs</p>
        {logs.map((log, index) => (
          <div key={index}>{">"} {log}</div>
        ))}
      </div>
    </div>
  );
}