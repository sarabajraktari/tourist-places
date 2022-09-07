import { Injectable } from "@angular/core";
import { City } from "../models/city.model";
import { geography } from "../models/geography.model";
import { history } from "../models/history.model";
@Injectable({ providedIn: 'root' })
export class CitiesService {


    private cities: City[] = [
        new City(
            0,
            'Prizren',
            'Most backpackers in Kosovo pass through Prizren, simply for its convenience, however this historic market city of Kosovo is a photographer’s paradise.  If you’re looking to take the famous photo of Prizren, you must find the stone bridge of Prizren.',
            'https://www.wanderlustingk.com/wp-content/uploads/2017/10/kosovo-213161016106_orig.jpg',
            [
                new history
                    (
                        'Archaeological research has shown that the site of the Prizren Fortress has had several eras of habitation since prehistoric times. In its lower part, material from the upper part of the fort has been deposited over the centuries.It dates from the Middle Bronze Age (c. 2000 BCE) to the late Iron Age (c. 1st century CE) and is comparable to the material found in the nearby prehistoric site in the village of Vlashnjë (~10 km west of Prizren).In 2005, prehistoric rock paintings in a ritual site related to the cycle of life were found near Vlashnjë. They represent the first find of prehistoric rock art in the region.',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Prizren_Fortress.jpg/1024px-Prizren_Fortress.jpg'
                    )
            ],
            [
                new geography
                    ("Prizren is located on the foothills of the Šar Mountains (Albanian: Malet e Sharrit) in southern Kosovo on the banks of Prizren River. Prizren Mnicipality borders Albania to the southweast and North Macedonia to the southeast.",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Prizren_in_Kosovo_%28Kosovo_independent%29.svg/800px-Prizren_in_Kosovo_%28Kosovo_independent%29.svg.png"
                    ),
            ]
        ),
        new City(
            1,
            'Prishtina',
            'Pristina is  the capital city of Kosovo. It`s full of interesting architecture, including the National Library.',
            'https://thebalkanista.com/wp-content/uploads/2019/11/69864330_1668378579964773_5072367861318549504_n.jpg',
            [
                new history
                    (
                        'The area of Pristina has been inhabited by humans since prehistoric times by several neolithic cultures, including Baden, Bubanj-Hum, Starcevo and Vinca.The earliest recognised references were discovered in Gracanica, Matiçan and Ulpiana. During the 4th century BC, King Bardyllis brought various Illyrian tribes together, establishing the Dardanian Kingdom.Following the Roman conquest of Illyria in 168 BC, Romans colonized and founded several cities in the region.',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Prishtina_and_the_great_Hamam.jpg/1024px-Prishtina_and_the_great_Hamam.jpg'
                    )
            ],
            [
                new geography
                    ("Pristina is situated on a alluvial plain in the regions of Llap and Kosovo across the Gollak Hills in central and eastern Kosovo.Bodies of water in Pristina Municipality include the lakes of Badovc and Batllava as well as the rivers of Llap, Prishtevka and Vellusha.",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Pristina_in_Kosovo_%28Kosovo_independent%29.svg/250px-Pristina_in_Kosovo_%28Kosovo_independent%29.svg.png"
                    )
            ]),
        new City(
            2,
            'Peja',
            'Peja surprised me in the best way possible.  This charming city in Kosovo was full of fantastic markets, beautiful nature accessible via a day trip from Peja, and beautiful mountains framing the city.'
            ,
            'https://www.wanderlustingk.com/wp-content/uploads/2017/10/kosovo-3616101429_orig.jpg',
            [
                new history
                    (
                        "The city is located in a strategic position on Peja's Lumbardh, a tributary of the White Drin to the east of the Accursed Mountains.The medieval city was possibly built on the ruins of Siparant(um), a Roman municipium (town or city). The area has the most unearthed stelae in all of Kosovo.Slavs (Sclaveni and Antes) settled the Balkans, heavily depopulated by 'Barbarians', in the 6th century. The Byzantine Empire and the First Bulgarian Empire fought for control of the area until it finally fell under full Serbian control.",
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ura_e_Zall%C3%A7it.jpg/1024px-Ura_e_Zall%C3%A7it.jpg'
                    )
            ],
            [
                new geography
                    ("Peja in Western Kosovo near the Rugova Canyon or Gorge. Rugova is a mountainous region entered through the North-West part of the city of Peja. It is the third region of Accursed Mountains.",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Pec_in_Kosovo_%28Kosovo_independent%29.svg/800px-Pec_in_Kosovo_%28Kosovo_independent%29.svg.png"
                    )
            ]),

        new City(
            3,
            'Gjakova',
            'We ended up in Gjakova by mistake, but this city in Kosovo has some of the most charming architecture in its Bazaar that we saw while in Kosovo.',
            'https://www.wanderlustingk.com/wp-content/uploads/2017/10/kosovo-13516101538_orig.jpg',
            [
                new history
                    (
                        'Gjakova has been a settlement with an ethnic Albanian majority since its foundation in the late 16th century around the foundations of Hadim Suleyman Efendi, a politically important local Albanian.In the Ottoman defter (tax registry) of 1485, the "village of Đakovica" had 67 households. In the 17th century, Katip Çelebi and Evliya Çelebi mention this place as Jakovičse, with 2000 houses and 300 shops. During the early period of Ottoman rule, Gjakova and the Gjakova Municipality were part of the Nahiya of Altun-ili. Most of the villages in the Nahiya of Altun-ili were dominated by inhabitants with Albanian anthroponomy. ',
                        'https://upload.wikimedia.org/wikipedia/commons/b/b1/The_Old_Bazaar%2C_Gjakova.jpg'
                    )
            ],
            [
                new geography
                    ("Gjakova is located in the south-western part of Kosovo. To the north-east of the city, the west Kosovan plain of Dukagjini opens, while in the south-west the peak of Albanian Alps rises.",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/District_of_Gjakova_in_Kosovo.svg/800px-District_of_Gjakova_in_Kosovo.svg.png"
                    )
            ]),
        new City(
            4,
            'Ferizaj',
            'Ferizaj has always been considered as a city where tolerance and coexistence in terms of religion and culture has been part of the society in the last centuries.',
            'https://upload.wikimedia.org/wikipedia/commons/2/28/Ferizaj.jpg',
            [
                new history
                    (
                        'The oldest group who lived in the 6th and 5th millenniums BC in the territory of Kosovo was the Starčevo culture. Members of this group constructed their homes near rivers and the river terraces. They made their homes of willows and mud, while their main profession was plowing and farming.In the next archaeological period, the Vinča culture developed in some parts of Kosovo. These population shifts were made around 4300 BC. The newcomers also built their habitats near rivers. These habitats were unfortified, with dense rows of willows and mud houses. ',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/The_railway_line_at_Ferizaj_1903.jpg/1024px-The_railway_line_at_Ferizaj_1903.jpg'
                    )
            ],
            [
                new geography
                    ("Ferizaj is located in the south-eastern part of Kosovo, about halfway between the cities of Pristina and Skopje.",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Urosevac_in_Kosovo_%28Kosovo_independent%29.svg/800px-Urosevac_in_Kosovo_%28Kosovo_independent%29.svg.png"
                    )
            ]),
        new City(
            5,
            'Gjilan',
            'Gjilan is located in the southeastern part of Kosovo, the region of Anamorava. Its geographic position makes it possible to make good connections with other centers of Kosovo and the region.',
            'https://upload.wikimedia.org/wikipedia/commons/b/b0/Gjilani_pas_dite.jpg',
            [
                new history
                    (
                        'In 1342, a place called Morava was visited by Serbian King Stefan Dušan (later Emperor, r. 1331–1355). A fort was built nearby in the 14th century. Gornja Morava ("Upper Morava") was known as simply Morava under Ottoman rule, and it extended west of the Upper Žegra–Budriga–Cernica line, thus Gjilan stayed in the oblast (province) of Topolnica, which provincial seat was Novo Brdo.There were 41 households. The defter is deemed highly unreliable in the modern day and age due to its religious and not ethnic registration of people.',
                        'https://upload.wikimedia.org/wikipedia/commons/6/6c/Gjilani_i_vjeter_qendra.jpg'
                    )
            ],
            [
                new geography
                    ("Gjilan is located in the southeastern part of Kosovo, the region of Anamorava. Its geographic position makes it possible to make good connections with other centers of Kosovo and the region. ",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Gjilani_in_Kosovo_%28Kosovo_independent%29.svg/250px-Gjilani_in_Kosovo_%28Kosovo_independent%29.svg.png"
                    )
            ])
    ];

    getCities() {
        return this.cities.slice();
    }

    getCity(index: number) {
        return this.cities[index];
    }
}