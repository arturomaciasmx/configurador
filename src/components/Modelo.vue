<template>
    <div>
        <h2>Selecciona tu modelo</h2>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img :src="'./img/' + modelParam + '/Fotos/Imagen.jpg'" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img :src="'./img/' + modelParam + '/Fotos/Imagen1.jpg'" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img :src="'./img/' + modelParam + '/Fotos/Imagen2.jpg'" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img :src="'./img/' + modelParam + '/Fotos/Imagen3.jpg'" class="d-block w-100" alt="...">
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
                
        <div class="modelos mt-4"  v-for="(model, key) in currentCar.models" :key="key">
            <div>
                <h4>{{model.motors['motor1'].name}}</h4>
                <p for="modelo"><b>Transmision: </b> {{model.motors['motor1'].transmision}}</p>
                <p><b>Potencia:</b> {{model.motors['motor1'].power}}</p>
                <p><b>Emisiones de CO2:</b> <img :src="'./img/' + model.motors['motor1'].emissions_level + '.gif'" alt=""> {{model.emissions}}</p>
                <p><b>Desde:</b> {{model.motors['motor1'].price}}</p>
                <button class="btn btn-primary" v-on:click="nextStageMobile(key)">Siguiente</button>
            </div>
        </div>


        <button class="btn btn-primary float-right d-none d-none" v-on:click="nextStage">Siguiente</button>
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
        }, 
        nextStageMobile(model) {
            this.$store.commit('setSelectedModel', model)
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
.modelos div {
    border: 3px solid #dadada;
    padding: 30px;
}
</style>