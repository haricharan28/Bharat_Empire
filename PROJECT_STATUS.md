# Bharat Empire - Project Status Document

**Project:** Bharat Empire - A Multiplayer Monopoly-style Board Game  
**Last Updated:** August 10, 2026  
**Document Version:** 1.0

---

## 📋 Executive Summary

Bharat Empire is a full-stack multiplayer board game application inspired by Monopoly, built with a **Java Spring Boot backend** and an **Angular 19 frontend**. The game supports room-based multiplayer gameplay with property trading, auctions, and real-time game state management.

**Overall Status:** 🟡 **In Active Development** - Core infrastructure complete, gameplay mechanics partially implemented

---

## 🏗️ Architecture Overview

### Technology Stack

| Layer | Technology | Version |
|-------|------------|---------|
| **Backend Framework** | Spring Boot | 3.5.16 |
| **Language** | Java | 17 |
| **Database** | MySQL | 8.0+ |
| **ORM** | Spring Data JPA / Hibernate | - |
| **Build Tool** | Maven | - |
| **Frontend Framework** | Angular | 19.2.15 |
| **UI Library** | Angular Material | 19.2.19 |
| **Styling** | SCSS + Bootstrap | 5.3.8 |
| **Real-time** | WebSocket (planned) | - |
| **Authentication** | Custom (JWT planned) | - |

### Project Structure

```
Bharat_Empire/
├── backend/                 # Spring Boot Application
│   ├── src/main/java/com/bharatempire/backend/
│   │   ├── auth/           # Authentication module
│   │   ├── user/           # User management
│   │   ├── room/           # Room/Lobby management
│   │   ├── game/           # Game logic
│   │   ├── property/       # Property/Board management
│   │   ├── auction/        # Auction system
│   │   └── trade/          # Trading system
│   └── src/main/resources/
│       └── application.properties
└── frontend/               # Angular Application
    ├── src/app/
    │   ├── components/     # UI Components
    │   ├── services/       # API Services
    │   ├── models/         # TypeScript Models
    │   └── app.routes.ts   # Routing Configuration
```

---

## ✅ Completed Features

### Backend (Spring Boot)

#### 1. **User Management** ✅
- **Entity:** `User` - Complete with fields: id, username, password, avatar, coins, gamesPlayed, gamesWon
- **Repository:** `UserRepo` - JPA repository with custom queries (findByUsernameAndPassword)
- **Service:** `UserService` - Basic CRUD operations
- **Controller:** `UserController` - REST endpoints for user management
- **Relationships:** One-to-Many with RoomPlayers, Rooms (hosted)

#### 2. **Authentication Module** ✅
- **Service:** `AuthService` - Login authentication via username/password
- **Controller:** `AuthController` - `/login` and `/register` endpoints
- **Note:** Currently uses plain text passwords (security enhancement needed)

#### 3. **Room/Lobby Management** ✅
- **Entities:**
  - `Room` - Room code, host, maxPlayers, status, player list
  - `RoomPlayers` - Junction table linking users to rooms with ready status
- **Repository:** `RoomRepo`, `RoomPlayersRepo`
- **Service:** `RoomService` with methods:
  - `saveRoom()` - Create new room
  - `joinRoom()` - Join via room code
  - `getPlayers()` - Fetch lobby players
  - `playerReady()` - Toggle ready status
- **Controller:** `RoomController` - REST endpoints for room operations

#### 4. **Game Initialization** ✅
- **Entity:** `Game`, `GamePlayers`, `GameEvent`
- **Service:** `StartGameService` - Validates all players ready before starting
- **Controller:** `StartGameController` - `/game` endpoint

#### 5. **Property System** ✅
- **Entities:**
  - `Property` - Complete Monopoly property model (name, state, boardPosition, price, rent, mortgage, color, type, house/hotel costs)
  - `PropertyOwners` - Tracks property ownership per game
- **Repository:** `PropertyRepo`, `PropertyOwnerRepo`
- **Service:** `PropertyService`
- **Controller:** `PropertyController`

#### 6. **Auction System** 🟡 (Entity/Repo Only)
- **Entities:** `Auction`, `AuctionBid`
- **Repository:** `AuctionRepo`, `AuctionBidRepo`
- **Status:** Data model complete, service/controller not implemented

#### 7. **Trade System** 🟡 (Entity/Repo Only)
- **Entities:** `Trade`, `TradeItems`
- **Repository:** `TradeRepo`, `TradeItemsRepo`
- **Status:** Data model complete, service/controller not implemented

#### 8. **Database Configuration** ✅
- MySQL connection configured
- JPA/Hibernate auto-ddl update enabled
- SQL logging enabled for development

---

### Frontend (Angular 19)

