import { useState, useEffect, useRef } from 'react';

export default function InteractiveDemo() {
  const [count, setCount] = useState(0);
  // Seed the log with the "mount" entry via the lazy initializer — this
  // only runs once, on mount, without needing an effect that calls setState.
  const [logs, setLogs] = useState(() => ['Component Mounted (Virtual DOM rendered)']);
  const logEndRef = useRef(null);

  // Effects should synchronize with external systems, not set state directly.
  // Here the effect only performs the "unmount" side effect (a console log),
  // which mimics componentWillUnmount without triggering a cascading render.
  useEffect(() => {
    return () => console.log('Component unmounted');
  }, []);

  // Keep the log panel scrolled to the newest entry
  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [logs]);

  // Event Handler
  const handleIncrement = () => {
    const next = count + 1;
    setCount(next);
    setLogs(prev => [...prev, `State Updated: Count is now ${next}`]);
  };

  const handleReset = () => {
    setCount(0);
    setLogs(prev => [...prev, 'State Reset: Count returned to 0']);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <p className="mb-4">Current State (Count): <span className="font-bold text-blue-600 text-xl">{count}</span></p>
        <div className="flex gap-3">
          <button
            onClick={handleIncrement}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition-colors"
          >
            Trigger Event Handler
          </button>
          <button
            onClick={handleReset}
            disabled={count === 0 && logs.length <= 1}
            className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded shadow transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="flex-1 bg-slate-900 text-green-400 p-4 rounded font-mono text-sm h-48 overflow-y-auto">
        <p className="text-slate-400 mb-2">// Lifecycle & State Logs</p>
        {logs.map((log, index) => (
          <div key={index}>{">"} {log}</div>
        ))}
        <div ref={logEndRef} />
      </div>
    </div>
  );
}
