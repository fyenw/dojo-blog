
import NavBar from './NavBar';
import Home from './Home';

function App() {
  // JS goes here
  // const title = 'Welcome to the new blog!';
  // const likes = 50;
  // const link = "http://www.google.com";
  return (
    // JSX (similar to HTML) goes here.
    //can put JS into curly brackets here (only numbers string and arrays work, but booleans and objects do not work. )
    //main difference between HTML and JSX is that Class is ClassName in JSX when added to elements
    //another difference is that camelCase is used in JSX  
    <div className="App">
      <NavBar/>
      <div className="content">
        <Home/>
        {/* <h1>{title}</h1>
        <p> Liked {likes} times.</p>
        don't need to add "" if using a dynamic variable for the link beliow 
        <a href={link}>Google Site</a> */}
      </div>
    </div>
  );
}


//always need to export the component fucntion at the bottom so we can use it in other files
//then we import it at the top of the other js files
export default App;
