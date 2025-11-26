
interface NotasRecibidas{
    id:number,
    msg:string,
    receptor:string,
    emisor:string,
    hora:string,
}


export const NOTAS_RECIBIDAS:NotasRecibidas[] = [
    {
    id: 1,
    msg: 'Recuerden que mañana es día de limpieza general',
    receptor: 'todos',
    emisor: 'Admin',
    hora: '10:30 AM'
    },
    {
    id: 2,
    msg: 'Revisar inventario antes de las 3pm',
    receptor: 'Logística',
    emisor: 'Jefe de logística',
    hora: '9:15 AM'
    },
    {
    id: 3,
    msg: 'Recuerden que mañana es día de limpieza general',
    receptor: 'Producción',
    emisor: 'Supervisor',
    hora: '8:00 AM'
    },
]

