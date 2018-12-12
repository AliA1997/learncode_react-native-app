import * as AjaxCreators from '../constants/ajaxCallCreators';
import * as Config from '../utilities/config';

export const isStatic = (staticColorBoolean, colors, valueToColor) => {
    if(staticColorBoolean) return `rgb(${22},${colors(valueToColor.index) / 0.8},${colors(valueToColor.index)})`
    return `rgb(${50},${colors(valueToColor.index) / 1.5},${colors(valueToColor.index)})`
}

let programmingLanguages = [];
const apiUrl = Config.server + '/programming_languages';
AjaxCreators.get(apiUrl)
    .then(res => {
        programmingLanguages = res;
    })
    .catch(error => console.log("Get Programming Languages Error---------", error));

//Get tutorial icon based on programming language.
export const getTutorialIcon = (subject) => {
    return programmingLanguages.map(pl => pl.name === subject && pl.image)[0];
}