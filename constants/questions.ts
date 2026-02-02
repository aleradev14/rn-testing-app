export interface Question {
    id: number;
    question: string;
    image: string;
    options: string[];
    correctAnswerIndex: number;
}

export const GENERAL_QUESTIONS: Question[] = [
    {
        id: 101,
        question: "You are driving on a motorway. When can you use the hard shoulder?",
        image: "https://www.passmefast.co.uk/images/hard-shoulder-motorway.jpg",
        options: ["To answer a call", "In an emergency", "To rest"],
        correctAnswerIndex: 1,
    },
    {
        id: 102,
        question: "What is the national speed limit for cars and motorcycles on a single carriageway road?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/UK_traffic_sign_671.svg/1200px-UK_traffic_sign_671.svg.png",
        options: ["50 mph", "60 mph", "70 mph"],
        correctAnswerIndex: 1,
    },
    {
        id: 103,
        question: "When may you sound your horn in a built-up area ?",
        image: "https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_1280.jpg",
        options: ["Between 11.30 pm and 7.00 am", "Any time", "Only between 7.00 am and 11.30 pm"],
        correctAnswerIndex: 2,
    },
    {
        id: 104,
        question: "You are approaching a zebra crossing. Pedestrians are waiting to cross. What should you do?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Zebra_crossing_UK.jpg/1200px-Zebra_crossing_UK.jpg",
        options: ["Speed up", "Wave them across", "Be prepared to stop"],
        correctAnswerIndex: 2,
    },
    {
        id: 105,
        question: "What is the minimum legal tread depth for car tyres?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Tyre_tread_depth_gauge.jpg/1200px-Tyre_tread_depth_gauge.jpg",
        options: ["1.0 mm", "1.6 mm", "2.5 mm"],
        correctAnswerIndex: 1,
    },
    {
        id: 106,
        question: "When driving in fog, which lights should you use?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Foggy_road.jpg/1200px-Foggy_road.jpg",
        options: ["Full beam headlights", "Dipped headlights", "Sidelights only"],
        correctAnswerIndex: 1,
    },
    {
        id: 107,
        question: "This is a very long question designed to test the layout of the card. Imagine you are driving down a narrow country lane with high hedges on both sides. Suddenly, a large tractor appears around a sharp bend coming towards you. There are no passing places visible immediately behind you or in front of you. The tractor driver is gesturing for you to reverse. However, you have a trailer attached to your car which makes reversing difficult. What is the most appropriate course of action in this specific scenario considering the highway code and general safety advice?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Tractor_on_road.jpg/1200px-Tractor_on_road.jpg",
        options: ["Refuse to move", "Reverse carefully", "Get out and argue"],
        correctAnswerIndex: 1,
    },
    {
        id: 108,
        question: "What is the typical stopping distance at 50 mph?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/UK_traffic_sign_516.svg/1024px-UK_traffic_sign_516.svg.png",
        options: ["36 meters", "53 meters", "23 meters"],
        correctAnswerIndex: 1,
    },
    {
        id: 109,
        question: "You see a pedestrian with a white stick and red band. What does this mean?",
        image: "https://www.firstcar.co.uk/media/1908/ped_crossing.jpg",
        options: ["They are deaf and blind", "They are just blind", "They are traffic wardens"],
        correctAnswerIndex: 0,
    },
    {
        id: 110,
        question: "What should you do if your anti-lock brakes (ABS) warning light stays on?",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/ABS_warning_light.png",
        options: ["Check brake fluid", "Have the brakes checked immediately", "Ignore it if brakes work"],
        correctAnswerIndex: 1,
    },
];

