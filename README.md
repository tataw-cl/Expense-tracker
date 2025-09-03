
# Expense Tracker

A modern, open-source expense tracking web application built with React, Material-UI, and Firebase.

## Features
- Add, view, and delete expenses and income
- Categorize transactions (Food, Transport, Shopping, Bills, etc.)
- Filter transactions by category
- Persistent transaction history using Firebase Firestore
- Start a new expense list (clears previous data)
- Responsive, beautiful UI with dark mode toggle
- Authentication (Firebase Auth)
- Toast notifications for actions
- Interactive charts for visualizing expenses

## Getting Started

### Prerequisites
- Node.js & npm
- Firebase project (Firestore & Auth enabled)

### Installation
1. Clone the repository:
	```bash
	git clone https://github.com/tataw-cl/Expense-tracker.git
	cd Expense-tracker
	```
2. Install dependencies:
	```bash
	npm install
	```
3. Create a `.env` file in the project root and add your Firebase credentials:
	```env
	REACT_APP_FIREBASE_API_KEY=your_api_key_here
	REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
	REACT_APP_FIREBASE_PROJECT_ID=your_project_id_here
	REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
	REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
	REACT_APP_FIREBASE_APP_ID=your_app_id_here
	REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
	```
4. Start the development server:
	```bash
	npm start
	```

## Usage
- Add transactions with amount, description, and category
- Filter and view transaction history
- Use the "Start New List" button to reset your expense list
- Toggle dark mode in the header

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License
MIT
