
export const isStatic = (staticColorBoolean, colors, valueToColor) => {
    if(staticColorBoolean) return `rgb(${22},${colors(valueToColor.index) / 0.8},${colors(valueToColor.index)})`
    return `rgb(${50},${colors(valueToColor.index) / 1.5},${colors(valueToColor.index)})`
}

export function deepCopy(obj) {

    //Define a new object which would be result of the deepCopy
    //So in the case of our obj variable it will pass the obj to the for loop then the first property a will be pass as a argument when we recursivily call the function and since a's item property is not an object it will set it's item property to the newObj which is a copy of an a to a's item property, and then it will end the loop and return teh new object which in turn will be set to the a property of the parent object therefore essentially copying inner object, or objects within themselves.
    const newObj = {};
    
    //Have an array containing all the keys of the obj parameter.
    const keys = Object.keys(obj);
    
    //Then loop through all the keys, and if the object key is a type of object.
    for(let key=0; key < keys.length; key++) {
  
      if(typeof obj[keys[key]] == 'object') {
        //Recursivily call the obj key which in turn will assign a copy of the inner object's property.
        newObj[keys[key]] = deepCopy(obj[keys[key]]);
      } else {
        //Have the property of the newObject set the property of the object.
        newObj[keys[key]] = obj[keys[key]];
      }
    }
    //Then return the new object.
    return newObj;
  }

