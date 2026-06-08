
const DADOS_ARTIGOS = {
    caes: {
        titulo: "Cuidados com Cães",
        alimentacao: "- Escolha rações Premium ou Super Premium adequadas ao porte e idade.\n- Alimentação natural deve ser balanceada e prescrita por veterinário.\n- Proibido: chocolate, cebola, alho, uva, abacate, café e xilitol.\n- Água fresca sempre disponível, trocada ao menos 2x ao dia.",
        vacinacao: "- Vacinas V8 ou V10: Protegem contra Cinomose, Parvovirose e outras doenças graves.\n- Antirrábica: Obrigatória, protege contra a Raiva (transmissível a humanos).\n- Filhotes: Precisam de 3 a 4 doses da múltipla e 1 da antirrábica; evite passeios até concluir.\n- Reforço Anual: Cães adultos devem repetir as vacinas V8/V10 e Raiva todos os anos.\n- Vermífugo e Antiparasitários: Controle de vermes, pulgas e carrapatos em dia.",
        higiene: "- Banhos: A cada 15-30 dias para pelo curto; quinzenais para pelo longo com secagem cuidadosa.\n- Escovação de pelos: 2 a 3 vezes por semana para remover pelos mortos e evitar nós.\n- Saúde bucal: Escove os dentes algumas vezes na semana para evitar tártaro e bactérias.\n- Ouvidos: Limpeza semanal com gaze e proteção com algodão durante o banho.\n- Unhas: Corte ou lixe regularmente para evitar dores na coluna e problemas na pisada.",
        alerta: "- Prostração(cansaço ou fraqueza): Cão apático, isolado e sem energia.\n- Falta de apetite: Recusa de ração ou mais de 24h sem comer.\n- Fezes e Urina: Diarreia, vômitos, urina escura ou dor ao urinar.\n- Respiração: Ofegante, tosses frequentes ou língua roxa.\n- Coceira e Feridas: Lamber as patas, falhas no pelo e vermelhidão."
    },
    gatos: {
        titulo: "Cuidados com Gatos",
        alimentacao: "- Ração de alta qualidade: Opte por Premium ou Super Premium com taurina.\n- Importância do sachê: Garante hidratação e previne problemas renais.\n- Incentivo à água: Use fontes de água corrente e potes de vidro ou cerâmica.\n- Proibido: Cebola, alho, chocolate, café, uvas, leite de vaca e lírios.",
        vacinacao: "- Vacina Múltipla (V4/V5): Protege contra doenças graves como Panleucopenia e FeLV.\n- Vacina Antirrábica: Obrigatória por lei, essencial para prevenir a Raiva.\n- Filhotes: 2 a 3 doses da múltipla e 1 da antirrábica a partir dos 2 meses.\n- Reforço Anual: Gatos adultos devem repetir as vacinas todos os anos.\n- Teste FIV/FeLV: Indispensável antes da V5 ou contato com outros gatos.",
        higiene: "- Banhos: Raramente necessários; a autolimpeza é eficiente. Restrinja a casos médicos ou muita sujeira.\n- Escovação: 2 a 3 vezes por semana para remover pelos mortos e evitar bolas de pelo no estômago.\n- Caixa de areia: Limpe os torrões 2x ao dia e lave tudo semanalmente. Use uma caixa por gato + uma extra.\n- Unhas e Arranhadores: Apare as pontas a cada 15 dias e espalhe arranhadores para desgaste natural.",
        alerta: "- Isolamento e Apatia: Gato escondido, recusa carinho ou está apático.\n- Ida frequente à caixa: Urinar várias vezes ou dor ao fazer xixi é emergência.\n- Falta de apetite absoluta: Gatos não podem ficar mais de 48h sem comer.\n- Falta de cuidado com pelo: Pelo opaco, sujo ou com nós indica dor ou mal-estar.\n- Postura de dor: Ficar encolhido, com olhos semicerrados e cabeça baixa."
    },
    aves: {
        titulo: "Cuidados com Aves",
        alimentacao: "- Ração Extrusada: Deve ser a base da dieta (70%), garantindo o equilíbrio exato de nutrientes.\n- Grupo F.V.L.: Ofereça diariamente frutas, verduras e legumes frescos e bem lavados.\n- Proibido: Abacate, chocolate, cafeína, açúcar, sal, sementes de maçã/pêra e processados.\n- Água Filtrada: Troque diariamente e use sempre água filtrada para evitar danos pelo cloro.",
        vacinacao: "- Consultas de Rotina: Check-up físico e exames de fezes anuais com veterinário especializado.\n- Perigo na Cozinha: Fumaça, teflon de panelas e produtos de limpeza são letais; mantenha longe.\n- Quarentena Rigorosa: Isole novas aves por 30 a 40 dias para evitar doenças silenciosas.\n- Banho de Sol: Essencial para Vitamina D3 e absorção de cálcio; use sol direto (sem vidro).",
        higiene: "- Limpeza da Gaiola: Remova as fezes diariamente e lave a estrutura completa com sabão neutro uma vez por semana.\n- Poleiros e Potes: Escove os poleiros e lave comedouros/bebedouros todos os dias para evitar doenças nas patas.\n- Banho: Ofereça uma banheira rasa com água limpa 2 a 3 vezes por semana; retire após o uso.\n- Enriquecimento: Forneça brinquedos de madeira e forrageio para evitar o estresse e o arrancamento de penas.",
        alerta: "- Ave fofada e no fundo: Penas arrepiadas, olhos semicerrados e ave no chão da gaiola indicam doença grave.\n- Mudança nas fezes: Diarreia, alteração de cor ou sementes inteiras não digeridas nas fezes.\n- Sinais respiratórios: Respiração ruidosa, cauda balançando muito ou secreção nas narinas e olhos.\n- Parar de vocalizar: Ave que fica muda e isolada de repente é sinal de alerta.\n- Falta de apetite: Recusa de alimento ou ave apenas \"fingindo\" comer (deixa a semente cair inteira)."
    },
    peixes: {
        titulo: "Cuidados com Peixes",
        alimentacao: "- Rações específicas: Use flocos para superfície, grãos para meio e pastilhas para o fundo.\n- Regra dos 2 minutos: Ofereça apenas a quantidade que os peixes comam totalmente nesse tempo.\n- Variedade: Intercale a ração base com alimentos vivos ou congelados para cor e imunidade.\n- Frequência: Alimente de 2 a 3 vezes ao dia em porções bem pequenas.",
        vacinacao: "- Ciclagem inicial: O aquário precisa de 20 a 30 dias para criar bactérias benéficas.\n- pH e Temperatura: Monitore e mantenha estáveis de acordo com a espécie.\n- Perigo do Cloro: Use sempre condicionador (anticloro) na água da torneira.\n- Quarentena: Deixe peixes novos em um aquário separado por 15 dias antes da integração.",
        higiene: "- Trocas Parciais de Água (TPA): Troque de 20% a 30% da água semanalmente ou a cada 15 dias.\n- Sifonagem do Fundo: Use um sifão para aspirar sujeira e restos de comida das pedras.\n- Manutenção do Filtro: Lave as mídias apenas com a água retirada do aquário; o cloro mata as bactérias.\n- Limpeza dos Vidros: Use esponja própria ou limpador magnético sem produtos químicos.",
        alerta: "- Pontinhos Brancos (Íctio): Parasita comum causado por quedas bruscas de temperatura.\n- Peixe Ofegante: Indica falta de oxigênio ou excesso de amônia na água.\n- Nado Irregular: Peixe de lado ou com dificuldade de equilíbrio indica problemas na bexiga natatória.\n- Nadadeiras Danificadas: Bordas roídas ou desfiadas sugerem infecção bacteriana ou agressão.\n- Isolamento: Peixe parado, escondido ou que recusa comida."
    }
};

