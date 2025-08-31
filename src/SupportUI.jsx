import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  Clock, 
  CheckCircle, 
  Search,
  Zap,
  Menu,
  Activity,
  Database,
  Cpu,
  Wifi,
  HardDrive,
  BarChart3,
  PlayCircle,
  PauseCircle,
  Star,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown
} from 'lucide-react';

const CustomerSupportUI = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "CADENCE AI SUPPORT ENGINE INITIALIZED. Neural networks online. How may I assist you today?",
      timestamp: new Date(Date.now() - 2000),
      suggestions: ['System diagnostics', 'Account analysis', 'Performance metrics', 'Issue resolution']
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [aiProcessing, setAiProcessing] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [systemMetrics, setSystemMetrics] = useState({
    cpu: 23,
    memory: 67,
    network: 89,
    satisfaction: 95.7,
    responseTime: 1.2,
    resolution: 89.3,
    uptime: 99.9
  });
  const [ticketFilter, setTicketFilter] = useState('all');
  const [realTimeData, setRealTimeData] = useState([]);
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const profileDropdownRef = useRef(null);

  // User profile data
  const userProfile = {
    name: 'Sarah Mitchell',
    email: 'sarah.mitchell@cadence.com',
    role: 'Senior Support Agent',
    avatar: null, // Will use initials
    status: 'online'
  };

  const tickets = [
    { id: 1, customer: 'John Doe', subject: 'Payment Processing Error', status: 'active', priority: 'high', lastUpdate: '2 min ago', messages: 12, severity: 'critical', progress: 75 },
    { id: 2, customer: 'Sarah Wilson', subject: 'Product Return Request', status: 'pending', priority: 'medium', lastUpdate: '15 min ago', messages: 8, severity: 'medium', progress: 45 },
    { id: 3, customer: 'Mike Chen', subject: 'Account Access Denied', status: 'resolved', priority: 'low', lastUpdate: '1 hour ago', messages: 5, severity: 'low', progress: 100 },
    { id: 4, customer: 'Emma Davis', subject: 'Shipping Delay Notification', status: 'active', priority: 'high', lastUpdate: '3 min ago', messages: 15, severity: 'high', progress: 30 }
  ];

  const aiSuggestions = [
    "Initiating payment gateway diagnostic sequence. Analyzing transaction logs...",
    "Return authorization protocol activated. Generating RMA token: CDN-2024-08-31-001",
    "Account verification complete. Deploying secure credential reset to registered endpoint.",
    "Real-time shipment tracking engaged. Carrier API synchronized. ETA recalculated."
  ];

  // Simulate real-time system monitoring
  useEffect(() => {
    if (!isMonitoring) return;

    const interval = setInterval(() => {
      setSystemMetrics(prev => ({
        cpu: Math.max(10, Math.min(90, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(20, Math.min(95, prev.memory + (Math.random() - 0.5) * 8)),
        network: Math.max(60, Math.min(99, prev.network + (Math.random() - 0.5) * 5)),
        satisfaction: Math.max(90, Math.min(99, prev.satisfaction + (Math.random() - 0.5) * 2)),
        responseTime: Math.max(0.8, Math.min(3.0, prev.responseTime + (Math.random() - 0.5) * 0.3)),
        resolution: Math.max(85, Math.min(95, prev.resolution + (Math.random() - 0.5) * 3)),
        uptime: Math.max(99.0, Math.min(100, prev.uptime + (Math.random() - 0.5) * 0.1))
      }));

      // Add real-time data points
      const timestamp = Date.now();
      setRealTimeData(prev => {
        const newData = [...prev, { 
          time: timestamp, 
          value: Math.random() * 100,
          cpu: systemMetrics.cpu,
          network: systemMetrics.network 
        }].slice(-20);
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isMonitoring, systemMetrics.cpu, systemMetrics.network]);

  // Handle clicking outside profile dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    setAiProcessing(true);

    // Simulate AI processing with realistic delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: aiSuggestions[Math.floor(Math.random() * aiSuggestions.length)],
        timestamp: new Date(),
        confidence: Math.floor(Math.random() * 20) + 80,
        processingTime: (Math.random() * 1000 + 500).toFixed(0),
        suggestions: ['Execute solution', 'Require human oversight', 'Generate detailed report', 'Schedule follow-up']
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
      setAiProcessing(false);
    }, Math.random() * 2000 + 1000);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
  };

  const handleProfileAction = (action) => {
    setProfileDropdownOpen(false);
    // In a real app, these would navigate or trigger actual functionality
    switch(action) {
      case 'profile':
        console.log('Opening profile settings...');
        break;
      case 'settings':
        console.log('Opening account settings...');
        break;
      case 'help':
        console.log('Opening help documentation...');
        break;
      case 'signout':
        console.log('Signing out...');
        break;
      default:
        break;
    }
  };

  const getUserInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const filteredTickets = ticketFilter === 'all' 
    ? tickets 
    : tickets.filter(ticket => ticket.status === ticketFilter);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Theme-aware color classes
  const themeClasses = {
    background: theme === 'dark' ? 'bg-slate-950' : 'bg-gray-50',
    text: theme === 'dark' ? 'text-slate-100' : 'text-gray-900',
    sidebar: theme === 'dark' ? 'bg-slate-900/50 border-slate-800/50' : 'bg-white/90 border-gray-200/50',
    card: theme === 'dark' ? 'bg-slate-800/30 border-slate-700/50' : 'bg-white border-gray-200',
    cardHover: theme === 'dark' ? 'hover:bg-slate-800/50 hover:border-slate-600/50' : 'hover:bg-gray-50 hover:border-gray-300',
    input: theme === 'dark' ? 'bg-slate-800/50 border-slate-700/50 text-slate-200 placeholder-slate-500' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500',
    button: theme === 'dark' ? 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:bg-slate-700/50' : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200',
    secondaryText: theme === 'dark' ? 'text-slate-400' : 'text-gray-600',
    accent: theme === 'dark' ? 'text-slate-300' : 'text-gray-800',
    messagesBg: theme === 'dark' ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-gray-50 to-gray-100',
    chatHeader: theme === 'dark' ? 'bg-slate-900/50 border-slate-800/50' : 'bg-white/90 border-gray-200/50',
    performancePanel: theme === 'dark' ? 'bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 border-slate-700/50' : 'bg-gradient-to-r from-white/80 via-gray-50/80 to-white/80 border-gray-300/50'
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'pending': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'resolved': return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-400';
      case 'high': return 'text-orange-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-emerald-400';
      default: return 'text-slate-400';
    }
  };

  const getMetricColor = (value, type) => {
    if (type === 'cpu' || type === 'memory') {
      if (value > 80) return 'from-red-500 to-orange-500';
      if (value > 60) return 'from-yellow-500 to-orange-500';
      return 'from-emerald-500 to-teal-500';
    }
    return 'from-blue-500 to-cyan-500';
  };

  const MetricBar = ({ value, type, label }) => (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className={`font-mono ${themeClasses.accent}`}>{label}</span>
        <span className={`font-bold ${theme === 'dark' ? 'text-slate-200' : 'text-gray-800'}`}>{typeof value === 'number' ? value.toFixed(1) : value}%</span>
      </div>
      <div className={`w-full h-2 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-slate-700' : 'bg-gray-300'}`}>
        <div 
          className={`h-full bg-gradient-to-r ${getMetricColor(value, type)} transition-all duration-1000 ease-out`}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        ></div>
      </div>
    </div>
  );

  const MiniChart = ({ data }) => {
    if (data.length < 2) return null;
    
    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));
    const range = maxValue - minValue || 1;
    
    return (
      <div className="h-8 flex items-end space-x-0.5">
        {data.slice(-10).map((point, index) => {
          const height = ((point.value - minValue) / range) * 24 + 4;
          return (
            <div 
              key={index}
              className="w-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-sm opacity-70 transition-all duration-300"
              style={{ height: `${height}px` }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className={`h-screen ${themeClasses.background} ${themeClasses.text} flex font-mono transition-colors duration-300`}>
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-80' : 'w-25'} ${themeClasses.sidebar} backdrop-blur-xl transition-all duration-300 flex flex-col`}>
        {/* Header */}
        <div className={`p-4 border-b ${theme === 'dark' ? 'border-slate-800/50' : 'border-gray-200/50'} flex items-center justify-between`}>
          {sidebarOpen && (
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent animate-pulse">
                CADENCE AI
              </h1>
              <p className={`text-xs font-medium tracking-wide ${themeClasses.secondaryText}`}>SUPPORT INTELLIGENCE</p>
            </div>
          )}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-md transition-all duration-200 border ${
                theme === 'dark' 
                  ? 'hover:bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50 text-slate-400 hover:text-slate-200' 
                  : 'hover:bg-gray-100 border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-900'
              }`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`p-2 rounded-md transition-all duration-200 border ${
                theme === 'dark' 
                  ? 'hover:bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50 text-slate-400' 
                  : 'hover:bg-gray-100 border-gray-300 hover:border-gray-400 text-gray-600'
              }`}
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>

        {sidebarOpen && (
          <>
            {/* System Metrics */}
            <div className={`p-4 border-b ${theme === 'dark' ? 'border-slate-800/50' : 'border-gray-200/50'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-bold tracking-wider ${themeClasses.accent}`}>SYSTEM METRICS</span>
                <button 
                  onClick={() => setIsMonitoring(!isMonitoring)}
                  className={`flex items-center text-xs transition-colors ${
                    theme === 'dark' ? 'text-slate-400 hover:text-slate-200' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {isMonitoring ? <PauseCircle className="w-3 h-3 mr-1" /> : <PlayCircle className="w-3 h-3 mr-1" />}
                  {isMonitoring ? 'PAUSE' : 'RESUME'}
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <MetricBar value={systemMetrics.cpu} type="cpu" label="CPU" />
                  <Cpu className="w-4 h-4 text-blue-400 ml-2" />
                </div>
                <div className="flex items-center justify-between">
                  <MetricBar value={systemMetrics.memory} type="memory" label="MEMORY" />
                  <HardDrive className="w-4 h-4 text-purple-400 ml-2" />
                </div>
                <div className="flex items-center justify-between">
                  <MetricBar value={systemMetrics.network} type="network" label="NETWORK" />
                  <Wifi className="w-4 h-4 text-emerald-400 ml-2" />
                </div>
              </div>

              {/* Real-time Chart */}
              <div className={`mt-3 p-2 rounded-md border ${
                theme === 'dark' 
                  ? 'bg-slate-800/30 border-slate-700/30' 
                  : 'bg-gray-100/50 border-gray-300/30'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-medium ${themeClasses.accent}`}>REAL-TIME ACTIVITY</span>
                  <Activity className="w-3 h-3 text-teal-400" />
                </div>
                <MiniChart data={realTimeData} />
              </div>
            </div>

            {/* Quick Filters */}
            <div className={`p-4 border-b ${theme === 'dark' ? 'border-slate-800/50' : 'border-gray-200/50'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-bold tracking-wider ${themeClasses.accent}`}>TICKET FILTERS</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {['all', 'active', 'pending', 'resolved'].map(filter => (
                  <button
                    key={filter}
                    onClick={() => setTicketFilter(filter)}
                    className={`px-2 py-1 text-xs font-bold rounded border transition-all ${
                      ticketFilter === filter
                        ? 'bg-blue-500/30 border-blue-500/50 text-blue-300'
                        : theme === 'dark'
                          ? 'bg-slate-800/30 border-slate-700/30 text-slate-400 hover:text-slate-200 hover:border-slate-600/50'
                          : 'bg-gray-100 border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400'
                    }`}
                  >
                    {filter.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className={`p-4 border-b ${theme === 'dark' ? 'border-slate-800/50' : 'border-gray-200/50'}`}>
              <div className="relative">
                <Search className={`w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${themeClasses.secondaryText}`} />
                <input
                  type="text"
                  placeholder="Search tickets..."
                  className={`w-full pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-sm transition-all ${themeClasses.input}`}
                />
              </div>
            </div>

            {/* Tickets List */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-xs font-bold tracking-wider ${themeClasses.accent}`}>INCIDENT QUEUE</h3>
                  <span className={`text-xs font-mono ${themeClasses.secondaryText}`}>{filteredTickets.length} TICKETS</span>
                </div>
                <div className="space-y-2">
                  {filteredTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      onClick={() => setSelectedTicket(ticket)}
                      className={`p-3 rounded-md border cursor-pointer transition-all duration-200 hover:scale-[1.02] ${
                        selectedTicket?.id === ticket.id 
                          ? 'border-blue-500/50 bg-blue-500/10 shadow-lg shadow-blue-500/20' 
                          : theme === 'dark'
                            ? 'border-slate-700/50 hover:border-slate-600/50 bg-slate-800/30 hover:bg-slate-800/50'
                            : 'border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 shadow-sm hover:shadow-md'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className={`font-medium text-sm font-mono ${theme === 'dark' ? 'text-slate-200' : 'text-gray-900'}`}>{ticket.customer}</h4>
                        <span className={`px-2 py-1 rounded-md text-xs font-bold border tracking-wide ${getStatusColor(ticket.status)}`}>
                          {ticket.status.toUpperCase()}
                        </span>
                      </div>
                      <p className={`text-sm mb-2 font-mono ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>{ticket.subject}</p>
                      
                      {/* Progress Bar */}
                      <div className="mb-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span className={themeClasses.secondaryText}>PROGRESS</span>
                          <span className={themeClasses.accent}>{ticket.progress}%</span>
                        </div>
                        <div className={`w-full h-1 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-slate-700' : 'bg-gray-300'}`}>
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000"
                            style={{ width: `${ticket.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-xs">
                        <span className={`flex items-center font-mono ${themeClasses.secondaryText}`}>
                          <Clock className="w-3 h-3 mr-1" />
                          {ticket.lastUpdate}
                        </span>
                        <div className="flex items-center space-x-3">
                          <span className={`font-bold tracking-wide ${getSeverityColor(ticket.severity)}`}>
                            {ticket.severity.toUpperCase()}
                          </span>
                          <span className={`font-mono ${themeClasses.secondaryText}`}>{ticket.messages}MSG</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className={`${themeClasses.chatHeader} backdrop-blur-xl p-4`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-md flex items-center justify-center relative overflow-hidden">
                <Bot className="w-5 h-5 text-white z-10" />
                {aiProcessing && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></div>
                )}
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 ${
                  theme === 'dark' ? 'border-slate-900' : 'border-white'
                } ${
                  aiProcessing ? 'bg-yellow-400 animate-pulse' : 'bg-emerald-400'
                }`}></div>
              </div>
              <div className="ml-3">
                <h2 className={`font-bold font-mono ${theme === 'dark' ? 'text-slate-200' : 'text-gray-900'}`}>AI SUPPORT ENGINE</h2>
                <div className="flex items-center text-xs font-mono">
                  <div className={`w-2 h-2 rounded-full mr-2 ${
                    aiProcessing ? 'bg-yellow-400 animate-pulse' : 'bg-emerald-400 animate-pulse'
                  }`}></div>
                  <span className={aiProcessing ? 'text-yellow-400' : 'text-emerald-400'}>
                    {aiProcessing ? 'PROCESSING...' : 'NEURAL NETWORK: ACTIVE'}
                  </span>
                </div>
              </div>
            </div>

            {/* User Profile Dropdown */}
            <div className="relative" ref={profileDropdownRef}>
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className={`flex items-center space-x-3 p-2 rounded-md transition-all hover:scale-105 border ${
                  theme === 'dark' 
                    ? 'hover:bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50' 
                    : 'hover:bg-gray-100 border-gray-300 hover:border-gray-400'
                }`}
              >
                {/* User Avatar */}
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold font-mono">
                      {getUserInitials(userProfile.name)}
                    </span>
                  </div>
                  <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 ${
                    theme === 'dark' ? 'border-slate-900' : 'border-white'
                  } ${
                    userProfile.status === 'online' ? 'bg-emerald-400' : 'bg-gray-400'
                  }`}></div>
                </div>
                
                {/* User Info */}
                <div className="text-left hidden md:block">
                  <div className={`text-sm font-medium font-mono ${theme === 'dark' ? 'text-slate-200' : 'text-gray-900'}`}>
                    {userProfile.name}
                  </div>
                  <div className={`text-xs ${themeClasses.secondaryText}`}>
                    {userProfile.role}
                  </div>
                </div>
                
                <ChevronDown className={`w-4 h-4 transition-transform ${
                  profileDropdownOpen ? 'rotate-180' : ''
                } ${themeClasses.secondaryText}`} />
              </button>

              {/* Dropdown Menu */}
              {profileDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-64 rounded-md shadow-lg backdrop-blur-xl border z-50 ${
                  theme === 'dark' 
                    ? 'bg-slate-800/90 border-slate-700/50' 
                    : 'bg-white/90 border-gray-300/50'
                }`}>
                  {/* User Info Header */}
                  <div className={`px-4 py-3 border-b ${
                    theme === 'dark' ? 'border-slate-700/50' : 'border-gray-200/50'
                  }`}>
                    <div className={`text-sm font-medium font-mono ${theme === 'dark' ? 'text-slate-200' : 'text-gray-900'}`}>
                      {userProfile.name}
                    </div>
                    <div className={`text-xs ${themeClasses.secondaryText} font-mono`}>
                      {userProfile.email}
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                      <span className="text-xs text-emerald-400 font-mono font-bold">ONLINE</span>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-1">
                    <button
                      onClick={() => handleProfileAction('profile')}
                      className={`w-full text-left px-4 py-2 text-sm font-mono flex items-center space-x-3 transition-colors ${
                        theme === 'dark' 
                          ? 'hover:bg-slate-700/50 text-slate-300 hover:text-slate-100' 
                          : 'hover:bg-gray-100 text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      <User className="w-4 h-4" />
                      <span>VIEW PROFILE</span>
                    </button>
                    
                    <button
                      onClick={() => handleProfileAction('settings')}
                      className={`w-full text-left px-4 py-2 text-sm font-mono flex items-center space-x-3 transition-colors ${
                        theme === 'dark' 
                          ? 'hover:bg-slate-700/50 text-slate-300 hover:text-slate-100' 
                          : 'hover:bg-gray-100 text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      <Settings className="w-4 h-4" />
                      <span>ACCOUNT SETTINGS</span>
                    </button>

                    <button
                      onClick={() => handleProfileAction('help')}
                      className={`w-full text-left px-4 py-2 text-sm font-mono flex items-center space-x-3 transition-colors ${
                        theme === 'dark' 
                          ? 'hover:bg-slate-700/50 text-slate-300 hover:text-slate-100' 
                          : 'hover:bg-gray-100 text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      <HelpCircle className="w-4 h-4" />
                      <span>HELP & SUPPORT</span>
                    </button>

                    <div className={`border-t my-1 ${
                      theme === 'dark' ? 'border-slate-700/50' : 'border-gray-200/50'
                    }`}></div>

                    <button
                      onClick={() => handleProfileAction('signout')}
                      className={`w-full text-left px-4 py-2 text-sm font-mono flex items-center space-x-3 transition-colors ${
                        theme === 'dark' 
                          ? 'hover:bg-red-900/20 text-red-400 hover:text-red-300' 
                          : 'hover:bg-red-50 text-red-600 hover:text-red-700'
                      }`}
                    >
                      <LogOut className="w-4 h-4" />
                      <span>SIGN OUT</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${themeClasses.messagesBg}`}>
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
              <div className={`max-w-xs lg:max-w-md ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                <div className={`flex items-center mb-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`w-7 h-7 rounded-md flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    message.type === 'user' 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 order-2 ml-2' 
                      : 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 order-1 mr-2'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <span className={`text-xs font-mono ${themeClasses.secondaryText}`}>
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <div className={`p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-blue-500/90 to-cyan-500/90 text-white border border-blue-400/30 hover:shadow-blue-500/20' 
                    : theme === 'dark'
                      ? 'bg-slate-800/70 border border-slate-700/50 text-slate-100 hover:shadow-slate-700/20'
                      : 'bg-white/90 border border-gray-300/50 text-gray-900 hover:shadow-gray-300/20'
                }`}>
                  <p className="text-sm font-mono leading-relaxed">{message.content}</p>
                  {message.confidence && (
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center text-xs space-x-2">
                        <span className={message.type === 'user' ? 'text-white/80' : themeClasses.secondaryText}>CONFIDENCE:</span>
                        <div className={`w-20 h-1 rounded-full overflow-hidden ${
                          message.type === 'user' ? 'bg-white/30' : theme === 'dark' ? 'bg-slate-600' : 'bg-gray-300'
                        }`}>
                          <div 
                            className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-1000"
                            style={{ width: `${message.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-emerald-400 font-bold">{message.confidence}%</span>
                      </div>
                      {message.processingTime && (
                        <div className={`text-xs ${message.type === 'user' ? 'text-white/80' : themeClasses.secondaryText}`}>
                          PROCESSING TIME: <span className="text-blue-400 font-bold">{message.processingTime}ms</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {message.suggestions && (
                  <div className="mt-2 space-y-1">
                    {message.suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="block w-full text-left px-3 py-2 text-xs text-blue-300 hover:text-blue-200 hover:bg-blue-500/20 rounded-md border border-blue-500/30 hover:border-blue-400/50 transition-all font-mono hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10"
                      >
                        → {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start animate-fadeIn">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className={`rounded-lg p-3 backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-slate-800/70 border-slate-700/50' 
                    : 'bg-white/90 border-gray-300/50'
                }`}>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* AI Performance Panel */}
        <div className={`${themeClasses.performancePanel} backdrop-blur-xl p-4`}>
          <div className="flex items-center mb-3">
            <Zap className="w-4 h-4 text-yellow-400 mr-2 animate-pulse" />
            <span className={`text-xs font-bold tracking-wider ${themeClasses.accent}`}>PERFORMANCE METRICS</span>
            <div className={`ml-auto flex items-center text-xs font-mono ${themeClasses.secondaryText}`}>
              <BarChart3 className="w-3 h-3 mr-1" />
              REAL-TIME
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-mono">
            <div className={`flex items-center justify-between p-3 rounded-md border border-emerald-500/30 hover:border-emerald-400/50 transition-all hover:scale-105 ${
              theme === 'dark' ? 'bg-slate-800/50' : 'bg-emerald-50/80'
            }`}>
              <div>
                <span className={`block ${themeClasses.accent}`}>SATISFACTION</span>
                <span className="text-emerald-400 font-bold text-lg">{systemMetrics.satisfaction.toFixed(1)}%</span>
              </div>
              <CheckCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <div className={`flex items-center justify-between p-3 rounded-md border border-blue-500/30 hover:border-blue-400/50 transition-all hover:scale-105 ${
              theme === 'dark' ? 'bg-slate-800/50' : 'bg-blue-50/80'
            }`}>
              <div>
                <span className={`block ${themeClasses.accent}`}>RESPONSE</span>
                <span className="text-blue-400 font-bold text-lg">{systemMetrics.responseTime.toFixed(1)}s</span>
              </div>
              <Clock className="w-5 h-5 text-blue-400" />
            </div>
            <div className={`flex items-center justify-between p-3 rounded-md border border-purple-500/30 hover:border-purple-400/50 transition-all hover:scale-105 ${
              theme === 'dark' ? 'bg-slate-800/50' : 'bg-purple-50/80'
            }`}>
              <div>
                <span className={`block ${themeClasses.accent}`}>RESOLUTION</span>
                <span className="text-purple-400 font-bold text-lg">{systemMetrics.resolution.toFixed(1)}%</span>
              </div>
              <Star className="w-5 h-5 text-purple-400" />
            </div>
            <div className={`flex items-center justify-between p-3 rounded-md border border-orange-500/30 hover:border-orange-400/50 transition-all hover:scale-105 ${
              theme === 'dark' ? 'bg-slate-800/50' : 'bg-orange-50/80'
            }`}>
              <div>
                <span className={`block ${themeClasses.accent}`}>UPTIME</span>
                <span className="text-orange-400 font-bold text-lg">{systemMetrics.uptime.toFixed(1)}%</span>
              </div>
              <Activity className="w-5 h-5 text-orange-400" />
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className={`${themeClasses.chatHeader} backdrop-blur-xl p-4`}>
          <div className="flex items-end space-x-3">
            <div className="flex-1">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), sendMessage())}
                placeholder="Enter command or query..."
                rows={1}
                className={`w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 resize-none text-sm font-mono transition-all focus:shadow-lg focus:shadow-blue-500/20 ${themeClasses.input}`}
                disabled={aiProcessing}
              />
            </div>
            <button 
              onClick={sendMessage}
              className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-md hover:from-blue-600 hover:to-cyan-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-blue-400/30 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
              disabled={!inputMessage.trim() || aiProcessing}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex justify-end mt-3">
            <div className={`text-xs font-mono ${themeClasses.secondaryText}`}>
              ENTER: SEND | SHIFT+ENTER: NEWLINE
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CustomerSupportUI;