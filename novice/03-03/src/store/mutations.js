// Mutation adalah satu-satunya cara untuk merubah state. Jadi mutation ini bisa dibilang mirip event yang ada di dalam store. Mutation terdiiri dari sebuah string nama dan handlernya.
export default {
    addHobby: (state) => (id, name) => {
        state.hobby.push({
            id: id,
            name: name
        })
    }
}