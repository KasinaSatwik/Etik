   import { Route, Routes, Navigate } from "react-router-dom";
import Mainuser from "./components/Mainuser";
import Mainorganizer from "./components/Mainorganizer";
import Signupuser from "./components/Signupuser";
import Signuporganizer from "./components/Signuporganizer";
import Loginuser from "./components/Loginuser";
import Loginorganizer from "./components/Loginorganizer";
import Option from "./components/Option";
import Sale from "./components/Sale/Sale";
import Events from "./components/Events/Events";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/mainuser" exact element={<Mainuser />} />}
			{user && <Route path="/mainorganizer" exact element={<Mainorganizer />} />}
			<Route path="/signuporganizer" exact element={<Signuporganizer />} />
			<Route path="/loginorganizer" exact element={<Loginorganizer />} />
			<Route path="/signupuser" exact element={<Signupuser />} />
			<Route path="/loginuser" exact element={<Loginuser />} />
			<Route path="/option" exact element={<Option />} />
			<Route path="/" element={<Navigate replace to="/option" />} />
			<Route path="/events" exact element={<Events />} />
			<Route path="/sale/:eventid" exact element={<Sale />} />
			
		</Routes>
	);
}

export default App;
