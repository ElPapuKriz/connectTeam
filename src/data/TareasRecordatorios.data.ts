interface TareasRecordatorios {
    titulo:string,
    msg:string,
    fecha:string,
    emisor:string
}

export const TAREAS_RECORDATORIOS:TareasRecordatorios[] = [
    {
        titulo:'Revisar reporte mensual',
        msg:'Analizar métricas de producción del mes',
        fecha:'25 Nov 2025',
        emisor:'Producción'
    },
    {
        titulo:'Actualizar inventario',
        msg:'Verificar stock de materiales',
        fecha:'23 Nov 2025',
        emisor:'Logística'
    },
    {
        titulo:'Enviar nómina',
        msg:'Procesar pagos quincenales',
        fecha:'22 Nov 2025',
        emisor:'Recursos Humanos'
    },
]