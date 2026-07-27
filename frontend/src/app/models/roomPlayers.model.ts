import { Room } from "./room.model";
import { User } from "./user.model";

export interface RoomPlayers{
    id:number;
    room:Room;
    user:User;
    isReady:boolean;
}