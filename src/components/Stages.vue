<template>
    <div class="col-sm-12">
        <ul class="stages-menu d-none d-md-flex">
            <li :class="{active: currentStage == 1}">Modelo</li>
            <li :class="{active: currentStage == 2}">Motor</li>
            <li :class="{active: currentStage == 3}">Color</li>
            <li :class="{active: currentStage == 4}">Interior</li>
            <li :class="{active: currentStage == 5}">Finalizar</li>
        </ul>

        <ul class="stages-menu-mobile d-xs-block d-md-none d-flex justify-content-between p-0">
            <li :class="{active: currentStage == 1}">Modelo</li>
            <li :class="{active: currentStage == 2}">Motor</li>
            <li :class="{active: currentStage == 3}">Color</li>
            <li :class="{active: currentStage == 4}">Interior</li>
            <li :class="{active: currentStage == 5}">Finalizar</li>
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
    .stages-menu li {
        border-bottom: 5px solid #fff;
        list-style: none;
        padding: 10px;
    }
    .stages-menu li.active {
        border-color: #FCD603;
    }
    .stages-menu-mobile li {
        border-bottom: 5px solid #fff;
        color: #999;
        list-style: none;
        padding: 10px;
    }
    .stages-menu-mobile li.active {
        border-color: #FCD603;
        color: #000;
    }
</style>