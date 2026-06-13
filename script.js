
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyEmzAYX9WYPG6KvbTXtV5mUnvbRQnrvJ2k-vI1KjcCvOcv_TPzzfan4Zygpfwnw-UaWg/exec";

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
    try {
        const response = await fetch(SCRIPT_URL);
        if (!response.ok) {
            console.error('Erro ao buscar pets: Status', response.status);
            alert('Não foi possível carregar o feed de pets. Tente novamente mais tarde.');
            return;
        }
        const pets = await response.json();
        renderizarPets(pets);
    } catch (error) {
        console.error('Erro:', error);
        alert('Não foi possível carregar o feed de pets. Tente novamente mais tarde.');
    }
}

function renderizarPets(pets) {
    const feed = document.getElementById('pets-feed');
    feed.innerHTML = ''; // Limpa antes de renderizar

    pets.forEach(pet => {
        const card = document.createElement('div');
        card.className = 'pet-card';

        const img = document.createElement('img');
        img.src = pet.foto;
        img.alt = pet.nome;
        img.className = 'pet-img';
        img.onclick = () => abrirLightbox(pet.foto);

        const info = document.createElement('div');
        info.className = 'pet-info';

        const h4 = document.createElement('h4');
        h4.textContent = pet.nome;

        const pLocal = document.createElement('p');
        pLocal.className = 'local';
        pLocal.textContent = `📍 ${pet.cidade}`;

        const pRelato = document.createElement('p');
        pRelato.textContent = pet.relato;

        info.appendChild(h4);
        info.appendChild(pLocal);
        info.appendChild(pRelato);

        card.appendChild(img);
        card.appendChild(info);

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
    const btnEnvio = document.querySelector('#form-pet button[type="submit"]');
    const textoOriginal = btnEnvio.innerText;

    try {
        const fotoFile = dadosPet.fotoFile;
        if (!fotoFile) {
            alert("Por favor, selecione uma foto.");
            return;
        }

        // 1. Validação de Tamanho Bruto
        if (fotoFile.size > 10 * 1024 * 1024) {
            alert("Esta imagem é muito pesada! Por favor, selecione uma foto com menos de 10MB.");
            return;
        }

        btnEnvio.disabled = true;
        btnEnvio.innerText = "Processando Imagem...";

        let blobParaProcessar = fotoFile;

        // 2. Conversão de HEIC/HEIF se necessário
        const fileName = fotoFile.name.toLowerCase();
        if (fileName.endsWith(".heic") || fileName.endsWith(".heif")) {
            try {
                const convertedBlob = await heic2any({
                    blob: fotoFile,
                    toType: "image/jpeg",
                    quality: 0.8
                });
                blobParaProcessar = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
            } catch (e) {
                console.error("Erro na conversão HEIC:", e);
            }
        }

        const fotoBase64 = await otimizarImagem(blobParaProcessar);

        btnEnvio.innerText = "Enviando...";

        const payload = {
            nome: `${dadosPet.nomePet} (${dadosPet.nomeDono})`,
            cidade: dadosPet.local,
            relato: dadosPet.mensagem,
            foto: fotoBase64
        };

        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(payload)
        });

        alert("Pet enviado com sucesso! Ele aparecerá no feed após a aprovação.");
        fecharModalEnvio();
        document.getElementById('form-pet').reset();

    } catch (error) {
        console.error('Erro ao enviar:', error);
        alert('Ocorreu um erro ao enviar os dados. Verifique sua conexão.');
    } finally {
        btnEnvio.disabled = false;
        btnEnvio.innerText = textoOriginal;
    }
}

function otimizarImagem(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                const MAX_WIDTH = 1200;
                let width = img.width;
                let height = img.height;

                if (width > MAX_WIDTH) {
                    height = Math.round((height * MAX_WIDTH) / width);
                    width = MAX_WIDTH;
                }

                canvas.width = width;
                canvas.height = height;

                // Pintar fundo de branco
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(0, 0, width, height);

                // Desenhar a imagem
                ctx.drawImage(img, 0, 0, width, height);

                // Exportar como JPEG 0.7
                const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
                resolve(dataUrl);
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
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
