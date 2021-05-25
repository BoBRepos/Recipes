import Common from "../common.js"
import Image from "./image.js"
import Ingredient from "./ingredient.js"
import Instruction from "./instruction.js"

export default class {
    async load() {
        const element = await Common.loadObject(Common.paths.objects + "recipeCard.html")
        this.html = $(element).clone()
    }
    async addIngredient(text) {
        
    }
    async addInstruction(text) {

    }
    async addImage(src) {

    }
}