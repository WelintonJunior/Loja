export function CadastrarProduto(item, quantidade, und) {
    fetch("http://127.0.0.1/BackEndLoja/methods.php", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            acao: "ADD_PRODUTO",
            item,
            quantidade,
            und
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Sucesso: ", data);
        })
        .catch(error => {
            console.error("Erro:", error);
        });
}

export function CadastrarFuncionario(nome, nascimento) {
    fetch("http://127.0.0.1/BackEndLoja/methods.php", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            acao: "ADD_FUNCIONARIO",
            nome,
            nascimento,
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Sucesso: ", data);
        })
        .catch(error => {
            console.error("Erro:", error);
        });
}

export function SearchProduto() {
    return fetch("http://127.0.0.1/BackEndLoja/methods.php", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            acao: "SEARCH_PRODUTO",
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error("Erro:", error);
            throw error;
        });
}
