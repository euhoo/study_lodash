const res123 = _.orderBy(usersFilter, ['likes'], ['desc']);
const res1232 = _.orderBy(usersFilter, ['likes', 'name'], ['desc', 'asc']);
console.log(res123);
console.log(res1232);
