# React Native Testing App - Snack Version

This is a Driving Theory Test application adapted to work with Expo Snack.

## Features

- Main screen with "Start Test" button
- Quiz screen with 10 questions about driving theory
- Horizontal scrolling with FlashList
- Background color indicator (gray/green/red) based on answer correctness
- Submit button appears when 90% of questions are answered
- Results screen showing correct/incorrect answers

## Structure

- `App.js` - Main entry point with React Navigation setup
- `screens/` - Screen components (MainScreen, QuizScreen, ResultScreen)
- `components/` - Reusable components (QuestionCard, BackgroundIndicator)
- `constants/` - Data constants (questions)

## How to Use in Snack

1. Upload this project to Snack
2. Make sure all dependencies are installed
3. Run on iOS, Android, or Web

## Known Issues

The app contains intentional bugs for interview testing purposes. See SOLUTIONS.md for details.
