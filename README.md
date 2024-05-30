# 📊 Data Visualization app

### 🎯 Description

A simple SPA that allows you to:

- Register, Login/Logout & Edit your account
- Visualize some Pokémon information trough API calls made to the [Pokedex Api](https://pokeapi.co/)

<br>

## 📋 Instructions

### Public URL
The project is **online,** you can easily access it visiting the public [link](https://egesiapres.github.io/dataVisualization-app/)


### Run in local
Otherwise, you can execute the project **in local** following the steps below:

1. Download the project:

```
git clone https://github.com/Egesiapres/dataVisualization-app.git
```

2. Go to the project folder:

```
cd dataVisualization-app
```

3. Install the dependencies:

```
npm i
```

4. Run the app:

```
npm run dev
```

The app will be available at this [link](http://localhost:5173/dataVisualization-app/)

⚠️ Be sure to have **Node.js** and **Git** installed on your machine

<br>

## 💡 Design choices

### ⌨️ Code

#### Steps:

1. **Setup:** the project setup has been made using *Vite*, a tool that allows you to have a very clean folder structure with no additional useless files, and a light project template
2. **Folder structure:** into the src folder, I've created an initial folder tree in order to have a project draft, to have a high level overview of the project before to start coding
3. **Packages installation:** I've installed the main dependencies the project relies on, such as *Material UI* and *React Router*
4. **Coding:** I've started coding from the routing part, realizing the needed pages one at the time to achieve the correct flow trough the entire app. To realize the dashboard, I took advantage of a template available in the template section of Material UI's webpage that speed up the UI building process. Then, i customized it
5. **Approach:** as React as a framework teaches, I've tried to split the interface into reusable components. This allowed me to save time during the development process, and to be consistent with the "design" choices made

### 🎨 Aesthetic

- **Colors/UI style:** due to time issues, I've used the default Material UI palette, but I decided to avoid the `outlined` components variant because i found it confusing in some situations, especially when paired with `TextField` components
- **Feedback:** I tried to give feedback/instructions to the user everywhere it was possible, to not leave him alone or without signals
- **Emojis:** I've inserted theme because they're a current trend, they're able to give an appealing aesthetic and a kind of flat and very clean design at the same time. They also set a familiar and not too formal communication style