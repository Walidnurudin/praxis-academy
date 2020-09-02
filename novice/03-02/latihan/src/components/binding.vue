<template>
    <div>
        <h1>binding</h1>
        <input type="text" v-model="title" >

        <h1 class="underline" :class="{merah: isMerah}">{{title}}</h1>
        <p v-once :style="styleObject">{{title}}</p>
    </div>
</template>

<script>
export default {
    name: "binding",
    data: () => {
        return {
            title: "tutorial",
            isMerah: true,
            styleObject: {
                color: 'red',
                fontSize: '50px'
            }
        }
    }
}
</script>

<style scoped>
.merah {
    color: red;
}

.underline {
    text-decoration: underline;
}
</style>