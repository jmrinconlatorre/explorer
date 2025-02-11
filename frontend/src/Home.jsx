import { Outlet, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

export function Home() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const submitForm = data => {
        if (data.data.length == 66)
            navigate(`tx/${data.data}`)
        if (data.data.length == 42)
            navigate(`balance/${data.data}`)
        if (/^\d+\.?\d*$/.test(data.data))
            navigate(`bloque/${data.data}`)
    }
    return (
        <div>
            <h1>Explorador de la cadena de ethereum</h1>
            <form onSubmit={handleSubmit(submitForm)}>
                <input {...register('data')}></input>
                <button className="btn btn-primary">GO</button>
            </form>
            <Outlet />
        </div>
    )
}