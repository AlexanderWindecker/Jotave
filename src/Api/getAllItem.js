import getItems from '../services/MockAPI'

export const getAllItem = async() => {
    const items = await getItems()
    return items
     
}
