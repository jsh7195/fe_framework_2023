import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from 'react-leaflet'
// import { LatLng } from 'leaflet'
import * as L from 'leaflet';
import "leaflet/dist/leaflet.css";

const redIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [15, 31],
    iconAnchor: [32, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const blueIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});
const testData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "creator": "BRouter-1.6.3",
                "name": "brouter_trekking_0",
                "track-length": "4583",
                "filtered ascend": "20",
                "plain-ascend": "-3",
                "total-time": "842",
                "total-energy": "84215",
                "cost": "5680",
                "voicehints": [
                    [
                        1,
                        12,
                        0,
                        886.0,
                        177
                    ],
                    [
                        13,
                        1,
                        0,
                        374.0,
                        -4
                    ],
                    [
                        20,
                        5,
                        0,
                        213.0,
                        101
                    ],
                    [
                        25,
                        1,
                        0,
                        826.0,
                        0
                    ],
                    [
                        48,
                        6,
                        0,
                        120.0,
                        24
                    ],
                    [
                        52,
                        6,
                        0,
                        1488.0,
                        29
                    ],
                    [
                        72,
                        5,
                        0,
                        184.0,
                        86
                    ],
                    [
                        73,
                        2,
                        0,
                        491.0,
                        -91
                    ]
                ],
                "messages": [
                    [
                        "Longitude",
                        "Latitude",
                        "Elevation",
                        "Distance",
                        "CostPerKm",
                        "ElevCost",
                        "TurnCost",
                        "NodeCost",
                        "InitialCost",
                        "WayTags",
                        "NodeTags",
                        "Time",
                        "Energy"
                    ],
                    [
                        "127717581",
                        "37884696",
                        "78",
                        "1",
                        "3050",
                        "0",
                        "0",
                        "0",
                        "0",
                        "reversedirection=yes highway=pedestrian",
                        "",
                        "0",
                        "16"
                    ],
                    [
                        "127717694",
                        "37884653",
                        "78",
                        "11",
                        "1050",
                        "0",
                        "89",
                        "0",
                        "0",
                        "highway=footway surface=paving_stones bicycle=yes",
                        "",
                        "1",
                        "183"
                    ],
                    [
                        "127717615",
                        "37884532",
                        "77",
                        "15",
                        "1050",
                        "0",
                        "93",
                        "0",
                        "0",
                        "reversedirection=yes highway=tertiary surface=asphalt bicycle=designated cycleway=track oneway=no",
                        "highway=crossing bicycle=yes crossing=zebra",
                        "3",
                        "396"
                    ],
                    [
                        "127713932",
                        "37877531",
                        "74",
                        "860",
                        "1050",
                        "0",
                        "6",
                        "0",
                        "0",
                        "reversedirection=yes highway=tertiary surface=asphalt bicycle=designated cycleway=track oneway=no",
                        "",
                        "135",
                        "13524"
                    ],
                    [
                        "127715641",
                        "37874483",
                        "76",
                        "374",
                        "1050",
                        "0",
                        "2",
                        "0",
                        "0",
                        "reversedirection=yes highway=tertiary bicycle=designated cycleway=track",
                        "",
                        "213",
                        "21399"
                    ],
                    [
                        "127713369",
                        "37873826",
                        "83",
                        "213",
                        "1150",
                        "0",
                        "107",
                        "0",
                        "0",
                        "reversedirection=yes highway=secondary surface=asphalt bicycle=designated cycleway=track oneway=no",
                        "",
                        "258",
                        "25898"
                    ],
                    [
                        "127712851",
                        "37873677",
                        "81",
                        "48",
                        "1150",
                        "0",
                        "0",
                        "0",
                        "0",
                        "reversedirection=yes highway=secondary surface=asphalt bicycle=designated cycleway=shared_lane oneway=no",
                        "highway=crossing bicycle=yes crossing=zebra",
                        "273",
                        "27308"
                    ],
                    [
                        "127712000",
                        "37873438",
                        "77",
                        "80",
                        "1150",
                        "0",
                        "0",
                        "0",
                        "0",
                        "reversedirection=yes highway=secondary surface=asphalt bicycle=designated cycleway=shared_lane oneway=no",
                        "",
                        "283",
                        "28362"
                    ],
                    [
                        "127711656",
                        "37873343",
                        "78",
                        "32",
                        "1150",
                        "0",
                        "0",
                        "0",
                        "0",
                        "reversedirection=yes highway=secondary bicycle=designated cycleway=track",
                        "",
                        "287",
                        "28704"
                    ],
                    [
                        "127710191",
                        "37872876",
                        "81",
                        "139",
                        "1150",
                        "0",
                        "0",
                        "0",
                        "0",
                        "reversedirection=yes highway=secondary surface=asphalt bicycle=designated cycleway=track oneway=no",
                        "",
                        "312",
                        "31219"
                    ],
                    [
                        "127707064",
                        "37869232",
                        "90",
                        "527",
                        "1150",
                        "0",
                        "9",
                        "0",
                        "0",
                        "highway=secondary bicycle=designated cycleway=track",
                        "",
                        "469",
                        "46960"
                    ],
                    [
                        "127705740",
                        "37869008",
                        "87",
                        "120",
                        "1150",
                        "0",
                        "12",
                        "0",
                        "0",
                        "highway=secondary_link bicycle=designated cycleway=shared_lane oneway=yes",
                        "",
                        "491",
                        "49166"
                    ],
                    [
                        "127692558",
                        "37868814",
                        "82",
                        "1488",
                        "1150",
                        "0",
                        "48",
                        "0",
                        "0",
                        "highway=secondary bicycle=designated cycleway=shared_lane",
                        "",
                        "748",
                        "74871"
                    ],
                    [
                        "127690473",
                        "37868822",
                        "76",
                        "184",
                        "1350",
                        "0",
                        "85",
                        "0",
                        "0",
                        "reversedirection=yes highway=service",
                        "",
                        "769",
                        "77009"
                    ],
                    [
                        "127691096",
                        "37863480",
                        "75",
                        "491",
                        "1050",
                        "0",
                        "92",
                        "0",
                        "0",
                        "reversedirection=yes highway=cycleway surface=asphalt foot=yes bicycle=designated oneway=no",
                        "",
                        "842",
                        "84215"
                    ]
                ],
                "times": [
                    0,
                    0.168,
                    0.504,
                    1.839,
                    3.968,
                    5.269,
                    7.915,
                    21.973,
                    59.242,
                    111.656,
                    117.029,
                    119.195,
                    121.465,
                    135.236,
                    171.403,
                    176.872,
                    182.76,
                    189.875,
                    197.515,
                    203.864,
                    213.974,
                    224.517,
                    233.001,
                    242.585,
                    247.443,
                    258.953,
                    273.044,
                    280.324,
                    283.581,
                    287.003,
                    294.923,
                    312.15,
                    327.961,
                    331.771,
                    336.711,
                    338.635,
                    341.666,
                    343.642,
                    346.747,
                    349.762,
                    355.272,
                    376.497,
                    388.302,
                    402.457,
                    418.994,
                    435.713,
                    458.505,
                    466.338,
                    469.531,
                    475.944,
                    483.144,
                    488.09,
                    491.587,
                    507.901,
                    515.119,
                    540.914,
                    544.554,
                    547.715,
                    551.568,
                    559.864,
                    576.943,
                    585.51,
                    589.239,
                    602.136,
                    628.877,
                    686.599,
                    695.681,
                    701.686,
                    707.058,
                    709.616,
                    719.076,
                    726.877,
                    748.591,
                    769.969,
                    780.426,
                    839.542,
                    842.03
                ]
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        127.717574,
                        37.884687,
                        78.5
                    ],
                    [
                        127.717581,
                        37.884696,
                        78.5
                    ],
                    [
                        127.717603,
                        37.884687,
                        78.5
                    ],
                    [
                        127.717694,
                        37.884653,
                        78.0
                    ],
                    [
                        127.717615,
                        37.884532,
                        77.75
                    ],
                    [
                        127.717567,
                        37.884462,
                        77.75
                    ],
                    [
                        127.717458,
                        37.884300,
                        77.25
                    ],
                    [
                        127.716919,
                        37.883504,
                        77.0
                    ],
                    [
                        127.715728,
                        37.881641,
                        77.0
                    ],
                    [
                        127.714027,
                        37.878988,
                        76.25
                    ],
                    [
                        127.713806,
                        37.878676,
                        75.25
                    ],
                    [
                        127.713767,
                        37.878529,
                        74.75
                    ],
                    [
                        127.713774,
                        37.878368,
                        74.5
                    ],
                    [
                        127.713932,
                        37.877531,
                        74.75
                    ],
                    [
                        127.714243,
                        37.876490,
                        78.0
                    ],
                    [
                        127.714332,
                        37.876226,
                        78.0
                    ],
                    [
                        127.714527,
                        37.875949,
                        77.75
                    ],
                    [
                        127.714766,
                        37.875642,
                        78.0
                    ],
                    [
                        127.714989,
                        37.875343,
                        78.5
                    ],
                    [
                        127.715183,
                        37.875078,
                        78.5
                    ],
                    [
                        127.715641,
                        37.874483,
                        76.75
                    ],
                    [
                        127.714883,
                        37.874264,
                        76.75
                    ],
                    [
                        127.714525,
                        37.874159,
                        78.75
                    ],
                    [
                        127.714088,
                        37.874025,
                        82.0
                    ],
                    [
                        127.713876,
                        37.873968,
                        82.5
                    ],
                    [
                        127.713369,
                        37.873826,
                        83.0
                    ],
                    [
                        127.712851,
                        37.873677,
                        81.5
                    ],
                    [
                        127.712295,
                        37.873521,
                        79.0
                    ],
                    [
                        127.712000,
                        37.873438,
                        77.75
                    ],
                    [
                        127.711656,
                        37.873343,
                        78.25
                    ],
                    [
                        127.710972,
                        37.873135,
                        79.75
                    ],
                    [
                        127.710191,
                        37.872876,
                        81.5
                    ],
                    [
                        127.709212,
                        37.872545,
                        81.5
                    ],
                    [
                        127.709009,
                        37.872468,
                        82.0
                    ],
                    [
                        127.708761,
                        37.872361,
                        82.25
                    ],
                    [
                        127.708674,
                        37.872306,
                        82.25
                    ],
                    [
                        127.708574,
                        37.872197,
                        82.5
                    ],
                    [
                        127.708514,
                        37.872119,
                        82.5
                    ],
                    [
                        127.708446,
                        37.871993,
                        82.75
                    ],
                    [
                        127.708398,
                        37.871861,
                        82.75
                    ],
                    [
                        127.708343,
                        37.871640,
                        83.25
                    ],
                    [
                        127.708317,
                        37.871166,
                        86.75
                    ],
                    [
                        127.708290,
                        37.870930,
                        88.75
                    ],
                    [
                        127.708220,
                        37.870701,
                        91.0
                    ],
                    [
                        127.708097,
                        37.870460,
                        92.75
                    ],
                    [
                        127.707913,
                        37.870214,
                        93.75
                    ],
                    [
                        127.707281,
                        37.869482,
                        91.5
                    ],
                    [
                        127.707138,
                        37.869313,
                        90.75
                    ],
                    [
                        127.707064,
                        37.869232,
                        90.5
                    ],
                    [
                        127.706827,
                        37.869125,
                        90.5
                    ],
                    [
                        127.706491,
                        37.869064,
                        90.5
                    ],
                    [
                        127.706108,
                        37.869022,
                        88.75
                    ],
                    [
                        127.705740,
                        37.869008,
                        87.0
                    ],
                    [
                        127.704330,
                        37.869568,
                        86.25
                    ],
                    [
                        127.703928,
                        37.869885,
                        85.75
                    ],
                    [
                        127.702793,
                        37.871060,
                        82.75
                    ],
                    [
                        127.702483,
                        37.871274,
                        80.0
                    ],
                    [
                        127.702208,
                        37.871423,
                        79.75
                    ],
                    [
                        127.701815,
                        37.871521,
                        79.0
                    ],
                    [
                        127.701132,
                        37.871719,
                        79.25
                    ],
                    [
                        127.699681,
                        37.872118,
                        78.25
                    ],
                    [
                        127.698878,
                        37.872194,
                        76.5
                    ],
                    [
                        127.698410,
                        37.872141,
                        73.5
                    ],
                    [
                        127.697213,
                        37.871884,
                        77.25
                    ],
                    [
                        127.696583,
                        37.871760,
                        86.0
                    ],
                    [
                        127.694965,
                        37.871449,
                        88.25
                    ],
                    [
                        127.694202,
                        37.871275,
                        83.25
                    ],
                    [
                        127.693643,
                        37.871062,
                        81.5
                    ],
                    [
                        127.693244,
                        37.870795,
                        81.0
                    ],
                    [
                        127.693059,
                        37.870703,
                        81.25
                    ],
                    [
                        127.692716,
                        37.870297,
                        82.25
                    ],
                    [
                        127.692647,
                        37.869958,
                        83.0
                    ],
                    [
                        127.692558,
                        37.868814,
                        82.5
                    ],
                    [
                        127.690473,
                        37.868822,
                        76.25
                    ],
                    [
                        127.690489,
                        37.867991,
                        77.0
                    ],
                    [
                        127.690962,
                        37.864561,
                        73.5
                    ],
                    [
                        127.690979,
                        37.864419,
                        75.0
                    ]
                ]
            }
        }
    ]
}

