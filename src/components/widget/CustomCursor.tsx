import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const rippleIdRef = useRef(0);

  useEffect(() => {
    // Check if device is mobile/touch device
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      
      // Create ripple effect
      const rippleId = rippleIdRef.current++;
      const newRipple = { id: rippleId, x: e.clientX, y: e.clientY };
      setRipples(prev => [...prev, newRipple]);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== rippleId));
      }, 600);
    };
    
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      setIsHovering(true);
      
      // Different cursor variants for different elements
      if (target.tagName === 'A') {
        setCursorVariant('link');
      } else if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
        setCursorVariant('button');
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setCursorVariant('text');
      } else {
        setCursorVariant('hover');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, [data-cursor="pointer"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', checkIsMobile);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Don't render cursor on mobile devices
  if (isMobile) return null;

  const getCursorSize = () => {
    switch (cursorVariant) {
      case 'link':
        return { dot: 6, ring: 40 };
      case 'button':
        return { dot: 8, ring: 50 };
      case 'text':
        return { dot: 4, ring: 30 };
      default:
        return { dot: 6, ring: 32 };
    }
  };

  const { dot, ring } = getCursorSize();

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9998] transition-all duration-150 ease-out ${
          isClicking ? 'scale-75' : 'scale-100'
        }`}
        style={{
          left: mousePosition.x - dot / 2,
          top: mousePosition.y - dot / 2,
          width: dot,
          height: dot,
        }}
      >
        <div 
          className={`w-full h-full rounded-full transition-all duration-200 ease-out ${
            cursorVariant === 'text' 
              ? 'bg-blue-500 dark:bg-blue-400' 
              : 'bg-gray-900 dark:bg-white'
          } ${
            isHovering ? 'opacity-80' : 'opacity-100'
          }`}
        />
      </div>

      {/* Cursor ring/follower */}
      <div
        ref={followerRef}
        className={`fixed pointer-events-none z-[9997] transition-all duration-300 ease-out ${
          isHovering ? 'scale-100 opacity-100' : 'scale-75 opacity-60'
        } ${
          isClicking ? 'scale-110' : ''
        }`}
        style={{
          left: mousePosition.x - ring / 2,
          top: mousePosition.y - ring / 2,
          width: ring,
          height: ring,
          transitionDelay: isHovering ? '0ms' : '100ms',
        }}
      >
        <div 
          className={`w-full h-full rounded-full border transition-all duration-300 ease-out ${
            cursorVariant === 'link' 
              ? 'border-blue-500 dark:border-blue-400 border-2' 
              : cursorVariant === 'button'
              ? 'border-green-500 dark:border-green-400 border-2'
              : cursorVariant === 'text'
              ? 'border-purple-500 dark:border-purple-400 border-2'
              : 'border-gray-400 dark:border-gray-500 border-[1px]'
          } ${
            isHovering 
              ? 'bg-transparent' 
              : 'bg-gray-100/20 dark:bg-gray-800/20'
          }`}
        />
        
        {/* Inner glow effect */}
        {isHovering && (
          <div 
            className={`absolute inset-2 rounded-full transition-all duration-300 ease-out ${
              cursorVariant === 'link' 
                ? 'bg-blue-500/10 dark:bg-blue-400/10' 
                : cursorVariant === 'button'
                ? 'bg-green-500/10 dark:bg-green-400/10'
                : cursorVariant === 'text'
                ? 'bg-purple-500/10 dark:bg-purple-400/10'
                : 'bg-gray-500/5 dark:bg-gray-400/5'
            }`}
          />
        )}
      </div>

      {/* Click ripple effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9996] cursor-ripple"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40,
          }}
        >
          <div className="w-full h-full rounded-full border-2 border-blue-500/30 dark:border-blue-400/30" />
        </div>
      ))}

      {/* Cursor text indicator */}
      {isHovering && cursorVariant === 'link' && (
        <div
          className="fixed pointer-events-none z-[9997] text-xs font-medium text-blue-600 dark:text-blue-400 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-lg border border-gray-200/50 dark:border-gray-700/50 transition-all duration-200 ease-out"
          style={{
            left: mousePosition.x + 20,
            top: mousePosition.y - 30,
          }}
        >
          Click
        </div>
      )}

      {/* Magnetic effect for buttons */}
      {isHovering && cursorVariant === 'button' && (
        <div
          className="fixed pointer-events-none z-[9995] w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"
          style={{
            left: mousePosition.x - 4,
            top: mousePosition.y - 4,
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
