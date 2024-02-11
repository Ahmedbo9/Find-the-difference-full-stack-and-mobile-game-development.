export enum SocketEvent {
    RefreshGames = 'refreshGames',
    AcceptPlayer = 'acceptPlayer',
    RejectPlayer = 'rejectPlayer',
    PlayerLeft = 'playerLeft',
    Connection = 'connection',
    Disconnect = 'disconnect',
    CreateGame = 'createGame',
    CreateClassicGame = 'createClassicGame',
    CreateGameMulti = 'createGameMulti',
    GameCreated = 'gameCreated',
    GameDeleted = 'gameDeleted',
    GamesDeleted = 'gamesDeleted',
    RequestToJoin = 'requestToJoin',
    Clock = 'clock',
    Error = 'error',
    JoinGame = 'joinGame',
    WaitPlayer = 'waitPlayer',
    Play = 'play',
    NewGameBoard = 'newGameBoard',
    LeaveGame = 'leaveGame',
    LeaveWaiting = 'leaveWaiting',
    Win = 'win',
    Lose = 'lose',
    DifferenceNotFound = 'differenceNotFound',
    DifferenceFound = 'differenceFound',
    DifferenceFoundMulti = 'differenceFoundMulti',
    Difference = 'difference',
    GetGamesWaiting = 'getGamesWaiting',
    Message = 'message',
    EventMessage = 'eventMessage',
    FetchDifferences = 'fetchDifferences',
    Clue = 'clue',
    GetRooms = 'GetRooms',
    GetMessages = 'GetMessages',
    RoomCreated = 'RoomCreated',
    CreateRoom = 'CreateRoom',
    GetUserRooms = 'GetUserRooms',
    JoinRooms = 'JoinRooms',
    RoomJoined = 'RoomJoined',
    NewRoom = 'NewRoom',
    LeaveRoom = 'LeaveRoom',
    DeleteRoom = 'DeleteRoom',
    UpdateAllRooms = 'UpdateAllRooms',
    UpdateUserRooms = 'UpdateUserRooms',
    GetAllRooms = 'GetAllRooms',
    InitiateChat = 'InitiateChat',
    InitChat = 'InitChat',
    RoomDeleted = 'RoomDeleted',
    WaitingRoom = 'waitingRoom',
    UpdatePlayers = 'updatePlayers',
    Ready = 'ready',
    SendingJoinableClassicGames = 'sendingJoinableClassicGames',
    ClassicGameCreated = 'ClassicGameCreated',
    GetJoinableGames = 'GetJoinableGames',
    JoinClassicGame = 'JoinClassicGame',
    PlayerLeftLobby = 'PlayerLeftLobby',
    CreatorLeft = 'CreatorLeft',
    LeaveWaitingRoom = 'LeaveWaitingRoom',
    Login = 'Login',
    GameStarted = 'GameStarted',
    Cheat = 'cheat',
    ResetGameInfosReplay = 'ResetGameInfosReplay',
    DifferenceFoundReplay = 'DifferenceFoundReplay',
    LeavingArena = 'LeavingArena',
    CreateLimitedGame = 'CreateLimitedGame',
    LimitedGameCreated = 'LimitedGameCreated',
    SendingLimitedGameCreated = 'SendingLimitedGameCreated',
    BoardLoaded = 'BoardLoaded',
    OneDifference = 'OneDifference',
    Timer = 'Timer',
    ReadMessages = 'ReadMessages',
    UnreadMessage = 'UnreadMessage',
    StartClock = 'StartClock',
    StartLimitedClock = 'StartLimitedClock',
    EndedTime = 'EndedTime',
    ObserveGame = 'ObserveGame',
    UpdateDifferences = 'UpdateDifferences',
    TimerBonus = 'TimerBonus',
    ChangeUsername = 'ChangeUsername',
    SendingObservableGames = 'SendingObservableGames',
    MakeObservableClassic = 'MakeObservableClassic',
    SendingJoinableLimitedGames = 'SendingJoinableLimitedGames',
    GetLimitedTimeGames = 'GetLimitedTimeGames',
    LobbyFull = 'LobbyFull',
    NewObserver = 'NewObserver',
    UpdateMessagesUsername = 'UpdateMessagesUsername',
}