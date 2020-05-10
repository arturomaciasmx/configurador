<template>
    <div>
        <h2>Selecciona tu modelo</h2>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img :src="'/img/' + modelParam + '/Fotos/Aerea.jfif'" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img :src="'/img/' + modelParam + '/Fotos/Frente.jfif'" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img :src="'/img/' + modelParam + '/Fotos/Aerea.jfif'" class="d-block w-100" alt="...">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        
        <table class="table text-center">
            <tr>
                <th>Transmision</th>
                <th>Potencia<br>Aceleración (0-100 km/h)</th>
                <th>Rendimiento<br>Emisiones de CO2</th>
                <th>Precios</th>
            </tr>
            <tr v-for="(model, key) in currentCar.models" :key="key">
                <td>
                    <p>{{model.name}}</p>
                    <input class="float-left" type="radio" name="modelo" v-model="selectedModel" :value="key">
                    <label for="modelo">Transmision {{model.transmision}}</label>
                </td>
                <td>{{model.power}}</td>
                <td>{{model.performance}}</td>
                <td>{{model.price}}</td>
            </tr>
        </table>
        <button class="btn - btn-primary float-right" v-on:click="nextStage">Siguiente</button>
    </div>
</template>

<script>
export default {
    name: 'Modelo',
    data: function() {
        return {
            selectedModel: ''
        }
    },
    computed: {
        modelParam() {
            return this.$store.getters.getModelParam
        },
        currentCar() {
           return  this.$store.getters.getCurrentCarJSON
        }
    },
    methods: {
        nextStage() {
            if(!this.selectedModel) {
                alert('Selecciona un modelo')
                return
            }
            this.$store.commit('setSelectedModel', this.selectedModel)
            this.$store.commit('nextStage')
        }
    }
}
</script>

<style scoped>
.carousel-control-next-icon,
.carousel-control-prev-icon {
  filter: invert(1);
}
</style>