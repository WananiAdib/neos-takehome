import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="bg-[url('/background_neon.png')] bg-cover bg-center min-h-screen w-full">
			<div className="w-[1200px] m-auto">
				<Navbar />
				<Main />
			</div>
		</div>
	);
}

export default App;
