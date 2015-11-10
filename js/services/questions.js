angular.module('valgomat')
    .service('questions', function() {
        var questions = [
            {
                id: 0,
                q: "Alle subsidier til norsk petroleumsvirksomhet bør stoppes nå, og hele næringen bør avvikles innen 20 år.",
                category: "Miljø og ressurser",
                party: "p_mdg",
                importance: null
            },
            {
                id: 1,
                q: "Lokalpolitikerne bør kunne bestemme mer over fordelene for el-biler.",
                category: "Miljø og ressurser",
                party: "p_mdg",
                importance: null
            },
            {
                id: 2,
                q: "Bilbruken bør strammes ytterligere inn i byene.",
                category: "Miljø og ressurser",
                party: "p_v",
                importance: null
            },
            {
                id: 3,
                q: "Butikkene bør selv få velge om de skal holde søndagsåpent.",
                category: "Arbeidsliv og næringsliv",
                party: "p_v",
                importance: null
            },
            {
                id: 4,
                q: "Kommuner bør, generelt sett, sette flere offentlige tjenester ut på anbud.",
                category: "Arbeidsliv og næringsliv",
                party: "p_krf",
                importance: null
            },
            {
                id: 5,
                q: "Det var feil å myke opp reglene for midlertidige ansettelser.",
                category: "Arbeidsliv og næringsliv",
                party: "p_krf",
                importance: null
            },
            {
                id: 6,
                q: "Det er viktig at Norge får en demokratirevolusjon og avskaffer kapitalismen.",
                category: "Arbeidsliv og næringsliv",
                party: "p_r",
                importance: null
            },
            {
                id: 7,
                q: "Pelsdyrnæringen bør avvikles.",
                category: "Arbeidsliv og næringsliv",
                party: "p_r",
                importance: null
            },
            {
                id: 8,
                q: "Det bevilges for lite til norsk landbruk over statsbudsjettet.",
                category: "Arbeidsliv og næringsliv",
                party: "p_sp",
                importance: null
            },
            {
                id: 9,
                q: "Kommunene bør få beholde mer av skatteinntektene.",
                category: "Skatter og avgifter",
                party: "p_sp",
                importance: null
            },
            {
                id: 10,
                q: "Politikerne bør bruke mer av oljeinntektene enn i dag.",
                category: "Skatter og avgifter",
                party: "p_frp",
                importance: null
            },
            {
                id: 11,
                q: "Skattene må kuttes for å styrke vekst i sysselsetting og næringslivet.",
                category: "Skatter og avgifter",
                party: "p_frp",
                importance: null
            },
            {
                id: 12,
                q: "Formuesskatten må kuttes ytterligere.",
                category: "Skatter og avgifter",
                party: "p_h",
                importance: null
            },
            {
                id: 13,
                q: "Det bør gjeninnføres gratis frukt og grønt i skolen.",
                category: "Skole og oppvekst",
                party: "p_h",
                importance: null
            },
            {
                id: 14,
                q: "Vi bør kreve at alle framtidas lærere har en femåring masterutdanning.",
                category: "Skole og oppvekst",
                party: "p_ap",
                importance: null
            },
            {
                id: 15,
                q: "Kontantstøtten bør beholdes.",
                category: "Skole og oppvekst",
                party: "p_ap",
                importance: null
            },
            {
                id: 16,
                q: "SFO skal ha makspris.",
                category: "Skole og oppvekst",
                party: "p_sv",
                importance: null
            },
            {
                id: 17,
                q: "Det er greit at kommunen lar private selskaper bygge og eie skolebygg.",
                category: "Skole og oppvekst",
                party: "p_sv",
                importance: null
            },
            {
                id: 18,
                q: "Kristendommen har fått for stor plass i skolen.",
                category: "Skole og oppvekst",
                party: "p_andre",
                importance: null
            },
            {
                id: 19,
                q: "Eldre bør få velge fritt mellom private og kommunale tjenester.",
                category: "Eldre",
                party: "p_andre",
                importance: null
            }
        ];

        return {
            getQuestions: function() {
                return questions;
            }

        }

});