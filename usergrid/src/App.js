import logo from './logo.svg';
import './App.css';
import useFetch from './fet';
function App() {
  const {data,error,load}=useFetch("https://reqres.in/api/users?page=1");
  if(load){
    console.log("Loading...")
    console.log(typeof(data?.data))
  }
  return (
    <div>
     <center> <h1>User data from the given API</h1></center>
    <div className="App">
      {data?.data.map(({ id, first_name,avatar ,last_name,email}) => (
                <div key={id} className='card'>
                  <img
                    src={avatar}
                    alt=""
                  />
                  <br></br>
                 <b>NAME: </b> {first_name} {last_name}<br></br>
                  <b>EMAIL: </b><a href={email}>{email}</a>
                </div>
              ))}
              <div className='circle'></div>
    </div>
    <center> <h1>These are the six users in the URL which is provided</h1></center>
    
    </div>
  );
}

export default App;
