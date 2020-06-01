<template>
    <div>
        <h2>Finalizar</h2>

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

        <div class="row">

            <div class="motor-container col-sm-12 col-md-6">
                <h3>{{selectedModel.name}}</h3>
                <p>{{ selectedMotor.name }} | {{selectedMotor.power}}</p>

                <ul class="specs-1 d-flex pl-0">
                    <li class="mr-3"><span class="material-icons mr-1">local_gas_station</span>{{ selectedMotor.fuel }}</li>
                    <li><span class="material-icons mr-1">transform</span>{{selectedMotor.transmision}}</li>
                </ul>

                <ul class="specs-2 d-flex flex-column justify-content-between p-4">
                    <li><b>Potencia</b><br>{{selectedMotor.power}}</li>
                    <li><b>Consumo</b><br>{{selectedMotor.performance}}</li>
                    <li><b>Emisiones Totales / CO2</b><br>
                    <img :src="'./img/' + selectedMotor.emissions_level + '.gif'" alt="">{{selectedMotor.emissions}}</li>
                </ul>    
            </div>
            
            <div class="contact col-md-6 col-sm-12">
<div id='crmWebToEntityForm'>
    <META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8'/>
    <form action='https://crm.zoho.com/crm/WebToLeadForm' name=WebToLeads4281903000001596039 method='POST'
        onSubmit='javascript:document.charset="UTF-8"; return checkMandatory4281903000001596039()'
        accept-charset='UTF-8'>
        <input type='text' style='display:none;' name='xnQsjsdp'
            value='941965040ae679ad10aa376011a0b9d9f04e8f42c8b7b481c39756a952084572'>
        <input type='hidden' name='zc_gad' id='zc_gad' value=''>
        <input type='text' style='display:none;' name='xmIwtLD'
            value='82c4e093f19d8ae4939e0a35f58a2f2e8faa1164de99f5f5f64c37bd1ec321d2'>
        <input type='text' style='display:none;' name='actionType' value='TGVhZHM='>
        <input type='text' style='display:none;' name='returnURL' value='https://peugeotmexico.com/aparta-tu-peugeot/'>
        <!-- Do not remove this code. -->

           
            
                
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
                
                    
                <textarea name='Description' maxlength='500' style='width:100%;' placeholder="Mensaje:" v-model="options" hidden>
                    
                </textarea>
                <input type="hidden" name="Lead Source" value="Configurador">
                
                <input style="padding: 13px 40px;border-radius: 0;cursor: pointer;font-size:12px;color: #fff;background: #0063c9;" id="formsubmit" type="submit" value="Enviar">
                <p style="margin-top:15px;font-size: 11px;line-height: 12px;"> <img src="https://peugeotmexico.com/wp-content/uploads/2020/05/peugeot_home_03.png" style="
                    float: left;
                    margin-right: 5px;
                ">Aviso de Privacidad. Su información personal es solo para nuestra consesionaria Peugeot y se utilizará únicamente para contactarlo. No cederemos ni venderemos su información a nadie. Consulte nuestra Política de privacidad para obtener más información.</p>
        
    </form>
</div>
            </div>

            

        </div>

    </div>
</template>

<script>
export default {
    name: 'Finalizar',
    data() {
        return {
            options: ""
        }
    },
    created() {
        this.selectedOptions()
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
        },
        selectedColor() {
            return this.$store.getters.getSelectedColor
        },
        selectedMotor() {
            return this.$store.getters.getSelectedMotor
        }
    },
    methods: {
        selectedOptions() {
            this.options = 
            'Modelo: ' + this.selectedModel.name +  
            '\nMotor: ' + this.selectedMotor.name +
            '\nColor: ' + this.selectedModel.colors.exterior[this.selectedColor]
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