#### 1. **Routing & Navigation** ✅
Complete route configuration with 8 routes:
- `/login` - Login page
- `/register` - Registration page
- `/home` - Main dashboard
- `/create/room` - Create new game room
- `/join/room` - Join existing room
- `/lobby` - Room lobby/waiting area
- `/game` - Main game board
- `/admin` - Admin panel

#### 2. **Authentication Components** ✅
- **LoginComponent** - Username/password form with AuthService integration
- **RegisterComponent** - User registration form
- **AuthService** - HTTP calls to backend `/login` and `/register`

#### 3. **Room Management Components** ✅
- **CreateRoomComponent** - Room creation with max players setting
- **JoinRoomComponent** - Join via room code input
- **RoomLobbyComponent** - Player list, ready toggle, start game button
- **RoomService** - Full API integration for room operations

#### 4. **Game Board Components** ✅ (UI Structure)
- **GameComponent** - Main game container
- **BoardComponent** - Central game board display
- **LeftSidebarComponent** - Player info, properties, actions
- **RightSidebarComponent** - Game log, notifications, controls
- **GameService** - Start game API call

#### 5. **Shared Components** ✅
- **NavbarComponent** - Navigation header
- **HomeComponent** - Post-login dashboard
- **AdminComponent** - Admin panel placeholder

#### 6. **Data Models** ✅
- `User` model - Matches backend entity
- `Room` model - Room code, host, players, status
- `RoomPlayers` model - Player in room with ready status
- `Property` model - Property details for board display

#### 7. **UI Framework** ✅
- Angular Material components integrated
- Bootstrap 5 for responsive layout
- SCSS for custom styling
- Standalone components architecture (Angular 19)

---

## 🟡 In Progress / Partially Implemented

| Feature | Backend Status | Frontend Status | Notes |
|---------|---------------|-----------------|-------|
| **Real-time Updates** | ❌ Not Started | ❌ Not Started | WebSocket integration planned |
| **Gameplay Logic** | 🟡 Minimal (start only) | 🟡 UI Only | Dice roll, movement, turns not implemented |
| **Property Purchase** | 🟡 Entity Ready | ❌ Not Started | Buy/house/hotel logic missing |
| **Rent Collection** | ❌ Not Started | ❌ Not Started | Core game mechanic missing |
| **Auction System** | 🟡 Entities Only | ❌ Not Started | Service/Controller needed |
| **Trade System** | 🟡 Entities Only | ❌ Not Started | Service/Controller needed |
| **JWT Authentication** | ❌ Not Started | 🟡 jwt-decode Installed | Spring Security commented out |
| **Game State Persistence** | 🟡 GameEvent Entity | ❌ Not Started | Event sourcing planned |
| **Admin Panel** | ❌ Not Started | 🟡 Placeholder Only | User/game management needed |

---

## ❌ Not Yet Implemented

### Critical Game Features
1. **Core Gameplay Loop**
   - Dice rolling mechanism
   - Player movement around board
   - Turn management system
   - Passing GO / collecting salary

2. **Property Mechanics**
   - Purchase unowned properties
   - Pay/receive rent
   - Build houses/hotels
   - Mortgage/unmortgage properties

3. **Financial System**
   - Player money management
   - Bankruptcy detection
   - Transaction history

4. **Special Tiles**
   - Chance/Community Chest cards
   - Jail mechanics
   - Tax tiles
   - Free Parking

5. **Auction System**
   - Trigger auction on property decline
   - Bidding mechanism
   - Auction timer

6. **Trading System**
   - Player-to-player trade offers
   - Property/money exchange
   - Trade acceptance/rejection

### Technical Infrastructure
1. **Security**
   - Password hashing (BCrypt)
   - JWT token authentication
   - Role-based access control
   - CORS configuration

2. **Real-time Communication**
   - WebSocket/STOMP integration
   - Real-time game state sync
   - Player connection management

3. **Testing**
   - Unit tests (JUnit/Mockito)
   - Integration tests
   - Angular component tests
   - E2E tests (Cypress/Playwright)

4. **DevOps**
   - Docker configuration
   - CI/CD pipeline
   - Environment configuration
   - Database migration scripts (Flyway/Liquibase)

---

## 📊 Component Completion Matrix

### Backend Modules

| Module | Entity | Repository | Service | Controller | Tests |
|--------|--------|------------|---------|------------|-------|
| User | ✅ | ✅ | ✅ | ✅ | ❌ |
| Auth | N/A | N/A | ✅ | ✅ | ❌ |
| Room | ✅ | ✅ | ✅ | ✅ | ❌ |
| Game | ✅ | ✅ | ✅ | ✅ | ❌ |
| Property | ✅ | ✅ | ✅ | ✅ | ❌ |
| Auction | ✅ | ✅ | ❌ | ❌ | ❌ |
| Trade | ✅ | ✅ | ❌ | ❌ | ❌ |

### Frontend Components

