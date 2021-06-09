import './assets/css/custom.css';
import Card from './components/Card';

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
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
