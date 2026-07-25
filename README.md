# NexusOS - Enterprise Incident Response Platform

NexusOS is an enterprise-grade incident response platform designed for autonomous incident triage, multi-agent coordination, compliance monitoring, and distributed Model Context Protocol (MCP) integrations.

> **Note**: This repository represents **Phase 1: Project Foundation**. It establishes the modular architecture, directory structure, TypeScript configurations, environment placeholders, PostgreSQL database connection wrapper, and minimal dashboard placeholder without active business logic, workflows, or MCP tools.

---

## 🏗️ Architecture & Module Directory Overview

The project is structured modularly to allow seamless extension in future phases:

```
nexus-os/
├── .env.example                  # Environment configuration template
├── README.md                     # Project architecture & module guide
├── package.json                  # Dependencies & execution scripts
├── tsconfig.json                 # Strict TypeScript configuration
├── vite.config.ts                # Vite build & path aliasing setup
├── index.html                    # Single Page App html container
├── src/
│   ├── main.tsx                  # Application bootstrap entry point
│   ├── dashboard/                # Enterprise Dashboard Module
│   │   ├── Dashboard.tsx         # Minimal UI placeholder component
│   │   └── dashboard.css         # Modern dark enterprise theme styles
│   ├── mcps/                     # Distributed MCP Servers (Placeholders)
│   │   ├── security/             # Security MCP Server (threat analysis & containment)
│   │   ├── compliance/           # Compliance MCP Server (regulatory audits & policy)
│   │   ├── mail/                 # Mail MCP Server (alerts & stakeholder communications)
│   │   └── arbitration/          # Arbitration MCP Server (agent conflict resolution)
│   ├── agents/                   # AI Agents Module
│   │   └── coordinator/          # Coordinator Agent (multi-agent orchestration)
│   ├── database/                 # Database Layer
│   │   └── connection.ts         # PostgreSQL connection pool configuration placeholder
│   ├── models/                   # Shared Domain Models (Interfaces & Types)
│   ├── services/                 # Cross-Cutting Shared Services
│   └── config/                   # Central Application & Environment Configuration
```

---

## 📁 Module Descriptions

| Module Path | Purpose & Responsibilities |
| :--- | :--- |
| `src/mcps/security/` | **Security MCP**: Interface for threat isolation, firewall rule updates, and security telemetry analysis. |
| `src/mcps/compliance/` | **Compliance MCP**: Interface for regulatory compliance checks, audit trail verification, and policy enforcement. |
| `src/mcps/mail/` | **Mail MCP**: Interface for outbound automated notifications, email digests, and incident escalation messaging. |
| `src/mcps/arbitration/` | **Arbitration MCP**: Interface for resolving conflicting recommendations between autonomous agents. |
| `src/agents/coordinator/` | **Coordinator Agent**: Multi-agent orchestrator managing event dispatch, workflow state, and plan execution. |
| `src/database/` | **Database Layer**: Manages PostgreSQL connection pooling (`pg.Pool`). Strictly configuration only in Phase 1. |
| `src/dashboard/` | **Enterprise Dashboard**: React-based dashboard displaying system header, brand, and incident state. |
| `src/models/` | **Shared Models**: Centralized TypeScript types and domain entities shared across MCPs and agents. |
| `src/services/` | **Shared Services**: Reusable cross-cutting infrastructure services (logging, bus messaging, caching). |
| `src/config/` | **Configuration**: Environment variable loader and application settings manager. |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.x or higher
- **npm**: v9.x or higher

### Installation & Execution

1. Clone or copy environment variable placeholders:
   ```bash
   cp .env.example .env
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Typecheck project TypeScript files:
   ```bash
   npm run typecheck
   ```

4. Start local development dashboard server:
   ```bash
   npm run dev
   ```

5. Build for production distribution:
   ```bash
   npm run build
   ```

---

## 📌 Phase Roadmap

- [x] **Phase 1**: Project Foundation, TS Architecture, Directory Scaffolding, DB Connection Placeholder, Dashboard UI Placeholder.
- [ ] **Phase 2**: Core Database Schema & Model Definitions.
- [ ] **Phase 3**: Distributed MCP Server Implementations (Security, Compliance, Mail, Arbitration).
- [ ] **Phase 4**: Coordinator AI Agent & Triage Workflows.
- [ ] **Phase 5**: Full Incident Dashboard Integration & Analytics.
