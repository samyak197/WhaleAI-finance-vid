import React from 'react';
import { 
  Mail, FileText, Database, Brain, TrendingUp, Check, ArrowRight,
  Phone, Calendar, Clock, AlertCircle, TrendingDown, Zap,
  Table, FileSpreadsheet, ChevronRight, BarChart, PieChart
} from 'lucide-react';

const AnimatedPresentation = () => {
  const [currentScene, setCurrentScene] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [activePDFs, setActivePDFs] = React.useState([]);
  const [showProcess, setShowProcess] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [showDataFlow, setShowDataFlow] = React.useState(false);

  // Animation for floating PDFs
  React.useEffect(() => {
    if (currentScene === 0) {
      const interval = setInterval(() => {
        setActivePDFs(prev => {
          if (prev.length < 8) {
            return [...prev, { 
              id: Date.now(),
              x: Math.random() * 80 + 10,
              y: Math.random() * 40,
              rotateSpeed: Math.random() * 2 + 1,
              scale: Math.random() * 0.5 + 0.8
            }];
          }
          return prev;
        });
      }, 600);
      return () => clearInterval(interval);
    }
    setActivePDFs([]);
  }, [currentScene]);

  // Process flow animation
  React.useEffect(() => {
    if (currentScene === 2 && isPlaying) {
      setShowProcess(true);
      const stepInterval = setInterval(() => {
        setActiveStep(prev => (prev < 3 ? prev + 1 : prev));
      }, 1500);
      return () => clearInterval(stepInterval);
    } else {
      setShowProcess(false);
      setActiveStep(0);
    }
  }, [currentScene, isPlaying]);

  // Data flow animation
  React.useEffect(() => {
    if (currentScene === 3 && isPlaying) {
      setShowDataFlow(true);
    } else {
      setShowDataFlow(false);
    }
  }, [currentScene, isPlaying]);

  const scenes = [
    {
      title: "The PDF Challenge 📄",
      duration: 5,
      content: (
        <div className="flex flex-col items-center space-y-8">
          <div className="relative h-64 w-full overflow-hidden">
            {/* Floating emails at the top */}
            {[...Array(3)].map((_, i) => (
              <div
                key={`email-${i}`}
                className="absolute animate-float"
                style={{
                  left: `${20 + i * 30}%`,
                  top: '10px',
                  animation: `float ${2 + i * 0.5}s ease-in-out infinite`
                }}
              >
                <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
                  <Mail className="text-blue-400 h-8 w-8 mb-2" />
                  <div className="w-32 h-2 bg-gray-200 rounded mb-1" />
                  <div className="w-24 h-2 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
            
            {/* Floating PDFs */}
            {activePDFs.map((pdf, i) => (
              <div
                key={pdf.id}
                className="absolute"
                style={{
                  left: `${pdf.x}%`,
                  top: `${pdf.y}%`,
                  transform: `scale(${pdf.scale}) perspective(1000px) rotateX(${Math.sin(Date.now() * 0.001 + i) * 10}deg)`,
                  animation: `float ${pdf.rotateSpeed}s ease-in-out infinite`
                }}
              >
                <div className="bg-white p-2 rounded shadow-lg transform hover:scale-110 transition-transform">
                  <FileText className="text-blue-500 h-12 w-12" />
                </div>
              </div>
            ))}
            
            {/* Database at bottom */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="relative animate-bounce">
                <Database className="text-purple-500 h-24 w-24" />
                <div className="absolute top-0 left-0 w-full h-full bg-purple-400 rounded-full filter blur-xl opacity-20 animate-pulse" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl shadow-xl text-white transform hover:scale-105 transition-all perspective-1000">
            <h2 className="text-4xl font-bold mb-4 animate-slide-up">200+ Daily PDFs</h2>
            <p className="text-2xl opacity-90 animate-slide-up-delay">Manual Processing = Time & Error Nightmare</p>
          </div>
        </div>
      )
    },
    {
      title: "Our Intelligent Solution 🚀",
      duration: 6,
      content: (
        <div className="grid grid-cols-2 gap-12 max-w-3xl mx-auto perspective-1000">
          <div className="transform transition-all hover:-translate-y-2 hover:rotate-y-10 animate-slide-left">
            <div className="bg-red-100 p-8 rounded-xl shadow-lg border-2 border-red-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-200 rounded-bl-full opacity-50 animate-pulse" />
              <h3 className="text-2xl font-bold text-red-600 mb-6">Manual Process</h3>
              <div className="space-y-4">
                <div className="flex items-center text-red-500 text-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <Clock className="mr-3 h-6 w-6" /> Hours of Work
                </div>
                <div className="flex items-center text-red-500 text-lg animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <AlertCircle className="mr-3 h-6 w-6" /> Error-Prone
                </div>
                <div className="flex items-center text-red-500 text-lg animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <TrendingDown className="mr-3 h-6 w-6" /> Low Efficiency
                </div>
              </div>
            </div>
          </div>
          
          <div className="transform transition-all hover:-translate-y-2 hover:rotate-y-10 animate-slide-right">
            <div className="bg-green-100 p-8 rounded-xl shadow-lg border-2 border-green-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-200 rounded-bl-full opacity-50 animate-pulse" />
              <h3 className="text-2xl font-bold text-green-600 mb-6">AI Solution</h3>
              <div className="space-y-4">
                <div className="flex items-center text-green-500 text-lg animate-fade-in" style={{animationDelay: '0.8s'}}>
                  <Zap className="mr-3 h-6 w-6" /> Minutes Only
                </div>
                <div className="flex items-center text-green-500 text-lg animate-fade-in" style={{animationDelay: '1s'}}>
                  <Check className="mr-3 h-6 w-6" /> 100% Accurate
                </div>
                <div className="flex items-center text-green-500 text-lg animate-fade-in" style={{animationDelay: '1.2s'}}>
                  <TrendingUp className="mr-3 h-6 w-6" /> High Efficiency
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "How It Works 🔄",
      duration: 8,
      content: (
        <div className="flex flex-col items-center space-y-12">
          <div className="flex items-center justify-between w-full max-w-4xl relative">
            {['Email Reception', 'AI Processing', 'Data Extraction', 'CSV Export'].map((step, i) => (
              <div key={i} className={`flex items-center transition-all duration-500 ${showProcess ? 'opacity-100' : 'opacity-0'} ${i <= activeStep ? 'scale-110' : 'scale-90'}`}>
                <div className="transform transition-all relative perspective-1000">
                  <div className={`bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-lg text-white ${i === activeStep ? 'animate-pulse' : ''} hover:rotate-y-10`}>
                    <p className="font-bold whitespace-nowrap text-lg">{step}</p>
                  </div>
                  {i <= activeStep && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                      <Check className="text-green-500 h-6 w-6" />
                    </div>
                  )}
                </div>
                {i < 3 && (
                  <div className={`mx-4 transition-all duration-500 ${i < activeStep ? 'opacity-100' : 'opacity-30'}`}>
                    <ArrowRight className={`text-blue-500 h-8 w-8 ${i < activeStep ? 'animate-pulse' : ''}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
        title: "Data Flow Visualization 🔄",
        duration: 8,
        content: (
          <div className="relative h-96">
            <div className={`transition-all duration-1000 ${showDataFlow ? 'opacity-100' : 'opacity-0'}`}>
              {/* Email to PDF Flow */}
              <div className="absolute top-4 left-4 transform hover:scale-110 transition-transform">
                <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
                  <Mail className="h-12 w-12 text-blue-500" />
                  <p className="mt-2 font-semibold">Incoming Emails</p>
                </div>
              </div>
              
              <div className="absolute top-4 left-1/3 transform hover:scale-110 transition-transform">
                <div className="bg-indigo-100 p-4 rounded-lg shadow-lg">
                  <FileText className="h-12 w-12 text-indigo-500" />
                  <p className="mt-2 font-semibold">PDF Documents</p>
                </div>
              </div>
              
              {/* AI Processing */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform">
                <div className="bg-purple-100 p-6 rounded-lg shadow-lg">
                  <Brain className="h-16 w-16 text-purple-500 animate-pulse" />
                  <p className="mt-2 font-semibold">AI Processing</p>
                </div>
              </div>
              
              {/* Data Storage */}
              <div className="absolute bottom-1/3 left-1/3 transform hover:scale-110 transition-transform">
                <div className="bg-green-100 p-4 rounded-lg shadow-lg">
                  <Database className="h-12 w-12 text-green-500" />
                  <p className="mt-2 font-semibold">Data Storage</p>
                </div>
              </div>
              
              {/* CSV Export */}
              <div className="absolute bottom-4 right-4 transform hover:scale-110 transition-transform">
                <div className="bg-yellow-100 p-4 rounded-lg shadow-lg">
                  <FileSpreadsheet className="h-12 w-12 text-yellow-600" />
                  <p className="mt-2 font-semibold">CSV Export</p>
                </div>
              </div>
              
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                
                {/* Animated paths */}
                {showDataFlow && (
                  <>
                    <path
                      d="M120 60 L300 60"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      fill="none"
                      className="animate-draw-line"
                    />
                    <path
                      d="M400 60 C500 60, 500 180, 400 180"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      fill="none"
                      className="animate-draw-line"
                    />
                    <path
                      d="M400 220 C300 280, 200 280, 150 280"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      fill="none"
                      className="animate-draw-line"
                    />
                    <path
                      d="M150 320 C250 320, 400 320, 500 320"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      fill="none"
                      className="animate-draw-line"
                    />
                  </>
                )}
              </svg>
              
              {/* Floating particles */}
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-blue-400 opacity-20"
                  style={{
                    width: `${Math.random() * 8 + 4}px`,
                    height: `${Math.random() * 8 + 4}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  <div 
                    className="w-full h-full rounded-full bg-gradient-to-r from-blue-300 to-purple-300 animate-pulse"
                    style={{
                      animationDuration: `${Math.random() * 2 + 1}s`
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      )
    },
    {
      title: "Analytics Dashboard 📊",
      duration: 6,
      content: (
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="transform transition-all hover:-translate-y-2 hover:rotate-y-10 animate-slide-left">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Processing Statistics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Success Rate</span>
                  <div className="flex items-center">
                    <span className="text-green-500 font-bold">98.5%</span>
                    <TrendingUp className="ml-2 h-4 w-4 text-green-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Average Time</span>
                  <div className="flex items-center">
                    <span className="text-blue-500 font-bold">2.3 min</span>
                    <Clock className="ml-2 h-4 w-4 text-blue-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Daily Volume</span>
                  <div className="flex items-center">
                    <span className="text-purple-500 font-bold">234</span>
                    <BarChart className="ml-2 h-4 w-4 text-purple-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="transform transition-all hover:-translate-y-2 hover:rotate-y-10 animate-slide-right">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Performance Metrics</h3>
              <div className="relative h-48">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <PieChart className="w-full h-full text-blue-500 animate-spin-slow" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-700">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  React.useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            if (currentScene < scenes.length - 1) {
              setCurrentScene(c => c + 1);
              return 0;
            } else {
              setIsPlaying(false);
              return 100;
            }
          }
          return prev + (100 / (scenes[currentScene].duration * 10));
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentScene, scenes.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(10deg); }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes slide-up {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes slide-left {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes slide-right {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes draw-line {
            from { stroke-dashoffset: 1000; }
            to { stroke-dashoffset: 0; }
          }
          
          .perspective-1000 {
            perspective: 1000px;
          }
          
          .rotate-y-10:hover {
            transform: rotateY(10deg);
          }
          
          .animate-slide-up { animation: slide-up 0.6s ease-out; }
          .animate-slide-up-delay { animation: slide-up 0.6s ease-out 0.3s both; }
          .animate-slide-left { animation: slide-left 0.8s ease-out; }
          .animate-slide-right { animation: slide-right 0.8s ease-out; }
          .animate-fade-in { animation: fade-in 0.8s ease-out; }
          .animate-draw-line { 
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: draw-line 2s ease-out forwards;
          }
          .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
          }
        `}
      </style>
      
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="h-2 bg-gray-100">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="min-h-[600px] p-8">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-slide-up">
            {scenes[currentScene].title}
          </h1>
          {scenes[currentScene].content}
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-bold hover:opacity-90 transition-all transform hover:scale-105"
            >
              {isPlaying ? "⏸ Pause" : "▶️ Play"}
            </button>
            <button
              onClick={() => {
                setCurrentScene(0);
                setProgress(0);
                setIsPlaying(false);
              }}
              className="px-8 py-3 bg-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-300 transition-all transform hover:scale-105"
            >
              🔄 Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedPresentation;