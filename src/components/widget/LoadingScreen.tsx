import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-white dark:bg-gray-900 animate-fade-in">
      <div className="text-center">
        <div className="inline-block text-4xl font-bold text-gray-900 dark:text-white mb-8 animate-bounce">
          Deni<span className="text-blue-600 dark:text-blue-400">Setiya</span>
        </div>

        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"
              style={{ 
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
