import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

// interface LatLng {
//     lat: number,
//     lng: number
//   }
  
//   interface Leg {
//     steps: Step[]
//   }
  
//   interface Step {
//     intersections: Intersection[],
//     geometry: any
//     maneuver: Maneuver
//   }
//   interface Geometry {
//     geometry: { coordinates : any }
//   }
//   interface Intersection {
//     location: LatLng
//   }
  
//   interface Maneuver {
//     location: LatLng
//   }
  
//   interface Route {
//     legs: Leg[]
//   }

  const redIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

const TestMap2 = () => {
    const [route, setRoute] = useState<any>(null);
  const [markers, setMarkers] = useState<any>([]);
  
  useEffect(() => {
    // const url = "http://221.139.14.157:6071/route/v1/foot/127.06802,37.54089;127.10796,37.36613;127.06588,37.54723?overview=false&geometries=geojson&steps=true";
    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log('data >>' , data.routes[0])
    //     setRoute(data.routes[0])
    // });
    setRoute({
        "legs": [
            {
                "steps": [
                    {
                        "intersections": [
                            {
                                "out": 0,
                                "entry": [
                                    true
                                ],
                                "bearings": [
                                    113
                                ],
                                "location": [
                                    127.068016,
                                    37.540882
                                ]
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.069825,
                                    37.540269
                                ],
                                "bearings": [
                                    30,
                                    120,
                                    300
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.070613,
                                    37.539993
                                ],
                                "bearings": [
                                    15,
                                    120,
                                    195,
                                    300
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.070731,
                                    37.539954
                                ],
                                "bearings": [
                                    15,
                                    105,
                                    195,
                                    300
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.072451,
                                    37.539403
                                ],
                                "bearings": [
                                    15,
                                    105,
                                    285
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.07419,
                                    37.538915
                                ],
                                "bearings": [
                                    0,
                                    105,
                                    285
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.075109,
                                    37.538685
                                ],
                                "bearings": [
                                    15,
                                    105,
                                    285
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.075759,
                                    37.538513
                                ],
                                "bearings": [
                                    15,
                                    105,
                                    285
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "oecdFc~pfWxBiJv@{CFWlBwIXqAToAn@yDl@wDb@aCdAqG",
                        "mode": "walking",
                        "duration": 623.3,
                        "maneuver": {
                            "bearing_after": 113,
                            "location": [
                                127.068016,
                                37.540882
                            ],
                            "bearing_before": 0,
                            "type": "depart"
                        },
                        "weight": 622.7,
                        "distance": 859.3,
                        "name": "아차산로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 2,
                                "location": [
                                    127.077125,
                                    37.538158
                                ],
                                "bearings": [
                                    15,
                                    105,
                                    180,
                                    285
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "otbdFawrfWXA",
                        "mode": "walking",
                        "duration": 10,
                        "maneuver": {
                            "bearing_after": 174,
                            "type": "turn",
                            "modifier": "right",
                            "bearing_before": 106,
                            "location": [
                                127.077125,
                                37.538158
                            ]
                        },
                        "weight": 10,
                        "distance": 13.8,
                        "name": ""
                    },
                    {
                        "intersections": [
                            {
                                "out": 1,
                                "location": [
                                    127.077139,
                                    37.538034
                                ],
                                "bearings": [
                                    0,
                                    105,
                                    195,
                                    285
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.078704,
                                    37.537632
                                ],
                                "bearings": [
                                    105,
                                    195,
                                    285
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.079148,
                                    37.537516
                                ],
                                "bearings": [
                                    105,
                                    195,
                                    285
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.080749,
                                    37.537119
                                ],
                                "bearings": [
                                    105,
                                    195,
                                    285
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.08121,
                                    37.537004
                                ],
                                "bearings": [
                                    105,
                                    195,
                                    285
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "usbdFcwrfWnAwHTyAnA_IV{AnAqIFk@@m@?i@",
                        "mode": "walking",
                        "duration": 426,
                        "maneuver": {
                            "bearing_after": 106,
                            "type": "turn",
                            "modifier": "left",
                            "bearing_before": 174,
                            "location": [
                                127.077139,
                                37.538034
                            ]
                        },
                        "weight": 426,
                        "distance": 591.7,
                        "name": "아차산로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 1,
                                "location": [
                                    127.083564,
                                    37.53655
                                ],
                                "bearings": [
                                    90,
                                    165,
                                    270
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.083641,
                                    37.536233
                                ],
                                "bearings": [
                                    165,
                                    240,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.08367,
                                    37.536171
                                ],
                                "bearings": [
                                    75,
                                    165,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "mjbdFg_tfW~@OJEJE",
                        "mode": "walking",
                        "duration": 36.6,
                        "maneuver": {
                            "bearing_after": 168,
                            "type": "turn",
                            "modifier": "right",
                            "bearing_before": 87,
                            "location": [
                                127.083564,
                                37.53655
                            ]
                        },
                        "ref": "3",
                        "weight": 36.6,
                        "distance": 50.8,
                        "name": "자양로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 0,
                                "location": [
                                    127.083701,
                                    37.536108
                                ],
                                "bearings": [
                                    135,
                                    180,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.085424,
                                    37.53247
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    240,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.085786,
                                    37.532004
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.085961,
                                    37.531782
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.086415,
                                    37.531171
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.086883,
                                    37.530565
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.086995,
                                    37.530409
                                ],
                                "bearings": [
                                    105,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "ugbdFc`tfWVYZKhI}BlCaAtAe@hAi@LK\\UXSbAu@PMXSjBqALIvB{A^WvC{Br@g@fCkBlFsDrB{A~@o@",
                        "mode": "walking",
                        "duration": 863.1,
                        "maneuver": {
                            "bearing_after": 137,
                            "type": "fork",
                            "modifier": "slight left",
                            "bearing_before": 157,
                            "location": [
                                127.083701,
                                37.536108
                            ]
                        },
                        "ref": "3",
                        "weight": 863.1,
                        "distance": 1198.9,
                        "name": "자양로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 0,
                                "location": [
                                    127.089964,
                                    37.526617
                                ],
                                "bearings": [
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false
                                ],
                                "in": 1
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.09821,
                                    37.516012
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    240,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.098468,
                                    37.515669
                                ],
                                "bearings": [
                                    150,
                                    330,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.099647,
                                    37.514071
                                ],
                                "bearings": [
                                    135,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.100211,
                                    37.513348
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    255,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.100363,
                                    37.513182
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    255,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.100809,
                                    37.512637
                                ],
                                "bearings": [
                                    150,
                                    330,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.101948,
                                    37.511248
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    240,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.102898,
                                    37.510086
                                ],
                                "bearings": [
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.103203,
                                    37.509757
                                ],
                                "bearings": [
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false
                                ],
                                "in": 1
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.104091,
                                    37.508772
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    225,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.104661,
                                    37.508155
                                ],
                                "bearings": [
                                    75,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.105217,
                                    37.507553
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.106342,
                                    37.506336
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.107022,
                                    37.505598
                                ],
                                "bearings": [
                                    105,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.107308,
                                    37.505287
                                ],
                                "bearings": [
                                    15,
                                    90,
                                    150,
                                    240,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 4
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.107613,
                                    37.504961
                                ],
                                "bearings": [
                                    0,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.108215,
                                    37.504309
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.109407,
                                    37.50302
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.110302,
                                    37.502052
                                ],
                                "bearings": [
                                    75,
                                    150,
                                    240,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.111097,
                                    37.501104
                                ],
                                "bearings": [
                                    60,
                                    135,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.111415,
                                    37.500791
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    315
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.111742,
                                    37.500432
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    315
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "kl`dFggufWh^kW|JkHhDwBrKqHnAoArA_Aj@a@VQnEoC`@YlAaAhBqAPMRO`@]TQtAgAnA_An@i@tCyBf@_@bBqAhA{@PO`A{@pAeAlAgAd@c@d@c@rAmAxBoBpF_FrCgC|@y@VUh@e@`CyB`GmF`EqD|D_D|@_At@m@PQdCqB",
                        "mode": "walking",
                        "duration": 2581.4,
                        "maneuver": {
                            "bearing_after": 147,
                            "type": "new name",
                            "modifier": "straight",
                            "bearing_before": 147,
                            "location": [
                                127.089964,
                                37.526617
                            ]
                        },
                        "ref": "3",
                        "weight": 2581.4,
                        "distance": 3582.3,
                        "name": "송파대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 1,
                                "location": [
                                    127.112314,
                                    37.499763
                                ],
                                "bearings": [
                                    135,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "od{cF}ryfW|BaB|EgElBcBfG_FhA_AtA}A",
                        "mode": "walking",
                        "duration": 431.8,
                        "maneuver": {
                            "bearing_after": 147,
                            "type": "turn",
                            "modifier": "slight right",
                            "bearing_before": 144,
                            "location": [
                                127.112314,
                                37.499763
                            ]
                        },
                        "weight": 431.8,
                        "distance": 599.8,
                        "name": ""
                    },
                    {
                        "intersections": [
                            {
                                "out": 0,
                                "location": [
                                    127.116206,
                                    37.495347
                                ],
                                "bearings": [
                                    165,
                                    315,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.116267,
                                    37.495219
                                ],
                                "bearings": [
                                    135,
                                    300,
                                    315,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.116564,
                                    37.494912
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.117441,
                                    37.493984
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.118103,
                                    37.493285
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.118695,
                                    37.492513
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    255,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.119259,
                                    37.491821
                                ],
                                "bearings": [
                                    150,
                                    255,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.120061,
                                    37.49064
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.120682,
                                    37.489567
                                ],
                                "bearings": [
                                    60,
                                    165,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.121085,
                                    37.488722
                                ],
                                "bearings": [
                                    60,
                                    165,
                                    255,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.121887,
                                    37.487173
                                ],
                                "bearings": [
                                    60,
                                    165,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.122006,
                                    37.48693
                                ],
                                "bearings": [
                                    165,
                                    240,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.122414,
                                    37.486046
                                ],
                                "bearings": [
                                    75,
                                    165,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.122605,
                                    37.485675
                                ],
                                "bearings": [
                                    90,
                                    165,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.123259,
                                    37.484406
                                ],
                                "bearings": [
                                    75,
                                    165,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.123833,
                                    37.483291
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.124224,
                                    37.482554
                                ],
                                "bearings": [
                                    75,
                                    165,
                                    255,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "}hzcFikzfWXKRUh@c@xDoD@AfCaCzCwBdAu@bAy@f@_@xBqAz@e@LGtE{BhDqAtH_Dn@WnDoAz@_@LG|FaCxCmAdAc@rCmAfMgFtAi@zAo@",
                        "mode": "walking",
                        "duration": 1425.1,
                        "maneuver": {
                            "bearing_after": 158,
                            "type": "turn",
                            "modifier": "straight",
                            "bearing_before": 139,
                            "location": [
                                127.116206,
                                37.495347
                            ]
                        },
                        "weight": 1425.1,
                        "distance": 1978.8,
                        "name": "송파대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 2,
                                "location": [
                                    127.125832,
                                    37.479375
                                ],
                                "bearings": [
                                    75,
                                    150,
                                    165,
                                    240,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 4
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.126872,
                                    37.476457
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    240
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.126897,
                                    37.475957
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.126908,
                                    37.475802
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.12666,
                                    37.471391
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    210
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "cewcFmg|fWnBWnEsB`Bg@|@MfBMTCd@?F?^A^A^@T?`P\\xGPfBF",
                        "mode": "walking",
                        "duration": 692.6,
                        "maneuver": {
                            "bearing_after": 170,
                            "type": "fork",
                            "modifier": "slight right",
                            "bearing_before": 157,
                            "location": [
                                127.125832,
                                37.479375
                            ]
                        },
                        "ref": "3",
                        "weight": 692.6,
                        "distance": 962,
                        "name": "송파대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 2,
                                "location": [
                                    127.126618,
                                    37.47087
                                ],
                                "bearings": [
                                    0,
                                    75,
                                    180,
                                    255
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.126602,
                                    37.470698
                                ],
                                "bearings": [
                                    0,
                                    75,
                                    180,
                                    240
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.126554,
                                    37.470046
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    315
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.126459,
                                    37.468773
                                ],
                                "bearings": [
                                    0,
                                    180
                                ],
                                "entry": [
                                    false,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.126439,
                                    37.468571
                                ],
                                "bearings": [
                                    0,
                                    180
                                ],
                                "entry": [
                                    false,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.126315,
                                    37.467526
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.126148,
                                    37.465451
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.125712,
                                    37.459999
                                ],
                                "bearings": [
                                    0,
                                    105,
                                    180,
                                    255
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.125709,
                                    37.459932
                                ],
                                "bearings": [
                                    0,
                                    120,
                                    180,
                                    285
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.126197,
                                    37.45622
                                ],
                                "bearings": [
                                    75,
                                    165,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.126412,
                                    37.454005
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.126465,
                                    37.453045
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.126476,
                                    37.4526
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.126618,
                                    37.448472
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.126633,
                                    37.447931
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.126639,
                                    37.447868
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.1267,
                                    37.446677
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    240
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.126712,
                                    37.446525
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    225
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.126918,
                                    37.44396
                                ],
                                "bearings": [
                                    75,
                                    180,
                                    270,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.1271,
                                    37.442635
                                ],
                                "bearings": [
                                    0,
                                    165,
                                    255
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.127381,
                                    37.441332
                                ],
                                "bearings": [
                                    165,
                                    270,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.127677,
                                    37.439725
                                ],
                                "bearings": [
                                    75,
                                    165,
                                    255,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.127694,
                                    37.439655
                                ],
                                "bearings": [
                                    75,
                                    165,
                                    255,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.127844,
                                    37.438911
                                ],
                                "bearings": [
                                    165,
                                    255,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.127943,
                                    37.438328
                                ],
                                "bearings": [
                                    165,
                                    255,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128041,
                                    37.437751
                                ],
                                "bearings": [
                                    165,
                                    255,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128286,
                                    37.436398
                                ],
                                "bearings": [
                                    165,
                                    270,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128523,
                                    37.435085
                                ],
                                "bearings": [
                                    165,
                                    255,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.12876,
                                    37.433834
                                ],
                                "bearings": [
                                    180,
                                    285,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.128789,
                                    37.433629
                                ],
                                "bearings": [
                                    75,
                                    180,
                                    255,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.128818,
                                    37.433421
                                ],
                                "bearings": [
                                    0,
                                    75,
                                    180,
                                    255
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.128882,
                                    37.432973
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    255
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.128971,
                                    37.432279
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    255
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.129049,
                                    37.431484
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.129239,
                                    37.430188
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    240
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.129271,
                                    37.429838
                                ],
                                "bearings": [
                                    0,
                                    120,
                                    180,
                                    285,
                                    300
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.12935,
                                    37.429212
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    210
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.12924,
                                    37.427918
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    345
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.129132,
                                    37.427104
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    210
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.128911,
                                    37.425755
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    255,
                                    345
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.128732,
                                    37.421583
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.12874,
                                    37.421407
                                ],
                                "bearings": [
                                    0,
                                    75,
                                    180
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.128743,
                                    37.4209
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    345
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.1287,
                                    37.418757
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.128678,
                                    37.41721
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    210
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.128661,
                                    37.416823
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.128633,
                                    37.414296
                                ],
                                "bearings": [
                                    0,
                                    180
                                ],
                                "entry": [
                                    false,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.12863,
                                    37.414
                                ],
                                "bearings": [
                                    0,
                                    180
                                ],
                                "entry": [
                                    false,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.128625,
                                    37.41382
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.128637,
                                    37.412335
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.128634,
                                    37.409873
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.128604,
                                    37.407986
                                ],
                                "bearings": [
                                    0,
                                    180
                                ],
                                "entry": [
                                    false,
                                    true
                                ],
                                "in": 0
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "}oucFkl|fW`@B`CH`BDP@jCHf@BnAH~BL~K`@zNl@dQh@L?vDArEI~BUzBa@|A]hAMvAMNArDKrA?~DKxAAbLItKQjBAJAlFK\\AdI[rCGf@EfCQ~BQdGw@dEc@xBWLAtC]rBSrBSnC[|BUdGm@nDa@r@IVCPATCh@ExAK\\Ej@E~@E~CO`Ge@dAEjBMPApABnDP`BL`AFjGj@lCTnELjFA`A@|@?nA?h@?`@ApAAR@J?lC@pGDdCBlA?`B?lABvNDz@?b@?fHAdA?x@ApA?zGB`EBdA@nB?dAA",
                        "mode": "walking",
                        "duration": 5082.5,
                        "maneuver": {
                            "bearing_after": 184,
                            "type": "new name",
                            "modifier": "straight",
                            "bearing_before": 182,
                            "location": [
                                127.126618,
                                37.47087
                            ]
                        },
                        "ref": "3",
                        "weight": 5082.5,
                        "distance": 7059,
                        "name": "성남대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 1,
                                "location": [
                                    127.128608,
                                    37.407644
                                ],
                                "bearings": [
                                    0,
                                    165,
                                    195
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "wdicFyx|fW\\M",
                        "mode": "walking",
                        "duration": 13.3,
                        "maneuver": {
                            "bearing_after": 158,
                            "type": "fork",
                            "modifier": "slight left",
                            "bearing_before": 178,
                            "location": [
                                127.128608,
                                37.407644
                            ]
                        },
                        "weight": 13.3,
                        "distance": 18.5,
                        "name": ""
                    },
                    {
                        "intersections": [
                            {
                                "out": 1,
                                "location": [
                                    127.128683,
                                    37.407489
                                ],
                                "bearings": [
                                    15,
                                    180,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.128668,
                                    37.405916
                                ],
                                "bearings": [
                                    0,
                                    180
                                ],
                                "entry": [
                                    false,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.128535,
                                    37.404895
                                ],
                                "bearings": [
                                    15,
                                    195
                                ],
                                "entry": [
                                    false,
                                    true
                                ],
                                "in": 0
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "ycicFgy|fWxH@V@r@Dl@BpALdD`@hALtAJ^?b@?TA`@Ah@C`@Cj@E",
                        "mode": "walking",
                        "duration": 437.8,
                        "maneuver": {
                            "bearing_after": 180,
                            "type": "turn",
                            "modifier": "slight right",
                            "bearing_before": 158,
                            "location": [
                                127.128683,
                                37.407489
                            ]
                        },
                        "weight": 437.8,
                        "distance": 607.7,
                        "name": "성남대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 1,
                                "location": [
                                    127.128325,
                                    37.402051
                                ],
                                "bearings": [
                                    0,
                                    165,
                                    195
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.128416,
                                    37.401874
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.128578,
                                    37.400116
                                ],
                                "bearings": [
                                    15,
                                    180,
                                    330
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.128684,
                                    37.399145
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.128616,
                                    37.398099
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    195
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.128264,
                                    37.395963
                                ],
                                "bearings": [
                                    0,
                                    30,
                                    180
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.12827,
                                    37.39468
                                ],
                                "bearings": [
                                    0,
                                    135,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "yahcFaw|fWb@QVAtGi@n@Jn@E`AG`@Cl@Ad@?b@@`@?rAFP@PBjAL`APdBX`@Df@B`@?x@?rE?j@AhF?",
                        "mode": "walking",
                        "duration": 688.6,
                        "maneuver": {
                            "bearing_after": 157,
                            "type": "fork",
                            "modifier": "slight left",
                            "bearing_before": 174,
                            "location": [
                                127.128325,
                                37.402051
                            ]
                        },
                        "weight": 688.6,
                        "distance": 956.7,
                        "name": "성남대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 2,
                                "location": [
                                    127.128272,
                                    37.393509
                                ],
                                "bearings": [
                                    0,
                                    165,
                                    195
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.128114,
                                    37.390716
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "mlfcFuv|fWj@Tz@?nID`A@r@@tDB`@@b@@d@D`@DZB",
                        "mode": "walking",
                        "duration": 365.7,
                        "maneuver": {
                            "bearing_after": 201,
                            "type": "fork",
                            "modifier": "slight right",
                            "bearing_before": 178,
                            "location": [
                                127.128272,
                                37.393509
                            ]
                        },
                        "weight": 365.7,
                        "distance": 508.1,
                        "name": "성남대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 1,
                                "location": [
                                    127.127988,
                                    37.388962
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    195
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.128,
                                    37.388518
                                ],
                                "bearings": [
                                    0,
                                    30,
                                    195
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.127092,
                                    37.386563
                                ],
                                "bearings": [
                                    30,
                                    210
                                ],
                                "entry": [
                                    false,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.126455,
                                    37.38579
                                ],
                                "bearings": [
                                    30,
                                    225
                                ],
                                "entry": [
                                    false,
                                    true
                                ],
                                "in": 0
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "_pecF}t|fWvAAhAR|A^r@XpAl@z@d@\\RxC|B|@`A|ClE",
                        "mode": "walking",
                        "duration": 400.8,
                        "maneuver": {
                            "bearing_after": 178,
                            "type": "fork",
                            "modifier": "slight left",
                            "bearing_before": 187,
                            "location": [
                                127.127988,
                                37.388962
                            ]
                        },
                        "weight": 400.8,
                        "distance": 556.6,
                        "name": "성남대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 1,
                                "location": [
                                    127.125097,
                                    37.384691
                                ],
                                "bearings": [
                                    46,
                                    222,
                                    232
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.124827,
                                    37.384452
                                ],
                                "bearings": [
                                    45,
                                    60,
                                    225
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.121794,
                                    37.382196
                                ],
                                "bearings": [
                                    45,
                                    135,
                                    225,
                                    315
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.119962,
                                    37.380873
                                ],
                                "bearings": [
                                    45,
                                    225
                                ],
                                "entry": [
                                    false,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.119161,
                                    37.380292
                                ],
                                "bearings": [
                                    45,
                                    225
                                ],
                                "entry": [
                                    false,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.118621,
                                    37.379899
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    225,
                                    315
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.112334,
                                    37.375425
                                ],
                                "bearings": [
                                    45,
                                    135,
                                    225,
                                    315
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.109787,
                                    37.373574
                                ],
                                "bearings": [
                                    0,
                                    45,
                                    180,
                                    225
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.109625,
                                    37.37346
                                ],
                                "bearings": [
                                    45,
                                    225
                                ],
                                "entry": [
                                    false,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.108379,
                                    37.372411
                                ],
                                "bearings": [
                                    30,
                                    195
                                ],
                                "entry": [
                                    false,
                                    true
                                ],
                                "in": 0
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "iudcF{b|fWn@t@VZn@`AxJ`OhGlJrB~ClAjBhOxUrJnOvDxFbCtDv@jAT^l@`AzBvCf@^`@NfBXvA?jAA~DBzD@`A?X?",
                        "mode": "walking",
                        "duration": 1761.8,
                        "maneuver": {
                            "bearing_after": 220,
                            "type": "fork",
                            "modifier": "slight left",
                            "bearing_before": 225,
                            "location": [
                                127.125097,
                                37.384691
                            ]
                        },
                        "weight": 1761.8,
                        "distance": 2447,
                        "name": "성남대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 3,
                                "location": [
                                    127.108154,
                                    37.368535
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "kpacF}xxfW?H@H",
                        "mode": "walking",
                        "duration": 7,
                        "maneuver": {
                            "bearing_after": 268,
                            "type": "turn",
                            "modifier": "right",
                            "bearing_before": 178,
                            "location": [
                                127.108154,
                                37.368535
                            ]
                        },
                        "weight": 7,
                        "distance": 9.6,
                        "name": "느티로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 2,
                                "location": [
                                    127.108045,
                                    37.368534
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.108048,
                                    37.366632
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "ipacFixxfWzJ?fB?",
                        "mode": "walking",
                        "duration": 196.5,
                        "maneuver": {
                            "bearing_after": 178,
                            "type": "turn",
                            "modifier": "left",
                            "bearing_before": 268,
                            "location": [
                                127.108045,
                                37.368534
                            ]
                        },
                        "weight": 196.5,
                        "distance": 270.2,
                        "name": "성남대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 3,
                                "location": [
                                    127.108052,
                                    37.366105
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "eaacFixxfW?P",
                        "mode": "walking",
                        "duration": 5.8,
                        "maneuver": {
                            "bearing_after": 270,
                            "type": "turn",
                            "modifier": "right",
                            "bearing_before": 178,
                            "location": [
                                127.108052,
                                37.366105
                            ]
                        },
                        "weight": 5.8,
                        "distance": 8.1,
                        "name": ""
                    },
                    {
                        "intersections": [
                            {
                                "in": 0,
                                "entry": [
                                    true
                                ],
                                "bearings": [
                                    90
                                ],
                                "location": [
                                    127.10796,
                                    37.366105
                                ]
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "eaacFwwxfW",
                        "mode": "walking",
                        "duration": 0,
                        "maneuver": {
                            "bearing_after": 0,
                            "location": [
                                127.10796,
                                37.366105
                            ],
                            "bearing_before": 270,
                            "type": "arrive"
                        },
                        "weight": 0,
                        "distance": 0,
                        "name": ""
                    }
                ],
                "distance": 22280,
                "duration": 16049.7,
                "summary": "송파대로, 성남대로",
                "weight": 16049.7
            },
            {
                "steps": [
                    {
                        "intersections": [
                            {
                                "out": 0,
                                "entry": [
                                    true
                                ],
                                "bearings": [
                                    90
                                ],
                                "location": [
                                    127.10796,
                                    37.366105
                                ]
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "eaacFwwxfW?Q",
                        "mode": "walking",
                        "duration": 7.8,
                        "maneuver": {
                            "bearing_after": 90,
                            "location": [
                                127.10796,
                                37.366105
                            ],
                            "bearing_before": 0,
                            "type": "depart"
                        },
                        "weight": 7.8,
                        "distance": 8.1,
                        "name": ""
                    },
                    {
                        "intersections": [
                            {
                                "out": 0,
                                "location": [
                                    127.108052,
                                    37.366105
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.108048,
                                    37.366632
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "eaacFixxfWgB?{J?",
                        "mode": "walking",
                        "duration": 194.5,
                        "maneuver": {
                            "bearing_after": 358,
                            "type": "turn",
                            "modifier": "left",
                            "bearing_before": 90,
                            "location": [
                                127.108052,
                                37.366105
                            ]
                        },
                        "weight": 194.5,
                        "distance": 270.2,
                        "name": "성남대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 1,
                                "location": [
                                    127.108045,
                                    37.368534
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "ipacFixxfWAI?I",
                        "mode": "walking",
                        "duration": 7,
                        "maneuver": {
                            "bearing_after": 88,
                            "type": "turn",
                            "modifier": "right",
                            "bearing_before": 358,
                            "location": [
                                127.108045,
                                37.368534
                            ]
                        },
                        "weight": 7,
                        "distance": 9.6,
                        "name": "느티로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 0,
                                "location": [
                                    127.108154,
                                    37.368535
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.108379,
                                    37.372411
                                ],
                                "bearings": [
                                    30,
                                    195
                                ],
                                "entry": [
                                    true,
                                    false
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.109625,
                                    37.37346
                                ],
                                "bearings": [
                                    45,
                                    225
                                ],
                                "entry": [
                                    true,
                                    false
                                ],
                                "in": 1
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.109787,
                                    37.373574
                                ],
                                "bearings": [
                                    0,
                                    45,
                                    180,
                                    225
                                ],
                                "entry": [
                                    true,
                                    true,
                                    true,
                                    false
                                ],
                                "in": 3
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.112334,
                                    37.375425
                                ],
                                "bearings": [
                                    45,
                                    135,
                                    225,
                                    315
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.118621,
                                    37.379899
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    225,
                                    315
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.119161,
                                    37.380292
                                ],
                                "bearings": [
                                    45,
                                    225
                                ],
                                "entry": [
                                    true,
                                    false
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.119962,
                                    37.380873
                                ],
                                "bearings": [
                                    45,
                                    225
                                ],
                                "entry": [
                                    true,
                                    false
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.121794,
                                    37.382196
                                ],
                                "bearings": [
                                    45,
                                    135,
                                    225,
                                    315
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "kpacF}xxfWY?aA?{DA_ECkA@wA?gBYa@Og@_@{BwCm@aAU_@w@kAcCuDwDyFsJoOiOyUmAkBsB_DiGmJyJaOo@aAW[",
                        "mode": "walking",
                        "duration": 1736.1,
                        "maneuver": {
                            "bearing_after": 358,
                            "type": "turn",
                            "modifier": "left",
                            "bearing_before": 88,
                            "location": [
                                127.108154,
                                37.368535
                            ]
                        },
                        "weight": 1736.1,
                        "distance": 2411.3,
                        "name": "성남대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 0,
                                "location": [
                                    127.124827,
                                    37.384452
                                ],
                                "bearings": [
                                    45,
                                    60,
                                    225
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.125097,
                                    37.384691
                                ],
                                "bearings": [
                                    46,
                                    222,
                                    232
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.126455,
                                    37.38579
                                ],
                                "bearings": [
                                    30,
                                    225
                                ],
                                "entry": [
                                    true,
                                    false
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.127092,
                                    37.386563
                                ],
                                "bearings": [
                                    30,
                                    210
                                ],
                                "entry": [
                                    true,
                                    false
                                ],
                                "in": 1
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "ysdcFea|fWo@u@}CmE}@aAyC}B]S{@e@qAm@s@Y}A_@iAS",
                        "mode": "walking",
                        "duration": 390.9,
                        "maneuver": {
                            "bearing_after": 40,
                            "type": "fork",
                            "modifier": "slight left",
                            "bearing_before": 45,
                            "location": [
                                127.124827,
                                37.384452
                            ]
                        },
                        "weight": 390.9,
                        "distance": 542.9,
                        "name": "성남대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 0,
                                "location": [
                                    127.128,
                                    37.388518
                                ],
                                "bearings": [
                                    0,
                                    30,
                                    195
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.127988,
                                    37.388962
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    195
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128114,
                                    37.390716
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128272,
                                    37.393509
                                ],
                                "bearings": [
                                    0,
                                    165,
                                    195
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.12827,
                                    37.39468
                                ],
                                "bearings": [
                                    0,
                                    135,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128264,
                                    37.395963
                                ],
                                "bearings": [
                                    0,
                                    30,
                                    180
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128616,
                                    37.398099
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    195
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128684,
                                    37.399145
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "gmecF_u|fWwA@[Ca@Ee@Ec@Aa@AuDCs@AaAAoIE{@?k@UiF?k@@sE?y@?a@?g@Ca@EeBYaAQkAMQCQAsAGa@?c@Ae@?m@@a@BaAFo@D",
                        "mode": "walking",
                        "duration": 932.7,
                        "maneuver": {
                            "bearing_after": 358,
                            "type": "fork",
                            "modifier": "slight left",
                            "bearing_before": 11,
                            "location": [
                                127.128,
                                37.388518
                            ]
                        },
                        "weight": 932.7,
                        "distance": 1295.8,
                        "name": "성남대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 0,
                                "location": [
                                    127.128578,
                                    37.400116
                                ],
                                "bearings": [
                                    15,
                                    180,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "wugcFsx|fWo@KuGh@W@",
                        "mode": "walking",
                        "duration": 141.9,
                        "maneuver": {
                            "bearing_after": 9,
                            "type": "fork",
                            "modifier": "slight right",
                            "bearing_before": 352,
                            "location": [
                                127.128578,
                                37.400116
                            ]
                        },
                        "weight": 141.9,
                        "distance": 197.2,
                        "name": "성남대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 2,
                                "location": [
                                    127.128416,
                                    37.401874
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128325,
                                    37.402051
                                ],
                                "bearings": [
                                    0,
                                    165,
                                    195
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128535,
                                    37.404895
                                ],
                                "bearings": [
                                    15,
                                    195
                                ],
                                "entry": [
                                    true,
                                    false
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128668,
                                    37.405916
                                ],
                                "bearings": [
                                    0,
                                    180
                                ],
                                "entry": [
                                    true,
                                    false
                                ],
                                "in": 1
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "u`hcFsw|fWc@Pk@Da@Bi@Ba@@U@c@?_@?uAKiAMeDa@qAMm@Cs@EWAyHA",
                        "mode": "walking",
                        "duration": 453.1,
                        "maneuver": {
                            "bearing_after": 337,
                            "type": "fork",
                            "modifier": "slight left",
                            "bearing_before": 352,
                            "location": [
                                127.128416,
                                37.401874
                            ]
                        },
                        "weight": 453.1,
                        "distance": 629,
                        "name": "성남대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 2,
                                "location": [
                                    127.128683,
                                    37.407489
                                ],
                                "bearings": [
                                    15,
                                    180,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "ycicFgy|fW]L",
                        "mode": "walking",
                        "duration": 13.3,
                        "maneuver": {
                            "bearing_after": 338,
                            "type": "fork",
                            "modifier": "slight left",
                            "bearing_before": 0,
                            "location": [
                                127.128683,
                                37.407489
                            ]
                        },
                        "weight": 13.3,
                        "distance": 18.5,
                        "name": ""
                    },
                    {
                        "intersections": [
                            {
                                "out": 0,
                                "location": [
                                    127.128608,
                                    37.407644
                                ],
                                "bearings": [
                                    0,
                                    165,
                                    195
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128604,
                                    37.407986
                                ],
                                "bearings": [
                                    0,
                                    180
                                ],
                                "entry": [
                                    true,
                                    false
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128634,
                                    37.409873
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128637,
                                    37.412335
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128625,
                                    37.41382
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.12863,
                                    37.414
                                ],
                                "bearings": [
                                    0,
                                    180
                                ],
                                "entry": [
                                    true,
                                    false
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128633,
                                    37.414296
                                ],
                                "bearings": [
                                    0,
                                    180
                                ],
                                "entry": [
                                    true,
                                    false
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128661,
                                    37.416823
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128678,
                                    37.41721
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    210
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.1287,
                                    37.418757
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128743,
                                    37.4209
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.12874,
                                    37.421407
                                ],
                                "bearings": [
                                    0,
                                    75,
                                    180
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128732,
                                    37.421583
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128911,
                                    37.425755
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    255,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.129132,
                                    37.427104
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    210
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.12924,
                                    37.427918
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.12935,
                                    37.429212
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    210
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.129271,
                                    37.429838
                                ],
                                "bearings": [
                                    0,
                                    120,
                                    180,
                                    285,
                                    300
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.129239,
                                    37.430188
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    240
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.129049,
                                    37.431484
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128971,
                                    37.432279
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    255
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128882,
                                    37.432973
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    255
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.128818,
                                    37.433421
                                ],
                                "bearings": [
                                    0,
                                    75,
                                    180,
                                    255
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.128789,
                                    37.433629
                                ],
                                "bearings": [
                                    75,
                                    180,
                                    255,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.12876,
                                    37.433834
                                ],
                                "bearings": [
                                    180,
                                    285,
                                    345
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.128523,
                                    37.435085
                                ],
                                "bearings": [
                                    165,
                                    255,
                                    345
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.128286,
                                    37.436398
                                ],
                                "bearings": [
                                    165,
                                    270,
                                    345
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.128041,
                                    37.437751
                                ],
                                "bearings": [
                                    165,
                                    255,
                                    345
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.127943,
                                    37.438328
                                ],
                                "bearings": [
                                    165,
                                    255,
                                    345
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.127844,
                                    37.438911
                                ],
                                "bearings": [
                                    165,
                                    255,
                                    345
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.127694,
                                    37.439655
                                ],
                                "bearings": [
                                    75,
                                    165,
                                    255,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.127677,
                                    37.439725
                                ],
                                "bearings": [
                                    75,
                                    165,
                                    255,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.127381,
                                    37.441332
                                ],
                                "bearings": [
                                    165,
                                    270,
                                    345
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.1271,
                                    37.442635
                                ],
                                "bearings": [
                                    0,
                                    165,
                                    255
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.126918,
                                    37.44396
                                ],
                                "bearings": [
                                    75,
                                    180,
                                    270,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.126712,
                                    37.446525
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    225
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.1267,
                                    37.446677
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    240
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.126639,
                                    37.447868
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.126633,
                                    37.447931
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.126618,
                                    37.448472
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.126476,
                                    37.4526
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.126465,
                                    37.453045
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.126412,
                                    37.454005
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.126197,
                                    37.45622
                                ],
                                "bearings": [
                                    75,
                                    165,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.125709,
                                    37.459932
                                ],
                                "bearings": [
                                    0,
                                    120,
                                    180,
                                    285
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.125712,
                                    37.459999
                                ],
                                "bearings": [
                                    0,
                                    105,
                                    180,
                                    255
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.126148,
                                    37.465451
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.126315,
                                    37.467526
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.126439,
                                    37.468571
                                ],
                                "bearings": [
                                    0,
                                    180
                                ],
                                "entry": [
                                    true,
                                    false
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.126459,
                                    37.468773
                                ],
                                "bearings": [
                                    0,
                                    180
                                ],
                                "entry": [
                                    true,
                                    false
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.126554,
                                    37.470046
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    315
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.126602,
                                    37.470698
                                ],
                                "bearings": [
                                    0,
                                    75,
                                    180,
                                    240
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "wdicFyx|fWeA@oB?eAAaEC{GCqA?y@@eA?gH@c@?{@?wNEmACaB?mA?eCCqGEmCAK?SAqA@a@@i@?oA?}@?aAAkF@oEMmCUkGk@aAGaBMoDQqACQ@kBLeADaGd@_DN_ADk@D]DyAJi@DUBQ@WBs@HoD`@eGl@}BToCZsBRsBRuC\\M@yBVeEb@eGv@_CPgCPg@DsCFeIZ]@mFJK@kB@uKPcLHyA@_EJsA?sDJO@wALiAL}A\\{B`@_CTsEHwD@M?eQi@{Nm@_La@_CMoAIg@CkCIQAaBEaCIa@C",
                        "mode": "walking",
                        "duration": 5082.5,
                        "maneuver": {
                            "bearing_after": 358,
                            "type": "turn",
                            "modifier": "straight",
                            "bearing_before": 338,
                            "location": [
                                127.128608,
                                37.407644
                            ]
                        },
                        "weight": 5082.5,
                        "distance": 7059,
                        "name": "성남대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 0,
                                "location": [
                                    127.126618,
                                    37.47087
                                ],
                                "bearings": [
                                    0,
                                    75,
                                    180,
                                    255
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.12666,
                                    37.471391
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    210
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.126908,
                                    37.475802
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.126897,
                                    37.475957
                                ],
                                "bearings": [
                                    0,
                                    90,
                                    180,
                                    270
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.126872,
                                    37.476457
                                ],
                                "bearings": [
                                    0,
                                    180,
                                    240
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 4,
                                "location": [
                                    127.125832,
                                    37.479375
                                ],
                                "bearings": [
                                    75,
                                    150,
                                    165,
                                    240,
                                    345
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 2
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.124224,
                                    37.482554
                                ],
                                "bearings": [
                                    75,
                                    165,
                                    255,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.123833,
                                    37.483291
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.123259,
                                    37.484406
                                ],
                                "bearings": [
                                    75,
                                    165,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.122605,
                                    37.485675
                                ],
                                "bearings": [
                                    90,
                                    165,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.122414,
                                    37.486046
                                ],
                                "bearings": [
                                    75,
                                    165,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.122006,
                                    37.48693
                                ],
                                "bearings": [
                                    165,
                                    240,
                                    345
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.121887,
                                    37.487173
                                ],
                                "bearings": [
                                    60,
                                    165,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.121085,
                                    37.488722
                                ],
                                "bearings": [
                                    60,
                                    165,
                                    255,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.120682,
                                    37.489567
                                ],
                                "bearings": [
                                    60,
                                    165,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.120061,
                                    37.49064
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.119259,
                                    37.491821
                                ],
                                "bearings": [
                                    150,
                                    255,
                                    330
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.118695,
                                    37.492513
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    255,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.118103,
                                    37.493285
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.117441,
                                    37.493984
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.116564,
                                    37.494912
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.116267,
                                    37.495219
                                ],
                                "bearings": [
                                    135,
                                    300,
                                    315,
                                    345
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "in": 0
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "}oucFkl|fWgBGyGQaP]U?_@A_@@_@@G?e@?UBgBL}@LaBf@oErBoBV{An@uAh@gMfFsClAeAb@yClA}F`CMF{@^oDnAo@VuH~CiDpAuEzBMF{@d@yBpAg@^cAx@eAt@{CvBgC`CA@yDnDi@b@STYJ",
                        "mode": "walking",
                        "duration": 2117.7,
                        "maneuver": {
                            "bearing_after": 2,
                            "type": "new name",
                            "modifier": "straight",
                            "bearing_before": 4,
                            "location": [
                                127.126618,
                                37.47087
                            ]
                        },
                        "ref": "3",
                        "weight": 2117.7,
                        "distance": 2940.8,
                        "name": "송파대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 1,
                                "location": [
                                    127.116206,
                                    37.495347
                                ],
                                "bearings": [
                                    165,
                                    315,
                                    345
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "}hzcFikzfWuA|AiA~@gG~EmBbB}EfE}B`B",
                        "mode": "walking",
                        "duration": 431.8,
                        "maneuver": {
                            "bearing_after": 319,
                            "type": "continue",
                            "modifier": "slight right",
                            "bearing_before": 338,
                            "location": [
                                127.116206,
                                37.495347
                            ]
                        },
                        "weight": 431.8,
                        "distance": 599.8,
                        "name": ""
                    },
                    {
                        "intersections": [
                            {
                                "out": 2,
                                "location": [
                                    127.112314,
                                    37.499763
                                ],
                                "bearings": [
                                    135,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.111742,
                                    37.500432
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    315
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.111415,
                                    37.500791
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    315
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.111097,
                                    37.501104
                                ],
                                "bearings": [
                                    60,
                                    135,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.110302,
                                    37.502052
                                ],
                                "bearings": [
                                    75,
                                    150,
                                    240,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.109407,
                                    37.50302
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.108215,
                                    37.504309
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.107613,
                                    37.504961
                                ],
                                "bearings": [
                                    0,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 4,
                                "location": [
                                    127.107308,
                                    37.505287
                                ],
                                "bearings": [
                                    15,
                                    90,
                                    150,
                                    240,
                                    330
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 2
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.107022,
                                    37.505598
                                ],
                                "bearings": [
                                    105,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.106342,
                                    37.506336
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.105217,
                                    37.507553
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.104661,
                                    37.508155
                                ],
                                "bearings": [
                                    75,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.104091,
                                    37.508772
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    225,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.103203,
                                    37.509757
                                ],
                                "bearings": [
                                    150,
                                    330
                                ],
                                "entry": [
                                    false,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.102898,
                                    37.510086
                                ],
                                "bearings": [
                                    150,
                                    330
                                ],
                                "entry": [
                                    false,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.101948,
                                    37.511248
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    240,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.100809,
                                    37.512637
                                ],
                                "bearings": [
                                    150,
                                    330,
                                    345
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.100363,
                                    37.513182
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    255,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.100211,
                                    37.513348
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    255,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.099647,
                                    37.514071
                                ],
                                "bearings": [
                                    135,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 1,
                                "location": [
                                    127.098468,
                                    37.515669
                                ],
                                "bearings": [
                                    150,
                                    330,
                                    345
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.09821,
                                    37.516012
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    240,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "od{cF}ryfWeCpBQPu@l@}@~@}D~CaEpDaGlFaCxBi@d@WT}@x@sCfCqF~EyBnBsAlAe@b@e@b@mAfAqAdAaAz@QNiAz@cBpAg@^uCxBo@h@oA~@uAfAUPa@\\SNQLiBpAmA`Aa@XoEnCWPk@`@sA~@oAnAsKpHiDvB}JjHi^jW",
                        "mode": "walking",
                        "duration": 2581.4,
                        "maneuver": {
                            "bearing_after": 324,
                            "type": "turn",
                            "modifier": "straight",
                            "bearing_before": 327,
                            "location": [
                                127.112314,
                                37.499763
                            ]
                        },
                        "ref": "3",
                        "weight": 2581.4,
                        "distance": 3582.3,
                        "name": "송파대로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 1,
                                "location": [
                                    127.089964,
                                    37.526617
                                ],
                                "bearings": [
                                    150,
                                    330
                                ],
                                "entry": [
                                    false,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.086995,
                                    37.530409
                                ],
                                "bearings": [
                                    105,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.086883,
                                    37.530565
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.086415,
                                    37.531171
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.085961,
                                    37.531782
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.085786,
                                    37.532004
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.085424,
                                    37.53247
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    240,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.083701,
                                    37.536108
                                ],
                                "bearings": [
                                    135,
                                    180,
                                    345
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.08367,
                                    37.536171
                                ],
                                "bearings": [
                                    75,
                                    165,
                                    345
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.083641,
                                    37.536233
                                ],
                                "bearings": [
                                    165,
                                    240,
                                    345
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "kl`dFggufW_An@sBzAmFrDgCjBs@f@wCzB_@VwBzAMHkBpAYRQLcAt@YR]TMJiAh@uAd@mC`AiI|B[JWXKDKD_AN",
                        "mode": "walking",
                        "duration": 899.7,
                        "maneuver": {
                            "bearing_after": 327,
                            "type": "new name",
                            "modifier": "straight",
                            "bearing_before": 327,
                            "location": [
                                127.089964,
                                37.526617
                            ]
                        },
                        "ref": "3",
                        "weight": 899.7,
                        "distance": 1249.7,
                        "name": "자양로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 2,
                                "location": [
                                    127.083564,
                                    37.53655
                                ],
                                "bearings": [
                                    90,
                                    165,
                                    270
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.08121,
                                    37.537004
                                ],
                                "bearings": [
                                    105,
                                    195,
                                    285
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.080749,
                                    37.537119
                                ],
                                "bearings": [
                                    105,
                                    195,
                                    285
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.079148,
                                    37.537516
                                ],
                                "bearings": [
                                    105,
                                    195,
                                    285
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.078704,
                                    37.537632
                                ],
                                "bearings": [
                                    105,
                                    195,
                                    285
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "mjbdFg_tfW?h@Al@Gj@oApIWzAoA~HUxAoAvH",
                        "mode": "walking",
                        "duration": 426,
                        "maneuver": {
                            "bearing_after": 267,
                            "type": "end of road",
                            "modifier": "left",
                            "bearing_before": 348,
                            "location": [
                                127.083564,
                                37.53655
                            ]
                        },
                        "weight": 426,
                        "distance": 591.7,
                        "name": "아차산로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 0,
                                "location": [
                                    127.077139,
                                    37.538034
                                ],
                                "bearings": [
                                    0,
                                    105,
                                    195,
                                    285
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "usbdFcwrfWY@",
                        "mode": "walking",
                        "duration": 10,
                        "maneuver": {
                            "bearing_after": 354,
                            "type": "turn",
                            "modifier": "right",
                            "bearing_before": 286,
                            "location": [
                                127.077139,
                                37.538034
                            ]
                        },
                        "weight": 10,
                        "distance": 13.8,
                        "name": ""
                    },
                    {
                        "intersections": [
                            {
                                "out": 3,
                                "location": [
                                    127.077125,
                                    37.538158
                                ],
                                "bearings": [
                                    15,
                                    105,
                                    180,
                                    285
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.075759,
                                    37.538513
                                ],
                                "bearings": [
                                    15,
                                    105,
                                    285
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.075109,
                                    37.538685
                                ],
                                "bearings": [
                                    15,
                                    105,
                                    285
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.07419,
                                    37.538915
                                ],
                                "bearings": [
                                    0,
                                    105,
                                    285
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.072451,
                                    37.539403
                                ],
                                "bearings": [
                                    15,
                                    105,
                                    285
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "otbdFawrfWeApGc@`Cm@vDo@xDUnAYpAmBvI",
                        "mode": "walking",
                        "duration": 433,
                        "maneuver": {
                            "bearing_after": 286,
                            "type": "turn",
                            "modifier": "left",
                            "bearing_before": 354,
                            "location": [
                                127.077125,
                                37.538158
                            ]
                        },
                        "weight": 433,
                        "distance": 598.6,
                        "name": "아차산로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 0,
                                "location": [
                                    127.070731,
                                    37.539954
                                ],
                                "bearings": [
                                    15,
                                    105,
                                    195,
                                    300
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "u_cdFaoqfW_@OyI{C",
                        "mode": "walking",
                        "duration": 160.5,
                        "maneuver": {
                            "bearing_after": 21,
                            "type": "turn",
                            "modifier": "right",
                            "bearing_before": 291,
                            "location": [
                                127.070731,
                                37.539954
                            ]
                        },
                        "weight": 160.5,
                        "distance": 223,
                        "name": "능동로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 3,
                                "location": [
                                    127.071588,
                                    37.54184
                                ],
                                "bearings": [
                                    30,
                                    105,
                                    195,
                                    285
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "in": 2
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "okcdFmtqfWCR",
                        "mode": "walking",
                        "duration": 6.4,
                        "maneuver": {
                            "bearing_after": 286,
                            "type": "turn",
                            "modifier": "left",
                            "bearing_before": 18,
                            "location": [
                                127.071588,
                                37.54184
                            ]
                        },
                        "weight": 6.4,
                        "distance": 8.9,
                        "name": ""
                    },
                    {
                        "intersections": [
                            {
                                "out": 0,
                                "location": [
                                    127.071492,
                                    37.541864
                                ],
                                "bearings": [
                                    15,
                                    105,
                                    195,
                                    285
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 0,
                                "location": [
                                    127.071543,
                                    37.541975
                                ],
                                "bearings": [
                                    15,
                                    105,
                                    195
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false
                                ],
                                "in": 2
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "skcdFysqfWWIk@U",
                        "mode": "walking",
                        "duration": 31,
                        "maneuver": {
                            "bearing_after": 19,
                            "type": "turn",
                            "modifier": "right",
                            "bearing_before": 286,
                            "location": [
                                127.071492,
                                37.541864
                            ]
                        },
                        "weight": 31,
                        "distance": 40.2,
                        "name": "능동로"
                    },
                    {
                        "intersections": [
                            {
                                "out": 2,
                                "location": [
                                    127.071647,
                                    37.542204
                                ],
                                "bearings": [
                                    15,
                                    195,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.071269,
                                    37.542603
                                ],
                                "bearings": [
                                    15,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.071043,
                                    37.542841
                                ],
                                "bearings": [
                                    15,
                                    150,
                                    195,
                                    315
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.070462,
                                    37.543415
                                ],
                                "bearings": [
                                    135,
                                    195,
                                    330
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.070395,
                                    37.54349
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    315
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.069755,
                                    37.544121
                                ],
                                "bearings": [
                                    60,
                                    135,
                                    210,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.069409,
                                    37.54449
                                ],
                                "bearings": [
                                    150,
                                    255,
                                    330
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.069193,
                                    37.544735
                                ],
                                "bearings": [
                                    60,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.068899,
                                    37.545061
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.068633,
                                    37.545357
                                ],
                                "bearings": [
                                    45,
                                    150,
                                    330
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 2,
                                "location": [
                                    127.068009,
                                    37.546041
                                ],
                                "bearings": [
                                    150,
                                    210,
                                    330
                                ],
                                "entry": [
                                    false,
                                    true,
                                    true
                                ],
                                "in": 0
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "wmcdFytqfWOL{@v@CDo@l@g@f@kAjAMJeBfBWViAdAq@j@s@n@KH_@Z[XGDc@`@KHm@h@a@^e@b@CBoAhA",
                        "mode": "walking",
                        "duration": 444.7,
                        "maneuver": {
                            "bearing_after": 323,
                            "type": "continue",
                            "modifier": "left",
                            "bearing_before": 19,
                            "location": [
                                127.071647,
                                37.542204
                            ]
                        },
                        "weight": 444.7,
                        "distance": 617.8,
                        "name": "능동로13길"
                    },
                    {
                        "intersections": [
                            {
                                "out": 4,
                                "location": [
                                    127.067443,
                                    37.546645
                                ],
                                "bearings": [
                                    30,
                                    105,
                                    150,
                                    210,
                                    300
                                ],
                                "entry": [
                                    true,
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 2
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.066704,
                                    37.546877
                                ],
                                "bearings": [
                                    30,
                                    105,
                                    210,
                                    285
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            },
                            {
                                "out": 3,
                                "location": [
                                    127.066584,
                                    37.54691
                                ],
                                "bearings": [
                                    30,
                                    105,
                                    210,
                                    285
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "qiddFozpfWi@~BCREVCLETSfAET",
                        "mode": "walking",
                        "duration": 102.5,
                        "maneuver": {
                            "bearing_after": 292,
                            "type": "turn",
                            "modifier": "slight left",
                            "bearing_before": 322,
                            "location": [
                                127.067443,
                                37.546645
                            ]
                        },
                        "weight": 102.5,
                        "distance": 142.4,
                        "name": "동일로28길"
                    },
                    {
                        "intersections": [
                            {
                                "out": 0,
                                "location": [
                                    127.065931,
                                    37.54709
                                ],
                                "bearings": [
                                    30,
                                    105,
                                    210,
                                    285
                                ],
                                "entry": [
                                    true,
                                    false,
                                    true,
                                    true
                                ],
                                "in": 1
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "ilddFaqpfWQK",
                        "mode": "walking",
                        "duration": 8.7,
                        "maneuver": {
                            "bearing_after": 25,
                            "type": "turn",
                            "modifier": "right",
                            "bearing_before": 288,
                            "location": [
                                127.065931,
                                37.54709
                            ]
                        },
                        "weight": 8.7,
                        "distance": 12.1,
                        "name": "아차산로17길"
                    },
                    {
                        "intersections": [
                            {
                                "in": 0,
                                "entry": [
                                    true
                                ],
                                "bearings": [
                                    207
                                ],
                                "location": [
                                    127.065992,
                                    37.547187
                                ]
                            }
                        ],
                        "driving_side": "right",
                        "geometry": "{lddFmqpfW",
                        "mode": "walking",
                        "duration": 0,
                        "maneuver": {
                            "bearing_after": 0,
                            "type": "arrive",
                            "modifier": "left",
                            "bearing_before": 27,
                            "location": [
                                127.065992,
                                37.547187
                            ]
                        },
                        "weight": 0,
                        "distance": 0,
                        "name": "아차산로17길"
                    }
                ],
                "distance": 23062.6,
                "duration": 16613.2,
                "summary": "성남대로, 송파대로",
                "weight": 16613.2
            }
        ],
        "distance": 45342.6,
        "duration": 32662.9,
        "weight_name": "duration",
        "weight": 32662.9
    })
  }, []);

  useEffect(() => {
    if (route) {
      const newMarkers: any = [];

      for (const leg of route.legs) {
        for (const step of leg.steps) {
          const { location: stepLocation } = step.maneuver;

          // 중간 경유지 추가
          for (const intersection of step.intersections) {
            newMarkers.push(intersection.location);
          }

          // 도착지 추가
          newMarkers.push(stepLocation);
        }
      }

      setMarkers(newMarkers);
    }
  }, [route]);

  if (!route) {
    return <div>Loading...</div>;
  }

  return (
    <MapContainer center={[37.497950, 127.027668]} zoom={17} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker:any, index:any) => (
        <Marker key={index} position={marker} icon={redIcon}>
          <Popup>
            {marker.lat}, {marker.lng}
          </Popup>
        </Marker>
      ))}
      <Polyline pathOptions={{ color: 'blue' }} positions={route.legs.flatMap((leg:any) => leg.steps.map((step:any) => step.geometry.coordinates))} />
    </MapContainer>
  );
}

export default TestMap2;