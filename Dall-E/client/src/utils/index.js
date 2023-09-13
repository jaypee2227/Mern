import {surpriseMePrompts} from "../constants"

//here we are generating the Number from constants which we have in Surprise me Prompt.

// {this function is used to generate the Random Number}
// here prompt is taken as an argument
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

    const randomPrompt = surpriseMePrompts[randomIndex];

    //here to avoid series of same prompt 

    if(randomPrompt === prompt) {
        return getRandomPrompt(prompt)
    }

    return randomPrompt

}