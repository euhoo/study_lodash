// работа с объектом

const state = {
	isLoading: false,
	data: null,
	error: null,
}

// мерж объектов без мутации

const res = _.assign({}, state, { isLoading: true });
// console.log(state);
// console.log(res);
