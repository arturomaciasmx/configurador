<template>
    <div>
        <div class="row mt-5">
            <Stages></Stages>
            <div class="stage col-sm-9">

                <Modelo></Modelo>
            
            </div>
        </div>
    </div>
</template>

<script>
import Stages from './Stages.vue'
import Modelo from './Modelo.vue'

export default {
    name: 'Configurador',
    components: {
        Stages, Modelo
    },
    computed: {
        
    }
}
</script>

<style scoped>

</style>