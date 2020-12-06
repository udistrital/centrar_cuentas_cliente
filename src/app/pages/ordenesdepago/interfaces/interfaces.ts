export const CONFIGURACION_TABLAREGISTROS: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'NumeroOrden',
            title: {
                name: 'No. de Órden',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'NombreBeneficiario',
            title: {
                name: 'Nombre del Beneficiario',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'Mes',
            title: {
                name: 'Mes',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'Quincena',
            title: {
                name: 'Quincena',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'Estado',
            title: {
                name: 'Estado',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
    ],
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'ver',
                icon: 'fas fa-eye',
                class: 'p-2',
                title: 'Ver Resumen de Órden',
            }
        ],
    },
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};
export const DATOS_TABLAREGISTROS: any = [
    {
        NumeroOrden: '1',
        NombreBeneficiario: 'Dalia',
        Mes: 'Enero',
        Quincena: '1',
        Estado: 'Elaborado',
    },
    {
        NumeroOrden: '2',
        NombreBeneficiario: 'Marcela',
        Mes: 'Febrero',
        Quincena: '1',
        Estado: 'Elaborado',
    },
    {
        NumeroOrden: '3',
        NombreBeneficiario: 'Muñoz',
        Mes: 'Marzo',
        Quincena: '1',
        Estado: 'Elaborado',
    },
    {
        NumeroOrden: '4',
        NombreBeneficiario: 'Araque',
        Mes: 'Abril',
        Quincena: '2',
        Estado: 'Elaborado',
    },
    {
        NumeroOrden: '5',
        NombreBeneficiario: 'Cesar',
        Mes: 'Mayo',
        Quincena: '2',
        Estado: 'Elaborado',
    },
];
export const CONFIGURACION_HISTORIAL: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'concepto',
            title: {
                name: 'Concepto',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'valor',
            title: {
                name: 'Valor',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
    ],
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
};
export const DATOS_HISTORIAL: any = [
    {
        concepto: 'documento1',
        valor: 'doc1.pdf'
    },
    {
        concepto: 'documento2',
        valor: 'Listo'
    },
    {
        concepto: 'documento3',
        valor: 'Listo'
    },
];
export const CONFIGURACION_IMPUNTUACION: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'disponibilidad',
            title: {
                name: 'Disponibilidad',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'codigo',
            title: {
                name: 'Código',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'registro',
            title: {
                name: 'Registro',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'nombre',
            title: {
                name: 'Nombre',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valor',
            title: {
                name: 'Valor Aplicación (Gasto)',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
    ],
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'ver',
                icon: 'fas fa-eye',
                class: 'p-2',
                title: 'Ver Resumen de Órden',
            }
        ],
    },
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
};
export const DATOS_IMPUNTUACION: any = [
    {
        disponibilidad: '111',
        codigo: '111-222-333',
        registro: '123456',
        nombre: 'Eventos Academicos',
        valor: '$3.000.000,00'
    }
];
export const CONFIGURACION_MOVIMIENTO_CONTABLE: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'nombre',
            title: {
                name: 'Nombre Retención',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'descuento',
            title: {
                name: 'Descuento',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'base',
            title: {
                name: 'Base de Retención',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'codigo',
            title: {
                name: 'Código Contable',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valor',
            title: {
                name: 'Valor',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
    ],
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'ver',
                icon: 'fas fa-eye',
                class: 'p-2',
                title: 'Ver Resumen de Órden',
            }
        ],
    },
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
};
export const DATOS_MOVIMIENTO_CONTABLE: any = [
    {
        nombre: 'Valor Bruto',
        descuento: '',
        base: '',
        codigo: '111-222-333',
        valor: '$3.000.000,00'
    }
];