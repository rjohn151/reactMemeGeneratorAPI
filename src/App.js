// import './App.css';
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";


function App() {


  return (
    <div className="App">
      <Navbar />
      <Meme/>
      
    </div>
  );
}

export default App;

// let timeOfDay;

//   function greeting(name){
//     const date = new Date();
//     const hours = date.getHours()

//       if(hours >= 4 && hours < 12 ){
//         timeOfDay = "morning"
//       } else if(hours >= 12 && hours < 17){
//         // return `Good afternoon ${name}`
//         timeOfDay = "afternoon"
//       } else if(hours >= 17 && hours < 20){
//         timeOfDay = "evening"
//       } else {
//         timeOfDay = "night"
//       }
//       return `Good ${timeOfDay} ${name}`
//   }

// console.log(greeting(`Ramone`))
// console.log(hours)


