import styled, { createGlobalStyle } from "styled-components";
import { ChevronDown } from "lucide-react";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
`;

export const lightTheme = {
  colors: {
    background: "#f9fafb",
    text: "#111827",
    sidebar: "#ffffff",
    sidebarBorder: "#e5e7eb",
    card: "#ffffff",
    cardBorder: "#e5e7eb",
    cardHover: "#f9fafb",
    input: "#ffffff",
    inputBorder: "#d1d5db",
    secondaryText: "#6b7280",
    header: "#ffffff",
    headerBorder: "#e5e7eb",
    blue50: "#eff6ff",
    blue100: "#dbeafe",
    blue500: "#3b82f6",
    blue600: "#2563eb",
    blue900: "#1e3a8a",
    green50: "#f0fdf4",
    green100: "#dcfce7",
    green400: "#4ade80",
    green500: "#22c55e",
    green600: "#16a34a",
    green900: "#14532d",
    red50: "#fef2f2",
    red100: "#fee2e2",
    red400: "#f87171",
    red600: "#dc2626",
    red800: "#991b1b",
    yellow100: "#fef3c7",
    yellow400: "#fbbf24",
    yellow600: "#d97706",
    yellow800: "#92400e",
    gray100: "#f3f4f6",
    gray200: "#e5e7eb",
    gray300: "#d1d5db",
    gray400: "#9ca3af",
    gray500: "#6b7280",
    gray600: "#4b5563",
    gray700: "#374151",
    gray800: "#1f2937",
    gray900: "#111827",
    blue200: "#bfdbfe",
    blue300: "#93c5fd",
    blue400: "#60a5fa",
    blue700: "#3b82f6",
    blue800: "#2563eb",
  },
};

export const darkTheme = {
  colors: {
    background: "#0f172a",
    text: "#f1f5f9",
    sidebar: "#1e293b",
    sidebarBorder: "#334155",
    card: "#334155",
    cardBorder: "#475569",
    cardHover: "#475569",
    input: "#334155",
    inputBorder: "#475569",
    secondaryText: "#94a3b8",
    header: "#1e293b",
    headerBorder: "#334155",
    blue50: "#1e3a8a",
    blue100: "#1e40af",
    blue500: "#3b82f6",
    blue600: "#2563eb",
    blue900: "#dbeafe",
    green50: "#14532d",
    green100: "#166534",
    green400: "#4ade80",
    green500: "#22c55e",
    green600: "#16a34a",
    green900: "#dcfce7",
    red50: "#991b1b",
    red100: "#dc2626",
    red400: "#f87171",
    red600: "#dc2626",
    red800: "#fee2e2",
    yellow100: "#92400e",
    yellow400: "#fbbf24",
    yellow600: "#d97706",
    yellow800: "#fef3c7",
    gray100: "#374151",
    gray200: "#4b5563",
    gray300: "#6b7280",
    gray400: "#9ca3af",
    gray500: "#6b7280",
    gray600: "#4b5563",
    gray700: "#374151",
    gray800: "#1f2937",
    gray900: "#111827",
    blue200: "#bfdbfe",
    blue300: "#93c5fd",
    blue400: "#60a5fa",
    blue700: "#3b82f6",
    blue800: "#2563eb",
  },
};

// Layout Components
export const Container = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  transition: all 0.2s ease;
`;

export const ViewToggle = styled.div`
  position: fixed;
  top: 6em;
  left: 70%;
  transform: translateX(-50%);
  z-index: 50;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.cardBorder};
  background-color: ${(props) => props.theme.colors.card};
`;

export const ViewToggleButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${(props) => (props.active ? "#3b82f6" : "transparent")};
  color: ${(props) =>
    props.active ? "#ffffff" : props.theme.colors.secondaryText};

  &:hover {
    color: ${(props) => (props.active ? "#ffffff" : props.theme.colors.text)};
  }
