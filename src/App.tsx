import Layouts from "layouts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "routes";
import reduxStore from "services/reduxStore/reducers";


const App = () => {
  return (
    <BrowserRouter>
        <Provider store={reduxStore}>
          <Layouts>
            <AppRoutes />
          </Layouts>
        </Provider>
    </BrowserRouter>
  );
};

export default App;
