import logo from "./logo.svg";
import "./App.css";
function App() {
    const NAME = "CipherSchools";

    return (
        <>
            <div>
                <h1
                    style={{
                        color: "red",
                        textAlign: "center",
                    }}
                >
                    Hello from {NAME}!
                </h1>
            </div>
            <div>
                <p>This is {NAME}</p>
            </div>
        </>
    );
}
export default App;
