
export const isStatic = (staticColorBoolean, colors, valueToColor) => {
    if(staticColorBoolean) return `rgb(${22},${colors(valueToColor.index) / 0.8},${colors(valueToColor.index)})`
    return `rgb(${50},${colors(valueToColor.index) / 1.5},${colors(valueToColor.index)})`
}

