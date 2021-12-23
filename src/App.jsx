import React, {useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch,  } from 'react-redux';

import CustomBackground from './components/customBc';
import CustomRoutes from './routes/routes';

import { setAccountsAction } from './redux/actions/setAccountsAction';

const App = () => {
  
  const dispatch = useDispatch()

  // load localstore when the app it's beginning
  useEffect(() => {
    const ac = localStorage.getItem("ac")
    // localStorage.clear() 
    if (ac) {
      dispatch(setAccountsAction(JSON.parse(ac)))
    }
  }, [])

  return (
    <BrowserRouter>
      <CustomBackground />
      <CustomRoutes /> 
    </BrowserRouter>
  );
}

export default App;
