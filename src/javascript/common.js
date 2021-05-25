var objectStore = []

const Common = Object.freeze({
    paths: {
        objects: "./src/javascript/objects/"
    },
    load: async (path) => {
        return new Promise((resolve, reject) => {
            $.get(path, (data) => {
                resolve(data)
            }).fail((error) => { reject(error) })
        })
    },
    loadObject: async (path) => {
        if (objectStore[path] !== undefined) { return objectStore[path] }
        const newObject = await Common.load(path)
        objectStore[path] = newObject
        return newObject
    }
})

export default Common