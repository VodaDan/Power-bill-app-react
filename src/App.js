function App(props) {
    return (
        <div style={{color: "green"}}>
            <h1>Heey there {props.name}</h1>
            <button>{props.name}</button>
        </div>
    
    );
};

export default App;