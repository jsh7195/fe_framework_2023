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
          "creator": "BRouter-1.1",
          "name": "brouter_openrider_hotplace_0",
          "track-length": "1453",
          "filtered ascend": "10",
          "plain-ascend": "6",
          "total-time": "318",
          "total-energy": "29006",
          "cost": "4066",
          "voicehints": [
            [
              1,
              2,
              0
            ],
            [
              5,
              5,
              0
            ],
            [
              7,
              1,
              0
            ],
            [
              28,
              6,
              0
            ],
            [
              40,
              2,
              0
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
              "NodeTags"
            ],
            [
              "127065931",
              "37547090",
              "20",
              "22",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "reversedirection=yes highway=residential oneway=yes",
              ""
            ],
            [
              "127065987",
              "37547179",
              "20",
              "12",
              "1600",
              "0",
              "77",
              "0",
              "0",
              "highway=residential",
              "traffic_calming=hump"
            ],
            [
              "127066543",
              "37548143",
              "18",
              "118",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=residential",
              "openrider_danger_node=low"
            ],
            [
              "127066579",
              "37548223",
              "18",
              "10",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=residential",
              ""
            ],
            [
              "127067172",
              "37548262",
              "19",
              "53",
              "1600",
              "0",
              "52",
              "0",
              "0",
              "highway=secondary oneway=yes",
              "openrider_danger_node=low highway=crossing crossing=unknown"
            ],
            [
              "127067359",
              "37548270",
              "20",
              "17",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=secondary oneway=yes",
              "openrider_danger_node=low highway=traffic_signals"
            ],
            [
              "127067506",
              "37548276",
              "21",
              "14",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=secondary oneway=yes",
              "openrider_danger_node=low highway=traffic_signals"
            ],
            [
              "127067762",
              "37548274",
              "21",
              "23",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=secondary oneway=yes",
              "openrider_danger_node=low highway=crossing crossing=unknown"
            ],
            [
              "127068803",
              "37548169",
              "19",
              "94",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=secondary oneway=yes",
              "openrider_danger_node=low"
            ],
            [
              "127069084",
              "37548140",
              "18",
              "26",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=secondary oneway=yes",
              "openrider_danger_node=low"
            ],
            [
              "127069531",
              "37548093",
              "19",
              "40",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=secondary oneway=yes",
              "openrider_danger_node=low"
            ],
            [
              "127070466",
              "37548011",
              "22",
              "84",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=secondary oneway=yes",
              "openrider_danger_node=low"
            ],
            [
              "127071308",
              "37547913",
              "22",
              "76",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=secondary oneway=yes",
              "openrider_danger_node=low"
            ],
            [
              "127072336",
              "37547738",
              "22",
              "94",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=secondary oneway=yes",
              "openrider_danger_node=low"
            ],
            [
              "127072783",
              "37547621",
              "22",
              "42",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=secondary oneway=yes",
              "openrider_danger_node=low"
            ],
            [
              "127073741",
              "37547354",
              "24",
              "90",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=secondary oneway=yes",
              "openrider_danger_node=low highway=crossing crossing=unknown"
            ],
            [
              "127074058",
              "37547271",
              "25",
              "30",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=secondary oneway=yes",
              "openrider_danger_node=low highway=traffic_signals"
            ],
            [
              "127074193",
              "37547234",
              "26",
              "13",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=secondary oneway=yes",
              "highway=traffic_signals"
            ],
            [
              "127074339",
              "37547191",
              "26",
              "14",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=secondary oneway=yes",
              "openrider_danger_node=low highway=crossing crossing=unknown"
            ],
            [
              "127074859",
              "37547022",
              "28",
              "51",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=secondary foot=no oneway=yes",
              "openrider_danger_node=low"
            ],
            [
              "127075232",
              "37546860",
              "30",
              "39",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=secondary foot=no oneway=yes",
              "openrider_danger_node=low"
            ],
            [
              "127076223",
              "37546352",
              "29",
              "105",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "highway=secondary foot=no oneway=yes",
              "openrider_danger_node=low highway=traffic_signals"
            ],
            [
              "127076239",
              "37546182",
              "29",
              "19",
              "1600",
              "0",
              "36",
              "0",
              "0",
              "reversedirection=yes highway=residential",
              "openrider_danger_node=low"
            ],
            [
              "127076697",
              "37544843",
              "22",
              "157",
              "1600",
              "0",
              "2",
              "0",
              "0",
              "reversedirection=yes highway=residential",
              "openrider_danger_node=low barrier=toll_booth"
            ],
            [
              "127076753",
              "37543476",
              "26",
              "155",
              "1600",
              "0",
              "0",
              "0",
              "0",
              "reversedirection=yes highway=residential",
              ""
            ],
            [
              "127077589",
              "37543401",
              "26",
              "55",
              "5500",
              "0",
              "90",
              "0",
              "0",
              "reversedirection=yes highway=footway",
              ""
            ]
          ],
          "waypoints": [
            [
              127.065931,
              37.54709,
              "12"
            ],
            [
              127.066579,
              37.548223,
              "13"
            ],
            [
              127.067359,
              37.54827,
              "11"
            ],
            [
              127.076223,
              37.546352,
              "18"
            ],
            [
              127.076753,
              37.543476,
              "12"
            ]
          ],
          "openrider-tags": []
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              127.065699,
              37.547151,
              20.0
            ],
            [
              127.065931,
              37.547090,
              20.25
            ],
            [
              127.065987,
              37.547179,
              20.0
            ],
            [
              127.066075,
              37.547324,
              19.5
            ],
            [
              127.066543,
              37.548143,
              18.0
            ],
            [
              127.066579,
              37.548223,
              18.0
            ],
            [
              127.067172,
              37.548262,
              19.75
            ],
            [
              127.067359,
              37.548270,
              20.5
            ],
            [
              127.067506,
              37.548276,
              21.0
            ],
            [
              127.067762,
              37.548274,
              21.0
            ],
            [
              127.068136,
              37.548242,
              21.0
            ],
            [
              127.068803,
              37.548169,
              19.25
            ],
            [
              127.069084,
              37.548140,
              18.25
            ],
            [
              127.069531,
              37.548093,
              19.25
            ],
            [
              127.070466,
              37.548011,
              22.25
            ],
            [
              127.071308,
              37.547913,
              22.25
            ],
            [
              127.072137,
              37.547788,
              22.25
            ],
            [
              127.072336,
              37.547738,
              22.25
            ],
            [
              127.072783,
              37.547621,
              22.5
            ],
            [
              127.073741,
              37.547354,
              24.0
            ],
            [
              127.074058,
              37.547271,
              25.5
            ],
            [
              127.074193,
              37.547234,
              26.25
            ],
            [
              127.074339,
              37.547191,
              26.75
            ],
            [
              127.074764,
              37.547059,
              28.5
            ],
            [
              127.074859,
              37.547022,
              28.75
            ],
            [
              127.075091,
              37.546926,
              29.75
            ],
            [
              127.075232,
              37.546860,
              30.25
            ],
            [
              127.075568,
              37.546684,
              30.75
            ],
            [
              127.076223,
              37.546352,
              29.75
            ],
            [
              127.076239,
              37.546182,
              29.5
            ],
            [
              127.076280,
              37.546067,
              29.25
            ],
            [
              127.076518,
              37.545446,
              26.0
            ],
            [
              127.076581,
              37.545235,
              24.5
            ],
            [
              127.076588,
              37.545211,
              24.25
            ],
            [
              127.076697,
              37.544843,
              22.25
            ],
            [
              127.076727,
              37.544684,
              21.75
            ],
            [
              127.076751,
              37.544269,
              20.25
            ],
            [
              127.076758,
              37.543817,
              23.25
            ],
            [
              127.076764,
              37.543720,
              24.0
            ],
            [
              127.076762,
              37.543537,
              25.75
            ],
            [
              127.076753,
              37.543476,
              26.5
            ],
            [
              127.077057,
              37.543449,
              26.25
            ],
            [
              127.077158,
              37.543440,
              26.25
            ],
            [
              127.077258,
              37.543431,
              26.25
            ],
            [
              127.077351,
              37.543422,
              26.25
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