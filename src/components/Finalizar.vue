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

                <div v-if="sent" style="text-align:center; padding: 100px 0;">
                    <h2>¡Muchas gracias por contactarnos!</h2>
                    <p>Tu solicitud nos fue enviada con éxito, a la brevedad uno de nuestro equipo te estará contactando para darle seguimiento a tu solicitud.</p>
                    <a  href="/" style="font-size: 20px;font-weight: bold;color: rgb(0 0 0);background: rgb(252, 214, 3);margin-top: 20px;padding: 10px 30px;display: inline-block;">Ir a Inicio</a>                </div>
                
                <form v-else action="" method="post" class="" v-on:submit.prevent="sendForm">

                    <label> Nombre<br></label>
                   <input type="text" name="nombre" v-model="nombre" required>
                    
                    <label> Apellido<br></label>
                    <input type="text" name="apellido" v-model="apellido" value="" size="40" class="" required>
                    
                    <label> Correo electrónico<br></label>
                    <input type="email" name="correo" v-model="correo" value="" size="40" class="" required>
                    
                    <label> Teléfono<br></label>
                    <input type="tel" name="telefono" v-model="telefono" value="" size="40" class="" required>
                    
                   <textarea name="mensaje" v-model="options" cols="40" rows="3" class="" style="display:none;"></textarea>
                
                    <label> Concesionario<br></label>
                        <!-- <select name="concesionario" v-model="concesionario"> -->
                        <select name="concesionario">
                        <option value="Tijuana" selected>Tijuana</option>
                        <option value="Ensenada">Ensenada</option>
                        <option value="Mexicali">Mexicali</option>
                        <option value="Hermosillo">Hermosillo</option>
                        <option value="Obregón">Obregón</option>
                        <option value="Los Cabos">Los Cabos</option>
                    </select>
                
                
                    <input type="hidden" name="id" v-model="id" value="" size="40" class="">
                
                    <button>Enviar</button>
                
                    <div class="wpcf7-response-output" aria-hidden="true"></div>
                </form>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'Finalizar',
    data() {
        return {
            options: "",
            nombre: "",
            apellido: "",
            correo: "",
            telefono: "",
            mensaje: "",
            modelo: "",
            concesionario: "",
            id: Math.floor(Math.random()*(99999-11111+1)+11111),
            sent: false
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
        },
        selectedInterior() {
            return this.$store.getters.getSelectedInterior
        }
    },
    methods: {
        selectedOptions() {
            this.options = 
            'Motor: ' + this.selectedMotor.name
        },
        sendForm() {
            // console.log("sendForm button");
            this.sent = true;
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({prospect: {
                        status: "new",
                        id: this.id,
                        vehicle: {
                            interest: "buy",
                            status: "new",
                            make: "Renault",
                            model: this.selectedModel.name,
                            colorcombination: { 
                                exteriorcolor: this.selectedModel.colors.exterior[this.selectedColor], 
                                interiorcolor: this.selectedModel.colors.interior[this.selectedInterior]
                            } 
                        },
                        customer: {
                            contact: {
                                name: [
                                    {
                                        part: "first",
                                        value: this.nombre
                                    },
                                    {
                                        part: "last",
                                        value: this.apellido
                                    }
                                ],
                                email: this.correo,
                                phone: [
                                    this.telefono
                                ]
                            },
                            address: {
                                state: ""
                            },
                            comments: this.options,
                            origin: ""
                        },
                        vendor: {
                            source: "tersa",
                            id: "084076",
                            name: "RENAULT CD OBREGON"
                        }
                    },
                    provider: {
                        name: "tersa"
                    }
                })
            };

            console.log(requestOptions);
            fetch("https://www.sicopweb.com/apidms/dms/v1/rest/leads/adfv2", requestOptions)
            .then(async response => {
                const data = await response.json();
                    // check for error response
                    console.log(response);
                    if (!response.ok) {
                        // get error message from body or default to response status
                        console.log(requestOptions);
                        const error = (data && data.message) || response.status;
                        return Promise.reject(error);
                    }
                })
            .catch(error => {
                this.errorMessage = error;
                console.log('There was an error!', error);
            });
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
.contact {
    margin: 20px auto;
}
.contact input[type="text"],
.contact input[type="email"],
textarea {
    width: 100%;
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