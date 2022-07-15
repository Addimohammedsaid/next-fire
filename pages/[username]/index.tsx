import { UserContext } from "../../lib/context";
import { useContext } from "react";

export default function Username() {
	const { user, username } = useContext(UserContext);
	return (
		<div>
			<h1>Hello, {username}</h1>
		</div>
	);
}
