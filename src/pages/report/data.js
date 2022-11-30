export const ZonaSelect = [
    { value: "Urbana", label: "Urbana" },
    { value: "Rural", label: "Rural" }
]

export const tableOrigin = {
    titles: [
        "Ocorrência",
        "Local",
        "Período",
        "Atendidas",
        "Não Atendidas",
        "Total",
        "Zona",
    ],
    oc: {
        oc1: ["Incêndio", "Bairro Santa Luzia", "MARÇO", 10, 0, 10, "Urbana"],
        oc2: ["Incêndio", "Bairro Jesus Misericordioso", "MARÇO", 15, 1, 16, "Urbana", ],
        oc3: ["Deslizamento de Terra", "Bairro Jesus Misericordioso", "ABRIL", 3, 1, 4, "Urbana",],
        oc4: ["Acidente Químico", "Bairro Novo Horizonte", "MARÇO", 2, 0, 2, "Urbana", ],
        oc5: ["Alagamento", "Bairro Santa Luzia", "FEVEREIRO", 5, 0, 5, "urbana"],
        oc6: ["Outros", "Bairro Cidade Nova", "JANEIRO", 20, 2, 22, "rural"],
    },
};

export const filterOrigin = {
    zona: "",
    bairro: "",
    periodo: "",
    tipoOcorrencia: "",
}

export const typeSelect = [
    { value: "Incêndio", label: "Incêndio" },
    { value: "Deslizamento de Terra", label: "Deslizamento de Terra" },
    { value: "Acidente Químico", label: "Acidente Químico" },
    { value: "Alagamento", label: "Alagamento" },
    { value: "Outros", label: "Outros" }
]

export const bairroSelect = [
    { value: "Bairro Santa Luzia", label: "Bairro Santa Luzia" },
    { value: "Bairro Jesus Misericordioso", label: "Bairro Jesus Misericordioso" },
    { value: "Bairro Novo Horizonte", label: "Bairro Novo Horizonte" },
    { value: "Bairro Cidade Nova", label: "Bairro Cidade Nova" }
]

export const PeriodoSelect = [
    { value: "JANEIRO", label: "JANEIRO" },
    { value: "FEVEREIRO", label: "FEVEREIRO" },
    { value: "MARÇO", label: "MARÇO" },
    { value: "ABRIL", label: "ABRIL" },
    { value: "MAIO", label: "MAIO" },
    { value: "JUNHO", label: "JUNHO" },
    { value: "JULHO", label: "JULHO" },
    { value: "AGOSTO", label: "AGOSTO" },
    { value: "SETEMBRO", label: "SETEMBRO" },
    { value: "OUTROBRO", label: "OUTROBRO" },
    { value: "NOVEMBRO", label: "NOVEMBRO" },
    { value: "DEZEMBRO", label: "DEZEMBRO" },
];