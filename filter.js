const usersFilter = [
	{
		id: 1,
		name: 'name1',
		isActive: true,
		likes: 11,
	},
	{
		id: 2,
		name: 'name2',
		isActive: false,
		likes: 111,
	},
	{
		id: 3,
		name: 'name3',
		isActive: false,
		likes: 1,
	},
]
const usersObj2 = {
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

const resFilter = _.filter(usersFilter, u => u.name === 'name1' && u.isActive === true)
// можно так
const resFilter2 = _.filter(usersFilter, {isActive: true, name: 'name1'});
const resFilter3 = _.filter(usersFilter, ["name", 'name1']);
// а можно и объекты
const resFilter4 = _.filter(usersObj2, u => u.name === 'U1')
// console.log(resFilter2);