`;

// Sidebar Components
export const Sidebar = styled.div`
  width: ${(props) => (props.open ? "20rem" : "6rem")};
  background-color: ${(props) => props.theme.colors.sidebar};
  border-right: 1px solid ${(props) => props.theme.colors.sidebarBorder};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
`;

export const SidebarHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.sidebarBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SidebarTitle = styled.h1`
  font-size: 1.15rem;
  font-weight: 600;
  color: #3b82f6;
`;

export const SidebarSubtitle = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;

export const IconButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${(props) => props.theme.colors.secondaryText};

  &:hover {
    background-color: ${(props) => props.theme.colors.cardHover};
    color: ${(props) => props.theme.colors.text};
  }
`;

export const Section = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.sidebarBorder};
  overflow: auto;
`;

export const SectionTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.75rem;
`;

// Quick Action Components
export const QuickActionCard = styled.button`
  width: 100%;
  text-align: left;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  background-color: ${(props) =>
    props.primary ? props.theme.colors.blue50 : "transparent"};

  &:hover {
    background-color: ${(props) =>
      props.primary
        ? props.theme.colors.blue100
        : props.theme.colors.cardHover};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const QuickActionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuickActionTitle = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
  color: ${(props) =>
    props.primary ? props.theme.colors.blue900 : props.theme.colors.text};
`;

export const QuickActionDescription = styled.div`
  font-size: 0.75rem;
  color: ${(props) =>
    props.primary ? "#3b82f6" : props.theme.colors.secondaryText};
`;

// Account Components
export const AccountCard = styled.div`
  background-color: ${(props) => props.theme.colors.green50};
  padding: 0.75rem;
  border-radius: 0.5rem;
`;

export const AccountStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const AccountStatusText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.green900};
`;

export const AccountDescription = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.green600};
`;

// Navigation Components
export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? props.theme.colors.blue50 : "transparent"};
  color: ${(props) =>
    props.active
      ? props.theme.colors.blue900
      : props.theme.colors.secondaryText};

  &:hover {
    background-color: ${(props) => props.theme.colors.cardHover};
    color: ${(props) => props.theme.colors.text};
  }
`;

// Metric Components
export const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`;

export const MetricCard = styled.div`
  background-color: ${(props) =>
    props.color === "blue"
      ? props.theme.colors.blue50
      : props.theme.colors.green50};
  padding: 0.75rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MetricContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MetricLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${(props) => (props.color === "blue" ? "#3b82f6" : "#16a34a")};
`;

export const MetricValue = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) =>
    props.color === "blue"
      ? props.theme.colors.blue900
      : props.theme.colors.green900};
`;

// Filter Components
export const FilterButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  background-color: ${(props) =>
    props.active ? props.theme.colors.blue100 : "transparent"};
  color: ${(props) =>
    props.active
      ? props.theme.colors.blue900
      : props.theme.colors.secondaryText};

  &:hover {
    background-color: ${(props) => props.theme.colors.cardHover};
    color: ${(props) => props.theme.colors.text};
  }
`;

export const FilterCount = styled.span`
  font-size: 0.75rem;
  background-color: ${(props) => props.theme.colors.gray200};
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
`;

// Search Components
export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem 0.5rem 2.5rem;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.input};
  color: ${(props) => props.theme.colors.text};
  font-size: 0.875rem;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
    border-color: #3b82f6;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.secondaryText};
  }
`;

export const SearchWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${(props) => props.theme.colors.secondaryText};
  }
`;

