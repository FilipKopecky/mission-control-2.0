import React from 'react';
import Identity from "./components/Identity";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import Projects from "./components/Projects";

const queryClient = new QueryClient()


const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <h1>Novej mission control</h1>
                <Identity></Identity>
                <Projects/>
            </div>
            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
    );
}

export default App;