export const SIGNS_QUESTIONS: Question[] = [
    {
        id: 201,
        question: "What should you do when you see this sign?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/UK_traffic_sign_543.svg/1200px-UK_traffic_sign_543.svg.png",
        options: ["Stop", "Give way", "Accelerate"],
        correctAnswerIndex: 1,
    },
    {
        id: 202,
        question: "What does a solid white line at the side of the road indicate?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/UK_traffic_sign_1012.1.svg/800px-UK_traffic_sign_1012.1.svg.png",
        options: ["Edge of the carriageway", "No parking", "Bus lane"],
        correctAnswerIndex: 0,
    },
    {
        id: 203,
        question: "What does this sign mean?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/UK_traffic_sign_606.svg/1200px-UK_traffic_sign_606.svg.png",
        options: ["Turn left", "Turn right", "Go straight"],
        correctAnswerIndex: 0,
    },
    {
        id: 204,
        question: "What does this circular sign with a blue background and white arrow mean?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/UK_traffic_sign_609.svg/1024px-UK_traffic_sign_609.svg.png",
        options: ["Turn left ahead", "No right turn", "Pass on the left"],
        correctAnswerIndex: 0,
    },
    {
        id: 205,
        question: "Which type of vehicle does this sign prohibit?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/UK_traffic_sign_622.1A.svg/1024px-UK_traffic_sign_622.1A.svg.png",
        options: ["Cars", "Goods vehicles exceeding weight", "Motorcycles"],
        correctAnswerIndex: 1,
    },
    {
        id: 206,
        question: "What does this red triangle sign indicate coming up ahead?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/UK_traffic_sign_520.svg/1024px-UK_traffic_sign_520.svg.png",
        options: ["Dual carriageway ends", "Road narrows on both sides", "Uneven road"],
        correctAnswerIndex: 1,
    },
    {
        id: 207,
        question: "You see this sign on a single carriageway road. What is the maximum speed limit?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/UK_traffic_sign_671.svg/1200px-UK_traffic_sign_671.svg.png",
        options: ["50 mph", "60 mph", "70 mph"],
        correctAnswerIndex: 1,
    },
    {
        id: 208,
        question: "Imagine you are driving on a complex multi-lane motorway system during a period of heavy rain and reduced visibility. You encounter a large overhead directional gantry sign that features multiple destinations, mileage markers, and various colored panels. Specifically, you notice a distinct green panel embedded within the primarily blue background of the sign, adjacent to a route number. Considering the strict hierarchical system of the UK Highway Code and road signage regulations, which of the following best describes the exact legal and navigational significance of that specific green panel, and how should it influence your lane choice and speed in relation to the surrounding traffic flow and upcoming junctions?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/UK_traffic_sign_2901.svg/1200px-UK_traffic_sign_2901.svg.png",
        options: [
            "The green panel indicates that the specific route branched off from the motorway is a primary route, meaning you are transitioning from motorway regulations back to standard dual carriageway or A-road rules, and you should adjust your following distance accordingly.",
            "It signifies a temporary environmental noise-reduction zone where hybrid and electric vehicles are encouraged to use specific lane priorities while maintaining a steady speed of 50 mph to reduce carbon emissions and local acoustic impact.",
            "The green section is a specialized navigational indicator reserved exclusively for heavy goods vehicles (HGVs) and logistics carriers, providing information about upcoming weigh-stations and height-restricted bridges in the immediate vicinity.",
            "It marks the entrance to a 'Green Corridor' which is a part of the national reforestation project, where drivers are legally required to turn off their fog lights regardless of visibility conditions to avoid confusing local wildlife."
        ],
        correctAnswerIndex: 0,
    },
    {
        id: 209,
        question: "What does this brown sign with a white symbol usually indicate?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/UK_traffic_sign_2202.svg/1024px-UK_traffic_sign_2202.svg.png",
        options: ["Tourist attraction", "Road works", "Historical site"],
        correctAnswerIndex: 0,
    },
    {
        id: 210,
        question: "What does a double yellow line painted along the side of the road mean?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Double_yellow_lines_UK.jpg/1200px-Double_yellow_lines_UK.jpg",
        options: ["No waiting at any time", "No stopping", "Parking allowed for 20 mins"],
        correctAnswerIndex: 0,
    },
];

export const ALL_QUESTIONS = [...GENERAL_QUESTIONS, ...SIGNS_QUESTIONS];
