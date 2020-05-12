<template>
    <div>
        <h2>Finalizar</h2>

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img :src="'./img/' + modelParam + '/Fotos/' + selectedModelKey +'/Exterior/' + selectedModel.colors.exterior[selectedColor] + '/Aerea.jfif'" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img :src="'./img/' + modelParam + '/Fotos/' + selectedModelKey +'/Exterior/' + selectedModel.colors.exterior[selectedColor] + '/Frente.jfif'" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img :src="'./img/' + modelParam + '/Fotos/' + selectedModelKey +'/Exterior/' + selectedModel.colors.exterior[selectedColor] + '/Lateral.jfif'" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img :src="'./img/' + modelParam + '/Fotos/' + selectedModelKey +'/Exterior/' + selectedModel.colors.exterior[selectedColor] + '/Reverso.jfif'" class="d-block w-100" alt="...">
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

        <div class="row">

            <div class="motor-container col-sm-12 col-md-6">
                <h3>{{selectedModel.name}}</h3>
                <p>{{ selectedModel.motors[selectedMotor].name }} | {{selectedModel.power}}</p>

                <ul class="specs-1 d-flex pl-0">
                    <li class="mr-3"><span class="material-icons mr-1">local_gas_station</span>{{ selectedModel.motors[selectedMotor].fuel }}</li>
                    <li><span class="material-icons mr-1">transform</span>{{selectedModel.transmision}}</li>
                </ul>

                <ul class="specs-2 d-flex flex-column justify-content-between p-4">
                    <li><b>Potencia</b><br>{{selectedModel.power}}</li>
                    <li><b>Consumo</b><br>{{selectedModel.performance}}</li>
                    <li><b>Emisiones Totales / CO2</b><br>
                    <img :src="'./img/B.gif'" alt="">{{selectedModel.emissions}}</li>
                </ul>    
            </div>

            <div class="contact col-md-6 col-sm-12">
                <div id="crmWebToEntityForm">
                    <meta http-equiv="content-type" content="text/html;charset=UTF-8">
                    <form action="https://crm.zoho.com/crm/WebToLeadForm" name="WebToLeads4281903000001130001" method="POST" onsubmit="javascript:document.charset=&quot;UTF-8&quot;; return checkMandatory4281903000001130001()" accept-charset="UTF-8" class="contact-form">
                        <input type="text" name="xnQsjsdp" value="941965040ae679ad10aa376011a0b9d9f04e8f42c8b7b481c39756a952084572" style="display: none;">
                        <input type="hidden" name="zc_gad" id="zc_gad" value="">
                        <input type="text" name="xmIwtLD" value="82c4e093f19d8ae4939e0a35f58a2f2e37706ef9cb26aacd65754e772e43a565" style="display: none;">
                        <input type="text" name="actionType" value="TGVhZHM=" style="display: none;">
                        <input type="text" name="returnURL" value="https://peugeotmexico.com/gracias/" style="display: none;">
                    <div class="form-group">
                        <label>Nombre:</label>
                        <input class="form-control" type="text" name="name='First Name'" required>
                    </div>
                    <div class="form-group">
                        <label>Apellido:</label>
                        <input class="form-control" type="text" name="Last Name" required>
                    </div>
                    <div class="form-group">
                        <label>Email:</label>
                        <input class="form-control" type="email" name="Email" required>
                    </div>
                    <div class="form-group">
                        <label>Celular:</label>
                        <input class="form-control" type="text" name="Phone" required>
                        <b style="width: 100%; font-size: 12px;"><span style="color: rgb(0, 98, 197);">Nota.</span> 10 digitos incluyendo lada. </b>
                    </div>
                    <input id="formsubmit" class="btn btn-primary btn-block" type="submit" value="Enviar" style="margin-top: 15px;">
                    </form>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'Finalizar',
    computed: {
        modelParam() {
            return this.$store.getters.getModelParam
        },
        selectedModelKey() {
            return this.$store.getters.getSelectedModelKey
        },
        selectedModel() {
            return this.$store.getters.getSelectedModel
        },
        selectedColor() {
            return this.$store.getters.getSelectedColor
        },
        selectedMotor() {
            return this.$store.getters.getSelectedMotor
        }
    }
}
</script>

<style scoped>
.carousel-control-next-icon,
.carousel-control-prev-icon {
  filter: invert(1);
}
/* Motor */
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