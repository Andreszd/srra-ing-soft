const isEmpty = obj =>{
    const propertyObj = Object.values(obj)
    const res = propertyObj.filter(value => value.length === 0)
    return res.length > 1
}
const isGreater = cad =>{
    return cad.trim().length > 50
}
export const verifyFields = form =>{
    const { title } = form
    let message = ''
    if(isEmpty(form)){
        message = 'Fill in all missing fields'
    }else if(isGreater(title)){
        message = 'Title exceeds the allowed character limit'
    }
    return message
}