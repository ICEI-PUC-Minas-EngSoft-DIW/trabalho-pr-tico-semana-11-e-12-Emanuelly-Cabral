// carrega os dados do JSON após o DOM estar pronto
document.addEventListener("DOMContentLoaded", () => {
    // Dados locais - funciona sem JSON Server
    const cartoes = [
        {
            "id": 1,
            "nome": "Cartão com Chip",
            "descricao": "Cartões com tecnologia Dual interface ou contato",
            "imagem": "assets/img/credito.jpg",
            "destaque": true,
            "tipo": "Cartão de Crédito/Débito",
            "material": "Plástico PVC, chip, antena e overlay",
            "tecnologia": "Chip EMV, de acordo com a necessidade de processamento, memória e bandeira de pagamento.",
            "uso": "Pagamentos mais seguros e rápidos.",
            "fabricacao": "20 dias úteis",
            "informacoes_adicionais": [
                {
                    "id": 1,
                    "nome": "Chip",
                    "imagem": "assets/img/chip.jpg",
                    "descricao": "Os chips possuem áreas divididas..."
                }
            ]
        },
        {
            "id": 2,
            "nome": "Cartão Tarjado", 
            "descricao": "Cartão tradicional com tarja magnética",
            "imagem": "assets/img/tarjado.jpg",
            "destaque": true,
            "tipo": "Cartão Magnético",
            "material": "Plástico PVC com tarja e overlay",
            "tecnologia": "Tarja magnética.",
            "uso": "Leitura em maquininhas.",
            "fabricacao": "15-20 dias úteis",
            "informacoes_adicionais": []
        },
        {
            "id": 3,
            "nome": "Cartão de Transporte",
            "descricao": "Para usar no ônibus e metrô",
            "imagem": "assets/img/transporte.jpg", 
            "destaque": true,
            "tipo": "Cartão de Transporte",
            "material": "PVC resistente, micro chip e antena",
            "tecnologia": "RFID",
            "uso": "Bilhetagem eletrônica",
            "fabricacao": "15-20 dias úteis",
            "informacoes_adicionais": []
        }
    ];

    // carrossel
    const carousel = document.getElementById("carouselContainer");
    if (carousel) {
        let primeiroDestaque = true;
        
        for (let i = 0; i < cartoes.length; i++) {
            if (cartoes[i].destaque) {
                const div = document.createElement("div");
                if (primeiroDestaque) {
                    div.className = "carousel-item active";
                    primeiroDestaque = false;
                } else {
                    div.className = "carousel-item";
                }

                div.innerHTML = `
                    <a href="detalhes.html?id=${cartoes[i].id}">
                        <img src="${cartoes[i].imagem}" class="d-block w-100" alt="${cartoes[i].nome}" style="height: 400px; object-fit: cover;">
                        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                            <h5>${cartoes[i].nome}</h5>
                            <p>${cartoes[i].descricao}</p>
                        </div>
                    </a>
                `;

                carousel.appendChild(div);
            }
        }
    }

    // Cards
    const containerCards = document.getElementById("cardsContainer");
    if (containerCards) {
        for (let i = 0; i < cartoes.length; i++) {
            const col = document.createElement("div");
            col.className = "col-md-4 mb-4";

            col.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <img src="${cartoes[i].imagem}" class="card-img-top" alt="${cartoes[i].nome}" style="height: 200px; object-fit: cover;">
                    <div class="card-body text-center">
                        <h5 class="card-title">${cartoes[i].nome}</h5>
                        <p class="card-text">${cartoes[i].descricao}</p>
                        <a href="detalhes.html?id=${cartoes[i].id}" class="btn btn-primary">Ver detalhes</a>
                    </div>
                </div>
            `;

            containerCards.appendChild(col);
        }
    }

    // Página de detalhes
    const detalhesPage = document.getElementById("detalheContainer");
    if (detalhesPage) {
        const urlParams = new URLSearchParams(window.location.search);
        const idUrl = urlParams.get('id');
        
        let cartaoEncontrado = null;
        for (let i = 0; i < cartoes.length; i++) {
            if (cartoes[i].id == idUrl) {
                cartaoEncontrado = cartoes[i];
                break;
            }
        }
        
        if (cartaoEncontrado) {
            let html = `
                <div class="row align-items-center mb-5">
                    <div class="col-md-6">
                        <img src="${cartaoEncontrado.imagem}" class="img-fluid rounded" alt="${cartaoEncontrado.nome}" style="max-height: 400px; object-fit: cover;">
                    </div>
                    <div class="col-md-6">
                        <h2>${cartaoEncontrado.nome}</h2>
                        <p>${cartaoEncontrado.descricao}</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><b>Tipo:</b> ${cartaoEncontrado.tipo}</li>
                            <li class="list-group-item"><b>Material:</b> ${cartaoEncontrado.material}</li>
                            <li class="list-group-item"><b>Tecnologia:</b> ${cartaoEncontrado.tecnologia}</li>
                            <li class="list-group-item"><b>Uso:</b> ${cartaoEncontrado.uso}</li>
                            <li class="list-group-item"><b>Fabricação:</b> ${cartaoEncontrado.fabricacao}</li>
                        </ul>
                    </div>
                </div>
            `;
            
            detalhesPage.innerHTML = html;
        } else {
            detalhesPage.innerHTML = `
                <div class="alert alert-danger text-center">
                    <h4>Cartão não encontrado</h4>
                    <p>Volte para a página inicial e tente novamente.</p>
                    <a href="index.html" class="btn btn-primary">Voltar</a>
                </div>
            `;
        }
    }
});
