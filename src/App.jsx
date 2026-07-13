import Header from './components/Header';
import ConceptCard from './components/ConceptCard';
import InteractiveDemo from './components/InteractiveDemo';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4">
        <ConceptCard 
          title="1. Virtual DOM & JSX" 
          description="React uses a Virtual DOM to optimize rendering. JSX allows us to write HTML-like syntax directly inside our JavaScript files, making component structure highly readable."
        />

        <ConceptCard 
          title="2. Components (Functional) & Fragments" 
          description="Modern React relies on Functional Components. Fragments (<></>) allow returning multiple elements without adding unnecessary nodes to the actual DOM."
        />

        <ConceptCard 
          title="3. State, Props, Lifecycle & Events" 
          description="This interactive widget demonstrates how state updates trigger re-renders, how event handlers capture user input, and how the useEffect hook mimics traditional class-based lifecycle methods."
        >
          <InteractiveDemo />
        </ConceptCard>
      </main>
    </div>
  );
}

export default App;