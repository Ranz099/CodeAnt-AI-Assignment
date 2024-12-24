# <span style="color:blue;">**CodeAnt AI Assignment**</span>

This repository contains the frontend implementation for the CodeAnt AI application. The project includes components for the **Header**, **Login**, **Repositories**, and **Footer**, built using **React.js**. Below are the details about the folder structure, installation, and how to run the application.

---

## <span style="color:green;">**Features**</span>
1. **Header Component**: Displays the application name and navigation links.
2. **Login Screen**: Provides options for users to log in using **GitHub**, **Bitbucket**, **Azure DevOps**, or **GitLab**.
3. **Repositories Screen**: Lists repositories with details such as **language**, **size**, and **last updated time**.
4. **Footer Component**: Contains the **copyright notice** and additional information.

---

## <span style="color:orange;">**Technologies Used**</span>
- **React.js**: Framework for building user interfaces.
- **CSS**: For styling components.
- **JavaScript (ES6+)**: Programming language for functionality.
- **Node.js**: For running the development server.

---

## <span style="color:purple;">**How to Run Locally**</span>

Follow these detailed steps to set up and run the application on your local machine:

### <span style="color:red;">**Prerequisites**</span>

1. **Install Node.js**:
   - Download and install Node.js from the [official website](https://nodejs.org/).
   - Verify the installation by running the following commands in a terminal:
     ```bash
     node -v
     npm -v
     ```
     These should return the installed versions of **Node.js** and **npm** (Node Package Manager).

2. **Install a Code Editor**:
   - Install [Visual Studio Code (VS Code)](https://code.visualstudio.com/) or any other preferred editor.

---

### <span style="color:blue;">**Steps**</span>

1. **Clone the Repository**:
   - Open a terminal in the location where you want to save the project.
   - Run the following commands to clone the repository:
     ```bash
     git clone <repository-url>
     cd <repository-folder>
     ```
   - Replace `<repository-url>` with the URL of your GitHub repository.

2. **Navigate to the Project Folder**:
   - Change your current directory to the project folder:
     ```bash
     cd my-app
     ```
   - Ensure you are in the same directory as the **package.json** file.

3. **Install Dependencies**:
   - Use **npm** to install the project dependencies:
     ```bash
     npm install
     ```
   - This command will download and install all the packages listed in the **package.json** file.

4. **Start the Development Server**:
   - Run the following command to start the application:
     ```bash
     npm start
     ```
   - This will start a **local development server**, and the application should automatically open in your default browser.

5. **Open the Application in the Browser**:
   - If the application does not open automatically, you can manually visit:
     ```
     http://localhost:3000
     ```
   - This is the **default local server address** for React applications.

6. **Make Changes and Save**:
   - Open the project folder in **VS Code** using:
     ```bash
     code .
     ```
   - Make changes to the source files (e.g., `src/components`) as needed.
   - Save the changes, and the browser will automatically reload the application to reflect your updates.

7. **Stop the Server**:
   - To stop the running development server, press **Ctrl + C** in the terminal.

---

### <span style="color:red;">**Troubleshooting**</span>

1. **If you encounter errors** during setup or running:
   - Delete `node_modules` and `package-lock.json`:
     ```bash
     rm -rf node_modules package-lock.json
     npm install
     ```
   - Start the server again:
     ```bash
     npm start
     ```

2. **Check Port Availability**:
   - If `http://localhost:3000` is already in use, you may see a prompt to run the app on another port (e.g., 3001). Type **Y** to confirm.

3. **Clear Cache**:
   - Run this command if caching issues persist:
     ```bash
     rm -rf node_modules/.cache
     npm start
     ```

---

### <span style="color:purple;">**Notes**</span>

- Ensure that your **Node.js** version is compatible with React (LTS versions are recommended).
- Keep your **browser** and **editor** updated for the best experience.

---

By following these steps, you should be able to successfully run the application locally.
