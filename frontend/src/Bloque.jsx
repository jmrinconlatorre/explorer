import { useParams } from "react-router-dom"
import { useQuery } from "react-query";

async function getBlock(bloque) {
    console.log(bloque)
    const response = await fetch(`http://localhost:3333/bloque/${bloque.queryKey[1]}`);
    const data = await response.json();
    return data
}

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
        <div>Bloque
            {params.bloque}
            {JSON.stringify(data, null, 4)}
        </div>
    )
}