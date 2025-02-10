import { Outlet } from "react-router-dom";
import { useForm } from 'react-hook-form';

export function Home() {
    const { register, handleSubmit } = useForm();
    const submitForm = data => {
        console.log(data)
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