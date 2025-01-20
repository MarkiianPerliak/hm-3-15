const userData = [
    {
        name: "John",
        balance: 1500,
        friends: ["Mike", "Anna"],
        skills: ["JavaScript", "React"]
    },
    {
        name: "Anna",
        balance: 2000,
        friends: ["John"],
        skills: ["Python", "Django"]
    },
    {
        name: "Mike",
        balance: 800,
        friends: ["John", "Anna"],
        skills: ["JavaScript", "Node.js"]
    }
];

// 1
const balances = userData.map(user => user.balance);
const totalBalance = balances.reduce((sum, balance) => sum + balance, 0);
console.log("Вся сума балансу:", totalBalance);

// 2
const getUsersWithFriend = (friendName) => {
    const usersWithFriend = userData.filter(user => user.friends.includes(friendName));
    return usersWithFriend.map(user => user.name);
};
console.log("Імена людей з другом John:", getUsersWithFriend("John"));

// 3
const sortedByFriends = [...userData]
    .sort((a, b) => b.friends.length - a.friends.length)
    .map(user => user.name);
console.log("Імена відсортовані за кількістю друзів:", sortedByFriends);

// 4
const allSkills = userData.flatMap(user => user.skills);
const uniqueSkills = [...new Set(allSkills)].sort();
console.log("Унікальні вміння:", uniqueSkills);