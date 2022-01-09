// для добавления своего метода в chain необходимо сделать миксин

const capitalizeLast = (str) => {
	const lastSymbol = _.last(str);
	const initialSymbols = _
		.chain(str)
		.initial()
		.join('')
		.value();
	return initialSymbols + _.capitalize(lastSymbol);
}
// обогащаю своим методом
_.mixin({ capitalizeLast })
const res33 = _
	.chain('foo')
	.capitalizeLast()
	.value()
// console.log(res33);
