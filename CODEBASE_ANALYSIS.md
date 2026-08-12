# Bharat Empire - Codebase Analysis

**Generated:** 2026-11-08  
**Project:** Multiplayer Monopoly-style Board Game  
**Stack:** Angular 18+ (Frontend) + Spring Boot 3.x (Backend) + MySQL

---

## Table of Contents
1. [Tech Stack](#tech-stack)
2. [Backend Architecture](#backend-architecture)
3. [Frontend Architecture](#frontend-architecture)
4. [User Flows](#user-flows)
5. [Database Schema](#database-schema)
6. [API Endpoints](#api-endpoints)
7. [Critical Gaps & Issues](#critical-gaps--issues)
8. [Immediate Action Items](#immediate-action-items)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Angular 18+ (standalone components), TypeScript, RxJS, Reactive Forms |
| **Backend** | Spring Boot 3.x, Java 17+, Spring Data JPA, Hibernate |
| **Database** | MySQL 8.0 (`bharat_empire` database) |
| **Auth** | Plain password comparison (⚠️ No JWT, No Spring Security) |
| **Build** | Maven (backend), Angular CLI (frontend) |
| **CORS** | `@CrossOrigin(origins = "*")` on all controllers |

---

## Backend Architecture

### Module Structure
```
com.bharatempire.backend
├── auth/           # Authentication (login only)
├── user/           # User management
├── room/           # Room & lobby management
├── game/           # Game state, players, events
├── property/       # Board properties, ownership
├── auction/        # Property auctions
├── trade/          # Player-to-player trades
└── admin/          # Admin property management
```

### Key Entities

| Entity | Table | Purpose |
|--------|-------|---------|
| `User` | `user` | Players with username/password |
| `Room` | `room` | Game lobby with roomCode, host, status |
| `RoomPlayers` | `room_players` | Join table: user ↔ room (color, ready, host) |
| `Game` | `game` | Active game linked to room |
| `GamePlayers` | `game_players` | Players in active game (position, money, jail, turn order) |
| `Property` | `property` | Board spaces (40 positions, 7 types) |
| `PropertyOwners` | `property_owners` | Ownership, houses, hotels, mortgaged state |
| `Auction` / `AuctionBid` | `auction` / `auction_bid` | Property auction system |
| `Trade` / `TradeItems` | `trade` / `trade_items` | Player trading system |
| `GameEvent` | `game_event` | Event log for game replay/debug |

### Property Types (Enum)
```java
PROPERTY, RAILROAD, UTILITY, TAX, CHANCE, COMMUNITY_CHEST, JAIL, GO
```
---

## Frontend Architecture

### Component Tree
```
App
├── LoginComponent          → /login
├── RegisterComponent       → /register  
├── HomeComponent           → /home
├── CreateRoomComponent     → /create/room
├── JoinRoomComponent       → /join/room
├── RoomLobbyComponent      → /lobby (expects roomCode query param)
├── GameComponent           → /game
│   ├── LeftSidebarComponent
│   ├── BoardComponent
│   └── RightSidebarComponent
└── AdminComponent          → /admin
```

### Routing (`app.routes.ts`)
```typescript
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'create/room', component: CreateRoomComponent },
    { path: 'join/room', component: JoinRoomComponent },
    { path: 'lobby', component: RoomLobbyComponent },  // ⚠️ No route param for roomCode
    { path: 'game', component: GameComponent },         // ⚠️ No route param for roomId
    { path: 'admin', component: AdminComponent },       // ⚠️ No auth guard
];
```

### Services

| Service | API Base | Methods |
|---------|----------|---------|
| `AuthService` | `http://localhost:8080` | `register(user)`, `login(user)` |
| `RoomService` | `http://localhost:8080/room` | `createRoom(room)`, `joinRoom(roomCode, userId)`, `getPlayers(roomCode)`, `playerReady(roomCode, userId)` |
| `GameService` | `http://localhost:8080` | `startGame(userId, roomCode)` |
| `AdminService` | (not fully read) | `addProperty(property)` |

### Models (Frontend)
```typescript
// user.model.ts
interface User { id: number; username: string; password: string; }

// room.model.ts
interface Room { 
    roomId: number; 
    roomCode: string; 
    maxPlayers: number; 
    status: string; 
    hostId: number; 
}

// room-players.model.ts
interface RoomPlayers { 
    id: number; 
    userId: number; 
    username: string; 
    color: string; 
    isReady: boolean; 
    isHost: boolean; 
}
```
---

## User Flows

### 1. Registration Flow
```
User fills RegisterComponent form
    → AuthService.register(user)
    → POST http://localhost:8080/register
    → ⚠️ BACKEND ENDPOINT MISSING (404)
```

### 2. Login Flow
```
User fills LoginComponent form
    → AuthService.login(user)
    → POST http://localhost:8080/login
    → Backend: AuthController.loginUser() → AuthService.authenticate()
    → Returns User object (plain password match)
    → Frontend: Stores user in localStorage ('currentUser')
    → Navigate to /home
```

### 3. Home Page
```
HomeComponent.ngOnInit()
    → AuthService.getCurrentUser() from localStorage
    → Display username
    → Buttons: Create Room / Join Room / Logout
```

### 4. Create Room
```
CreateRoomComponent
    → User enters maxPlayers
    → RoomService.createRoom({ maxPlayers, hostId })
    → POST /room/create
    → Returns roomCode
    → Navigate to /room-lobby/{roomId}  // ⚠️ Route doesn't accept param
```

### 5. Join Room
```
JoinRoomComponent
    → User enters roomCode
    → RoomService.joinRoom(roomCode, userId)
    → POST /room/join?roomCode=...&userId=...
    → Navigate to lobby
```

### 6. Room Lobby
```
RoomLobbyComponent
    → ActivatedRoute: roomId from params (but route has no param!)
    → Polls RoomService.getRoom(roomId) every 2000ms  // ⚠️ Service has getPlayers(roomCode)
    → Displays: Player list (name, color, ready, host)
    → Current user: Ready toggle → playerReady()
    → Host only: "Start Game" button → GameService.startGame() → POST /game
    → Navigate to /game/{roomId}  // ⚠️ Route doesn't accept param
```

### 7. Game Play
```
GameComponent
    → Layout only: LeftSidebar + Board + RightSidebar
    → ⚠️ NO GAME LOGIC IMPLEMENTED
    → No dice, no turn management, no property actions
```
---

## Database Schema (MySQL)

```sql
-- Core tables from JPA entities
CREATE TABLE user (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE room (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    room_code VARCHAR(255) UNIQUE NOT NULL,
    max_players INT NOT NULL,
    status VARCHAR(50) NOT NULL,  -- WAITING, STARTED, FINISHED
    host_id BIGINT NOT NULL,
    FOREIGN KEY (host_id) REFERENCES user(id)
);

CREATE TABLE room_players (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    room_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    username VARCHAR(255) NOT NULL,
    color VARCHAR(20) NOT NULL,
    is_ready BOOLEAN DEFAULT FALSE,
    is_host BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (room_id) REFERENCES room(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE game (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    room_id BIGINT NOT NULL,
    current_turn BIGINT,
    dice_value INT,
    status VARCHAR(50),  -- IN_PROGRESS, FINISHED
    current_player_id BIGINT,
    FOREIGN KEY (room_id) REFERENCES room(id)
);

CREATE TABLE game_players (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    game_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    position INT DEFAULT 0,
    money INT DEFAULT 1500,
    in_jail BOOLEAN DEFAULT FALSE,
    turn_order INT,
    FOREIGN KEY (game_id) REFERENCES game(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE property (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    state VARCHAR(100),
    board_position INT UNIQUE NOT NULL,  -- 0-39
    price INT,
    rent INT,
    mortgage_value INT,
    color VARCHAR(20),
    property_type ENUM('PROPERTY','RAILROAD','UTILITY','TAX','CHANCE','COMMUNITY_CHEST','JAIL','GO'),
    house_cost INT DEFAULT 0,
    hotel_cost INT DEFAULT 0
);

CREATE TABLE property_owners (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    game_id BIGINT NOT NULL,
    property_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    houses INT DEFAULT 0,
    hotels INT DEFAULT 0,
    mortgaged BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (game_id) REFERENCES game(id),
    FOREIGN KEY (property_id) REFERENCES property(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE auction (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    game_id BIGINT NOT NULL,
    property_id BIGINT NOT NULL,
    highest_bid INT,
    highest_bidder_id BIGINT,
    status VARCHAR(50),  -- ACTIVE, ENDED, CANCELLED
    started_at DATETIME,
    ended_at DATETIME,
    FOREIGN KEY (game_id) REFERENCES game(id),
    FOREIGN KEY (property_id) REFERENCES property(id)
);

CREATE TABLE auction_bid (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    auction_id BIGINT NOT NULL,
    bidder_id BIGINT NOT NULL,
    amount INT NOT NULL,
    bid_time DATETIME NOT NULL,
    FOREIGN KEY (auction_id) REFERENCES auction(id)
);

CREATE TABLE trade (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    game_id BIGINT NOT NULL,
    initiator_id BIGINT NOT NULL,
    receiver_id BIGINT NOT NULL,
    status VARCHAR(50),  -- PENDING, ACCEPTED, REJECTED, CANCELLED
    created_at DATETIME,
    completed_at DATETIME,
    FOREIGN KEY (game_id) REFERENCES game(id)
);

CREATE TABLE trade_items (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    trade_id BIGINT NOT NULL,
    property_id BIGINT,
    cash_amount INT,
    offered_by BIGINT NOT NULL,
    FOREIGN KEY (trade_id) REFERENCES trade(id),
    FOREIGN KEY (property_id) REFERENCES property(id)
);

CREATE TABLE game_event (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    game_id BIGINT NOT NULL,
    player_id BIGINT NOT NULL,
    event_type VARCHAR(100) NOT NULL,
    event_data TEXT,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (game_id) REFERENCES game(id)
);
```
---

## API Endpoints

### Implemented (Backend)

| Method | Endpoint | Controller | Description |
|--------|----------|------------|-------------|
| `POST` | `/login` | `AuthController` | User login (plain password) |
| `POST` | `/room/create` | `RoomController` | Create new room |
| `POST` | `/room/join` | `RoomController` | Join room by code |
| `GET` | `/room/lobby` | `RoomController` | Get room players |
| `POST` | `/room/ready` | `RoomController` | Toggle player ready |
| `POST` | `/game` | `RoomController` | Start game (host only) |
| `GET` | `/properties` | `PropertyController` | List all properties |
| `POST` | `/admin/property` | `PropertyController` | Add property (admin) |

### Missing (Frontend Calls These)

| Method | Endpoint | Called By | Status |
|--------|----------|-----------|--------|
| `POST` | `/register` | `AuthService.register()` | ❌ **MISSING** |
| `GET` | `/game/{roomId}` | `GameComponent` | ❌ **MISSING** |
| `POST` | `/game/dice` | Game play | ❌ **MISSING** |
| `POST` | `/game/move` | Game play | ❌ **MISSING** |
| `POST` | `/game/buy` | Game play | ❌ **MISSING** |
| `POST` | `/game/trade` | Game play | ❌ **MISSING** |
| `POST` | `/game/auction` | Game play | ❌ **MISSING** |
| `WS` | `/ws/game/{roomId}` | Real-time updates | ❌ **MISSING** |

---

## Critical Gaps & Issues

### 🔴 Critical (Blockers)

| # | Issue | Impact |
|---|-------|--------|
| 1 | **No `/register` endpoint** | Frontend registration fails (404) |
| 2 | **No JWT / Spring Security** | Passwords in plaintext; no session management; no auth validation |
| 3 | **No GameController** | Game play completely non-functional |
| 4 | **No WebSocket/SSE** | Polling every 2s; no real-time game updates |

### 🟡 High (Major Bugs)

| # | Issue | Impact |
|---|-------|--------|
| 5 | **No HTTP Interceptor** | Frontend sends no auth headers; backend doesn't validate identity |
| 6 | **RoomLobby API mismatch** | Component calls `getRoom(roomId)` but service has `getPlayers(roomCode)` |
| 7 | **Route parameter mismatch** | Routes `/lobby` and `/game` don't accept params but components expect them |
| 8 | **GameComponent empty** | Only layout components; zero game logic |

### 🟠 Medium

| # | Issue | Impact |
|---|-------|--------|
| 9 | **Admin unprotected** | `/admin` route accessible without auth |
| 10 | **No route guards** | Protected routes accessible without login |
| 11 | **Color assignment** | Frontend hardcodes colors; backend doesn't enforce uniqueness |

### 🟢 Low

| # | Issue | Impact |
|---|-------|--------|
| 12 | **CORS wildcard** | `@CrossOrigin(origins = "*")` on all controllers |
| 13 | **No input validation** | Backend trusts frontend data |
| 14 | **No error boundaries** | Frontend errors crash components |
---

## Immediate Action Items

### Priority 1: Authentication & Registration
```bash
# Backend
1. Add UserRepo.save() in AuthService.register()
2. Add POST /register in AuthController
3. Add Spring Security + JWT (JwtTokenProvider, JwtAuthenticationFilter, SecurityConfig)
4. Add @PreAuthorize or filter for protected endpoints

# Frontend
5. Add HTTP Interceptor to attach JWT from localStorage
6. Add AuthGuard for protected routes
7. Handle 401 responses (redirect to login)
```

### Priority 2: Game Play Endpoints
```bash
# Backend - Create GameController with:
1. GET /game/{roomId} - Get game state
2. POST /game/{roomId}/dice - Roll dice
3. POST /game/{roomId}/move - Move player
4. POST /game/{roomId}/buy - Buy property
5. POST /game/{roomId}/pay-rent - Pay rent
6. POST /game/{roomId}/trade - Initiate trade
7. POST /game/{roomId}/auction/bid - Place auction bid
8. WebSocket /ws/game/{roomId} - Real-time updates

# Frontend
9. Implement GameComponent with game state management
10. Add WebSocket service for real-time sync
11. Build BoardComponent with 40 spaces
12. Implement turn management, dice animation
```

### Priority 3: Fix Room Lobby
```bash
# Frontend
1. Fix route: { path: 'lobby/:roomCode', component: RoomLobbyComponent }
2. Fix RoomLobbyComponent to read roomCode from ActivatedRoute
3. Fix RoomService.getRoom() to match backend API
4. Stop polling on component destroy (memory leak)

# Backend
5. Ensure RoomController returns consistent DTOs
```

### Priority 4: Admin & Polish
```bash
1. Add AdminGuard for /admin route
2. Add input validation (Bean Validation @Valid)
3. Add global exception handler (@ControllerAdvice)
4. Add integration tests
5. Configure CORS properly (specific origins)
```

---

## File Reference

### Backend Key Files
```
/backend/src/main/java/com/bharatempire/backend/
├── auth/
│   ├── controller/AuthController.java
│   └── service/AuthService.java
├── user/
│   ├── entity/User.java
│   ├── repository/UserRepo.java
│   └── service/UserService.java
├── room/
│   ├── entity/Room.java, RoomPlayers.java
│   ├── repository/RoomRepo.java, RoomPlayersRepo.java
│   └── service/RoomService.java
├── game/
│   ├── entity/Game.java, GamePlayers.java, GameEvent.java
│   ├── repository/GameRepo.java, GamePlayersRepo.java, GameEventRepo.java
│   └── service/StartGameService.java
├── property/
│   ├── entity/Property.java, PropertyOwners.java
│   ├── repository/PropertyRepo.java, PropertyOwnerRepo.java
│   └── service/PropertyService.java
├── auction/
│   ├── entity/Auction.java, AuctionBid.java
│   └── repository/AuctionRepo.java, AuctionBidRepo.java
├── trade/
│   ├── entity/Trade.java, TradeItems.java
│   └── repository/TradeRepo.java, TradeItemsRepo.java
└── admin/
    └── controller/AdminController.java (not found)
```

### Frontend Key Files
```
/frontend/src/app/
├── app.routes.ts, app.config.ts
├── components/
│   ├── login/login.component.ts
│   ├── register/register.component.ts
│   ├── home/home.component.ts
│   ├── create-room/create-room.component.ts
│   ├── join-room/join-room.component.ts
│   ├── room-lobby/room-lobby.component.ts
│   ├── game/
│   │   ├── game.component.ts
│   │   └── boardComponents/
│   │       ├── left-sidebar/
│   │       ├── board/
│   │       └── right-sidebar/
│   └── admin/admin.component.ts
├── services/
│   ├── auth.service.ts
│   ├── room.service.ts
│   ├── game.service.ts
│   └── admin.service.ts
└── models/
    ├── user.model.ts
    ├── room.model.ts
    └── room-players.model.ts
```

---

## Summary

The codebase has a **solid foundation** with well-structured entities, repositories, and a clean Angular component hierarchy. However, **critical authentication and game-play features are missing**, making the application non-functional for actual gameplay.

**Estimated effort to MVP:**
- Auth + JWT: ~2-3 days
- GameController + WebSocket: ~5-7 days
- Frontend game logic: ~5-7 days
- Testing & polish: ~3-5 days

**Total: ~2-3 weeks for playable MVP**

---

*Analysis generated by codebase exploration. For questions or implementation help, refer to the action items above.*