| Component | Template | Logic | Service Integration | Styling | Tests |
|-----------|----------|-------|---------------------|---------|-------|
| Login | ✅ | ✅ | ✅ | ✅ | ❌ |
| Register | ✅ | ✅ | ✅ | ✅ | ❌ |
| Home | ✅ | ✅ | ❌ | ✅ | ❌ |
| Create Room | ✅ | ✅ | ✅ | ✅ | ❌ |
| Join Room | ✅ | ✅ | ✅ | ✅ | ❌ |
| Room Lobby | ✅ | ✅ | ✅ | ✅ | ❌ |
| Game Board | ✅ | ❌ | ❌ | ✅ | ❌ |
| Left Sidebar | ✅ | ❌ | ❌ | ✅ | ❌ |
| Right Sidebar | ✅ | ❌ | ❌ | ✅ | ❌ |
| Navbar | ✅ | ✅ | ❌ | ✅ | ❌ |
| Admin | ✅ | ❌ | ❌ | ✅ | ❌ |

---

## 🎯 Next Priority Tasks

### Phase 1: Core Gameplay (Immediate)
1. [ ] Implement dice roll and player movement logic (Backend + Frontend)
2. [ ] Add turn management system
3. [ ] Implement property purchase flow
4. [ ] Add rent calculation and payment
5. [ ] Create game state WebSocket events

### Phase 2: Advanced Mechanics (Short-term)
1. [ ] Build house/hotel construction system
2. [ ] Implement mortgage/unmortgage
3. [ ] Add Chance/Community Chest card system
4. [ ] Implement Jail mechanics
5. [ ] Add bankruptcy detection

### Phase 3: Auction & Trade (Medium-term)
1. [ ] Complete AuctionService and AuctionController
2. [ ] Build auction bidding UI
3. [ ] Complete TradeService and TradeController
4. [ ] Build trade negotiation UI

### Phase 4: Security & Polish (Medium-term)
1. [ ] Enable Spring Security with JWT
2. [ ] Add password encryption
3. [ ] Implement role-based access
4. [ ] Add input validation & sanitization

### Phase 5: Testing & Deployment (Long-term)
1. [ ] Write comprehensive unit tests
2. [ ] Set up CI/CD pipeline
3. [ ] Dockerize application
4. [ ] Configure production deployment

---

## 🗄️ Database Schema Summary

### Core Tables
- **users** - Player accounts and statistics
- **rooms** - Game room metadata
- **room_players** - Room membership with ready status
- **games** - Active/completed game records
- **game_players** - Player state within a game
- **game_events** - Event log for game replay/debug
- **properties** - Board property definitions (static data)
- **property_owners** - Dynamic ownership per game
- **auctions** - Auction sessions
- **auction_bids** - Individual bids
- **trades** - Trade offers between players
- **trade_items** - Properties/money in trade

---

## 🔧 Known Issues & Technical Debt

1. **Security**: Plain text passwords in AuthService
2. **Error Handling**: Minimal exception handling in services
3. **Validation**: Limited input validation on REST endpoints
4. **Concurrency**: No optimistic locking on game state updates
5. **Frontend State**: No state management (NgRx/Signals) - components use local state
6. **API Consistency**: Mixed response formats (some return entities, some return boolean)
7. **WebSocket**: Not yet configured despite spring-boot-starter-websocket dependency

---

## 📈 Progress Tracking

| Category | Completion |
|----------|------------|
| Backend Data Models | 90% |
| Backend Room/Lobby | 85% |
| Backend Game Logic | 15% |
| Backend Property System | 60% |
| Backend Auction/Trade | 20% |
| Frontend UI/UX | 70% |
| Frontend Game Board | 40% |
| Frontend Integration | 50% |
| Authentication | 40% |
| Real-time Features | 0% |
| Testing | 5% |
| Documentation | 60% |

**Overall Project Completion: ~45%**

---

## 🚀 Getting Started

### Prerequisites
- Java 17+
- Maven 3.8+
- MySQL 8.0+
- Node.js 18+
- Angular CLI 19

### Backend Setup
```bash
cd Bharat_Empire/backend
# Configure MySQL database 'bharat_empire'
# Update application.properties with your credentials
./mvnw spring-boot:run
```
Runs on `http://localhost:8080`

### Frontend Setup
```bash
cd Bharat_Empire/frontend
npm install
ng serve
```
Runs on `http://localhost:4200`

---

## 📝 Notes for Developers

1. **Board Data**: Properties need to be seeded in database (Indian states theme)
2. **WebSocket Config**: Add `@EnableWebSocketMessageBroker` configuration class
3. **CORS**: Configure for frontend origin in Spring Security
4. **Game Loop**: Consider using a separate game engine service for complex logic
5. **State Sync**: Implement event-driven architecture for game state updates

---

*This document will be updated as development progresses. For questions, refer to the codebase or create an issue in the repository.*