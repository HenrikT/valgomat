angular.module('valgomat')
    .service('counties', [
        function () {
            var counties = [
                {
                    name: "Akershus",
                    municipalities: ["Asker", "Bærum", "Eidsvoll"]
                },
                {
                    name: "Aust-agder",
                    municipalities: ["Arendal", "Risør", "Valle"]
                },
                {
                    name: "Buskerud",
                    municipalities: ["Drammen", "Hemsedal", "Røyken"]
                },
                {
                    name: "Finnmark",
                    municipalities: ["Alta", "Kautokeino"]
                },
                {
                    name: "Hedmark",
                    municipalities: ["Folldal", "Hamar"]
                },
                {
                    name: "Hordaland",
                    municipalities: ["Bergen", "Os"]
                },
                {
                    name: "Møre og Romsdal",
                    municipalities: ["Kristiansund", "Molde"]
                },
                {
                    name: "Nord-trøndelag",
                    municipalities: ["Levanger", "Namsos"]
                },
                {
                    name: "Nordland",
                    municipalities: ["Bodø", "Fauske"]
                },
                {
                    name: "Oppland",
                    municipalities: ["Dovre", "Lillehammer"]
                },
                {
                    name: "Oslo",
                    municipalities: ["Oslo"]
                },
                {
                    name: "Sogn og Fjordane",
                    municipalities: ["Eid", "Sogndal"]
                },
                {
                    name: "Sør-trøndelag",
                    municipalities: ["Røros", "Trondheim"]
                },
                {
                    name: "Telemark",
                    municipalities: ["Bamble", "Kragerø"]
                },
                {
                    name: "Troms",
                    municipalities: ["Bardu", "Tromsø"]
                },
                {
                    name: "Vest-agder",
                    municipalities: ["Kristiansand", "Mandal"]
                },
                {
                    name: "Vestfold",
                    municipalities: ["Sandefjord", "Tønsberg"]
                }
            ];


            return {
                getCounties: function () {
                    return counties;
                }

            }
        }
    ]);