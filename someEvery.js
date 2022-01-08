// можно вот так упростить.
const isSomeActive = _.some(usersFilter, {isActive: true, name: 'name1'});
const isAllActive = _.every(usersFilter, {isActive: true});
// console.log(isAllActive);
