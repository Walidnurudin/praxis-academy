<template>
    <div>
        <h1 v-show="ok">Conditional</h1>

        <div v-if="Math.random() > 0.5">
            Now you see me!
        </div>
        <div v-else>
            Now you don't
        </div>

        <ul>
            <li v-for="(item, index) in arr" :key="index">
                {{item}}
            </li>
        </ul>

        <ul>
            <li v-for="(value, name, index) in obj" :key="index">
                {{index + 1}}. {{name}} - {{value}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Conditional",
    data: () => {
        return {
            ok: true,
            arr: ["satu", "dua", "tiga"],
            obj: {
                name: "walid",
                address: "indramayu"
            }
        }
    }    
}
</script>

<style scoped>

</style>