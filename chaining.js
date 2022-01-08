// у самого младшего юзера, проверит, что он активный и выведет сообщение с его именем
const getYoungestUsersMessage = (users) => {
	const activeUsers = _.filter(users, 'isActive');
	const sortedActiveUsers = _.orderBy(activeUsers, ['age']);
	const youngest = sortedActiveUsers[0];
	return youngest.name + ' is ' + youngest.age;
}
// const resClassic = getYoungestUsersMessage(usersFilter);
const getYoungestUsersMessageByChain = (users) => _
		.chain(users)
		.filter('isActive')
		.orderBy('age')
		.map(u => u.name + ' is ' + u.age)
		.head()
		.value();
const resChain = getYoungestUsersMessageByChain(usersFilter);
// console.log(resChain);
