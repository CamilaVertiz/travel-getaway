const data = {
    "tokyo": {
        "audio": "f9EvqT3UuS4",
		"time": {
            "day": {
                "way":{
                    "drive": "z1obnaqPgMA",
                    "walk": "L_WYjn6y5dc"
                }
            },
			"night": {
                "way":{
                    "drive": "ceEE_oYuzS4",
                    "walk": "-7QaGtE6q70"
                }
            }
        },        
        "timetravel": "timetravel"
    },
    "newyork": {
        "audio": "_sI_Ps7JSEk",
		"time": {
            "day": {
                "way":{
                    "drive": "D3oFGOJr-ak",
                    "walk": "-IpXdtWfneI"
                }
            },
			"night": {
                "way":{
                    "drive": "n1xkO0_lSU0",
                    "walk": "eZe4Q_58UTU"
                }
            }
        },        
        "timetravel": "timetravel"
    },
    "hongkong": {
        "audio": "f0HCKsmLS3A",
		"time": {
            "day": {
                "way":{
                    "drive": "ULcuZ3Q02SI",
                    "walk": "oAkCZbmFsU4"
                }
            },
			"night": {
                "way":{
                    "drive": "XaR6qEt-BIY",
                    "walk": "yAEKl6nWShM"
                }
            }
        },        
        "timetravel": "timetravel"
    },
    "saopaulo": {
        "audio": "GkWJ9eS_nXM",
		"time": {
            "day": {
                "way":{
                    "drive": "_hptbEVx5eM",
                    "walk": "xCT7VWU3I9U"
                }
            },
			"night": {
                "way":{
                    "drive": "WcjGyIjHLDA",
                    "walk": "C0laihngWUo"
                }
            }
        },        
        "timetravel": "timetravel"
    },
    "london": {
        "audio": "chcPL2Jp4Cs",
		"time": {
            "day": {
                "way":{
                    "drive": "egywJW6blng",
                    "walk": "EAV0Gl6vJsw"
                }
            },
			"night": {
                "way":{
                    "drive": "3-Ff85qoVr0",
                    "walk": "E2sSvVCRI4s"
                }
            }
        },        
        "timetravel": "timetravel"
    }
}

const countrySelect = [
    { value: 'tokyo', label: 'Tokyo' },
    { value: 'newyork', label: 'New York' },
    { value: 'hongkong', label: 'Hong Kong' },
    { value: 'saopaulo', label: 'Sao Paulo' },
    { value: 'london', label: 'London' },
  ];

const timeSelect = [
    { value: 'day', label: 'Daytime' },
    { value: 'night', label: 'Night' },
];

const transSelect = [
    { value: 'walk', label: 'Walk' },
    { value: 'drive', label: 'Drive' },
];

export { data, countrySelect, timeSelect, transSelect}; 