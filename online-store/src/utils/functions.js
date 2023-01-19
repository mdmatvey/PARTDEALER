export const setEnding = (itemsCount) => {
    const lastNumber = String(itemsCount).length === 1 ? Number(String(itemsCount)[0]) : Number(String(itemsCount)[1])
    let ending = ''

    if ((itemsCount > 10 && itemsCount < 15) || (lastNumber === 0 || (lastNumber > 4 && lastNumber < 10))) {
        ending = 'ов'
    } else if (lastNumber > 1 && lastNumber < 5) {
        ending = 'а'
    }

    return ending
}