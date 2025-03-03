import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {Provider} from "react-redux";
import store, {persistor} from "./store/store.ts";
import {PersistGate} from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
)
