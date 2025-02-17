1. Clone the Repository
First, clone the repository from GitHub to your local machine. Open your terminal and run:

git clone https://github.com/your-username/movie_box.git
Replace your-username with your actual GitHub username.
For this app you can type:
  git clone https://github.com/Erasmus24/movie_box.git

After cloning the repository, navigate into the project folder:
cd movie_box

2. Install Dependencies
Once you're inside the project directory, you need to install the dependencies required to run the app. Ensure you have Node.js and npm or Yarn installed on your machine.

If you don’t have Node.js installed, you can download it from https://nodejs.org/.

To install the dependencies, run:
npm install

Alternatively, if you're using Yarn:
yarn install
This will install all the necessary packages listed in the package.json file.

3. Install Expo CLI (if not installed)
If you don't have Expo CLI installed globally, you can install it using npm or yarn. To install Expo CLI globally, run the following command:
npm install -g expo-cli

Alternatively, with Yarn:
yarn global add expo-cli
Expo is a framework and platform for universal React applications, and we will use it to run and build the app.

4. Running the App
Once the dependencies are installed, you can start the app using Expo. Run the following command in the project directory:
expo start
This will start the Expo development server and open the Expo developer tools in your browser. You can scan the QR code with the Expo Go app on your mobile device to open the app. Alternatively, you can run it in an emulator/simulator for Android or iOS.

Using Expo Go (for mobile devices):
Install Expo Go from the App Store (for iOS) or Google Play (for Android).
After starting the app using expo start, scan the QR code displayed in your browser (or the terminal) with the Expo Go app.
Running on an Emulator/Simulator:
Android: If you have an Android emulator set up, you can press "a" in the terminal to launch the app on your emulator.
iOS: If you're on macOS and have Xcode installed, press "i" in the terminal to run the app on the iOS simulator.
