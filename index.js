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
const totalBalance = userData.reduce((sum, user) => sum + user.balance, 0);
console.log("Загальна сума балансу:", totalBalance);

// 2
const getUsersWithFriend = (friendName) => {
    return userData
        .filter(user => user.friends.includes(friendName))
        .map(user => user.name);
};
console.log("Імена користувачів з другом John:", getUsersWithFriend("John"));

// 3
const sortedByFriends = userData
    .slice()
    .sort((a, b) => b.friends.length - a.friends.length)
    .map(user => user.name);
console.log("Імена, відсортовані за кількістю друзів:", sortedByFriends);

// 4
const uniqueSkills = userData
    .reduce((skills, user) => {
        user.skills.forEach(skill => {
            if (!skills.includes(skill)) {
                skills.push(skill);
            }
        });
        return skills;
    }, [])
    .sort();
console.log("Унікальні вміння:", uniqueSkills);
