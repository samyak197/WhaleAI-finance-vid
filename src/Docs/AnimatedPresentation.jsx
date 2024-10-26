import React from 'react';
import { 
  Mail, FileText, Database, Brain, TrendingUp, Check, ArrowRight,
  Clock, AlertCircle, FileImage, Table, Send, Plane, FileSpreadsheet,
  Phone, BarChart, Zap, Search, CircleDollarSign, Shield
} from 'lucide-react';

const VideoAd = () => {
  const [playState, setPlayState] = React.useState('intro');
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [planePosition, setPlanePosition] = React.useState({ x: 0, y: 50 });
  const [showContactInfo, setShowContactInfo] = React.useState(false);

  const pathPoints = {
    'outlook': { x: 20, y: 30 },
    'extraction': { x: 40, y: 50 },
    'processing': { x: 60, y: 40 },
    'output': { x: 80, y: 50 },
    'delivery': { x: 90, y: 30 }
  };

  React.useEffect(() => {
    if (isPlaying) {
      const sequence = ['intro', 'outlook', 'extraction', 'processing', 'output', 'delivery', 'contact'];
      let currentIndex = sequence.indexOf(playState);
      
      const timer = setTimeout(() => {
        if (currentIndex < sequence.length - 1) {
          setPlayState(sequence[currentIndex + 1]);
          setPlanePosition(pathPoints[sequence[currentIndex + 1]] || { x: 90, y: 30 });
        } else {
          setIsPlaying(false);
          setShowContactInfo(true);
        }
      }, 3000); // Reduced from 5000 to 3000ms
      
      return () => clearTimeout(timer);
    }
  }, [playState, isPlaying]);

  const handleStart = () => {
    setIsPlaying(true);
    setShowContactInfo(false);
    setPlayState('intro');
    setPlanePosition({ x: 0, y: 50 });
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <style>
        {`
          @keyframes floatIn {
            0% { transform: translateY(50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes spinGlow {
            0% { transform: rotate(0deg); filter: drop-shadow(0 0 5px #60A5FA); }
            100% { transform: rotate(360deg); filter: drop-shadow(0 0 20px #60A5FA); }
          }
          
          @keyframes dash {
            to { stroke-dashoffset: 0; }
          }
          
          @keyframes planeWobble {
            0%, 100% { transform: translateY(0) rotate(-10deg); }
            50% { transform: translateY(-10px) rotate(-8deg); }
          }
          
          .airplane {
            animation: planeWobble 2s ease-in-out infinite;
          }
          
          .process-path {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: dash 3s linear forwards;
          }
          
          .float-in {
            animation: floatIn 0.4s ease-out forwards;
          }
          
          .spin-glow {
            animation: spinGlow 3s linear infinite;
          }

          .feature-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        `}
      </style>

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {playState === 'intro' && (
          <div className="text-center text-white float-in max-w-4xl">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-400 text-transparent bg-clip-text">
              WahelAI
            </h1>
            <p className="text-3xl text-blue-200 mb-8">Next-Gen AI Document Processing</p>
            <div className="feature-grid mt-8">
              <div className="flex flex-col items-center p-4 bg-white bg-opacity-5 rounded-lg">
                <Zap className="h-8 w-8 text-yellow-400 mb-2" />
                <p className="text-lg">90% Faster Processing</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white bg-opacity-5 rounded-lg">
                <CircleDollarSign className="h-8 w-8 text-green-400 mb-2" />
                <p className="text-lg">Cost Reduction</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white bg-opacity-5 rounded-lg">
                <Shield className="h-8 w-8 text-blue-400 mb-2" />
                <p className="text-lg">99.9% Accuracy</p>
              </div>
            </div>
          </div>
        )}

        {playState === 'outlook' && (
          <div className="text-center text-white float-in">
            <Mail className="h-20 w-20 text-blue-400 mb-4 mx-auto spin-glow" />
            <h2 className="text-3xl font-bold mb-4">Smart Email Processing</h2>
            <div className="flex justify-center space-x-8">
              <div className="text-left">
                <p className="flex items-center text-lg mb-2">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  Auto-classification
                </p>
                <p className="flex items-center text-lg mb-2">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  Multi-format support
                </p>
                <p className="flex items-center text-lg">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  Batch processing
                </p>
              </div>
            </div>
          </div>
        )}

        {playState === 'extraction' && (
          <div className="text-center text-white float-in">
            <Brain className="h-20 w-20 text-purple-400 mb-4 mx-auto spin-glow" />
            <h2 className="text-3xl font-bold mb-4">Advanced AI Extraction</h2>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="text-left">
                <p className="flex items-center text-lg mb-2">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  OCR Enhancement
                </p>
                <p className="flex items-center text-lg">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  Layout Analysis
                </p>
              </div>
              <div className="text-left">
                <p className="flex items-center text-lg mb-2">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  Document Classification
                </p>
                <p className="flex items-center text-lg">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  Data Validation
                </p>
              </div>
            </div>
          </div>
        )}

        {playState === 'processing' && (
          <div className="text-center text-white float-in">
            <Database className="h-20 w-20 text-green-400 mb-4 mx-auto spin-glow" />
            <h2 className="text-3xl font-bold mb-4">Intelligent Processing</h2>
            <div className="flex justify-center space-x-12">
              <div className="text-left">
                <p className="flex items-center text-lg mb-2">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  ML-powered Analysis
                </p>
                <p className="flex items-center text-lg mb-2">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  Pattern Recognition
                </p>
                <p className="flex items-center text-lg">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  Automated Validation
                </p>
              </div>
              <div className="text-left">
                <p className="flex items-center text-lg mb-2">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  Error Detection
                </p>
                <p className="flex items-center text-lg mb-2">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  Data Enrichment
                </p>
                <p className="flex items-center text-lg">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  Real-time Processing
                </p>
              </div>
            </div>
          </div>
        )}

        {playState === 'output' && (
          <div className="text-center text-white float-in">
            <div className="flex justify-center space-x-6 mb-6">
              <FileSpreadsheet className="h-16 w-16 text-yellow-400 spin-glow" />
              <Table className="h-16 w-16 text-blue-400 spin-glow" />
              <BarChart className="h-16 w-16 text-green-400 spin-glow" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Multi-format Output</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-5 p-3 rounded">
                <p className="text-lg">Excel/CSV</p>
              </div>
              <div className="bg-white bg-opacity-5 p-3 rounded">
                <p className="text-lg">JSON/API</p>
              </div>
              <div className="bg-white bg-opacity-5 p-3 rounded">
                <p className="text-lg">PDF Reports</p>
              </div>
            </div>
          </div>
        )}

        {playState === 'delivery' && (
          <div className="text-center text-white float-in">
            <Send className="h-20 w-20 text-blue-400 mb-4 mx-auto spin-glow" />
            <h2 className="text-3xl font-bold mb-4">Seamless Integration</h2>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="text-left">
                <p className="flex items-center text-lg mb-2">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  API Integration
                </p>
                <p className="flex items-center text-lg">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  Cloud Storage
                </p>
              </div>
              <div className="text-left">
                <p className="flex items-center text-lg mb-2">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  Email Delivery
                </p>
                <p className="flex items-center text-lg">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  Real-time Sync
                </p>
              </div>
            </div>
          </div>
        )}

        {showContactInfo && (
          <div className="text-center text-white float-in">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-red-400 text-transparent bg-clip-text">
              Transform Your Business Today
            </h2>
            <div className="space-y-6 text-xl mb-8">
              <p className="font-bold text-2xl text-blue-300">Samyak Nahar | WahelAI</p>
              <p className="flex items-center justify-center">
                <Phone className="h-6 w-6 mr-3 text-green-400" />
                +91 8080319065
              </p>
              <p className="flex items-center justify-center">
                <Mail className="h-6 w-6 mr-3 text-blue-400" />
                samyaknahar004@gmail.com
              </p>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-full text-xl font-bold hover:opacity-90 transform hover:scale-105 transition-all">
              Schedule a Meeting
            </button>
          </div>
        )}
      </div>

      {/* Animated airplane */}
      {isPlaying && !showContactInfo && (
        <div 
          className="absolute airplane"
          style={{
            left: `${planePosition.x}%`,
            top: `${planePosition.y}%`,
            transition: 'all 0.8s ease-in-out'
          }}
        >
          <Plane className="h-12 w-12 text-red-500 transform -rotate-45" />
          <div className="absolute inset-0 bg-red-500 filter blur-xl opacity-20 animate-pulse" />
        </div>
      )}

      {/* Process flow path */}
      {isPlaying && !showContactInfo && (
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
          <path
            d="M0 200 C200 100, 400 300, 800 100"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            className="process-path"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#F87171" />
            </linearGradient>
          </defs>
        </svg>
      )}

      {/* Play button */}
      {!isPlaying && !showContactInfo && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <button
            onClick={handleStart}
            className="w-24 h-24 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center hover:opacity-90 transition-all transform hover:scale-110 group"
          >
            <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[40px] border-l-white border-b-[20px] border-b-transparent ml-4 group-hover:border-l-blue-100" />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoAd;