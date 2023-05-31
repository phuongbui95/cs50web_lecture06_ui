function Hello(props) {
    return (
        <h1>Hello, {props.name}!</h1>
    );
}

function App() {
    return (
        <div>
            <Hello name="Thor"/>
            <Hello name="Stark"/>
            <Hello name="Jean"/>
            <Hello name="PB"/>
        </div>
        
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));