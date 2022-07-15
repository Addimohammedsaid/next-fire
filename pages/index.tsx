import Link from "../node_modules/next/link";
import styles from "../styles/Home.module.css";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

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
			<Loader show={true}></Loader>
			<button onClick={() => toast.success("hello toast!")}>Toast Me</button>
		</div>
	);
}
