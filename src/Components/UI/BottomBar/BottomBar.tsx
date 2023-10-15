import { Link } from "react-router-dom"
import { MIcon } from "../MIcon/MIcon"

export const BottomBar: React.FC = () => {
	return (
		<div className="btm-nav">
			<Link to="/" className="flex items-center hover:bg-blue-500">
				<MIcon icon={'home'} />
				<span className="btm-nav-label">
					Home
				</span>
			</Link>

			<Link to="/search" className="flex items-center hover:bg-blue-500">
				<MIcon icon={'search'} />
				<span className="btm-nav-label">
					Search
				</span>
			</Link>


			<Link to="/library" className="flex items-center hover:bg-blue-500">
				<MIcon icon={'video_library'} />
				<span className="btm-nav-label">
					Library
				</span>
			</Link>

			<Link to="/library" className="flex items-center hover:bg-blue-500">
				<MIcon icon={'dns'} />
				<span className="btm-nav-label">
					Server
				</span>
			</Link>

		</div>
	)
}