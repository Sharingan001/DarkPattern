import React, { useState, useEffect } from 'react';
import { AlertTriangle, ShieldAlert, Clock, MousePointer, X } from 'lucide-react';
import DarkPatternCard from './components/DarkPatternCard';
import Header from './components/Header';

function App() {
  const [darkPatterns, setDarkPatterns] = useState([]);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    // Simulating dark pattern detection
    const detectDarkPatterns = () => {
      setIsScanning(true);
      setTimeout(() => {
        setDarkPatterns([
          { type: 'Urgency', description: 'Limited time offer creating false scarcity', icon: Clock },
          { type: 'Misdirection', description: 'Confusing layout to trick users into unwanted actions', icon: MousePointer },
          { type: 'Forced Action', description: 'Requiring unnecessary information to proceed', icon: AlertTriangle },
        ]);
        setIsScanning(false);
      }, 2000);
    };

    detectDarkPatterns();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 text-white p-6">
      <Header />
      <main className="mt-8">
        {isScanning ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
            <p className="ml-4 text-xl">Scanning for dark patterns...</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Detected Dark Patterns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {darkPatterns.map((pattern, index) => (
                <DarkPatternCard key={index} pattern={pattern} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;