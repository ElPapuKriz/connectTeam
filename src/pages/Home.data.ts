interface HomeCard {
    id: string,
    title: string,
    subtitle: string,
}

export const HOME_CARDS: HomeCard[] = [
    {
        id: 'comunicados_oficiales',
        title: 'Comunicados Oficiales',
        subtitle: 'Mensajes importantes enviados por la gerencia.'
    },
    {
        id: 'notas_instantaneas',
        title: 'Notas Instantáneas',
        subtitle: 'Envia mensajes rápidos a toda la empresa.'
    },
    {
        id: 'chat_area',
        title: 'Chat por Área',
        subtitle: 'Conversaciones organizadas por departamento.'
    },
    {
        id: 'tareas_recordatorios',
        title: 'Tareas y recordatorios',
        subtitle: 'Crea o recibe recordatorios de pendientes.'
    },
]