import {useState, useEffect} from "react";

interface FetchState<T>{
    data: T | null;
    loading:boolean;
    error: string|null;
}

export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
            data:null,
            loading:true,
            error:null,
        });

    useEffect(() => {
        let isMounted = true;
        setState(prev => ({ ...prev, loading: true }));
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (isMounted) setState({ data, loading: false, error: null });
            })
            .catch(error => {
                if (isMounted) setState({ data: null, loading: false, error: error.message || "Error" });
            });
        return () => { isMounted = false; };
    }, [url]);

    return state;
}