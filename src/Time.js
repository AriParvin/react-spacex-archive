export const getTime = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var dateTime = date + ' ' + time;

    return dateTime;
};

export const formatDate = (date) => {
    var years = Math.floor(date / (1000 * 60 * 60 * 24 * 365));
    var days = Math.floor((date % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((date % (1000 * 60)) / 1000);
    return { years: years, days: days, hours: hours, mins: mins, secs: secs };
};
