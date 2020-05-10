<template>
    <div>
        <div class="row mt-5 mb-5">
            <Stages></Stages>
            <div class="stage col-sm-9">

                <Modelo v-if="currentStage == 1"></Modelo>
                <Motor  v-if="currentStage == 2"></Motor>
            
            </div>
        </div>
    </div>
</template>

<script>
import Stages from './Stages.vue'
import Modelo from './Modelo.vue'
import Motor from './Motor.vue'

export default {
    name: 'Configurador',
    components: {
        Stages, Modelo, Motor
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