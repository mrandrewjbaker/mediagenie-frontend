import { MIcon } from '../MIcon/MIcon';
import scss from './NavBar.module.scss';

export const NavBar: React.FC = () => {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<div className="drawer">
					<input id="my-drawer" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content">
						{/* Page content here */}
						<label htmlFor="my-drawer" className="btn bg-blue-600 drawer-button"><MIcon icon={'menu'} /></label>
					</div> 
					<div className="drawer-side">
						<label htmlFor="my-drawer" className="drawer-overlay"></label>
						<ul className="menu p-1 w-80 min-h-full bg-base-200 text-base-content">
							{/* Sidebar content here */}
							<li className="text-1 font-bold text-white rounded p-1">
								<a className="flex items-center bg-orange-600 p-3">
									<MIcon icon={'dashboard'} /> Dashboard
								</a>
							</li>
							<li className="text-1 font-bold text-white rounded p-1">
								<a className="flex items-center bg-blue-600	p-3">
									<MIcon icon={'search'} /> Search
								</a>
							</li>
							<li className="text-1 font-bold text-white rounded p-1">
								<a className="flex items-center bg-red-600 p-3">
									<MIcon icon={'settings'} /> Settings
								</a>
							</li>
							<li className="text-1 font-bold text-white rounded p-1">
								<a className="flex items-center bg-purple-600 p-3">
									<MIcon icon={'contact_support'} /> Get Help
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="flex-none gap-2">
				<div className="form-control">
					<input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
				</div>
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</label>
					<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li><a>Settings</a></li>
						<li><a>Logout</a></li>
					</ul>
				</div>
			</div>
		</div>
	);
};
