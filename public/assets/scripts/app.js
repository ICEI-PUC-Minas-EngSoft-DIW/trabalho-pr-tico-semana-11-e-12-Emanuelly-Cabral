// Dados dos cartões
const cartoes = [
    {
        id: 1,
        nome: "Cartão com Chip",
        descricao: "Cartões com tecnologia Dual interface ou contato",
        imagem: "assets/img/credito.jpg",
        destaque: true,
        tipo: "Cartão de Crédito/Débito",
        material: "Plástico PVC, chip, antena e overlay",
        tecnologia: "Chip EMV, de acordo com a neccessidade de processamento, memória e banedeira de pagamento. Para cartões Dual interface, é utilizada uma antena de cobre.", 
        uso: "Pagamentos mais seguros e rápidos. Cartões com modalidade contato apenas funcionam ao serem inseridos na maquininha, já os cartões dual interface possibilitam que a compra seja feita por contato ou por aproximação de até 10cm. Apesar do que muitos pensam, a compra por aproximação é considerada mais segura, pois ao evitar que o cartão seja inserido na maquininha, diminui risco de clonagem dos dados",
        fabricacao: "20 dias úteis",

        // ENTIDADE SECUNDÁRIA - Fotos associadas
        informacoes_adicionais: [
            {
                id: 1,
                nome: "Chip",
                imagem: "assets/img/chip.jpg",
                descricao: "Os chips possuem áreas divididas e cada uma delas é responsavel por um tipo de funcionalidade. Os dados do usuário são criptografados e a cada utilização do cartão, está criptografia muda automaticamente."
            },
            {
                id: 2,
                nome: "Inlay (antena)", 
                imagem: "assets/img/inlay.png",
                descricao: "A antena é feita normalmente com cobre e apenas é ativada após a carga elétrica emitida pelo chip. Para colocar ela em um cartão é necessário 'fazer um sanduíche'. Em aguns cartões é possível ver o corte ao meio."
            },
            {
                id: 3,
                nome: "Dual",
                imagem: "assets/img/dual.png",
                descricao: "Cartões Dual Interface sempre apresentam o desenho de wifi próximo ao chip"
            }
        ]
    },
    {
        id: 2,
        nome: "Cartão Tarjado",
        descricao: "Cartão tradicional com tarja magnética",
        imagem: "assets/img/tarjado.jpg", 
        destaque: true,
        tipo: "Cartão Magnético",
        material: "Plástico PVC com tarja e overlay",
        tecnologia: "Tarja magnética. A tarja foi o primeiro passo dado para a chegada dos cartões atuais. Os dados do usuário são armazenados através de micro ímãs que possuem polaridades positiva ou negativa conforme as informações do usuário",
        uso: "Leitura em maquininhas. Por conta dos micros ímãs, é uma modalidade menos segura, pois é mais fácil de roubar informações e também de modificar os dados informados, já que basta apenas mudar a polaridade dos ímas conforme as novas informações.",
        fabricacao: "15-20 dias úteis",

        // ENTIDADE SECUNDÁRIA- Fotos associadas
        informacoes_adicionais: [
            {
                id: 1,
                nome: "Tarja",
                imagem: "assets/img/tarja.jpg",
                descricao: "Apesar de não ser visível, a tarja possui três trilhas (linhas) com vários quadradinhos polarizados com as informações."
            },
            {
                id: 2,
                nome: "Cristal",
                imagem: "assets/img/overlay.png",
                descricao: "Todos os cartões possuem uma camada de orverlay, é nela que a tarja magnética está colada."
            },
            {
                id: 3,
                nome: "Primeiro",
                imagem: "assets/img/primeiro.jpg",
                descricao: "Este foi um dos primeiros cartões. Através deles a tecnologia evoluiu até chegar aos cartões tarjados."
            }
        ]
    },
    {
        id: 3,
        nome: "Cartão de Transporte",
        descricao: "Para usar no ônibus e metrô",
        imagem: "assets/img/transporte.jpg",
        destaque: true,
        tipo: "Cartão de Transporte", 
        material: "PVC resistente, micro chip e antena",
        tecnologia: "RFID",
        uso: "Bilhetagem eletrônica",
        fabricacao: "15-20 dias úteis", 

        // ENTIDADE SECUNDÁRIA- Fotos associadas
        informacoes_adicionais: [
            {
                id: 1,
                nome: "Micro chip",
                imagem: "assets/img/chip.jpg",
                descricao: "Apenasar de não ser visível, estes cartões possuem micro chips com funcionalidades reduzidas."
            },
            {
                id: 2,
                nome: "Inlay",
                imagem: "assets/img/inlay.png", 
                descricao: "Assim como cartões dual interface, estes cartões também possuem antenas, no entanto, a aréa para pagamento por aproximação é menor, forçando um contato mais direto com a maquininha."
            }
        ]
    },
    {
        id: 4,
        nome: "EMV",
        descricao: "Diretrizes e padronização.",
        imagem: "assets/img/emv.jpg",
        destaque: true,
        tipo: "Padrão estabelecido para produção e utilização de cartões",
        material: "A normas foram escritas pelas 3 primeiras bandeiras europeias a padronizarem o processo: Visa, Mastercard e Europay. Atualmente o padrão EMV tornou-se também uma empresa responsável pelo gerenciamento dos processos, no qual outras bandeiras também fazem parte. Apesar de abranger diversas bandeiras e instituições financeiras, o nome EMV foi mantido em homenagem a Europay, Mastercard e Visa",
        tecnologia: "Todo o processo de fabricação precisa ser autorizado e validado pelas bandeiras utilizadas.",
        uso: "Pagamentos, identificação, padronização de cartões, proteção de dados e danos financeiros.", 
        fabricacao: "Os Layouts (estética) dos cartões também precisam ser aprovados por cada bandeira antes da produção. Alguns materiais, como o de estampagem de hologramas, são comprados diretamente com as bandeiras.",

        // ENTIDADE SECUNDÁRIA- Fotos associadas
        informacoes_adicionais: [
            {
                id: 1,
                nome: "Bandeiras",
                imagem: "assets/img/mastercard.png",
                descricao: "As bandeiras acompanham e fiscalizam todo processo que envolve cartões, desde sua produção até a utilização do usuário."
            },
            {
                id: 2,
                nome: "Hologramas",
                imagem: "assets/img/holograma.png",
                descricao: "Os hologramas além de sofisticarem o cartão, também fazem parte dos paramentros de segurança de um cartão."
            },
            {
                id: 3,
                nome: "Numeração",
                imagem: "assets/img/numeração.png",
                descricao: "Os primeiros dígitos da numeração remetem a bandeira utilizada e o restante para a identificação dos cartões."
            }
        ]
    }
];

