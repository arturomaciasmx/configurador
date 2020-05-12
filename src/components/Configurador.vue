<template>
    <div>
        <div class="row mt-5 mb-5">
            <Stages></Stages>
            <div class="stage col-sm-12 col-md-9">

                <Modelo v-if="currentStage == 1"></Modelo>
                <Motor  v-if="currentStage == 2"></Motor>
                <Color v-if="currentStage == 3"></Color>
                <Interior v-if="currentStage == 4"></Interior>
                <Finalizar v-if="currentStage == 5"></Finalizar>

            </div>
        </div>
    </div>
</template>

<script>
import Stages from './Stages.vue'
import Modelo from './Modelo.vue'
import Motor from './Motor.vue'
import Color from './Color.vue'
import Interior from './Interior.vue'
import Finalizar from './Finalizar.vue'

export default {
    name: 'Configurador',
    components: {
        Stages, Modelo, Motor, Color, Interior, Finalizar
    },
    computed: {
        currentStage() {
            return this.$store.getters.getCurrentStage
        }
    }
}
</script>

<style scoped>

</style>