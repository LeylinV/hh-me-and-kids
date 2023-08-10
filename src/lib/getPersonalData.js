export const getPersonalData = (name, age) =>{
    if (!age){
        return `${name}`
    }
    if ((age > 10 && age < 20) || age % 10 === 0 || age % 10 > 4){
        return `${name}, ${age} лет`
    }
    if (age % 10 === 1){
        return `${name}, ${age} год`
    }
    return `${name}, ${age} года`

}