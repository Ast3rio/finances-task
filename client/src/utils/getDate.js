
export const getDate = (date) => {
    return `${new Date(date).getDate() < 10 ?
        `0${new Date(date).getDate()}`
        : new Date(date).getDate()}.${new Date(date).getMonth() < 10 ?
        `0${new Date(date).getMonth()}`
        : new Date(date).getMonth()}.${new Date(date).getFullYear()}`;
}

export const getTime = (date) => {
    return `${new Date(date).getHours() < 10 ?
        `0${new Date(date).getHours()}`
        : new Date(date).getHours()}.${new Date(date).getMinutes() < 10 ?
        `0${new Date(date).getMinutes()}`
        : new Date(date).getMinutes()}.${new Date(date).getSeconds() <10 ?
        `0${new Date(date).getSeconds()}`
        : new Date(date).getSeconds()} `
}