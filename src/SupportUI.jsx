import React, { useState, useEffect, useRef } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
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
  HelpCircle,
  LogOut,
  ChevronDown,
  Plus,
  Filter,
  MoreHorizontal,
  Phone,
  Mail,
  Globe,
  FileText,
 
  BookOpen,
  MessageSquare,
  Headphones,
  ChevronRight,
  Home,
  Ticket,
  History,
  RefreshCw,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import logo from "./images/logo.png";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
`;

const lightTheme = {
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

const darkTheme = {
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

// Styled Components
const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  transition: all 0.2s ease;
`;

const ViewToggle = styled.div`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.cardBorder};
  background-color: ${(props) => props.theme.colors.card};
`;

const ViewToggleButton = styled.button`
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

const Sidebar = styled.div`
  width: ${(props) => (props.open ? "20rem" : "6rem")};
  background-color: ${(props) => props.theme.colors.sidebar};
  border-right: 1px solid ${(props) => props.theme.colors.sidebarBorder};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.sidebarBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SidebarTitle = styled.h1`
  font-size: 1.15rem;
  font-weight: 600;
  color: #3b82f6;
`;

const SidebarSubtitle = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;

const IconButton = styled.button`
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

const Section = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.sidebarBorder};
  overflow: auto;
`;

const SectionTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.75rem;
`;

const QuickActionCard = styled.button`
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

const QuickActionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuickActionTitle = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
  color: ${(props) =>
    props.primary ? props.theme.colors.blue900 : props.theme.colors.text};
`;

const QuickActionDescription = styled.div`
  font-size: 0.75rem;
  color: ${(props) =>
    props.primary ? "#3b82f6" : props.theme.colors.secondaryText};
`;

const AccountCard = styled.div`
  background-color: ${(props) => props.theme.colors.green50};
  padding: 0.75rem;
  border-radius: 0.5rem;
`;

const AccountStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const AccountStatusText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.green900};
`;

const AccountDescription = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.green600};
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const NavItem = styled.a`
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

const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`;

const MetricCard = styled.div`
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

const MetricContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetricLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${(props) => (props.color === "blue" ? "#3b82f6" : "#16a34a")};
`;

const MetricValue = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) =>
    props.color === "blue"
      ? props.theme.colors.blue900
      : props.theme.colors.green900};
`;

const FilterButton = styled.button`
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

const FilterCount = styled.span`
  font-size: 0.75rem;
  background-color: ${(props) => props.theme.colors.gray200};
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
`;

const SearchInput = styled.input`
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

const SearchWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${(props) => props.theme.colors.secondaryText};
  }
`;

const TicketCard = styled.div`
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

const TicketHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const TicketChannelStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StatusBadge = styled.span`
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

const PriorityText = styled.span`
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

const TicketSubject = styled.h4`
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

const TicketCustomer = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.secondaryText};
  margin-bottom: 0.5rem;
`;

const TicketFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;

const TicketTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const TicketMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: ${(props) => props.theme.colors.header};
  border-bottom: 1px solid ${(props) => props.theme.colors.headerBorder};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AIAssistantInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatusIndicator = styled.div`
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

const AIInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AITitle = styled.h2`
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
`;

const AIStatus = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  gap: 0.5rem;
`;

const AIStatusDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => (props.processing ? "#fbbf24" : "#4ade80")};
  animation: ${(props) => (props.processing ? "pulse 2s infinite" : "none")};
`;

const AIStatusText = styled.span`
  font-weight: 500;
  color: ${(props) => (props.processing ? "#d97706" : "#16a34a")};
`;

const ProfileDropdown = styled.div`
  position: relative;
`;

const ProfileButton = styled.button`
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

const UserAvatar = styled.div`
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

const UserStatusDot = styled.div`
  position: absolute;
  bottom: -0.125rem;
  right: -0.125rem;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.header};
  background-color: #4ade80;
`;

const UserInfo = styled.div`
  text-align: left;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const UserName = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
`;

