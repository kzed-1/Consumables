
let date = "2019 - 12 - 12T01: 39:59.950Z"

function date (date) {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]

    const splitDate = date.split("-")
    const year = splitDate[0];
    const month = months[splitDate[1] - 1];
    let day = splitDate[2].slice(0, 2);
    if (day == "01"){
        day = "1st"
    } else if (day === "02") {
        day = "2nd"
    } else if (day === "03") {
        day = "3rd"
    } else {
        day = `${day}th`
    }


    return `${month} day, ${year}`
}

export default Date;
