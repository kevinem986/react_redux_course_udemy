import './assets/css/custom.css';
import Card from './components/Card';
import faker from 'faker';

function App() {

  // const styles = {
  //   outerdiv: {
  //     padding: "70px 0",
  //     backgroundColor: "blue"
  //   },
  //   innerdiv: {
  //     textAlign: "center",
  //     margin: "auto",
  //     width: "60%",
  //     border: "3px solid black",
  //     backgroundColor: "#73AD21",
  //     padding: "70px 0",
  //   }
  // }

  // const someText = 'Some Text';
  // const someDiv = <div style={{backgroundColor: 'white'}}>Some Div</div>

  const buttonsMarkup = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3">NO </button> 
    </div>
  );

  return (
    // <div className="outerdiv">
    //   <div className="innerdiv">This is a green box</div>
    // </div>
    // <div style={{padding:'70px 0', backgroundColor: 'blue'}}>
    //   <div className="innerdiv">This is a green box</div>
    // </div>
    // <div style={styles.outerdiv}>
    // <div style={styles.innerdiv}>This is a green box</div>
    // <div style={styles.outerdiv}>
    // <div style={styles.innerdiv}>{someText}</div>
    // <div style={styles.innerdiv}>{someDiv}</div>
  // </div>
    <div className="App">
      <Card avatar={faker.image.avatar()} name={`${faker.name.firstName()} ${faker.name.lastName()}`} title={`${faker.name.title()}`}> 
        {buttonsMarkup}
      </Card>
      <Card avatar={faker.image.avatar()} name={`${faker.name.firstName()} ${faker.name.lastName()}`} title={`${faker.name.title()}`}> 
        {buttonsMarkup}
      </Card>
      <Card avatar={faker.image.avatar()} name={`${faker.name.firstName()} ${faker.name.lastName()}`} title={`${faker.name.title()}`}> 
        {buttonsMarkup}
      </Card>
    </div>
  );
}

export default App;
