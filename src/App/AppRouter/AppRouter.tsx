import { BrowserRouter } from 'react-router-dom';
import scss from './AppRouter.module.scss';

interface tiAppRouterProps {
	children?: React.ReactNode | React.ReactNode[];
}

export const AppRouter: React.FC<tiAppRouterProps> = ({ children }) => {
	return (
		<div className={scss.AppRouter}>
			<BrowserRouter>
				{
					children
				}	
			</BrowserRouter>
		</div>
	)
}