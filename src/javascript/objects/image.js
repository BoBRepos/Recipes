import Common from "../common.js"

export default class {
    async load() {
        const element = await Common.loadObject(Common.paths.objects + "image.html")
        this.html = $(element).clone()
    }
}