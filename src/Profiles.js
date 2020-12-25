import Profile from "./Profile";
import { Link, Route } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

function Profiles() {
	const lorem = "lorem ipsum dolor sit amet";
	return (
		<div>
			<h3>사용자 목록</h3>
			<ul>
				<li>
					<Link to="/profiles/kku">kku</Link>
				</li>
				<li>
					<Link to="/profiles/homer">homer</Link>
				</li>
			</ul>

			<Route
				path="/profiles"
				render={() => <div>사용자를 선택해주세요 {lorem}</div>}
				exact
			/>
			<Route path="/profiles/:username" component={Profile} />

			<WithRouterSample />
		</div>
	);
}

export default Profiles;