const changeTest = (num:any) => {
    switch(num) {
        case 0:
            return "직진";
        case 1:
            return "우측 대각선 (오른쪽 약간 기울어진 방향)";
        case 2:
            return "좌회전";
        case 3:
            return "우회전";
        case 4:
            return "U턴";
        case 5:
            return "우측 대각선 (오른쪽 약간 기울어진 방향)";
        case 6:
            return "좌측 대각선 (왼쪽 약간 기울어진 방향)";
        case 7:
            return "우회전";
        case 8:
            return "직진";
        case 9:
            return "우측 대각선 (오른쪽 약간 기울어진 방향)";
        case 10:
            return "좌회전";
        case 11:
            return "우회전";
        case 12:
            return "U턴";
        case 13:
            return "우측 대각선 (오른쪽 약간 기울어진 방향)";
        case 14:
            return "좌측 대각선 (왼쪽 약간 기울어진 방향)";
        case 15:
            return "우회전";
        case 16:
            return "직진";
        case 17:
            return "우측 대각선 (오른쪽 약간 기울어진 방향)";
        case 18:
            return "좌회전";
        case 19:
            return "우회전";
        case 20:
            return "U턴";
        case 21:
            return "우측 대각선 (오른쪽 약간 기울어진 방향)";
        case 22:
            return "좌측 대각선 (왼쪽 약간 기울어진 방향)";
        case 23:
            return "우회전";
        default:
            return "알 수 없는 Instruction Type입니다.";
    }
    
}

