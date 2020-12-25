import Profile from "./Profile";
import { NavLink, Route } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

function Profiles() {
	const lorem = "lorem ipsum dolor sit amet";
	return (
		<div>
			<h3>사용자 목록</h3>
			<ul>
				<li>
					<NavLink
						to="/profiles/kku"
						activeClassName="active"
						activeStyle={{ background: "#000", color: "yellow" }}
					>
						kku
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/profiles/homer"
						activeClassName="active"
						activeStyle={{ background: "#000", color: "yellow" }}
					>
						homer
					</NavLink>
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
