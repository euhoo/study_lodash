/*  each */
const users = [
	{
		id: 1,
		name: 'name1'
	},
	{
		id: 2,
		name: 'name2'
	},
	{
		id: 3,
		name: 'name3'
	},
]
const usersObj = {
	3: {
		name: 'U1',
	},
	24: {
		name: 'U2',
	},
	11: {
		name: 'U3',
	},
}

const ids = _.map(users, (i) => i.id);
console.log(ids);
// а можно и так
const ids2 = _.map(users, 'id');
console.log(ids2);
// можно и объекты
const idsObj = _.map(usersObj, (u, key) => Number(key));
console.log(idsObj);
