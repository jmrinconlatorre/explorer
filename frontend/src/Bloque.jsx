import { useParams } from "react-router-dom"
import { useQuery } from "react-query";
import { getBlock } from "./API";

export function Bloque() {
    const params = useParams();
    const { isLoading, isError, data } = useQuery(['bloque', params.bloque], getBlock);

    if (isLoading) {
        return <div>Cargando...</div>
    }
    if (isError) {
        return <div>Error</div>
    }

    return (
        <div>Bloque:
            {JSON.stringify(data, null, 4)}
        </div>
    )
}