const UserRole = styled.div`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;

const ChevronIcon = styled(ChevronDown)`
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme.colors.secondaryText};
  transition: transform 0.2s ease;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
`;

const DropdownMenu = styled.div`
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

const DropdownHeader = styled.div`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.cardBorder};
`;

const DropdownUserName = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
`;

const DropdownUserEmail = styled.div`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;

const DropdownUserStatus = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  gap: 0.5rem;
`;

const DropdownStatusDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #4ade80;
`;

const DropdownStatusText = styled.span`
  font-size: 0.75rem;
  color: #16a34a;
  font-weight: 500;
`;

const DropdownContent = styled.div`
  padding: 0.25rem 0;
`;

const DropdownItem = styled.button`
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

const DropdownDivider = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.cardBorder};
  margin: 0.25rem 0;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.background};
`;

const MessagesWrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MessageRow = styled.div`
  display: flex;
  justify-content: ${(props) => (props.user ? "flex-end" : "flex-start")};
`;

const MessageContainer = styled.div`
  max-width: 32rem;
  order: ${(props) => (props.user ? "2" : "1")};
`;

const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  justify-content: ${(props) => (props.user ? "flex-end" : "flex-start")};
`;

const MessageAvatar = styled.div`
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

const MessageTime = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;

const MessageBubble = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.user ? "#3b82f6" : props.theme.colors.card};
  color: ${(props) => (props.user ? "#ffffff" : props.theme.colors.text)};
  border: ${(props) =>
    props.user ? "none" : `1px solid ${props.theme.colors.cardBorder}`};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const MessageText = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
`;

const ConfidenceContainer = styled.div`
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${(props) => props.theme.colors.cardBorder};
`;

const ConfidenceRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  gap: 0.5rem;
`;

const ConfidenceLabel = styled.span`
  color: ${(props) => props.theme.colors.secondaryText};
`;

const ConfidenceBar = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.gray200};
  border-radius: 9999px;
  height: 0.5rem;
  margin-right: 0.5rem;
`;

const ConfidenceProgress = styled.div`
  background-color: #22c55e;
  height: 0.5rem;
  border-radius: 9999px;
  width: ${(props) => props.confidence}%;
  transition: width 0.5s ease;
`;

const ConfidenceValue = styled.span`
  color: #16a34a;
  font-weight: 500;
`;

const SuggestionsContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SuggestionButton = styled.button`
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

const TypingIndicator = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const TypingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const TypingAvatar = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TypingBubble = styled.div`
  background-color: ${(props) => props.theme.colors.card};
  border: 1px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 0.5rem;
  padding: 0.75rem;
`;

const TypingDots = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const TypingDot = styled.div`
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

const InputArea = styled.div`
  background-color: ${(props) => props.theme.colors.header};
  border-top: 1px solid ${(props) => props.theme.colors.headerBorder};
  padding: 1rem;
`;

const InputWrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

const InputRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
`;

const InputContainer = styled.div`
  flex: 1;
`;

const MessageInput = styled.textarea`
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

const SendButton = styled.button`
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

const InputFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;

const InputHint = styled.span``;

const MetricsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AccordionContainer = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.cardBorder};
  background-color: ${(props) => props.theme.colors.card};
`;

const AccordionHeader = styled.button`
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
  font-size: 0.875rem;
  font-weight: 500;

  &:hover {
    background-color: ${(props) => props.theme.colors.cardHover};
  }
`;

const AccordionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AccordionIcon = styled(ChevronDown)`
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme.colors.secondaryText};
  transition: transform 0.2s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const AccordionContent = styled.div`
  padding: 0.75rem 1rem;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  border-top: 1px solid ${(props) => props.theme.colors.cardBorder};
  background-color: ${(props) => props.theme.colors.cardHover};
`;

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
                  <img src={logo} style={{width: "8rem"}}
                   alt="Cadence Logo" />
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
                        <AccordionIcon isOpen={genAIAccordionOpen}>
                        </AccordionIcon>
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
                  <AIStatusDot processing={aiProcessing} />
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
                      <HelpCircle size={16} />
                      <span>Help & support</span>
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
