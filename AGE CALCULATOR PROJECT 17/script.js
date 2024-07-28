let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let res = document.getElementById("result");

function calculateAge() {
    let birthDate = new Date(userInput.value);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        let daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += daysInPrevMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    res.innerHTML = `You are ${years} years, ${months} months, ${days} days old`;
}