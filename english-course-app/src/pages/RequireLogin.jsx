import { Navigate, useLocation } from 'react-router-dom';
import { useStore } from '../context/StoreContext.jsx';

function RequireLogin({ children }) {
  const location = useLocation();
  const { currentUser } = useStore();

  if (!currentUser) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}

export default RequireLogin;
