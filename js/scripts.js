// A short script that checks the current year (local time) and reports the copyright, starting from 2019
function copyright() {
    var today = new Date();
    var year = today.getFullYear();
    if (year > 2022) {
        document.write("2022 - ", year)
    }
    else {
        document.write("2022")
    }
}