// Ticket Components
export const TicketCard = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid
    ${(props) => (props.selected ? "#93c5fd" : props.theme.colors.cardBorder)};
  background-color: ${(props) =>
    props.selected ? props.theme.colors.blue50 : props.theme.colors.card};
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 0.75rem;
  box-shadow: ${(props) =>
    props.selected ? "none" : "0 1px 3px 0 rgba(0, 0, 0, 0.1)"};

  &:hover {
    background-color: ${(props) => props.theme.colors.cardHover};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TicketHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const TicketChannelStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StatusBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid;
  background-color: ${(props) => {
    switch (props.status) {
      case "open":
        return props.theme.colors.blue200;
      case "pending":
        return props.theme.colors.yellow100;
      case "solved":
        return props.theme.colors.green100;
      default:
        return props.theme.colors.gray100;
    }
  }};
  color: ${(props) => {
    switch (props.status) {
      case "open":
        return props.theme.colors.blue800;
      case "pending":
        return props.theme.colors.yellow800;
      case "solved":
        return props.theme.colors.green800;
      default:
        return props.theme.colors.gray800;
    }
  }};
  border-color: ${(props) => {
    switch (props.status) {
      case "open":
        return props.theme.colors.red200;
      case "pending":
        return props.theme.colors.yellow200;
      case "solved":
        return props.theme.colors.green200;
      default:
        return props.theme.colors.gray200;
    }
  }};
`;

export const PriorityText = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${(props) => {
    switch (props.priority) {
      case "high":
        return "#dc2626";
      case "normal":
        return "#3b82f6";
      case "low":
        return "#16a34a";
      default:
        return props.theme.colors.secondaryText;
    }
  }};
`;

export const TicketSubject = styled.h4`
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

export const TicketCustomer = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.secondaryText};
  margin-bottom: 0.5rem;
`;

export const TicketFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;

export const TicketTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const TicketMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

// Main Content Components
export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  background-color: ${(props) => props.theme.colors.header};
  border-bottom: 1px solid ${(props) => props.theme.colors.headerBorder};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// AI Assistant Components
export const AIAssistantInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const AvatarContainer = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatusIndicator = styled.div`
  position: absolute;
  bottom: -0.25rem;
  right: -0.25rem;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.header};
  background-color: ${(props) => (props.processing ? "#fbbf24" : "#4ade80")};
  animation: ${(props) => (props.processing ? "pulse 2s infinite" : "none")};

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

export const AIInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AITitle = styled.h2`
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
`;

export const AIStatus = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  gap: 0.5rem;
`;

export const AIStatusDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => (props.processing ? "#fbbf24" : "#4ade80")};
  animation: ${(props) => (props.processing ? "pulse 2s infinite" : "none")};
`;

export const AIStatusText = styled.span`
  font-weight: 500;
  color: ${(props) => (props.processing ? "#d97706" : "#16a34a")};
`;

// Profile Components
export const ProfileDropdown = styled.div`
  position: relative;
`;

export const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.cardHover};
  }
`;

export const UserAvatar = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  background: ${(props) =>
    props.customer
      ? "linear-gradient(135deg, #22c55e, #10b981)"
      : "linear-gradient(135deg, #a855f7, #ec4899)"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const UserStatusDot = styled.div`
  position: absolute;
  bottom: -0.125rem;
  right: -0.125rem;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.header};
  background-color: #4ade80;
`;

export const UserInfo = styled.div`
  text-align: left;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const UserName = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
`;

export const UserRole = styled.div`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;

export const ChevronIcon = styled(ChevronDown)`
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme.colors.secondaryText};
  transition: transform 0.2s ease;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 16rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid ${(props) => props.theme.colors.cardBorder};
  background-color: ${(props) => props.theme.colors.card};
  z-index: 50;
`;

export const DropdownHeader = styled.div`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.cardBorder};
`;

export const DropdownUserName = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
`;

export const DropdownUserEmail = styled.div`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;

export const DropdownUserStatus = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  gap: 0.5rem;
`;

export const DropdownStatusDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #4ade80;
`;

export const DropdownStatusText = styled.span`
  font-size: 0.75rem;
  color: #16a34a;
  font-weight: 500;
`;

export const DropdownContent = styled.div`
  padding: 0.25rem 0;
`;

export const DropdownItem = styled.button`
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${(props) => (props.danger ? "#dc2626" : props.theme.colors.text)};

  &:hover {
    background-color: ${(props) =>
      props.danger ? "#fef2f2" : props.theme.colors.cardHover};
  }
