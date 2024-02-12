import {createSlice} from "@reduxjs/toolkit";

// let reviewsArr = [
//     {
//         user: "pati.n",
//         text: "Serdeczne podziękowania dla Pana Grzegorza za pomoc w wynajmie mieszkania. Pan Grzegorz zajął się całą procedurą od początku do końca . Wykonał profesjonalne zdjecia mieszkania , monitorował czy  jest ono łatwe do znalezienia na portalach dla potencjalnych klientów . Był z nami w stałym kontakcie. Po każdej wizycie z klientem dzwonił i omawialiśmy wspólnie wszystkie za i przeciw temu wynajmowi. Zdecydowanie zależało mu na naszym zadowoleniu, nie wciskał nikogo na siłę. Przygotował umowę, umówił termin u notariusza. Sumarycznie jesteśmy  bardzo zadowoleni. Polecamy z czystym sumieniem Pana Grzegorza i jego biuro.",
//     },
//     {
//         user:"Grzegorz Herok",
//         text:"Jesteśmy zadowoleni z usług tego biura nieruchomości. Cały proces wynajmu naszego mieszkania przebiegł w sposób profesjonalny i przejrzysty. Pan Grzegorz był bardzo pomocny. Polecam to biuro wszystkim poszukującym skutecznej pomocy w dziedzinie nieruchomości."
//     },
//     {
//         user:"Anna Syrotenko",
//         text:"Bardzo miło się pracowało z Panią Ksenia i Panem Grzegorzem. Ułatwili kontakt z właścicielem, i pomogli załatwić wszystkie początkowe kwestie, w tym milion zapytań co do mieszkania."
//     },
//     {
//         user:"Michał Mazurek",
//         text:"Polecam współpracę z biurem nieruchomości, szczególnie z pośrednikiem P. Pawłem. Wszystko przebiegło wzorowo i w pełni profesjonalnie."
//     },
//     {
//         user:"Екатерина Бондарева",
//         text:"Chciałbym zostawić moją recenzję i wdzięczność pośredniczce w handlu nieruchomościami Ksenii Bradlo za wykonaną pracę. Było wiele emocji i niepokoju, ale dzięki wszechstronnemu wsparciu i osobistemu zaangażowaniu ludzkiemu Kseni poszukiwania mieszkania przebiegły szybko i terminowo...\n" +
//             "Z przyjemnością polecam tego pośrednika!"
//     },
//     {
//         user:"Tomasz Lipiński",
//         text:"Pełen profesjonalizm. Wynajęcie mieszkania za pośrednictwem Pana Grzegorza przebiegło bardzo szybko oraz sprawnie. Zdecydowanie polecam."
//     },
//     {
//         user:"Anna Steczko",
//         text:"Polecam! Współpraca bardzo udana i przyjemna. Pan Grzegorz wykazał się dużym profesjonalizmem i zaangażowaniem. Polecam każdemu."
//     },
//     {
//         user:"Teresa Bieg",
//         text:"Jestesmy bardzo zadowoleni ze współpracy z Panią Ksenia . Profesjonalizm i odpowiedzialność.  Polecam."
//     },
//     {
//         user:"traveler4x4",
//         text:"Bardzo solidna firma ! Szczególnie polecam współpracę z Panem Grzegorzem. Prawdziwy profesjonalista ! Nic dodać nic ująć :) będziemy na pewno współpracować ponownie w przyszłości :)\n"
//     },
//     {
//         user:"Elżbieta Walęzak",
//         text:"Trafiliśmy do Pana Grzegorza z polecenia znajomego i jesteśmy bardzo zadowoleni ze współpracy. Szczerze polecamy!"
//     },
//     {
//         user:"Monika Hamerska",
//         text:"Jesteśmy bardzo zadowoleni ze współpracy. Profesjonalne podejście do klienta, pomoc na każdym etapie. Szybka pomoc w złożeniu potrzebnych papierów. Firma godna polecenia."
//     },
//     {
//        user:"Maciej Grzesiak",
//         text:"Polecam współpracę z Panią Ksenią. Dzięki jej zaangażowaniu i profesjonalnym podejściu wynajęłam swoje dwa Mieszkania w niespełna 3 tygodnie !"
//     },
//     {
//         user:"Katarzyna Ślanda",
//         text:"Świetny kontakt z Panem Grzegorzem, wszystko było przeprowadzone szybko i profesjonalnie, polecam!"
//     },
//     {
//         user:"Paulina",
//         text:"Serdecznie polecam skorzystanie z usług Pana Grzegorza. Rzadko spotykany profesjonalizm i duże zaangażowanie sprawiają, że współpraca to przyjemność, nawet w skomplikowanych sytuacjach. Biuro oferuje zarówno usługi pośrednictwa w wynajmie nieruchomości, jak i kompleksowe usługi zarządzania najmem - w atrakcyjnych na rynku cenach. Warto!"
//     },
//     {
//         user:"Dmytro Boiko",
//         text:"Ksenia jest super przyjazną i pomocną agentką!\n"
//     },
//     {
//         user:"Wiktor Czelny",
//         text:"Bardzo rzetelne i profesjonalne biuro nieruchomości. Kontakt na najwyższym poziomie."
//     },
//     {
//         user:"Pip The Beach Cat",
//         text:"Absolutnie najlepszy pośrednik w obrocie nieruchomościami z jakim współpracowałem w Krakowie. Po wielu nieudanych próbach wynajęcia różnych mieszkań z pomocą przyszedł Paweł i znalazł dla nas coś idealnego (mieliśmy bardzo długą i z pewnością irytującą listę „chcę”). Był niezwykle responsywny, nigdy nie kwestionował naszych potrzeb i w pełni wspierał nasze pomysły od początku do końca, co, nawiasem mówiąc, wymagało tylko jednego osobistego pokazania jednego mieszkania, ponieważ naprawdę był tak dobry w znajdowaniu nam wszystkiego, czego chcieliśmy , za chwilę!"
//     },
//     {
//         user:"Agnieszka Czarkowska",
//         text:"Szczerze polecam usługi Pana Grzegorza. Jego profesjonalizm, doskonała organizacja, terminowość i osobiste zaangażowanie pozwoliły błyskawicznie i bez problemów zapiąć kwestię wynajmu mieszkania na ostatni guzik. Dzięki Panu Grzegorzowi oszczędziliśmy czas, a przede wszystkim zredukowaliśmy stres do minimum. Jesteśmy bardzo wdzięczni za pomoc i z czystym sercem możemy polecić współpracę z Nim i Jego agencją."
//     },
//     {
//         user:"Anna Serafin",
//         text:"Na Agencję, w której pracuje Pan Grzegorz trafiłam całkiem przypadkowo i bardzo się cieszę, że tak się stało. Serdecznie dziękuję Panu Grzegorzowi za pomoc. Dzięki jego zaangażowaniu oraz profesjonalizmowi w niezwykle krótkim czasie udało nam się wynająć mieszkanie. Jesteśmy bardzo zadowoleni z prowadzenia procesu najmu od początku do samego końca, oraz dopilnowania przez Pana Grzegorza całej strony formalnej. Przez cały czas był bardzo pomocny i zawsze dyspozycyjny. Z pełnym przekonaniem polecamy współpracę z Panem Grzegorzem."
//     },
//     {
//         user:"Wioletta Nieckarz",
//         text:"Współpraca z p. Grzegorzem Bradło przebiegła pomyślnie i w miłej atmosferze. Serdecznie polecam!"
//     },
//     {
//         user:"Marcin Drąg",
//         text:"Pan Grzegorz jest osobą profesjonalną i życzliwą. Cierpliwie udzielał odpowiedzi na wszystkie pytanie. Na spotkaniach pomocny, uśmiechnięty, a co najważniejsze - dokładnie przygotowany.Gorąco polecam LiveIn !"
//     },
//     {
//         user:"Natalia Tomczok",
//         text:"Bardzo fachowe i profesjonalne podejście. Bardzo dobry kontakt oraz poczucie dobrego zaopiekowania :) z pomocy Pana Grzegorza korzystałam nie po raz pierwszy i na pewno nie po raz ostatni. Polecam wszystkim. Najlepszy pośrednik z jakim przyszło mi współpracować"
//     },
//     {
//         user:"Iwona Pellar",
//         text:"Z moją siostrą Bożeną korzystałyśmy z usług Pana Grzegorza i byłyśmy wyjątkowo zadowolone z jego kompetencji, profesjonalizmu, kultury osobistej. Polecamy bardzo serdecznie."
//     },
//     {
//         user:"Krzysztof M",
//         text:"Wspólpracuje z Grzegorzem od wielu lat, w 100% polecam."
//     },
//     {
//         user:"Ann 1313",
//         text:"Jestem bardzo zadowolona ze współpracy z Panem Grzegorzem, który wykazał się bardzo dużym profesjonalizmem  - zawsze dyspozycyjny i pomocny. Uczciwa i rzetelną wspołpraca. Polecam bardzo serdecznie!"
//     },
//     {
//         user:"gabriela miodek",
//         text:"Grzegorz Bradło z zaangażowaniem i ze znawstwem podszedł do zleconego mu przez nas znalezienia najemców mieszkania. Jesteśmy pod wrażeniem szybkosci dzialania i znajomości materii, którą się zajmuje. Podejmowal kroki zawsze w porozumieniu z nami, a kontakt\n" +
//             "z Panem Grzegorzem był zawsze wzorowy. Ponadto dał się poznać jako życzliwy i opanowany człowiek."
//     },
// ]

