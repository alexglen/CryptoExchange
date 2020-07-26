export const oneDay = [
	"01h",
	"02h",
	"03h",
	"04h",
	"05h",
	"06h",
	"07h",
	"08h",
	"09h",
	"10h",
	"11h",
	"12h",
];
export const week = ["Пон.", "Вт.", "Ср.", "Чтв.", "Пятн.", "Субб.", "Воскр."];
export const month = [
	"1",
	"",
	"",
	"",
	"5",
	"",
	"",
	"",
	"",
	"10",
	"",
	"",
	"",
	"",
	"15",
	"",
	"",
	"",
	"",
	"20",
	"",
	"",
	"",
	"",
	"25",
	"",
	"",
	"",
	"",
	"30",
];

export const getLabels = (period, limit) => {
	let typeOfLabels = oneDay;
	if (period === "day" && limit === 6) {
		typeOfLabels = week;
	} else if (period === "day" && limit === 30) {
		typeOfLabels = month;
	}

	return typeOfLabels;
};
