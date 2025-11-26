interface HomeCard {
    id: string,
    to:string,
    title: string,
    subtitle: string,
}

export const HOME_CARDS: HomeCard[] = [
    {
        id: 'comunicados_oficiales',
        to: '/comunicadosoficiales',
        title: 'Comunicados Oficiales',
        subtitle: 'Mensajes importantes enviados por la gerencia.'
    },
    {
        id: 'notas_instantaneas',
        to: '/notasinstantaneas',
        title: 'Notas Instantáneas',
        subtitle: 'Envia mensajes rápidos a toda la empresa.'
    },
    {
        id: 'chat_area',
        to: '/chatarea',
        title: 'Chat por Área',
        subtitle: 'Conversaciones organizadas por departamento.'
    },
    {
        id: 'tareas_recordatorios',
        to: '/tareasrecordatorios',
        title: 'Tareas y recordatorios',
        subtitle: 'Crea o recibe recordatorios de pendientes.'
    },
]