/*  each */
const arr = [1, 2];
const products = {
	1: {
		"name": "P1",
	},
	2: {
		"name": "P2",
	},
}
arr.forEach((i) => {
	console.log(i);
})
_.each(arr, (i) => {
	console.log(i);
})

// можно и объекты
_.each(products, (p, key) => {
	console.log(p, ';', key);
})
