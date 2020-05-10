<template>
    <div class="col-sm-3 ">
        <ul>
            <li :class="{active: currentStage == 1}">01 Modelo</li>
            <li :class="{active: currentStage == 2}">02 Motor</li>
            <li :class="{active: currentStage == 3}">03 Color</li>
            <li :class="{active: currentStage == 4}">04 Interior</li>
            <li :class="{active: currentStage == 5}">05 Finalizar</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Stages',
    computed: {
        currentStage() {
            return this.$store.getters.getCurrentStage
        },
    }
}
</script>

<style scoped>
    li {
        border-left: 5px solid #fff;
        list-style: none;
        padding: 10px;
    }
    li.active {
        border-color: #0062c5;
    }
</style>