// 표지판 정보
const change = function (turn:any) {
    switch (turn) {
        case 1:     return 11;
        case 2:     return 12;
        case 5:     return 13;
        case 10:    return 14;
        case 4:     return 16;
        case 3:     return 17;
        case 6:     return 18;
        case 7:     return 19;
        case 8:     return 31;
        case 9:     return 32;
        case 11:    return 33;
        case 13:    return 34;
        case 14:    return 35;
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        default: return -99;
    }
};

// 표지판 정보
const getWayPoint = function (turn:any) {
	switch(turn) {
		case 11 : return 's';	// 직진
		case 12 : return 'l'; // 좌회전
		case 13 : return 'r'; // 우회전
		case 14 : return 'u'; // 유턴
		case 15 : return 'p'; // 피턴
		case 16 : return '8'; // 8시방향 좌회전
		case 17 : return '10'; // 10시방향 좌회전
		case 18 : return '2'; // 2시방향 우회전
		case 19 : return '4'; // 4시방향 우회전

		case 31 : return '10'; // 왼쪽 방향 - 10시방향 우회전
		case 32 : return '2';  // 오른쪽 방향 - 2시방향 우회전
		case 33 : return '4';  // 오른쪽으로 유턴 - 5시방향 우회전
		default : return 'i'; // 안내
	}
};

