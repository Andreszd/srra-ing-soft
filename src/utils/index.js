export const isEmpty = obj =>{
    const propertyObj = Object.values(obj)
    const res = propertyObj.filter(value => value.length === 0)
    return res.length > 1
}