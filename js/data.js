// Database of Forró Steps
// Exposed globally to allow file:// access without ES Modules/CORS issues.

window.ForroDB = [
    {
        "id": "basic_step_roots_frente",
        "name": "Base para frente (Roots)",
        "type": "Roots",
        "start_foot": "L",
        "end_foot": "L",
        "beats": 4
    },
    {
        "id": "basic_step_roots_tras",
        "name": "Base para trás (Roots)",
        "type": "Roots",
        "start_foot": "R",
        "end_foot": "R",
        "beats": 4
    },
    {
        "id": "basic_step_univ",
        "name": "Base (Universitário)",
        "type": "Universitário",
        "start_foot": "L",
        "end_foot": "R",
        "beats": 4
    },
    {
        "id": "abertura",
        "name": "Abertura",
        "type": "Universitário",
        "start_foot": "L",
        "end_foot": "R",
        "beats": 4
    },
    {
        "id": "giro_simples",
        "name": "Giro Simples",
        "type": "Universitário",
        "start_foot": "L",
        "end_foot": "L",
        "beats": 4
    },
    {
        "id": "caminhada",
        "name": "Caminhada",
        "type": "Roots",
        "start_foot": "L",
        "end_foot": "L",
        "beats": 4
    },
    {
        "id": "sacada",
        "name": "Sacada",
        "type": "Roots",
        "start_foot": "L",
        "end_foot": "R",
        "beats": 4
    },
    {
        "id": "trava",
        "name": "Trava",
        "type": "Roots",
        "start_foot": "L",
        "end_foot": "L",
        "beats": 2
    },
    {
        "id": "leque",
        "name": "Leque",
        "type": "Roots",
        "start_foot": "L",
        "end_foot": "R",
        "beats": 8
    },
    {
        "id": "facao",
        "name": "Facão",
        "type": ["Roots", "Universitário"],
        "start_foot": "R",
        "end_foot": "R",
        "beats": 4
    }
];
