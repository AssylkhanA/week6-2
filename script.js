const getElemId = (id) => document.getElementById(id);

const checkLeapYear = () => {
    const year = parseInt(getElemId("year").value);
    getElemId("result1").innerHTML = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? "a leap year" : "is not a leap year";
};

const findSundays = () => {
    let years = [];
    for (let i = 2014; i <= 2050; i++) {
        if (new Date(i, 0, 1).getDay() === 0) years.push(i);
    }
    getElemId("result2").innerHTML = `${years.length} times<br>${years.map(y => `1st January is being a Sunday ${y}`).join('<br>')}`;
};

const removeChar = () => {
    const str = getElemId("inputString").value;
    const pos = parseInt(getElemId("charPos").value);
    getElemId("result3").innerHTML = str.slice(0, pos) + str.slice(pos + 1);
};