// carrossel
const carousel = document.getElementById("carouselContainer");
if (carousel) {
    for (let i = 0; i < cartoes.length; i++) {
        if (cartoes[i].destaque) {
            const div = document.createElement("div");
            if (i === 0) {
                div.className = "carousel-item active";
            } else {
                div.className = "carousel-item";
            }
            
            div.innerHTML = `
                <a href="detalhes.html?id=${cartoes[i].id}">
                    <img src="${cartoes[i].imagem}" class="d-block w-100" alt="${cartoes[i].nome}">
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
        col.className = "col-md-3 mb-4";
        
        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${cartoes[i].imagem}" class="card-img-top" alt="${cartoes[i].nome}">
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
    // Pegar o ID da URL
    const urlParams = new URLSearchParams(window.location.search);
    const idUrl = urlParams.get('id');
    
    // Procurar o cartão
    let cartaoEncontrado = null;
    for (let i = 0; i < cartoes.length; i++) {
        if (cartoes[i].id == idUrl) {
            cartaoEncontrado = cartoes[i];
            break;
        }
    }
    
    // Mostrar os detalhes
    if (cartaoEncontrado) {
        // SEÇÃO 1: Informações gerais do cartão
        let html = `
            <div class="row align-items-center mb-5">
                <div class="col-md-6">
                    <img src="${cartaoEncontrado.imagem}" class="img-fluid rounded" alt="${cartaoEncontrado.nome}">
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
            
            <!-- SEÇÃO 2: Informações adicionais (entidade secundária) -->
            <div class="row mt-5">
                <div class="col-12">
                    <h3 class="border-bottom pb-2">Informações Adicionais</h3>
                </div>
            </div>
            
            <div class="row mt-3">
        `;
        
        // Adicionar as informações adicionais
        for (let j = 0; j < cartaoEncontrado.informacoes_adicionais.length; j++) {
            const informacao = cartaoEncontrado.informacoes_adicionais[j];
            
            html += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="${informacao.imagem}" class="card-img-top" alt="${informacao.nome}" style="height: 200px; object-fit: cover;">
                        <div class="card-body text-center">
                            <h5 class="card-title">${informacao.nome}</h5>
                            <p class="card-text">${informacao.descricao}</p>
                        </div>
                    </div>
                </div>
            `;
        }
        
        html += `</div>`;
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
