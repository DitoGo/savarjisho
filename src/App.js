
import './App.css';
const greet =(name)=>{
  return Object.keys(name).length ? `Hello Mr. ${name.firstName} ${name.lastName}` : `Hello stranger`
}
const teacher = {
  firstName: "Demna",
  lastName: "Mikava"
}
const userArray = [{userName:"Dimitri", userSurName:"Gogilashvili",userAge:23,userId:777},{userName:"Salome", userSurName:"Kvaliashvili",userAge:24,userId:444},{userName:"Giorgi", userSurName:"Iasaghashvili",userAge:23,userId:2222},{}]
let isUserLoggedIn = true;

const Parent = ()=> {
   if(isUserLoggedIn){
    return  <h1><Child userArr={userArray} login={isUserLoggedIn}/> </h1>
   } return `Opppss ERROR Log In` 
  
 
}

const Child =(props)=>{
  console.log(props)
  return <ul>
      {userArray.map((user, index)=>{
        index = userArray.indexOf(user)
       return  Object.keys(user).length > 0 ? (<li key={index}>{`NAME ${user.userName} LASTNAME ${user.userSurName} AGE ${user.userAge} ID ${user.userId}`}
       </li>): <li key={index}>Sorry DATABASE is empty!</li>
      })}
  </ul>
}
const Middle = ()=> {
 return <><Greeting />
 <Parent />
</>
}

const Wrapper = (props) => {
  return  <> 
  <Navbar children={"Navbar"}/>
    
    <Middle />
    
    
  <Footer children={"Footer"}/></> 
}
const Greeting =()=> {
  return <h2>{greet(teacher)}</h2>
}
const Navbar = (props)=>{
  return <h1>{props.children}</h1>
}
const Footer= (props) => {
  return <h1>{props.children}</h1>

}

function App() {
  return (
    <div className="App">    
      <Wrapper />
    </div>
  );
}

export default App;
