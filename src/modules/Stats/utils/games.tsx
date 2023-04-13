import { getCollection } from "src/api/firestore";

export async function getGames(): Promise<Array<any>> {
    return await getCollection('games');
}

// export function filteredUsers(user: UserDB, users: UserDB[], word: string): UserDB[] {
//     // Search for matching words within name, email and account name.
//     const filteredUsers = users.filter((obj) => { return obj.email.toLowerCase().includes(word.toLowerCase()) || obj.name.toLowerCase().includes(word.toLowerCase()) || obj.accountName.toLowerCase().includes(word.toLowerCase()); });

//     // Remove the user itselft and friend from the list.
//     const results = filteredUsers.filter((obj) => { return (obj.id !== user.id) && !user.friends.includes(obj.id); })
//     return results;
// }

// export function filterFriendsList(user: UserDB, users: UserDB[]): UserDB[] {
//     const filteredFriends = users.filter((obj) => { return user.friends.includes(obj.id) });
//     return filteredFriends;
// }