`;

export const DropdownDivider = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.cardBorder};
  margin: 0.25rem 0;
`;

// Messages Components
export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.background};
`;

export const MessagesWrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const MessageRow = styled.div`
  display: flex;
  justify-content: ${(props) => (props.user ? "flex-end" : "flex-start")};
`;

export const MessageContainer = styled.div`
  max-width: 32rem;
  order: ${(props) => (props.user ? "2" : "1")};
`;

export const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  justify-content: ${(props) => (props.user ? "flex-end" : "flex-start")};
`;

export const MessageAvatar = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.user ? "#3b82f6" : "linear-gradient(135deg, #a855f7, #ec4899)"};
  order: ${(props) => (props.user ? "2" : "1")};
  margin: ${(props) => (props.user ? "0 0 0 0.75rem" : "0 0.75rem 0 0.5rem")};
`;

export const MessageTime = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;

export const MessageBubble = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.user ? "#3b82f6" : props.theme.colors.card};
  color: ${(props) => (props.user ? "#ffffff" : props.theme.colors.text)};
  border: ${(props) =>
    props.user ? "none" : `1px solid ${props.theme.colors.cardBorder}`};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

export const MessageText = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
`;

// Confidence Components
export const ConfidenceContainer = styled.div`
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${(props) => props.theme.colors.cardBorder};
`;

export const ConfidenceRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  gap: 0.5rem;
`;

export const ConfidenceLabel = styled.span`
  color: ${(props) => props.theme.colors.secondaryText};
`;

export const ConfidenceBar = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.gray200};
  border-radius: 9999px;
  height: 0.5rem;
  margin-right: 0.5rem;
`;

export const ConfidenceProgress = styled.div`
  background-color: #22c55e;
  height: 0.5rem;
  border-radius: 9999px;
  width: ${(props) => props.confidence}%;
  transition: width 0.5s ease;
`;

export const ConfidenceValue = styled.span`
  color: #16a34a;
  font-weight: 500;
`;

// Suggestions Components
export const SuggestionsContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SuggestionButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: #3b82f6;
  border: 1px solid #93c5fd;
  background: transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #1d4ed8;
    background-color: ${(props) => props.theme.colors.blue50};
    border-color: #60a5fa;
  }
`;

// Typing Components
export const TypingIndicator = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const TypingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const TypingAvatar = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TypingBubble = styled.div`
  background-color: ${(props) => props.theme.colors.card};
  border: 1px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 0.5rem;
  padding: 0.75rem;
`;

export const TypingDots = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const TypingDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${(props) => props.theme.colors.secondaryText};
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out;
  animation-delay: ${(props) => props.delay};

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

// Input Components
export const InputArea = styled.div`
  background-color: ${(props) => props.theme.colors.header};
  border-top: 1px solid ${(props) => props.theme.colors.headerBorder};
  padding: 1rem;
`;

export const InputWrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

export const InputRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
`;

export const InputContainer = styled.div`
  flex: 1;
`;

export const MessageInput = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.input};
  color: ${(props) => props.theme.colors.text};
  font-size: 0.875rem;
  resize: none;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
    border-color: #3b82f6;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.secondaryText};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SendButton = styled.button`
  padding: 0.75rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2563eb;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const InputFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;

export const InputHint = styled.span``;

export const MetricsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// Accordion Components
export const AccordionContainer = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.cardBorder};
  background-color: ${(props) => props.theme.colors.card};
`;

export const AccordionHeader = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.isOpen ? props.theme.colors.blue50 : "transparent"};
  color: ${(props) => props.theme.colors.text};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.cardHover};
  }
`;

export const AccordionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
`;

export const AccordionIcon = styled.div`
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme.colors.secondaryText};
  transition: transform 0.2s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const AccordionContent = styled.div`
  padding: 0.75rem 1rem;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  border-top: 1px solid ${(props) => props.theme.colors.cardBorder};
  background-color: ${(props) => props.theme.colors.cardHover};
`;
