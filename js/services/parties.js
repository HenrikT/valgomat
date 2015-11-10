angular.module('valgomat')
    .service('parties', function () {
        var parties = [
            {
                id: "p_ap",
                name: "Arbeiderpartiet"
            },
            {
                id: "p_frp",
                name: "Fremskrittspartiet"
            },
            {
                id: "p_h",
                name: "Høyre"
            },
            {
                id: "p_krf",
                name: "Kristelig Folkeparti"
            },
            {
                id: "p_mdg",
                name: "Mijøpartiet De Grønne"
            },
            {
                id: "p_r",
                name: "Rødt"
            },
            {
                id: "p_sp",
                name: "Senterpartiet"
            },
            {
                id: "p_sv",
                name: "Sosialistisk Venstreparti"
            },
            {
                id: "p_v",
                name: "Venstre"
            },
            {
                id: "p_andre",
                name: "Andre"
            },
            {
                id: "p_ingen",
                name: "Ingen"
            }
        ];

        return {
            getParties: function () {
                return parties;
            }

        }

    });
