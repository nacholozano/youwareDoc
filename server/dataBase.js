Meteor.startup(function () {
    //------------- Base de datos de prueba al inicio del servidor

    if (Products.find().count() === 0) {
        var data = [
            /*------------------------- GRAFICAS ------------------------------*/
            {
                name: "Radeon R9 270X",
                price: 186,
                stock: 30,
                type: 'graficas',
                details: {
                    graphType: 'gddr5',
                    graphQuantity: 2,
                    brand: 'amd'
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
                name: "Asus Radeon HD 5450",
                price: 33,
                stock: 30,
                type: 'graficas',
                details: {
                    graphType: 'gddr3',
                    graphQuantity: 1,
                    brand: 'amd'
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
                name: "Sapphire R9 280X Vapor-X Tri-X STD",
                price: 259,
                stock: 30,
                type: 'graficas',
                details: {
                    graphType: 'gddr5',
                    graphQuantity: 3,
                    brand: 'amd'
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
                name: "Sapphire R9 280 Dual-X",
                price: 199,
                stock: 30,
                type: 'graficas',
                details: {
                    graphType: 'gddr5',
                    graphQuantity: 3,
                    brand: 'amd'
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
                name: "GT 620",
                price: 50,
                stock: 20,
                type: 'graficas',
                details: {
                    graphType: 'gddr3',
                    graphQuantity: 2,
                    brand: 'nvidia'
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
                name: "GTX 970",
                price: 382,
                stock: 25,
                type: 'graficas',
                details: {
                    graphType: 'gddr5',
                    graphQuantity: 4,
                    brand: 'nvidia'
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
                name: "GTX 760",
                price: 219,
                stock: 20,
                type: 'graficas',
                details: {
                    graphType: 'gddr3',
                    graphQuantity: 2,
                    brand: 'nvidia'
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
                name: "GTX 960",
                price: 214,
                stock: 15,
                type: 'graficas',
                details: {
                    graphType: 'gddr5',
                    graphQuantity: 3,
                    brand: 'nvidia'
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            /*------------------------- RAM ------------------------------*/
            {
                name: "Kingston ValueRAM",
                price: 25,
                stock: 30,
                type: 'ram',
                details: {
                    typeRAM: 'ddr2',
                    quantity: 4
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
                name: "G.Skill Value",
                price: 60,
                stock: 30,
                type: 'ram',
                details: {
                    typeRAM: 'ddr4',
                    quantity: 8
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
                name: "Corsair Value Select",
                price: 86,
                stock: 30,
                type: 'ram',
                details: {
                    typeRAM: 'ddr2',
                    quantity: 8
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
                name: "Corsair Vengeance Negra",
                price: 69,
                stock: 30,
                type: 'ram',
                details: {
                    typeRAM: 'ddr3',
                    quantity: 8
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
                name: "Fury HyperX Negra",
                price: 36,
                stock: 30,
                type: 'ram',
                details: {
                    typeRAM: 'ddr3',
                    quantity: 4
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
                name: "Fury HyperX Azul",
                price: 36,
                stock: 30,
                type: 'ram',
                details: {
                    typeRAM: 'ddr2',
                    quantity: 2
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            /*----------------------------- PROCESADORES ----------------------------*/
            {
                name: "Intel i3 4130",
                price: 114,
                stock: 30,
                type: 'procesadores',
                details: {
                    power: 'medio',
                    socket: 'H3',
                    velocity: 2,
                    cores: 2,
                    brand: 'intel'
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },{
                name: "Intel i5-4670K",
                price: 242,
                stock: 30,
                type: 'procesadores',
                details: {
                    power: 'alto',
                    socket: '1150',
                    velocity: 3.4,
                    cores: 4,
                    brand: 'intel'
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },{
                name: "Intel i5-3570K",
                price: 249,
                stock: 30,
                type: 'procesadores',
                details: {
                    power: 'alto',
                    socket: '1155',
                    velocity: 3.4,
                    cores: 4,
                    brand: 'intel'
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
                name: "Intel i7 4770K",
                price: 358,
                stock: 30,
                type: 'procesadores',
                details: {
                    power: 'alto',
                    socket: '1155',
                    velocity: 1.7,
                    cores: 4,
                    brand: 'intel'
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero illum pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
                name: "Intel i5 3330",
                price: 180,
                stock: 30,
                type: 'procesadores',
                details: {
                    power: 'alto',
                    socket: '1155',
                    velocity: 3,
                    cores: 4,
                    brand: 'intel'
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero ilm pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
                name: "Athlon 5150",
                price: 43,
                stock: 30,
                type: 'procesadores',
                details: {
                    power: 'bajo',
                    socket: 'AM1',
                    velocity: 1.6,
                    cores: 4,
                    brand: 'amd'
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero ilm pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
             {
                name: "AMD A10-7700K",
                price: 125,
                stock: 30,
                type: 'procesadores',
                details: {
                    power: 'alto',
                    socket: 'FM2',
                    velocity: 3.5,
                    cores: 4,
                    brand: 'amd'
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero ilm pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
                name: "AMD A10-7850K",
                price: 142,
                stock: 30,
                type: 'procesadores',
                details: {
                    power: 'alto',
                    socket: 'FM2',
                    velocity: 3.7,
                    cores: 4,
                    brand: 'amd'
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempore sit magni earum, excepturi quas mollitia deleniti quia! Iure libero ilm pariatur laborum optio delectus quod alias perspiciatis quae, dolor!',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            /*--------------------------- PLACA BASE --------------------------*/
            {
               name: 'Asus A88XM Plus',
                price: 73,
                stock: 30,
                type: 'placaBase',
                details: {
                    socket: 'FM2',
                    RAM: 'ddr2',
                    quantityRAM: 4
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adi',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
               name: 'Asrock FM2A78M-HD+',
                price: 59,
                stock: 30,
                type: 'placaBase',
                details: {
                    socket: 'FM2',
                    RAM: 'ddr3',
                    quantityRAM: 2
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adi',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
               name: 'Asus M5A78L-M',
                price: 109,
                stock: 30,
                type: 'placaBase',
                details: {
                    socket: 'AM3',
                    RAM: 'ddr3',
                    quantityRAM: 4
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adi',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
               name: 'MSI 970 Gaming',
                price: 109,
                stock: 30,
                type: 'placaBase',
                details: {
                    socket: 'AM3',
                    RAM: 'ddr4',
                    quantityRAM: 4
                },
                desc: "Placas base MSI GAMING ® están diseñados para proporcionar a los jugadores con las características y la mejor tecnología en su clase. Con el respaldo de las miradas imponentes de dragón de MSI, cada placa base es una obra maestra de la ingeniería a la medida de la perfección de juego. <br>Sonido increíble con Audio Boost 2, impulsado por Creative Sound Blaster Cine 2 El fragmento más alto y el más bajo de retraso con Killer ™ E2200 Juego Networking<br>4 componentes de Clase Militar<br>Líneas de producción especializadas sólo para las placas base JUEGO<br>OC Genie 4<br>Gaming puerto Device<br>Optimizado para múltiples tarjetas gráficas (CrossFire certificada)<br>Toma el control con el Centro de Mando & Live Update 6<br>Características:<br><br>Soporta procesadores AMD FX II / Phenom ™ / Athlon ™ II / Sempron ™ para socket AM3 +<br>Soporta DDR3-2133 (OC) Memoria<br>USB 3.0 + SATA 6Gb / s<br>Potenciador de audio 2: Premiar tus oídos con verdadera calidad<br>Killer Ethernet: Kill Your Lag<br>OC Genie 4: Overclocking en 1 segundo<br>Haga clic en BIOS 4: ajustar fácilmente su sistema<br>Multi-GPU: AMD CrossFire Soporte<br>Sound Blaster Cine 2: Realista experiencia de sonido envolvente<br>Gaming Device Puerto: Optimizado con triple baño de oro para la alta votación Dispositivos Cambio de Juegos de Azar<br>Especificaciones:<br><br>CPU (Max Soportado) FX<br>FSB / Hyper Transport Bus hasta 4,8 GT / s<br>Chipset AMD ® 970 + SB950<br>Memoria DDR3 DDR3 1066/1333/1600/1866/2133 * (* OC)<br>Canal de Memoria Dual<br>DIMM Slots 4<br>Max Memoria (GB) 32<br>PCI-Ex16 2<br>PCI-E Gen Gen2 (1x16, 1x8)<br>PCI-Ex1 2<br>PCI 2<br>Puertos USB 3.0 (frontal) 2<br>SATAIII 6<br>Puertos USB 2.0 (frontal) 6<br>RAID 0/1/5/10<br>LAN 10/100/1000 * 1<br>TPM 1<br>Puertos USB 3.0 (Posterior) 2<br>Puertos USB 2.0 (Posterior) 8<br>Puerto Audio (Posterior) 6<br>Factor de forma ATX<br>APS YCrossFire Y<br>",
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
               name: 'GA-H61M-USB3H',
                price: 80,
                stock: 25,
                type: 'placaBase',
                details: {
                    socket: '1155',
                    RAM: 'ddr3',
                    quantityRAM: 2
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adi',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      },
            {
               name: 'ASUS F2A85-M PRO',
                price: 62,
                stock: 20,
                type: 'placaBase',
                details: {
                    socket: 'FM2',
                    RAM: 'ddr3',
                    quantityRAM: 4
                },
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto error totam ipsam praesentium. Quo quaerat incidunt facilis assumenda aliquam commodi, consequatur iusto blanditiis quas officiis dolorum aliquid magni nam! Lorem ipsum dolor sit amet, consectetur adi',
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
      }
    ];

        var id = '0';

        _.each(data, function (product) {

            var insertProduct = {
                _id: id,
                name:product.name,
                price:product.price,
                stock:product.stock,
                type:product.type,
                details:{},
                desc:product.desc,
                createdAt: new Date(),
                votes: 0,
                positiveUpvoters: [],
                negativeUpvoters: []
            }

            if (insertProduct.type === 'procesadores'){
                insertProduct.details.power = product.details.power ;
                insertProduct.details.socket = product.details.socket ;
                insertProduct.details.velocity = product.details.velocity ;
                insertProduct.details.cores = product.details.cores ;
                insertProduct.details.brand = product.details.brand ;
            }

            if (insertProduct.type === 'ram'){
                insertProduct.details.typeRAM = product.details.typeRAM ;
                insertProduct.details.quantity = product.details.quantity ;
            }

            if ( insertProduct.type === 'placaBase' ){
                insertProduct.details.RAM = product.details.RAM ;
                insertProduct.details.socket = product.details.socket ;
                insertProduct.details.quantityRAM = product.details.quantityRAM ;
            }

            if ( insertProduct.type === 'graficas' ){
                insertProduct.details.graphType = product.details.graphType ;
                insertProduct.details.graphQuantity = product.details.graphQuantity ;
                insertProduct.details.brand = product.details.brand ;
            }

            Products.insert( insertProduct );

            Comments.insert({
                _id: id,
                comments: []
            });

            id = (parseInt(id) + 1).toString();

        });
    }
});