// 표지판 설명
const getWayPointInfo = function (turn:any) {
	switch(turn) {
		case 11 : return '직진';	// 직진
		case 12 : return '좌회전'; // 좌회전
		case 13 : return '우회전'; // 우회전
		case 14 : return '유턴'; // 유턴
		case 15 : return '피턴'; // 피턴
		case 16 : return '여덟시방향 좌회전'; // 8시방향 좌회전
		case 17 : return '열시방향 좌회전'; // 10시방향 좌회전
		case 18 : return '두시방향 우회전'; // 2시방향 우회전
		case 19 : return '네시방향 우회전'; // 4시방향 우회전

		case 31 : return '왼쪽 방향';
		case 32 : return '오른쪽 방향';
		case 33 : return '다섯시방향 우회전'; // 5시방향 우회전
		case 34 : return '로터리 진입';
		case 35 : return '로터리 좌측진입';
	}
};

const TestMap = () => {

    const voices = testData.features[0].properties.voicehints
    const coords = testData.features[0].geometry.coordinates;

    console.log(coords.length);

    const coordsLang = [];

    for(let i=0; i<coords.length; i++){
        coordsLang.push(L.latLng(coords[i][1],coords[i][0]))
    }


    return (
        <MapContainer center={[coords[0][1],coords[0][0]]}
            zoom={13}
            scrollWheelZoom={true} style={{ width: "100%", height: "100vh" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={L.latLng(37.366105, 127.10796)} icon={blueIcon}>
                <Popup>Marker</Popup>
            </Marker> */}
            {/* {coords.map((coord, index) => (
                <Marker position={L.latLng(coord[1],coord[0])} key={index} icon={redIcon}>
                  
                    
                </Marker>
                
            ))} */}
            <Polyline positions={coordsLang} color="red" />
            {voices.map((vo, index) => (
                <>
                <Marker position={L.latLng(coords[vo[0]][1],coords[vo[0]][0])} key={index} icon={blueIcon}>
                     <Popup>{`${index}번째 - ${change(vo[1]) === -99? changeTest(vo[1]) : getWayPointInfo(change(vo[1]))}`}</Popup> 
                     {/* <Popup>{`${vo[1]} - ${(changeTest((vo[1])))}`}</Popup>  */}
                </Marker>
                </>
            ))}
            
        </MapContainer>
    )
}

export default TestMap;