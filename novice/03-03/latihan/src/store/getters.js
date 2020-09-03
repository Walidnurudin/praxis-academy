export default {
    HobbyId: state => id => {
        return state.hobby.find(obj => {
            return obj.id === id
        })
    }
}