<template>
    <div>
        <h2>Selecciona un Motor</h2>
        
        <div class="motor-container" v-for="(motor, key) in selectedModel.motors" :key="key">
            <h3>{{motor.name}}</h3>
        
            <p>A partir de <b>{{motor.price}}</b></p>

            <ul class="specs-1 d-flex pl-0">
                <li class="mr-3"><span class="material-icons mr-1">local_gas_station</span>{{motor.fuel}}</li>
                <li><span class="material-icons mr-1">transform</span>{{motor.transmision}}</li>
            </ul>

            <ul class="specs-2 d-flex flex-column flex-md-row justify-content-between p-4">
                <li><b>Potencia</b><br>{{motor.power}}</li>
                <li><b>Consumo</b><br>{{motor.performance}}</li>
                <li><b>Emisiones Totales / CO2</b><br>
                <img :src="'./img/' + motor.emissions_level + '.gif'" alt="">{{motor.emissions}}</li>
            </ul>
            
            <button class="btn btn-primary float-right" v-on:click="nextStage(key)">Seleccionar</button>
            <div class="clearfix"></div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Motor',
    computed: {
        selectedModel() {
            return this.$store.getters.getSelectedModel
        }
    },
    methods: {
        nextStage(selectedMotor) {
            this.$store.commit('setSelectedMotor', selectedMotor)
            this.$store.commit('nextStage')
        }
    }
}
</script>

<style scoped>
.motor-container {
    padding: 30px;
    margin: 20px auto;
    border: 3px solid #dadada;
}
.specs-1 li span {
    vertical-align: bottom;
}
.specs-1, .specs-2 {
    list-style: none;
}
.specs-2 {
    background: #dadada;
}
</style>