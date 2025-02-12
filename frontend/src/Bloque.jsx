import { useParams, Link } from "react-router-dom"
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
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Lista de transacciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.transactions.map((item, index) =>
                            <tr key={index}>
                                <td>
                                    <Link to={`/tx/${item}`}>{item}</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <pre>
                {JSON.stringify(data, null, 4)}
            </pre>
        </div>
    )
}