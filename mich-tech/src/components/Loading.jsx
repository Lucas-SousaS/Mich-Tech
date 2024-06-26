import estilo from '../styles/Loading.module.css'

function Loading() {
    return ( 
        <div className="w-full flex items-center justify-center">
            <div className={`${estilo.loading}`}>
            </div>
        </div>
     );
}

export default Loading;