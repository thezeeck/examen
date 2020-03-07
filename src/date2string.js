String.prototype.customFormatDate = function() {
    let oldDate = this,
        pattern = /^([1-9]|0[1-9]|1[012])[- \/.]([1-9]|0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d$/;

    if (pattern.test(oldDate)) {
        oldDate = oldDate.split("/");
    } else {
        console.error("Format not supported");
        return null
    }
    oldDate.forEach((element, index) => {
        oldDate[index] = element.length > 1 ? oldDate[index] : `0${oldDate[index]}`
    });
    return `${oldDate[2]}${oldDate[0]}${oldDate[1]}`;
}

function customFormatDate(dateString) {
    return dateString.customFormatDate();
}