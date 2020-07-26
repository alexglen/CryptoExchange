export const getSign = (sum) => {
	let sign = " ↑";
	let symb = "+ ";

	if (sum < 0) {
		sign = " ↓";
		symb = "- ";
	} else if (sum === 0) {
		sign = "";
		symb = "";
	} else {
		sign = " ↑";
		symb = "+ ";
	}
	return { sign, symb };
};
