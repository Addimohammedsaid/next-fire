import Link from "../node_modules/next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<Link
				href={{
					pathname: "[username]",
					query: {
						username: "said",
					},
				}}
			>
				go to user said
			</Link>
		</div>
	);
}