const reviewsSlice = createSlice({
    name: "reviews",
    initialState:{
        reviews: [
            {
                id:"2",
                user:"Klient",
                text:"Jesteśmy zadowoleni z usług tego biura nieruchomości. Cały proces wynajmu naszego mieszkania przebiegł w sposób profesjonalny i przejrzysty. Pan Grzegorz był bardzo pomocny. Polecam to biuro wszystkim poszukującym skutecznej pomocy w dziedzinie nieruchomości."
            },
            {
                id:"3",
                user:"Klient",
                text:"Bardzo miło się pracowało z Panią Ksenia i Panem Grzegorzem. Ułatwili kontakt z właścicielem, i pomogli załatwić wszystkie początkowe kwestie, w tym milion zapytań co do mieszkania."
            },
            {
                id:"1",
                user: "Klient",
                text: "Serdeczne podziękowania dla Pana Grzegorza za pomoc w wynajmie mieszkania. Pan Grzegorz zajął się całą procedurą od początku do końca . Wykonał profesjonalne zdjecia mieszkania , monitorował czy  jest ono łatwe do znalezienia na portalach dla potencjalnych klientów . Był z nami w stałym kontakcie. Po każdej wizycie z klientem dzwonił i omawialiśmy wspólnie wszystkie za i przeciw temu wynajmowi. Zdecydowanie zależało mu na naszym zadowoleniu, nie wciskał nikogo na siłę. Przygotował umowę, umówił termin u notariusza. Sumarycznie jesteśmy  bardzo zadowoleni. Polecamy z czystym sumieniem Pana Grzegorza i jego biuro.",
            },
            {
                id:"11",
                user:"Klient",
                text:"Polecam współpracę z Panią Ksenią. Dzięki jej zaangażowaniu i profesjonalnym podejściu wynajęłam swoje dwa Mieszkania w niespełna 3 tygodnie !"
            },
            {
                id:"8",
                user:"Klient",
                text:"Jestesmy bardzo zadowoleni ze współpracy z Panią Ksenia . Profesjonalizm i odpowiedzialność.  Polecam."
            },

            {
                id:"6",
                user:"Klient",
                text:"Pełen profesjonalizm. Wynajęcie mieszkania za pośrednictwem Pana Grzegorza przebiegło bardzo szybko oraz sprawnie. Zdecydowanie polecam."
            },

            {
                id:"7",
                user:"Klient",
                text:"Polecam! Współpraca bardzo udana i przyjemna. Pan Grzegorz wykazał się dużym profesjonalizmem i zaangażowaniem. Polecam każdemu."
            },
            {
                id:"5",
                user:"Klient",
                text:"Chciałbym zostawić moją recenzję i wdzięczność pośredniczce w handlu nieruchomościami Ksenii Bradlo za wykonaną pracę. Było wiele emocji i niepokoju, ale dzięki wszechstronnemu wsparciu i osobistemu zaangażowaniu ludzkiemu Kseni poszukiwania mieszkania przebiegły szybko i terminowo...\n" +
                    "Z przyjemnością polecam tego pośrednika!"
            },
            {
                id:"8",
                user:"Klient",
                text:"Bardzo solidna firma ! Szczególnie polecam współpracę z Panem Grzegorzem. Prawdziwy profesjonalista ! Nic dodać nic ująć :) będziemy na pewno współpracować ponownie w przyszłości :)\n"
            },
            {
                id:"9",
                user:"Klient",
                text:"Trafiliśmy do Pana Grzegorza z polecenia znajomego i jesteśmy bardzo zadowoleni ze współpracy. Szczerze polecamy!"
            },
            {
                id:"10",
                user:"Klient",
                text:"Jesteśmy bardzo zadowoleni ze współpracy. Profesjonalne podejście do klienta, pomoc na każdym etapie. Szybka pomoc w złożeniu potrzebnych papierów. Firma godna polecenia."
            },

            {
                id:"12",
                user:"Klient",
                text:"Świetny kontakt z Panem Grzegorzem, wszystko było przeprowadzone szybko i profesjonalnie, polecam!"
            },
            {
                id:"13",
                user:"Klient",
                text:"Serdecznie polecam skorzystanie z usług Pana Grzegorza. Rzadko spotykany profesjonalizm i duże zaangażowanie sprawiają, że współpraca to przyjemność, nawet w skomplikowanych sytuacjach. Biuro oferuje zarówno usługi pośrednictwa w wynajmie nieruchomości, jak i kompleksowe usługi zarządzania najmem - w atrakcyjnych na rynku cenach. Warto!"
            },
            {
                id:"14",
                user:"Klient",
                text:"Ksenia jest super przyjazną i pomocną agentką!\n"
            },
            {
                id:"15",
                user:"Klient",
                text:"Bardzo rzetelne i profesjonalne biuro nieruchomości. Kontakt na najwyższym poziomie."
            },
            {
                id:"16",
                user:"Klient",
                text:"Absolutnie najlepszy pośrednik w obrocie nieruchomościami z jakim współpracowałem w Krakowie. Po wielu nieudanych próbach wynajęcia różnych mieszkań z pomocą przyszedł Paweł i znalazł dla nas coś idealnego (mieliśmy bardzo długą i z pewnością irytującą listę „chcę”). Był niezwykle responsywny, nigdy nie kwestionował naszych potrzeb i w pełni wspierał nasze pomysły od początku do końca, co, nawiasem mówiąc, wymagało tylko jednego osobistego pokazania jednego mieszkania, ponieważ naprawdę był tak dobry w znajdowaniu nam wszystkiego, czego chcieliśmy , za chwilę!"
            },
            {
                id:"17",
                user:"Klient",
                text:"Szczerze polecam usługi Pana Grzegorza. Jego profesjonalizm, doskonała organizacja, terminowość i osobiste zaangażowanie pozwoliły błyskawicznie i bez problemów zapiąć kwestię wynajmu mieszkania na ostatni guzik. Dzięki Panu Grzegorzowi oszczędziliśmy czas, a przede wszystkim zredukowaliśmy stres do minimum. Jesteśmy bardzo wdzięczni za pomoc i z czystym sercem możemy polecić współpracę z Nim i Jego agencją."
            },
            {
                id:"18",
                user:"Klient",
                text:"Na Agencję, w której pracuje Pan Grzegorz trafiłam całkiem przypadkowo i bardzo się cieszę, że tak się stało. Serdecznie dziękuję Panu Grzegorzowi za pomoc. Dzięki jego zaangażowaniu oraz profesjonalizmowi w niezwykle krótkim czasie udało nam się wynająć mieszkanie. Jesteśmy bardzo zadowoleni z prowadzenia procesu najmu od początku do samego końca, oraz dopilnowania przez Pana Grzegorza całej strony formalnej. Przez cały czas był bardzo pomocny i zawsze dyspozycyjny. Z pełnym przekonaniem polecamy współpracę z Panem Grzegorzem."
            },
            {
                id:"19",
                user:"Klient",
                text:"Współpraca z p. Grzegorzem Bradło przebiegła pomyślnie i w miłej atmosferze. Serdecznie polecam!"
            },
            {
                id:"20",
                user:"Klient",
                text:"Pan Grzegorz jest osobą profesjonalną i życzliwą. Cierpliwie udzielał odpowiedzi na wszystkie pytanie. Na spotkaniach pomocny, uśmiechnięty, a co najważniejsze - dokładnie przygotowany.Gorąco polecam LiveIn !"
            },
            {
                id:"21",
                user:"Klient",
                text:"Bardzo fachowe i profesjonalne podejście. Bardzo dobry kontakt oraz poczucie dobrego zaopiekowania :) z pomocy Pana Grzegorza korzystałam nie po raz pierwszy i na pewno nie po raz ostatni. Polecam wszystkim. Najlepszy pośrednik z jakim przyszło mi współpracować"
            },
            {
                id:"22",
                user:"Klient",
                text:"Z moją siostrą Bożeną korzystałyśmy z usług Pana Grzegorza i byłyśmy wyjątkowo zadowolone z jego kompetencji, profesjonalizmu, kultury osobistej. Polecamy bardzo serdecznie."
            },
            {
                id:"23",
                user:"Klient",
                text:"Wspólpracuje z Grzegorzem od wielu lat, w 100% polecam."
            },
            {
                id:"24",
                user:"Klient",
                text:"Jestem bardzo zadowolona ze współpracy z Panem Grzegorzem, który wykazał się bardzo dużym profesjonalizmem  - zawsze dyspozycyjny i pomocny. Uczciwa i rzetelną wspołpraca. Polecam bardzo serdecznie!"
            },
            {
                id:"4",
                user:"Klient",
                text:"Polecam współpracę z biurem nieruchomości, szczególnie z pośrednikiem P. Pawłem. Wszystko przebiegło wzorowo i w pełni profesjonalnie."
            },
            {
                id:"25",
                user:"Klient",
                text:"Grzegorz Bradło z zaangażowaniem i ze znawstwem podszedł do zleconego mu przez nas znalezienia najemców mieszkania. Jesteśmy pod wrażeniem szybkosci dzialania i znajomości materii, którą się zajmuje. Podejmowal kroki zawsze w porozumieniu z nami, a kontakt\n" +
                    "z Panem Grzegorzem był zawsze wzorowy. Ponadto dał się poznać jako życzliwy i opanowany człowiek."
            },
        ],
    },
    reducers:{
        showAllReviews(state){
            return{
                ...state,reviews:[...state.reviews]
            }
        }
    }
})

export const {showAllReviews}=reviewsSlice.actions;
export default reviewsSlice.reducer;