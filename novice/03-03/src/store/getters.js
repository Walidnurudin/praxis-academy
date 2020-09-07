// Getter berfungsi untuk mengakses state.
// Dengan menggunakan Getter kita bisa mengolah terlebih dahulu state yang akan kita ambil seperti fungsi computed yang ada di VueJS. Jadi kita bisa memfilter data state sebelum di panggil. 

export default {
    HobbyId: state => id => {
        return state.hobby.find(obj => {
            return obj.id === id
        })
    }
};