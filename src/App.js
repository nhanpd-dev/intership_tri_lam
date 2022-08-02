/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { useGlobalStore } from './hooks/useGlobal';
import AppRoutes from './routes';

function App() {
    const { testSaga } = useGlobalStore();
    useEffect(() => {
        testSaga();
    }, []);
    return <AppRoutes />;
}

export default App;
