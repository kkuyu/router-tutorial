const profileData = {
	kku: {
		name: "KKU",
		description: "I am studying to become a frontend developer",
	},
	homer: {
		name: "Homer Jay Simpson",
		description: "The Simpsons Character",
	},
};

function Profile({ match }) {
	const { username } = match.params;
	const profile = profileData[username];

	if (!profile) {
		return <div>존재하지 않는 사용자 입니다.</div>;
	}

	return (
		<div>
			<h3>
				{username} ({profile.name})
			</h3>
			<p>{profile.name}</p>
		</div>
	);
}

export default Profile;
