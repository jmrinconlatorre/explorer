import { useParams } from "react-router-dom";
import { getBalance } from "./API";
import { useQuery } from "react-query";

export function Balance() {
    const params = useParams();
    const { isLoading, isError, data } = useQuery(['bloque', params.balance], getBalance);

    if (isLoading) {
        return <div>Cargando...</div>
    }
    if (isError) {
        return <div>Error</div>
    }

    return (
        <div>Balance:
            {JSON.stringify(data, null, 4)}
        </div>
    )
}