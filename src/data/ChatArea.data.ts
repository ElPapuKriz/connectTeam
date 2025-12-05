interface ChatArea {
    emisor:string,
    msg:string,
    hora:string,
}

export const CHAT_AREA:ChatArea[] = [
    {
        emisor: 'Supervisor',
        msg: 'Buenos días equipo, ¿cómo va la próduccion de hoy?',
        hora: '8:30 AM',
    },
    {
        emisor: 'Yo',
        msg: 'Todo en orden, estamos al 60% de la meta diaria',
        hora: '8:35 AM',
    },
    {
        emisor: 'Supervisor',
        msg: 'Excelente, mantenga el ritmo',
        hora: '8:36 AM',
    },
    {
        emisor: 'Supervisor',
        msg: 'Necesitamos más material para la línea 2',
        hora: '9:15 AM',
    },
]