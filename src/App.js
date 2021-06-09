import './custom.css'

function App() {

  const styles = {
    outerdiv: {
      padding: "70px 0",
      backgroundColor: "blue"
    },
    innerdiv: {
      textAlign: "center",
      margin: "auto",
      width: "60%",
      border: "3px solid black",
      backgroundColor: "#73AD21",
      padding: "70px 0",
    }
  }

  return (
    // <div className="outerdiv">
    //   <div className="innerdiv">This is a green box</div>
    // </div>
    // <div style={{padding:'70px 0', backgroundColor: 'blue'}}>
    //   <div className="innerdiv">This is a green box</div>
    // </div>
    <div style={styles.outerdiv}>
    <div style={styles.innerdiv}>This is a green box</div>
  </div>
  );
}

export default App;
