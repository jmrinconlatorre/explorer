import { useParams } from "react-router-dom";
import { getTx } from "./API";
import { useQuery } from "react-query";

export function Tx() {
    const params = useParams();
    const { isLoading, isError, data } = useQuery(['tx', params.tx], getTx);

    if (isLoading) {
        return <div>Cargando...</div>
    }
    if (isError) {
        return <div>Error</div>
    }

    return (
        <div>Tx:
            {JSON.stringify(data, null, 4)}
        </div>
    )
}