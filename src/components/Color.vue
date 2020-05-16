<template>
    <div>
        <h2>Selecciona un Color</h2>

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img :src="'./img/' + modelParam + '/Fotos/' + selectedModelKey +'/Exterior/' + selectedModel.colors.exterior[selectedColor] + '/Imagen.jpg'" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img :src="'./img/' + modelParam + '/Fotos/' + selectedModelKey +'/Exterior/' + selectedModel.colors.exterior[selectedColor] + '/Imagen1.jpg'" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img :src="'./img/' + modelParam + '/Fotos/' + selectedModelKey +'/Exterior/' + selectedModel.colors.exterior[selectedColor] + '/Imagen2.jpg'" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img :src="'./img/' + modelParam + '/Fotos/' + selectedModelKey +'/Exterior/' + selectedModel.colors.exterior[selectedColor] + '/Imagen3.jpg'" class="d-block w-100" alt="...">
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

        <ul class="d-flex pl-0">
            <li class="mr-3 color-selector" v-for="(color, key) in selectedModel.colors.exterior" :key="key" :class="{ selected: key == selectedColor}" v-on:click="setColor(key)">
                <img :src="'./img/Colors/Exterior/' + color + '.jpg'" alt="">
                <p class="text-center">{{color}}</p>
            </li>
        </ul>

        <button class="btn btn-primary float-right" v-on:click="nextStage">Siguiente</button>

    </div>
</template>

<script>
export default {
    name: 'Color',
    data: function() {
        return {
            selectedColor: 1,
        }
    },
    computed: {
        modelParam() {
            return this.$store.getters.getModelParam
        },
        selectedModelKey() {
            return this.$store.getters.getSelectedModelKey
        },
        selectedModel() {
            return this.$store.getters.getSelectedModel
        }
    },
    methods: {
        setColor(color) {
            this.selectedColor = color;
        },
        nextStage() {
            this.$store.commit('setSelectedColor', this.selectedColor);
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
ul {
    list-style: none;
}
.color-selector {
    width: 20%;
}
.color-selector img {
    width: 100%;
    border: 2px solid #dadada;
    padding: 5px;
}
.color-selector img:hover,
.color-selector.selected img {
    border-color: #0062cc;
}
</style>