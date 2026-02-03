// Database of Forró Steps
// Exposed globally to allow file:// access without ES Modules/CORS issues.

window.ForroDB = [
    {
        "id": "basic_step_roots_frente",
        "name": "Base para frente (Roots)",
        "type": "Roots",
        "initial_weight": "R",
        "final_weight": "L",
        "beats": 4
    },
    {
        "id": "basic_step_roots_tras",
        "name": "Base para trás (Roots)",
        "type": "Roots",
        "initial_weight": "L",
        "final_weight": "R",
        "beats": 4
    },
    {
        "id": "basic_step_univ",
        "name": "Base (Universitário)",
        "type": "Universitário",
        "initial_weight": "R",
        "final_weight": "L",
        "beats": 4
    },
    {
        "id": "abertura",
        "name": "Abertura",
        "type": "Universitário",
        "initial_weight": "R",
        "final_weight": "L",
        "beats": 4
    },
    {
        "id": "giro_simples",
        "name": "Giro Simples",
        "type": "Universitário",
        "initial_weight": "R",
        "final_weight": "R",
        "beats": 4
    },
    {
        "id": "caminhada",
        "name": "Caminhada",
        "type": "Roots",
        "initial_weight": "R",
        "final_weight": "L",
        "beats": 4
    },
    {
        "id": "sacada",
        "name": "Sacada",
        "type": "Roots",
        "initial_weight": "R",
        "final_weight": "L",
        "beats": 4
    },
    {
        "id": "trava",
        "name": "Trava",
        "type": "Roots",
        "initial_weight": "R",
        "final_weight": "L",
        "beats": 2
    },
    {
        "id": "leque",
        "name": "Leque",
        "type": "Roots",
        "initial_weight": "R",
        "final_weight": "L",
        "beats": 8
    },
    {
        "id": "facao",
        "name": "Facão",
        "type": ["Roots", "Universitário"],
        "initial_weight": "L",
        "final_weight": "R",
        "beats": 4
    }
];