const tabsWrapper = document.getElementById('tabs-wrapper');
const tabIndicator = document.getElementById('tab-indicator');
const tabButtons = document.querySelectorAll('.tab-btn');

function atualizarIndicador(button) {
    if (!tabIndicator || !button) return;
    
    tabIndicator.style.width = `${button.offsetWidth}px`;
    tabIndicator.style.transform = `translateX(${button.offsetLeft}px)`;
}

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabIndex = button.getAttribute('data-tab');

        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        atualizarIndicador(button);

        const translateValue = tabIndex * -50;
        tabsWrapper.style.transform = `translateX(${translateValue}%)`;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (tabIndex !== "0") {
            setTimeout(voltarParaGrid, 500);
        }
    });
});

function abrirDetalhes(animal) {
    const dados = DADOS_ARTIGOS[animal];
    if (!dados) return;

    document.getElementById('detalhe-titulo').innerText = dados.titulo;
    document.getElementById('info-alimentacao').innerText = dados.alimentacao;
    document.getElementById('info-vacinacao').innerText = dados.vacinacao;
    document.getElementById('info-higiene').innerText = dados.higiene;
    document.getElementById('info-alerta').innerText = dados.alerta;

    document.getElementById('artigos-grid').classList.add('hidden');
    document.getElementById('artigo-detalhes').classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function voltarParaGrid() {
    document.getElementById('artigos-grid').classList.remove('hidden');
    document.getElementById('artigo-detalhes').classList.add('hidden');
}

async function buscarPetsDoServidor() {

    const petsMock = [
        {
            nomeDono: "Guilherme",
            nomePet: "Tarja",
            local: "Centro, Torres",
            mensagem: "A gata mais gata",
            fotoUrl: "https://media.discordapp.net/attachments/705947684644716575/1512742531715174400/guiilhermehs-20260606-0001.jpg?ex=6a272d04&is=6a25db84&hm=da7013e324933b5dda2c165c1009128ecc590f03fd9cb8574a6d0de5010e63be&=&format=webp&width=1008&height=1008"
        },
        {
            nomeDono: "Guilherme",
            nomePet: "Rato",
            local: "Centro, Torres",
            mensagem: "Achei no quintal de casa",
            fotoUrl: "https://media.discordapp.net/attachments/705947684644716575/1513363878418059484/IMG-20251021-WA0010.jpg?ex=6a277571&is=6a2623f1&hm=65fa7a25d70f0e74abfa322666ef9aa665f96a357b2c5a043aa962b5febb0eb0&=&format=webp"
        }
    ];

    renderizarPets(petsMock);
}

function renderizarPets(pets) {
    const feed = document.getElementById('pets-feed');
    feed.innerHTML = ''; // Limpa antes de renderizar

    pets.forEach(pet => {
        const card = document.createElement('div');
        card.className = 'pet-card';
        card.innerHTML = `
            <img src="${pet.fotoUrl}" alt="${pet.nomePet}" class="pet-img" onclick="abrirLightbox('${pet.fotoUrl}')">
            <div class="pet-info">
                <h4>${pet.nomePet} (${pet.nomeDono})</h4>
                <p class="local">📍 ${pet.local}</p>
                <p>${pet.mensagem}</p>
            </div>
        `;
        feed.appendChild(card);
    });
}

function abrirModalEnvio() {
    const modal = document.getElementById('modal-envio');
    modal.classList.remove('closing');
    modal.style.display = 'flex';

    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function fecharModalEnvio() {
    const modal = document.getElementById('modal-envio');
    modal.classList.add('closing');
    modal.classList.remove('active');

    setTimeout(() => {
        if (modal.classList.contains('closing')) {
            modal.style.display = 'none';
            modal.classList.remove('closing');
        }
    }, 400);
}

document.getElementById('form-pet').addEventListener('submit', async function(e) {
    e.preventDefault();

    const dadosPet = {
        nomeDono: document.getElementById('nomeDono').value,
        nomePet: document.getElementById('nomePet').value,
        local: document.getElementById('local').value,
        mensagem: document.getElementById('mensagem').value,
        fotoFile: document.getElementById('foto').files[0]
    };

    await enviarPetParaServidor(dadosPet);
});

async function enviarPetParaServidor(dadosPet) {

    const reader = new FileReader();
    reader.onload = function() {
        fecharModalEnvio();
        document.getElementById('form-pet').reset();
    };
    
    if (dadosPet.fotoFile) {
        reader.readAsDataURL(dadosPet.fotoFile);
    } else {
        alert("Por favor, selecione uma foto.");
    }
}

function abrirLightbox(url) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = url;
    lb.style.display = 'flex';
}

function fecharLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-envio');
    const lightbox = document.getElementById('lightbox');
    if (event.target === modal) fecharModalEnvio();
    if (event.target === lightbox) fecharLightbox();
};

document.addEventListener('DOMContentLoaded', () => {
    buscarPetsDoServidor();

    const activeBtn = document.querySelector('.tab-btn.active');
    if (activeBtn) {
        atualizarIndicador(activeBtn);
    }
});
