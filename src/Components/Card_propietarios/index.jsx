
const Card_propietarios = ({ propietario }) => {



    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg mx-auto">
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Detalles del Usuario</div>
            <p className="hidden"><strong>ID:</strong> {propietario.id}</p>
            <p><strong>Nombres:</strong> {propietario.nombres}</p>
            <p><strong>Correo:</strong> {propietario.correo}</p>
            <p><strong>Teléfono:</strong>  {propietario.telefono}</p>
            <p><strong>Dirección:</strong> {propietario.direccion}</p>
        </div>
    </div>
    );
};
export default Card_propietarios;