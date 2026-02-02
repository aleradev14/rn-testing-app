export interface Question {
    id: number;
    question: string;
    image: string;
    options: string[];
    correctAnswerIndex: number;
}

export const QUESTIONS: Question[] = [
    {
        id: 1,
        question: "What should you do when you see this sign?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/UK_traffic_sign_543.svg/1200px-UK_traffic_sign_543.svg.png",
        options: ["Stop", "Give way", "Accelerate"],
        correctAnswerIndex: 1,
    },
    {
        id: 2,
        question: "You are driving on a motorway. When can you use the hard shoulder?",
        image: "https://www.passmefast.co.uk/images/hard-shoulder-motorway.jpg",
        options: ["To answer a call", "In an emergency", "To rest"],
        correctAnswerIndex: 1,
    },
    {
        id: 3,
        question: "What is the national speed limit for cars and motorcycles on a single carriageway road?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/UK_traffic_sign_671.svg/1200px-UK_traffic_sign_671.svg.png",
        options: ["50 mph", "60 mph", "70 mph"],
        correctAnswerIndex: 1,
    },
    {
        id: 4,
        question: "When may you sound your horn in a built-up area between 11.30 pm and 7.00 am?",
        image: "https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_1280.jpg",
        options: ["When another road user poses a danger", "To greet a friend", "Never"],
        correctAnswerIndex: 0,
    },
    {
        id: 5,
        question: "You are approaching a zebra crossing. Pedestrians are waiting to cross. What should you do?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Zebra_crossing_UK.jpg/1200px-Zebra_crossing_UK.jpg",
        options: ["Speed up", "Wave them across", "Be prepared to stop"],
        correctAnswerIndex: 2,
    },
    {
        id: 6,
        question: "What does a solid white line at the side of the road indicate?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/UK_traffic_sign_1012.1.svg/800px-UK_traffic_sign_1012.1.svg.png",
        options: ["Edge of the carriageway", "No parking", "Bus lane"],
        correctAnswerIndex: 0,
    },
    {
        id: 7,
        question: "This is a very long question designed to test the layout of the card. Imagine you are driving down a narrow country lane with high hedges on both sides. Suddenly, a large tractor appears around a sharp bend coming towards you. There are no passing places visible immediately behind you or in front of you. The tractor driver is gesturing for you to reverse. However, you have a trailer attached to your car which makes reversing difficult. What is the most appropriate course of action in this specific scenario considering the highway code and general safety advice?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Tractor_on_road.jpg/1200px-Tractor_on_road.jpg",
        options: ["Refuse to move", "Reverse carefully", "Get out and argue"],
        correctAnswerIndex: 1,
    },
    {
        id: 8,
        question: "What is the minimum legal tread depth for car tyres?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Tyre_tread_depth_gauge.jpg/1200px-Tyre_tread_depth_gauge.jpg",
        options: ["1.0 mm", "1.6 mm", "2.5 mm"],
        correctAnswerIndex: 1,
    },
    {
        id: 9,
        question: "When driving in fog, which lights should you use?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Foggy_road.jpg/1200px-Foggy_road.jpg",
        options: ["Full beam headlights", "Dipped headlights", "Sidelights only"],
        correctAnswerIndex: 1,
    },
    {
        id: 10,
        question: "What does this sign mean?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/UK_traffic_sign_606.svg/1200px-UK_traffic_sign_606.svg.png",
        options: ["Turn left", "Turn right", "Go straight"],
        correctAnswerIndex: 0,
    },
];
