const toSlug = (str) => {
	const slug =_
		.chain(str)
		.toLower()
		.split(' ')
		.join('-')
		.value()
	return encodeURI(slug)
}

const slug = toSlug('This Is Супер Quiz');
const str = 'string with all lower';
// делает первую букву строки заглавной
const capitalized = _.capitalize(str)
// строка в camelCase
const camelCaseStr = _.camelCase(str);
// строка в snake_case
const snake_case_str = _.snakeCase(str);
// console.log(snake_case_str);
