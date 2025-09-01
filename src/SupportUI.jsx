import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
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
  Star,
  Settings,
  LogOut,
  Plus,
  Filter,
  Phone,
  Mail,
  Globe,
  FileText,
  BookOpen,
  MessageSquare,
  Home,
  History,
  RefreshCw,
  HomeIcon,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import logo from "./images/logo.png";
import {
  GlobalStyle,
  lightTheme,
  darkTheme,
  Container,
  ViewToggle,
  ViewToggleButton,
  Sidebar,
  SidebarHeader,
  SidebarTitle,
  SidebarSubtitle,
  IconButton,
  Section,
  SectionTitle,
  QuickActionCard,
  QuickActionContent,
  QuickActionTitle,
  QuickActionDescription,
  AccountCard,
  AccountStatus,
  AccountStatusText,
  AccountDescription,
  NavList,
  NavItem,
  MetricGrid,
  MetricCard,
  MetricContent,
  MetricLabel,
  MetricValue,
  FilterButton,
  FilterCount,
  SearchInput,
  SearchWrapper,
  TicketCard,
  TicketHeader,
  TicketChannelStatus,
  StatusBadge,
  PriorityText,
  TicketSubject,
  TicketCustomer,
  TicketFooter,
  TicketTime,
  TicketMeta,
  MainContent,
  Header,
  AIAssistantInfo,
  AvatarContainer,
  StatusIndicator,
  AIInfo,
  AITitle,
  AIStatus,
  AIStatusDot,
  AIStatusText,
  ProfileDropdown,
  ProfileButton,
  UserAvatar,
  UserStatusDot,
  UserInfo,
  UserName,
  UserRole,
  ChevronIcon,
  DropdownMenu,
  DropdownHeader,
  DropdownUserName,
  DropdownUserEmail,
  DropdownUserStatus,
  DropdownStatusDot,
  DropdownStatusText,
  DropdownContent,
  DropdownItem,
  DropdownDivider,
  MessagesContainer,
  MessagesWrapper,
  MessageRow,
  MessageContainer,
  MessageHeader,
  MessageAvatar,
  MessageTime,
  MessageBubble,
  MessageText,
  ConfidenceContainer,
  ConfidenceRow,
  ConfidenceLabel,
  ConfidenceBar,
  ConfidenceProgress,
  ConfidenceValue,
  SuggestionsContainer,
  SuggestionButton,
  TypingIndicator,
  TypingContainer,
  TypingAvatar,
  TypingBubble,
  TypingDots,
  TypingDot,
  InputArea,
  InputWrapper,
  InputRow,
  InputContainer,
  MessageInput,
  SendButton,
  InputFooter,
  InputHint,
  MetricsRow,
  AccordionContainer,
  AccordionHeader,
  AccordionTitle,
  AccordionIcon,
  AccordionContent,
} from "./styles";

