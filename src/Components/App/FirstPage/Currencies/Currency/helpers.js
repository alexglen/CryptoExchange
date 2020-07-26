export const getSign = (sum) => {
	let sign = "+ ";
	if (sum < 0) {
		sign = "- ";
	} else if (sum === 0) {
		sign = "";
	} else {
		sign = "+ ";
	}
	return sign;
};
