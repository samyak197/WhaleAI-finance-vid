import React from 'react';
import { 
  Mail, FileText, Database, Brain, TrendingUp, Check, ArrowRight,
  Clock, AlertCircle, FileImage, Table, Send, Plane, FileSpreadsheet,
  Phone, BarChart, Zap, Search, CircleDollarSign, Shield, File,
  FileCheck, Table2, ArrowDownToLine, FileJson, MessageSquare, Paperclip
} from 'lucide-react';

const VideoAd = () => {
  const [playState, setPlayState] = React.useState('intro');
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [planePosition, setPlanePosition] = React.useState({ x: 0, y: 50 });
  const [showContactInfo, setShowContactInfo] = React.useState(false);

  const pathPoints = {
    'examples': { x: 10, y: 30 },
    'emailIntake': { x: 30, y: 40 },
    'documentTypes': { x: 50, y: 50 },
    'aiProcessing': { x: 70, y: 40 },
    'dataStructuring': { x: 85, y: 50 },
    'delivery': { x: 95, y: 30 }
  };

  React.useEffect(() => {
    if (isPlaying) {
      const sequence = ['intro', 'examples', 'emailIntake', 'documentTypes', 'aiProcessing', 'dataStructuring', 'delivery', 'contact'];
      let currentIndex = sequence.indexOf(playState);
      
      const timer = setTimeout(() => {
        if (currentIndex < sequence.length - 1) {
          setPlayState(sequence[currentIndex + 1]);
          setPlanePosition(pathPoints[sequence[currentIndex + 1]] || { x: 90, y: 30 });
        } else {
          setIsPlaying(false);
          setShowContactInfo(true);
        }
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, [playState, isPlaying]);

  const handleStart = () => {
    setIsPlaying(true);
    setShowContactInfo(false);
    setPlayState('intro');
    setPlanePosition({ x: 0, y: 50 });
  };

  // Sample data for examples
  const sampleEmailData = {
    subject: "Invoice Documents for Processing",
    message: "Hello,\n\nPlease find attached the invoice documents for processing.\n\nBest regards,\nJohn Smith",
    attachments: ["invoice_123.pdf", "receipt_456.jpg"]
  };

  const sampleOutputData = [
    { invoice_no: "INV-123", date: "2024-03-15", amount: "$1,250.00", vendor: "ABC Corp" },
    { invoice_no: "INV-456", date: "2024-03-16", amount: "$890.50", vendor: "XYZ Ltd" },
  ];

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
          
          @keyframes documentFloat {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          
          @keyframes dash {
            to { stroke-dashoffset: 0; }
          }
          
          .float-doc {
            animation: documentFloat 3s ease-in-out infinite;
          }
          
          .process-path {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: dash 3s linear forwards;
          }
          
          .float-in {
            animation: floatIn 0.5s ease-out forwards;
          }
          
          .spin-glow {
            animation: spinGlow 3s linear infinite;
          }
        `}
      </style>

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {playState === 'intro' && (
          <div className="text-center text-white float-in max-w-4xl">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-400 text-transparent bg-clip-text">
              WahelAI Document Processing
            </h1>
            <p className="text-2xl text-blue-200 mb-8">Transforming Unstructured Documents into Structured Data</p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center p-6 bg-white bg-opacity-5 rounded-xl">
                <Zap className="h-12 w-12 text-yellow-400 mb-4" />
                <p className="text-xl">Process 1000s of Documents Daily</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white bg-opacity-5 rounded-xl">
                <Shield className="h-12 w-12 text-blue-400 mb-4" />
                <p className="text-xl">99.9% Extraction Accuracy</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white bg-opacity-5 rounded-xl">
                <CircleDollarSign className="h-12 w-12 text-green-400 mb-4" />
                <p className="text-xl">85% Cost Reduction</p>
              </div>
            </div>
          </div>
        )}

        {playState === 'examples' && (
          <div className="text-center text-white float-in max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">See How It Works</h2>
            <div className="grid grid-cols-2 gap-8">
              {/* Input Example */}
              <div className="bg-white bg-opacity-5 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Input: Email with Attachments</h3>
                <div className="bg-gray-800 p-4 rounded-lg text-left">
                  <div className="flex items-center mb-2">
                    <MessageSquare className="h-5 w-5 mr-2 text-blue-400" />
                    <span className="font-bold">{sampleEmailData.subject}</span>
                  </div>
                  <p className="text-gray-300 whitespace-pre-line mb-4">{sampleEmailData.message}</p>
                  <div className="space-y-2">
                    {sampleEmailData.attachments.map((file, index) => (
                      <div key={index} className="flex items-center text-blue-300">
                        <Paperclip className="h-4 w-4 mr-2" />
                        <span>{file}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output Example */}
              <div className="bg-white bg-opacity-5 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-green-300">Output: Structured Excel Data</h3>
                <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="p-2 text-left text-blue-300">Invoice No</th>
                        <th className="p-2 text-left text-blue-300">Date</th>
                        <th className="p-2 text-left text-blue-300">Amount</th>
                        <th className="p-2 text-left text-blue-300">Vendor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleOutputData.map((row, index) => (
                        <tr key={index} className="border-b border-gray-700">
                          <td className="p-2">{row.invoice_no}</td>
                          <td className="p-2">{row.date}</td>
                          <td className="p-2">{row.amount}</td>
                          <td className="p-2">{row.vendor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
        {playState === 'emailIntake' && (
          <div className="text-center text-white float-in max-w-4xl">
            <Mail className="h-20 w-20 text-blue-400 mb-4 mx-auto spin-glow" />
            <h2 className="text-3xl font-bold mb-6">Smart Email Processing</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-5 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Email Monitoring</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    24/7 inbox monitoring
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Auto-classification of emails
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Attachment detection
                  </li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Smart Filtering</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Spam detection
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Priority sorting
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Batch processing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {playState === 'documentTypes' && (
          <div className="text-center text-white float-in max-w-4xl">
            <div className="flex justify-center space-x-6 mb-8">
              <FileText className="h-16 w-16 text-blue-400 float-doc" />
              <FileImage className="h-16 w-16 text-purple-400 float-doc" />
              <FileJson className="h-16 w-16 text-yellow-400 float-doc" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Multi-Format Document Support</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-5 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Documents</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    PDF Documents
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Word Files
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Text Files
                  </li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Images</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Scanned Documents
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    JPG/PNG Files
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Hand-written Text
                  </li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Data Files</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    CSV Files
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Excel Sheets
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    JSON Data
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {playState === 'aiProcessing' && (
          <div className="text-center text-white float-in max-w-4xl">
            <Brain className="h-20 w-20 text-purple-400 mb-6 mx-auto spin-glow" />
            <h2 className="text-3xl font-bold mb-6">AI-Powered Processing</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-5 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-purple-300">Extraction</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Advanced OCR Technology
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Layout Recognition
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Key-Value Extraction
                  </li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-purple-300">Processing</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Data Validation
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Error Detection
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Format Standardization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {playState === 'dataStructuring' && (
          <div className="text-center text-white float-in max-w-4xl">
            <Table2 className="h-20 w-20 text-green-400 mb-6 mx-auto spin-glow" />
            <h2 className="text-3xl font-bold mb-6">Structured Data Output</h2>
            <div className="bg-white bg-opacity-5 p-6 rounded-xl">
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="p-4 border border-green-400 rounded-lg">
                  <FileCheck className="h-8 w-8 text-green-400 mb-2 mx-auto" />
                  <p className="text-lg">Custom CSV Format</p>
                  <p className="text-sm text-gray-400 mt-2">Tailored to your needs</p>
                </div>
                <div className="p-4 border border-green-400 rounded-lg">
                  <Table className="h-8 w-8 text-green-400 mb-2 mx-auto" />
                  <p className="text-lg">Excel Templates</p>
                  <p className="text-sm text-gray-400 mt-2">Ready for analysis</p>
                </div>
                <div className="p-4 border border-green-400 rounded-lg">
                  <Database className="h-8 w-8 text-green-400 mb-2 mx-auto" />
                  <p className="text-lg">Database Ready</p>
                  <p className="text-sm text-gray-400 mt-2">Instant integration</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-4 text-green-300">Smart Processing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-3" />
                      Custom column mapping
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-3" />
                      Data type validation
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-3" />
                      Automated formatting
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-3" />
                      Field normalization
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-4 text-green-300">Format Options</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-3" />
                      Custom date formats
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-3" />
                      Currency handling
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-3" />
                      Number formatting
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-3" />
                      Text standardization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {playState === 'delivery' && (
          <div className="text-center text-white float-in max-w-4xl">
            <Send className="h-20 w-20 text-blue-400 mb-6 mx-auto spin-glow" />
            <h2 className="text-3xl font-bold mb-6">Seamless Delivery</h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-5 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Auto Export</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Scheduled exports
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Batch processing
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Real-time sync
                  </li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Integration</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    API access
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Webhook support
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Direct DB connect
                  </li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Security</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Encrypted transfer
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Access control
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    Audit logging
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {showContactInfo && (
          <div className="text-center text-white float-in max-w-4xl">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Transform Your Document Processing Today
            </h2>
            <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-white bg-opacity-5 p-6 rounded-xl">
                <div className="flex items-center justify-center mb-4">
                  <Phone className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Contact Sales</h3>
                <p className="text-gray-300 mb-4">Speak with our experts about your needs</p>
                <p className="text-blue-400 text-xl">+91 8080319065</p>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-xl">
                <div className="flex items-center justify-center mb-4">
                  <Mail className="h-12 w-12 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Email Us</h3>
                <p className="text-gray-300 mb-4">Get a custom demo and pricing</p>
                <p className="text-purple-400 text-xl">samyaknahar004@gmail.com</p>
              </div>
            </div>
            <button
              onClick={handleStart}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xl font-bold hover:from-blue-600 hover:to-purple-600 transition-all"
            >
              Watch Demo Again
            </button>
          </div>
        )}
      </div>

      {/* Animated plane and path */}
      {isPlaying && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path
            d={`M 0,150 C 100,100 300,200 400,150`}
            stroke="rgba(96, 165, 250, 0.3)"
            strokeWidth="2"
            fill="none"
            className="process-path"
          />
          <g
            transform={`translate(${planePosition.x}%, ${planePosition.y}%)`}
            className="transition-all duration-1000"
          >
            <Plane className="h-8 w-8 text-blue-400" />
          </g>
        </svg>
      )}

      {/* Start button (only show if not playing and not showing contact info) */}
      {!isPlaying && !showContactInfo && (
        <button
          onClick={handleStart}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xl font-bold hover:from-blue-600 hover:to-purple-600 transition-all flex items-center space-x-2"
        >
          <span>Start Demo</span>
          <ArrowRight className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default VideoAd;
