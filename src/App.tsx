import React from 'react';
import CountryData from './components/CountryData';


const App: React.FC = () => {
  return (
    <div className='container mx-auto p-4'>
      <header className='text-center mb-8'>
        <h1 className="text-4xl font-bold">Country App</h1>
      </header>
      <main>
        <CountryData />
      </main>
    </div>
  );
};

export default App;