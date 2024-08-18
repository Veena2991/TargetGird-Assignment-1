# To Do List Application

This project is built using React. It allows users to manage tasks with descriptions, labels, and completion status. The application features a clean and simple user interface, similar to Google Keep, and provides functionality for adding, editing, deleting, and filtering tasks by labels.

## Table of Contents

- [Features](#features)
- [Component Structure](#component-structure)
- [State Management](#state-management)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Customization](#customization)
- [License](#license)

## Features

- **Task Management**: Add, edit, and delete tasks.
- **Label Management**: Create and manage labels for organizing tasks.
- **Label Filtering**: Filter tasks by labels for better organization.
- **Persistent Storage**: Data is stored in the browser’s local storage, so tasks and labels persist across sessions.
- **Responsive Design**: A clean and responsive user interface that works across devices.

## Component Structure

The project is organized into the following components:

- **App**: The main component that holds the entire application.
- **NoteGrid**: Displays the grid of tasks (or notes).
- **TodoItem**: Represents an individual task with its description, labels, and actions.
- **TaskForm**: A form component for adding or editing tasks.
- **LabelManager**: Handles the creation and management of labels.
- **LabelSearch**: Allows users to filter tasks by selecting labels.

## State Management

The application uses React class components and `this.state` for state management. The state is managed centrally in the `App` component, which includes:

- **tasks**: An array of task objects, each containing an ID, description, completion status, and associated labels.
- **labels**: An array of label objects, each containing an ID and name.

Data is persisted using the browser’s local storage, ensuring that tasks and labels are saved across sessions.

## Setup Instructions

To run this project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)
- Git

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/google-keep-clone.git
   cd google-keep-clone

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Run the application:**
    ```sh
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

Usage

Adding a Task

1. Click on the "Add Task" button.
2. Enter a task description.
3. Select labels from the dropdown or create new ones.
4. Click "Save" to add the task.

Editing a Task

1. Click the "Edit" button next to the task.
2. Modify the description or labels.
3. Click "Save" to update the task.

Deleting a Task

1. Click the "Delete" button next to the task.
2. Confirm the deletion.

Filtering by Labels

1. Use the label search dropdown to filter tasks by specific labels.
2. The list of tasks will update to show only those with the selected label(s).

google-keep-clone/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── App/
│   │   │   ├── App.js
│   │   │   └── App.css
│   │   ├── NoteGrid/
│   │   │   ├── NoteGrid.js
│   │   │   └── NoteGrid.css
│   │   ├── TodoItem/
│   │   │   ├── TodoItem.js
│   │   │   └── TodoItem.css
│   │   ├── TaskForm/
│   │   │   ├── TaskForm.js
│   │   │   └── TaskForm.css
│   │   ├── LabelManager/
│   │   │   ├── LabelManager.js
│   │   │   └── LabelManager.css
│   │   └── LabelSearch/
│   │       ├── LabelSearch.js
│   │       └── LabelSearch.css
│   │
│   ├── assets/
│   │   └── images/
│   │       └── logo.png
│   │
│   ├── utils/
│   │   └── storage.js
│   │
│   ├── index.js
│   ├── index.css
│   └── README.md
│
├── .gitignore
├── package.json
└── README.md

