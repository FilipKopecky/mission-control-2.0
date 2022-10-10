import React from 'react';
import Identity from "./components/Identity";
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import { getToken } from "@opendata-mvcr/assembly-line-shared";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import Ajax from "./utils/Ajax"
import {
    getWorkspacesUrl,
} from "./data/api";

import { API_URL } from "./app/variables";
import axios from "axios";

const queryClient = new QueryClient()

const Example:React.FC = () => {
    // const {isLoading, error, data} = useQuery(['repoData'], () =>
    //     fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
    //         res.json()
    //     )
    // )
    const {isLoading, error, data} = useQuery(['repoData'], () =>
        axios.get('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
            res.data
        )
    )

    if (isLoading) return <div>'Loading...'</div>

    if (error) return <div>'An error has occurred: ' + error.message</div>

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{' '}
            <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
        </div>
    )
}

const App = () => {
    console.log(getWorkspacesUrl())
    console.log({API_URL})
    console.log(getToken())
Ajax.get('workspaces').then(resp => console.log(resp));
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <h1>Novej mission control</h1>
                <Identity></Identity>
                <Example/>
            </div>

            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
    );
}

export default App;
