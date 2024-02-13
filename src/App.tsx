import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="bg-[url('/background_neon.png')] bg-cover bg-center min-h-screen w-full pb-[100px] px-[20px] sm:px-[60px] md:px-[80px] lg:px-[100px]">
			<div className="max-w-[1200px] w-full m-auto">
				<Navbar />
				<Main />
			</div>
		</div>
	);
}

export default App;
