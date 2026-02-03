// Database of Forró Steps
// Exposed globally to allow file:// access without ES Modules/CORS issues.

window.ForroDB = [
    {
        "id": "basic_step_roots_frente",
        "name": "Base para frente (Roots)",
        "type": "Roots",
        "initial_weight": "R",
        "final_weight": "L",
        "beats": 4,
        "is_basic": true
    },
    {
        "id": "basic_step_roots_tras",
        "name": "Base para trás (Roots)",
        "type": "Roots",
        "initial_weight": "L",
        "final_weight": "R",
        "beats": 4,
        "is_basic": true
    },
    {
        "id": "basic_step_univ_frente",
        "name": "Base para frente (Universitário)",
        "type": "Universitário",
        "initial_weight": "R",
        "final_weight": "L",
        "beats": 4,
        "is_basic": true
    },
    {
        "id": "basic_step_univ_tras",
        "name": "Base para trás (Universitário)",
        "type": "Universitário",
        "initial_weight": "L",
        "final_weight": "R",
        "beats": 4,
        "is_basic": true
    },
    {
        "id": "estranho_um_direita",
        "name": "Estranho 1 - Direita",
        "type": "Universitário",
        "initial_weight": "R",
        "final_weight": "L",
        "beats": 4,
        "is_basic": true
    },
    {
        "id": "estranho_um_esquerda",
        "name": "Estranho 1 - Esquerda",
        "type": "Universitário",
        "initial_weight": "L",
        "final_weight": "R",
        "beats": 4,
        "is_basic": true
    },
    {
        "id": "giro_simples_conduzido",
        "name": "Giro Simples Conduzido",
        "type": "Universitário",
        "initial_weight": "R",
        "final_weight": "L",
        "beats": 4
    },
    {
        "id": "giro_simples_condutor",
        "name": "Giro Simples Condutor",
        "type": "Universitário",
        "initial_weight": "L",
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
        "id": "facao",
        "name": "Facão",
        "type": ["Roots", "Universitário"],
        "initial_weight": "L",
        "final_weight": "R",
        "beats": 4
    }
];