const CustomerSupportUI = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [aiProcessing, setAiProcessing] = useState(false);
  const [theme, setTheme] = useState("light");
  const [viewMode, setViewMode] = useState("customer");
  const [systemMetrics, setSystemMetrics] = useState({
    responseTime: 1.8,
    satisfaction: 96.2,
    resolution: 87.5,
    activeTickets: 24,
  });
  const [ticketFilter, setTicketFilter] = useState("all");
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const [genAIAccordionOpen, setGenAIAccordionOpen] = useState(true);

  // Initialize messages based on view mode
  useEffect(() => {
    if (viewMode === "customer") {
      setMessages([
        {
          id: 1,
          type: "ai",
          content:
            "Welcome to Customer Support with Gen-AI, powered by Cadence Online Support. I provide quick and easy support through access to Cadence Documentation, with citations linking to source documents for accuracy and traceability. I can provide either brief summaries or detailed step-by-step instructions. How can I assist with your EDA challenges today?",
          timestamp: new Date(Date.now() - 2000),
          suggestions: [
            "Brief summary answer",
            "Step-by-step instructions",
            "Filter by product category",
            "Access documentation",
          ],
        },
      ]);
    } else {
      setMessages([
        {
          id: 1,
          type: "ai",
          content:
            "Cadence Gen-AI Support Intelligence active. Powered by Cadence Online Support with full documentation access, citation linking, and precision filtering. Ready to provide both brief summaries and detailed step-by-step customer guidance. What support case requires analysis?",
          timestamp: new Date(Date.now() - 2000),
          suggestions: [
            "Generate brief summary",
            "Create step-by-step guide",
            "Filter by product",
            "Cite documentation",
          ],
        },
      ]);
    }
  }, [viewMode]);

  // User profiles
  const customerProfile = {
    name: "Dr. Alex Chen",
    email: "a.chen@globalchip.com",
    role: "Principal Design Engineer",
    status: "active",
    plan: "Cadence Enterprise Suite",
  };

  const agentProfile = {
    name: "Sarah Mitchell",
    email: "sarah.mitchell@cadence.com",
    role: "Senior Support Engineer",
    status: "available",
  };

  const currentProfile =
    viewMode === "customer" ? customerProfile : agentProfile;

  // Tickets data
  const customerTickets = [
    {
      id: 1,
      subject: "Virtuoso license checkout failure",
      status: "open",
      priority: "high",
      created: "2 days ago",
      lastUpdate: "2 hours ago",
      messages: 3,
      channel: "portal",
    },
    {
      id: 2,
      subject: "Genus synthesis performance optimization",
      status: "solved",
      priority: "normal",
      created: "1 week ago",
      lastUpdate: "3 days ago",
      messages: 5,
      channel: "chat",
    },
    {
      id: 3,
      subject: "Cadence AWR license renewal",
      status: "solved",
      priority: "normal",
      created: "2 weeks ago",
      lastUpdate: "2 weeks ago",
      messages: 2,
      channel: "email",
    },
  ];

  const agentTickets = [
    {
      id: 1,
      customer: {
        name: "Dr. Michael Torres",
        email: "mtorres@quantumcorp.com",
      },
      subject: "Innovus place & route memory issues",
      status: "open",
      priority: "high",
      lastUpdate: "2 minutes ago",
      messages: 3,
      channel: "portal",
      assignee: "You",
    },
    {
      id: 2,
      customer: { name: "Lisa Wang", email: "lwang@nexusemi.com" },
      subject: "Spectre simulator convergence problems",
      status: "pending",
      priority: "normal",
      lastUpdate: "15 minutes ago",
      messages: 5,
      channel: "chat",
      assignee: "You",
    },
    {
      id: 3,
      customer: { name: "Robert Kim", email: "rkim@alphatech.com" },
      subject: "PVS DRC deck customization",
      status: "solved",
      priority: "normal",
      lastUpdate: "1 hour ago",
      messages: 8,
      channel: "phone",
      assignee: "R&D Team",
    },
    {
      id: 4,
      customer: { name: "Dr. Emma Foster", email: "efoster@chipdesign.com" },
      subject: "Allegro PCB constraint manager setup",
      status: "open",
      priority: "low",
      lastUpdate: "3 minutes ago",
      messages: 2,
      channel: "email",
      assignee: "You",
    },
  ];

  const currentTickets =
    viewMode === "customer" ? customerTickets : agentTickets;

  const customerSuggestions = [
    "**Brief Summary:** Virtuoso license checkout resolved. Server connectivity verified to cadence.com:5280. **Citation:** [Virtuoso License Troubleshooting Guide, Section 3.2] - Would you like detailed step-by-step instructions instead?",
    "**Step-by-Step Instructions:** 1) Stop Genus synthesis 2) Update technology libraries from /cadence/libs/updated 3) Restart with -lib_path flag 4) Verify 40% performance improvement **Citation:** [Genus Optimization Manual, Chapter 5.1.3]",
    "**Brief Summary:** AWR license renewed successfully until 2025-12-31. License file updated automatically. **Citation:** [License Management Guide, Section 2.4] - Select 'detailed instructions' for manual license file installation.",
    "**Root Cause Analysis:** Place & route requires 48GB+ RAM for 2.1M instance designs. **Citation:** [Innovus Memory Guidelines, Table 4-2] **Recommendation:** Enable design partitioning or upgrade system memory. Step-by-step partitioning guide available.",
  ];

  const agentSuggestions = [
    "**Customer Analysis:** Memory constraint identified in P&R flow. Design size: 2.1M instances. **Documentation Reference:** [Innovus System Requirements, Section 4.3.1] **Recommended Solution:** System upgrade or design partitioning workflow.",
    "**Technical Resolution:** RF circuit convergence issue traced to device models. **Citation:** [Spectre RF Simulation Guide, Chapter 8.2] **Solution Provided:** Optimized netlist with tighter integration settings. Customer can request brief summary or detailed implementation steps.",
    "**Solution Applied:** 7nm FinFET DRC deck validated against foundry specs. **Documentation:** [PVS Custom Runset Creation, Section 6.1] **Deliverable:** Custom runset generated with citations to foundry design rules.",
    "**Configuration Complete:** DDR5 constraint manager setup per JEDEC specifications. **Reference:** [Allegro High-Speed Design Guide, Chapter 12.4] **Documentation:** Length matching and via constraint documentation attached with step-by-step verification process.",
  ];

  const currentSuggestions =
    viewMode === "customer" ? customerSuggestions : agentSuggestions;

  // Event handlers and effects
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemMetrics((prev) => ({
        responseTime: Math.max(
          0.5,
          Math.min(5.0, prev.responseTime + (Math.random() - 0.5) * 0.5)
        ),
        satisfaction: Math.max(
          85,
          Math.min(100, prev.satisfaction + (Math.random() - 0.5) * 2)
        ),
        resolution: Math.max(
          75,
          Math.min(95, prev.resolution + (Math.random() - 0.5) * 3)
        ),
        activeTickets: Math.max(
          15,
          Math.min(
            50,
            prev.activeTickets + Math.floor((Math.random() - 0.5) * 3)
          )
        ),
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);
    setAiProcessing(true);

    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "ai",
        content:
          currentSuggestions[
            Math.floor(Math.random() * currentSuggestions.length)
          ],
        timestamp: new Date(),
        confidence: Math.floor(Math.random() * 15) + 85,
        suggestions:
          viewMode === "customer"
            ? [
                "That resolves the issue!",
                "I need additional support",
                "Escalate to engineering",
                "Close this session",
              ]
            : [
                "Apply this solution",
                "Requires R&D analysis",
                "Escalate to specialist",
                "Mark case resolved",
              ],
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
      setAiProcessing(false);
    }, Math.random() * 2000 + 1000);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
  };

  const handleProfileAction = (action) => {
    setProfileDropdownOpen(false);
    console.log(`Action: ${action}`);
  };

  const getUserInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const filteredTickets =
    ticketFilter === "all"
      ? currentTickets
      : currentTickets.filter((ticket) => ticket.status === ticketFilter);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const getChannelIcon = (channel) => {
    switch (channel) {
      case "email":
        return <Mail size={16} />;
      case "chat":
        return <MessageCircle size={16} />;
      case "phone":
        return <Phone size={16} />;
      case "portal":
        return <Globe size={16} />;
      default:
        return <Globe size={16} />;
    }
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Container>
        {/* View Mode Toggle */}
        <ViewToggle>
          <ViewToggleButton
            active={viewMode === "customer"}
            onClick={() => setViewMode("customer")}
          >
            Customer Portal
          </ViewToggleButton>
          <ViewToggleButton
            active={viewMode === "agent"}
            onClick={() => setViewMode("agent")}
          >
            Support Console
          </ViewToggleButton>
        </ViewToggle>

        {/* Sidebar */}
        <Sidebar open={sidebarOpen}>
          {/* Header */}
          <SidebarHeader>
            {sidebarOpen && (
              <div>
                <img src={logo} style={{ width: "8rem" }} alt="Cadence Logo" />
                <SidebarTitle>
                  {viewMode === "customer"
                    ? "Support Center"
                    : "Support Dashboard"}
                </SidebarTitle>
                <SidebarSubtitle>
                  {viewMode === "customer"
                    ? "Get help and support"
                    : "Ticket Management"}
                </SidebarSubtitle>
              </div>
            )}
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <IconButton
                onClick={toggleTheme}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                {theme === "dark" ? (
                  <svg
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </IconButton>
              <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Menu size={16} />
              </IconButton>
            </div>
          </SidebarHeader>

          {sidebarOpen && (
            <>
              {viewMode === "customer" ? (
                <>
                  {/* Gen-AI Support Features Accordion */}
                  <Section>
                    <AccordionContainer>
                      <AccordionHeader
                        onClick={() =>
                          setGenAIAccordionOpen(!genAIAccordionOpen)
                        }
                        isOpen={genAIAccordionOpen}
                      >
                        <AccordionTitle>
                          <Zap size={16} />
                          <span>Gen-AI Support Features</span>
                        </AccordionTitle>
                        <AccordionIcon
                          isOpen={genAIAccordionOpen}
                        ></AccordionIcon>
                      </AccordionHeader>

                      <AccordionContent isOpen={genAIAccordionOpen}>
                        <div
                          style={{
                            padding: "0.75rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                          }}
                        >
                          <QuickActionCard primary>
                            <MessageSquare size={20} color="#3b82f6" />
                            <QuickActionContent>
                              <QuickActionTitle primary>
                                Access Documentation
                              </QuickActionTitle>
                              <QuickActionDescription primary>
                                With citations and traceability
                              </QuickActionDescription>
                            </QuickActionContent>
                          </QuickActionCard>
                          <QuickActionCard>
                            <BookOpen size={20} />
                            <QuickActionContent>
                              <QuickActionTitle>
                                Answer Formats
                              </QuickActionTitle>
                              <QuickActionDescription>
                                Brief summary or step-by-step
                              </QuickActionDescription>
                            </QuickActionContent>
                          </QuickActionCard>
                          <QuickActionCard>
                            <Filter size={20} />
                            <QuickActionContent>
                              <QuickActionTitle>
                                Product Filtering
                              </QuickActionTitle>
                              <QuickActionDescription>
                                Precise category-based answers
                              </QuickActionDescription>
                            </QuickActionContent>
                          </QuickActionCard>
                        </div>
                      </AccordionContent>
                    </AccordionContainer>
                  </Section>

                  {/* Navigation */}
                  <Section>
                    <NavList>
                      <NavItem active>
                        <Home size={16} />
                        <span>Gen-AI Portal</span>
                      </NavItem>
                      <NavItem>
                        <FileText size={16} />
                        <span>Documentation</span>
                      </NavItem>
                      <NavItem>
                        <History size={16} />
                        <span>My Cases</span>
                      </NavItem>
                      <NavItem>
                        <Phone size={16} />
                        <span>Technical Hotline</span>
                      </NavItem>
                    </NavList>
                  </Section>

                  {/* Recent Tickets */}
                  <Section>
                    <SectionTitle>Recent Support Cases</SectionTitle>
                    {customerTickets.slice(0, 3).map((ticket) => (
                      <TicketCard
                        key={ticket.id}
                        selected={selectedTicket?.id === ticket.id}
                        onClick={() => setSelectedTicket(ticket)}
                      >
                        <TicketHeader>
                          <StatusBadge status={ticket.status}>
                            {ticket.status}
                          </StatusBadge>
                        </TicketHeader>
                        <TicketSubject>{ticket.subject}</TicketSubject>
                        <p
                          style={{
                            fontSize: "0.75rem",
                            color: currentTheme.colors.secondaryText,
                          }}
                        >
                          {ticket.lastUpdate}
                        </p>
                      </TicketCard>
                    ))}
                  </Section>
                </>
              ) : (
                <>
                  {/* Performance Overview */}
                  <Section>
                    <SectionTitle>Support Metrics</SectionTitle>
                    <MetricGrid>
                      <MetricCard color="blue">
                        <MetricContent>
                          <MetricLabel color="blue">Active Cases</MetricLabel>
                          <MetricValue color="blue">
                            {systemMetrics.activeTickets}
                          </MetricValue>
                        </MetricContent>
                        <MessageCircle size={20} color="#3b82f6" />
                      </MetricCard>
                      <MetricCard color="green">
                        <MetricContent>
                          <MetricLabel color="green">
                            Customer Success
                          </MetricLabel>
                          <MetricValue color="green">
                            {systemMetrics.satisfaction.toFixed(1)}%
                          </MetricValue>
                        </MetricContent>
                        <Star size={20} color="#16a34a" />
                      </MetricCard>
                    </MetricGrid>
                  </Section>

                  {/* Ticket Views */}
                  <Section>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <SectionTitle>Case Views</SectionTitle>
                      <IconButton>
                        <Plus size={16} />
                      </IconButton>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.25rem",
                      }}
                    >
                      {[
                        {
                          key: "all",
                          label: "All cases",
                          count: agentTickets.length,
                        },
                        {
                          key: "open",
                          label: "Active",
                          count: agentTickets.filter((t) => t.status === "open")
                            .length,
                        },
                        {
                          key: "pending",
                          label: "Engineering Review",
                          count: agentTickets.filter(
                            (t) => t.status === "pending"
                          ).length,
                        },
                        {
                          key: "solved",
                          label: "Resolved",
                          count: agentTickets.filter(
                            (t) => t.status === "solved"
                          ).length,
                        },
                      ].map((filter) => (
                        <FilterButton
                          key={filter.key}
                          active={ticketFilter === filter.key}
                          onClick={() => setTicketFilter(filter.key)}
                        >
                          <span>{filter.label}</span>
                          <FilterCount>{filter.count}</FilterCount>
                        </FilterButton>
                      ))}
                    </div>
                  </Section>

                  {/* Search */}
                  <Section>
                    <SearchWrapper>
                      <Search size={16} />
                      <SearchInput placeholder="Search support cases..." />
                    </SearchWrapper>
                  </Section>

                  {/* Tickets List */}
                  <div style={{ flex: 1, overflowY: "auto", padding: "1rem" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <SectionTitle>
                        {ticketFilter === "all"
                          ? "All Support Cases"
                          : ticketFilter === "open"
                          ? "Active Cases"
                          : ticketFilter === "pending"
                          ? "Engineering Review"
                          : ticketFilter === "solved"
                          ? "Resolved Cases"
                          : ticketFilter.charAt(0).toUpperCase() +
                            ticketFilter.slice(1) +
                            " Cases"}
                        ({filteredTickets.length})
                      </SectionTitle>
                    </div>
                    {filteredTickets.map((ticket) => (
                      <TicketCard
                        key={ticket.id}
                        selected={selectedTicket?.id === ticket.id}
                        onClick={() => setSelectedTicket(ticket)}
                      >
                        <TicketHeader>
                          <TicketChannelStatus>
                            {getChannelIcon(ticket.channel)}
                            <StatusBadge status={ticket.status}>
                              {ticket.status}
                            </StatusBadge>
                          </TicketChannelStatus>
                          <PriorityText priority={ticket.priority}>
                            {ticket.priority}
                          </PriorityText>
                        </TicketHeader>

                        <TicketSubject>{ticket.subject}</TicketSubject>
                        <TicketCustomer>{ticket.customer.name}</TicketCustomer>

                        <TicketFooter>
                          <TicketTime>
                            <Clock size={12} />
                            <span>{ticket.lastUpdate}</span>
                          </TicketTime>
                          <TicketMeta>
                            <span>{ticket.messages} replies</span>
                            <span>{ticket.assignee}</span>
                          </TicketMeta>
                        </TicketFooter>
                      </TicketCard>
                    ))}
                  </div>
                </>
              )}
              {/* Account Overview */}
              <Section>
                <SectionTitle>Your License Status</SectionTitle>
                <AccountCard>
                  <AccountStatus>
                    <AccountStatusText>
                      Cadence Enterprise Suite
                    </AccountStatusText>
                    <CheckCircle size={16} color="#16a34a" />
                  </AccountStatus>
                  <AccountDescription>
                    Full Gen-AI support enabled
                  </AccountDescription>
                </AccountCard>
              </Section>
            </>
          )}
        </Sidebar>

        {/* Main Content */}
        <MainContent>
          {/* Header */}
          <Header>
            <AIAssistantInfo>
              <AvatarContainer>
                <Bot size={20} color="white" />
                <StatusIndicator processing={aiProcessing} />
              </AvatarContainer>
              <AIInfo>
                <AITitle>
                  {viewMode === "customer"
                    ? "Customer Support with Gen-AI"
                    : "Gen-AI Support Intelligence"}
                </AITitle>
                <AIStatus>
                  <AIStatusText processing={aiProcessing}>
                    {aiProcessing
                      ? "Analyzing documentation..."
                      : "Powered by Cadence Online Support"}
                  </AIStatusText>
                </AIStatus>
              </AIInfo>
            </AIAssistantInfo>

            {/* User Profile */}
            <ProfileDropdown ref={profileDropdownRef}>
              <ProfileButton
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              >
                <UserAvatar customer={viewMode === "customer"}>
                  <span>{getUserInitials(currentProfile.name)}</span>
                  <UserStatusDot />
                </UserAvatar>

                <UserInfo>
                  <UserName>{currentProfile.name}</UserName>
                  <UserRole>{currentProfile.role}</UserRole>
                </UserInfo>

                <ChevronIcon open={profileDropdownOpen} />
              </ProfileButton>

              {profileDropdownOpen && (
                <DropdownMenu>
                  <DropdownHeader>
                    <DropdownUserName>{currentProfile.name}</DropdownUserName>
                    <DropdownUserEmail>
                      {currentProfile.email}
                    </DropdownUserEmail>
                    <DropdownUserStatus>
                      <DropdownStatusDot />
                      <DropdownStatusText>
                        {viewMode === "customer" ? "Licensed User" : "On Duty"}
                      </DropdownStatusText>
                    </DropdownUserStatus>
                  </DropdownHeader>

                  <DropdownContent>
                    <DropdownItem
                      onClick={() => handleProfileAction("profile")}
                    >
                      <User size={16} />
                      <span>View profile</span>
                    </DropdownItem>

                    <DropdownItem
                      onClick={() => handleProfileAction("settings")}
                    >
                      <Settings size={16} />
                      <span>Settings</span>
                    </DropdownItem>

                    <DropdownItem onClick={() => handleProfileAction("help")}>
                      <HomeIcon size={16} />
                      <a href="https://www.cadence.com/en_US/home.html">
                        Go to Home Page
                      </a>
                    </DropdownItem>

                    <DropdownDivider />

                    <DropdownItem
                      danger
                      onClick={() => handleProfileAction("signout")}
                    >
                      <LogOut size={16} />
                      <span>Sign out</span>
                    </DropdownItem>
                  </DropdownContent>
                </DropdownMenu>
              )}
            </ProfileDropdown>
          </Header>

          {/* Messages */}
          <MessagesContainer>
            <MessagesWrapper>
              {messages.map((message) => (
                <MessageRow key={message.id} user={message.type === "user"}>
                  <MessageContainer user={message.type === "user"}>
                    <MessageHeader user={message.type === "user"}>
                      <MessageAvatar user={message.type === "user"}>
                        {message.type === "user" ? (
                          <User size={16} color="white" />
                        ) : (
                          <Bot size={16} color="white" />
                        )}
                      </MessageAvatar>
                      <MessageTime>
                        {message.timestamp.toLocaleTimeString()}
                      </MessageTime>
                    </MessageHeader>
                    <MessageBubble user={message.type === "user"}>
                      <MessageText>
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                      </MessageText>
                      {message.confidence && (
                        <ConfidenceContainer>
                          <ConfidenceRow>
                            <ConfidenceLabel>Confidence:</ConfidenceLabel>
                            <ConfidenceBar>
                              <ConfidenceProgress
                                confidence={message.confidence}
                              />
                            </ConfidenceBar>
                            <ConfidenceValue>
                              {message.confidence}%
                            </ConfidenceValue>
                          </ConfidenceRow>
                        </ConfidenceContainer>
                      )}
                    </MessageBubble>
                    {message.suggestions && (
                      <SuggestionsContainer>
                        {message.suggestions.map((suggestion, index) => (
                          <SuggestionButton
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion}
                          </SuggestionButton>
                        ))}
                      </SuggestionsContainer>
                    )}
                  </MessageContainer>
                </MessageRow>
              ))}

              {isTyping && (
                <TypingIndicator>
                  <TypingContainer>
                    <TypingAvatar>
                      <Bot size={16} color="white" />
                    </TypingAvatar>
                    <TypingBubble>
                      <TypingDots>
                        <TypingDot delay="0s" />
                        <TypingDot delay="0.1s" />
                        <TypingDot delay="0.2s" />
                      </TypingDots>
                    </TypingBubble>
                  </TypingContainer>
                </TypingIndicator>
              )}
              <div ref={messagesEndRef} />
            </MessagesWrapper>
          </MessagesContainer>

          {/* Input Area */}
          <InputArea>
            <InputWrapper>
              <InputRow>
                <InputContainer>
                  <MessageInput
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" &&
                      !e.shiftKey &&
                      (e.preventDefault(), sendMessage())
                    }
                    placeholder={
                      viewMode === "customer"
                        ? "Describe your EDA tool issue or technical question..."
                        : "Analyze customer's technical issue for resolution..."
                    }
                    rows={1}
                    disabled={aiProcessing}
                  />
                </InputContainer>
                <SendButton
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || aiProcessing}
                >
                  <Send size={16} />
                </SendButton>
              </InputRow>

              <InputFooter>
                <InputHint>
                  Press Enter to send, Shift+Enter for new line
                </InputHint>
                {viewMode === "agent" && (
                  <MetricsRow>
                    <span>
                      Response time: {systemMetrics.responseTime.toFixed(1)}s
                    </span>
                    <span>
                      Success rate: {systemMetrics.resolution.toFixed(1)}%
                    </span>
                  </MetricsRow>
                )}
              </InputFooter>
            </InputWrapper>
          </InputArea>
        </MainContent>
      </Container>
    </ThemeProvider>
  );
};

export default CustomerSupportUI;
