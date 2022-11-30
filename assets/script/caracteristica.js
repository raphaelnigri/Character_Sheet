const nomeCaracteristicaInput = document.getElementById('caracteristica__nome');
const fonteCaracteristicaInput = document.getElementById('caracteristica__fonte');
const descricaoCaracteristicaInput = document.getElementById('caracteristica__descricao');
const listaDeCaracteristicas = document.getElementById('lista__caracteristicas');
const addCaracteristicaBtn = document.getElementById('caracteristica--add');

addCaracteristicaBtn.addEventListener('click', () =>{
    if(nomeCaracteristicaInput.value != '' && fonteCaracteristicaInput.value != '' && descricaoCaracteristicaInput.value != ''){
        addCaracteristica(nomeCaracteristicaInput.value,fonteCaracteristicaInput.value,descricaoCaracteristicaInput.value);
    }
})

function addCaracteristica(nome, fonte, desc, data){
    let caracteristica = document.createElement('li');
    let nomeDaCaracteristica = document.createElement('h3');
    let fonteDaCaracteristica = document.createElement('p');
    let descDaCaracteristica = document.createElement('p');
    let infoCaracteristicaBtn = document.createElement('button');
    let deletarCaracteristicaBtn = document.createElement('button');

    listaDeCaracteristicas.appendChild(caracteristica);
    caracteristica.classList.add('li__caracteristica');
    if(data){
        caracteristica.setAttribute('data-fonte',`${data}`);
    }
    caracteristica.appendChild(nomeDaCaracteristica);
    nomeDaCaracteristica.innerHTML = `${nome}`;
    nomeDaCaracteristica.classList.add('nome__caracteristica');

    caracteristica.appendChild(fonteDaCaracteristica);
    fonteDaCaracteristica.innerHTML = `${fonte}`;
    fonteDaCaracteristica.classList.add('title--sub');
    fonteDaCaracteristica.classList.add('fonte__caracteristica');

    caracteristica.appendChild(descDaCaracteristica);
    descDaCaracteristica.innerHTML = `${desc}`;
    descDaCaracteristica.classList.add('desc__caracteristica');

    caracteristica.appendChild(infoCaracteristicaBtn);
    infoCaracteristicaBtn.classList.add('btn--inspecionar');
    infoCaracteristicaBtn.classList.add('btn--inspecionar--caracteristica');
    infoCaracteristicaBtn.addEventListener('click', ()=>{
        descDaCaracteristica.classList.toggle('hidden');
    })

    caracteristica.appendChild(deletarCaracteristicaBtn);
    deletarCaracteristicaBtn.classList.add('btn--remove');
    deletarCaracteristicaBtn.classList.add('btn--remove--caracteristica');
    deletarCaracteristicaBtn.addEventListener('click', ()=>{
        caracteristica.remove();
    })

    nomeCaracteristicaInput.value = '';
    fonteCaracteristicaInput.value = '';
    descricaoCaracteristicaInput.value= '';
}

//Caracteristicas de classe
const barbaroTabela = [
    function lvl1 (){
        addCaracteristica('Fúria', 'Bárbaro', "Entrar em fúria requer usar uma ação bônus. Enquanto estiver em fúria, você recebe os seguintes benefícios desde que não esteja vestindo uma armadura pesada:<br><br>• Você tem vantagem em testes de Força e testes de resistência de Força.<br>• Quando você desferir um ataque com arma corpo-a-corpo usando Força, você recebe um bônus nas jogadas de dano que aumenta à medida que você adquire níveis de bárbaro (+2 de dano inicialmente, +3 no 9º nível, +4 no 16º nível). <br>• Você possui resistência contra danos de concussão, cortante e perfurante.<br><br>Você não pode conjurar magias ou se concentrar nelas enquanto estiver em fúria. <br><br>Sua fúria dura 1 minuto e termina prematuramente quando  você cair inconsciente ou caso seu turno termine sem que você tenha atacado uma criatura hostil ou sofrido dano. No seu turno com uma ação bônus, você pode terminar a sua fúria.<br><br>Você recupera suas fúrias com um descanso longo.", 'barbaro');
        addCaracteristica('Defesa sem Armadura', 'Bárbaro', 'Equanto você não estiver usando armaduras, sua Classe de Armadura é igual a 10 + seu modificador de Destreza + seu modificador de Constituição. Esse benefício não é perdido ao utilizar escudos.', 'barbaro');
    },
    function lvl2 (){
        addCaracteristica('Ataque Descuidado', 'Bárbaro', 'A partir do 2º nível, quando você fizer o seu primeiro ataque no turno, você pode decidir atacar descuidadamente. Fazer isso lhe concede vantagem nas jogadas de ataque com armas corpo-a-corpo usando Força durante seu turno, no entanto, até o início do seu próximo turno todas as jogadas de ataque feitas contra você também possuem vantagem.', 'barbaro');
        addCaracteristica('Senso de Perigo', 'Bárbaro', 'No 2º nível, você possui vantagem em testes de resistência de Destreza contra efeitos que você é capaz de enxergar como armadilhas e magias, desde que você não esteja cego, surdo ou incapacitado.', 'barbaro')
    },
    function lvl3 (){
        addCaracteristica('Caminho Primordial', 'Bárbaro', 'No 3º nível, você escolhe um caminho que molda a natureza da sua raiva. Sua escolha concede a você características no 3º nível e novamente no 6º, 10º e 14º níveis.', 'barbaro');
    },
    function lvl4 (){
        addCaracteristica('Aumento de Habilidade (Bárbaro)', 'Bárbaro', 'Ao atingir o 4º nível dessa classe, e novamente no 8º, 12º, 16º e 19º nível, você pode aumentar um valor de habilidade a sua escolha em 2, ou você pode aumentar dois valores diferentes em 1. Você não pode atingir um valor de habilidade acima de 20 usando essa característica.', 'barbaro');
    },
    function lvl5 (){
        addCaracteristica('Ataque Extra', 'Bárbaro', 'A partir do 5º nível, você pode atacar duas vezes, ao invés de uma vez, sempre que utilizar a ação Ataque no seu turno.', 'barbaro');
        addCaracteristica('Movimento Rápido', 'Bárbaro', 'A partir do 5º nível, caso não esteja utilizando uma armadura pesada, seu deslocamento aumenta 3 metros (10feets)', 'barbaro');
    },
    function lvl6 (){
    },
    function lvl7 (){
        addCaracteristica('Instinto Selvagem', 'Bárbaro', 'A partir do 7º nível você recebe vantagem nas jogadas de iniciativa. Além disso, caso esteja surpreso e não estiver incapacitado, você pode agir normalmente no seu primeiro turno do combate desde que entre em fúria antes de realizar qualquer outra ação.', 'barbaro');
    },
    function lvl8 (){
    },
    function lvl9 (){
        addCaracteristica('Crítico Brutal', 'Bárbaro', 'A partir do 9º nível, você pode rolar um dado do dano de arma adicional quando realizar um acerto crítico com uma arma corpo-a-corpo. No nível 13º, isso aumenta para dois dados adicionais e no nível 17º para três dados adicionais.', 'barbaro');
    },
    function lvl10 (){
    },
    function lvl11 (){
        addCaracteristica('Fúria Implacável', 'Bárbaro', 'A partir do 11º nível, se você cair para 0 pontos de vida enquanto estiver em fúria e não morrer instantaneamente, você pode realizar um teste de resistência de Constituição CD 10. Se for bem-sucedido, você cai para 1 pontos de vida ao invés de 0. Cada utilização dessa característica aumenta a CD em 5 até você realizar um descanso curto ou longo.', 'barbaro');
    },
    function lvl12 (){
    },
    function lvl13 (){
    },
    function lvl14 (){
    },
    function lvl15 (){
        addCaracteristica('Fúria Persistente', 'Bárbaro', 'A partir do 15º nível, sua fúria só acaba prematuramente se você cair inconsciente ou se você escolher terminá-la.', 'barbaro');
    },
    function lvl16 (){
    },
    function lvl17 (){
    },
    function lvl18 (){
        addCaracteristica('Força Indomável', 'Bárbaro', 'A partir do 18º nível, caso o resultado total de um teste de Força que você realizar seja menor que o seu valor de Força, você pode usar esse valor ao invés do resultado. ', 'barbaro');
    },
    function lvl19 (){
    },
    function lvl20 (){
        addCaracteristica('Campeão Primitivo', 'Bárbaro', 'No 20º nível, seus valores de Força e Constituição aumentam em 4 pontos e agora podem chegar até o valor máximo de 24.', 'barbaro');
    }
]

const bardoTabela = [
    function lvl1 (){
        addCaracteristica('Inspiração de Bardo', 'Bardo', 'Você pode inspirar outras pessoas através de palavras emocionantes ou música. Para fazer isso, você usa uma ação bônus e escolhe uma criatura diferente de você dentro de 18m (60 feet) que possa ouvi-lo. Essa criatura ganha um dado de inspiração bárdica, que é um d6.<br><br>Uma vez, nos próximos 10 minutos, a criatura pode rolar o dado e adicionar o valor obtido a um teste de habilidade, jogada de ataque ou teste de resistência. É possivel esperar até depois de obter o resultado do d20, mas antes do DM dizer se o teste foi bem-sucedido ou não, para escolher usar o dado de Inspiração.<br><br> Uma criatura pode ter no máximo um dado Inspiração de Bardo e uma vez que ele for lançado, é perdido. .<br><br>Você pode usar este recurso um número de vezes igual ao seu modificador de Carisma (no mínimo uma vez). Você recupera seus usos ao  realizar um descanso longo.<br><br>O dado se torna um d8 no 5º nível, um d10 no 10º nível e um d12 no 15º nível.', 'bardo');
        addCaracteristica('Conjurador de Ritual (Bardo)', 'Bardo', 'Você pode conjurar qualquer magia de bardo que conheça marcada como Ritual', 'bardo');
        addCaracteristica('Foco de Conjuração (Bardo)', 'Bardo', 'Você pode usar um instrumento musical como foco de conjuração das suas magias de bardo.', 'bardo');
    },
    function lvl2 (){
        addCaracteristica('Pau para toda obra', 'Bardo', 'A partir do 2º nível, você pode adicionar metade do seu bônus de proficiencia, arredondado para baixo, em qualquer teste de habilidade que você não seja proficiente.', 'bardo');
        addCaracteristica('Musica do descanso', 'Bardo', 'A partir do 2º nível, durante um descanso curto, você e qualquer aliado que tenha escutado sua performance e gasto um ou mais Dados-de-Vida durante o descanso, recuperam mais 1d6 pontos de vida. Esse valor aumenta para 1d8 no 9º nível, 1d10 no 13º nível e 1d12 no 17º nível', 'bardo');
    },
    function lvl3 (){
        addCaracteristica('Colégios Bardicos', 'Bardo', 'No 3º nível, você se especializa nas técnicas de um colégio bardico, à sua escolha. Isso concede a você características no 3º nível e novamente no 6º e 14º níveis.', 'bardo');
        addCaracteristica('Especialização (Bardo)', 'Bardo', 'No 3º nível, escolha duas pericias que você seja proficiente. Seu bônus de proficiência para essas pericias é dobrado em qualquer teste de habilidade. No 10º nível, você escolhe mais duas pericias para se especializar.', 'bardo');
    },
    function lvl4 (){
        addCaracteristica('Aumento de Habilidade (Bardo)', 'Bardo', 'Ao atingir o 4º nível dessa classe, e novamente no 8º, 12º, 16º e 19º nível, você pode aumentar um valor de habilidade a sua escolha em 2, ou você pode aumentar dois valores diferentes em 1. Você não pode atingir um valor de habilidade acima de 20 usando essa característica.', 'bardo');
    },
    function lvl5 (){
        addCaracteristica('Fonte da Inspiração', 'Bardo', 'A partir do 5º nível, você recupera seus usos de Inspiração de Bardo ao realizar um descanso curto ou longo.', 'bardo');
    },
    function lvl6 (){
        addCaracteristica('Contra-feitiço', 'Bardo', 'A partir do 6º nível, usando uma ação, você pode começar uma atuação que dura até o fim do seu próximo turno. Durante esse tempo, você e quaisquer aliados a até 9 metros (30feet) de você possuem vantagem em testes de resistência contra as condições Amedrontado e Enfeitiçado. O aliado deve ser capaz de ouvi-lo para receber esse benefício. A atuação termina prematuramente se você for incapacitado, silenciado ou se você desejar faze-lo (não requer ação).', 'bardo');
    },
    function lvl7 (){
    },
    function lvl8 (){
    },
    function lvl9 (){
    },
    function lvl10 (){
        addCaracteristica('Segredos Mágicos', 'Bardo', 'No 10º nível, você escolhe duas magias de qualquer classe, desde que seja de um nível que você possa conjurar, ou um truque. Você aprende as magias escolhidas e elas contam como magias de bardo para você (usam seu modificador de Carisma). Você aprende duas novas magias no 14º nível e no 18º nível.', 'bardo');
    },
    function lvl11 (){
    },
    function lvl12 (){
    },
    function lvl13 (){
    },
    function lvl14 (){
    },
    function lvl15 (){
    },
    function lvl16 (){
    },
    function lvl17 (){
    },
    function lvl18 (){
    },
    function lvl19 (){
    },
    function lvl20 (){
        addCaracteristica('Inspiração Superior', 'Bardo', 'No 20º nível, se você rolar iniciativa e não tiver nenhum uso de Inspiração de Bardo, você recupera um uso.', 'Bardo');
    }
]

const clerigoTabela = [
    function lvl1 (){
        addCaracteristica('Domínio Divino', 'Clérigo', 'Você escolhe um domínio relacionado a sua divindade. Essa escolha concede características no 1º nível, magias de domínio e outras formas de usar seu Canalizar Divindade quando você o adiquirir no 2º nível, bem como outros benefícios no 6º, 8º e 17º nível ', 'clerigo');
        addCaracteristica('Conjurador de Ritual (Clérigo)', 'Clérigo', 'Você pode conjurar qualquer magia de clérigo que conheça marcada como Ritual', 'clerigo');
        addCaracteristica('Foco de Conjuração (Clérigo)', 'Clérigo', 'Você pode usar um símbolo sagrado como foco de conjuração das suas magias de clérigo.', 'clerigo');
    },
    function lvl2 (){
        addCaracteristica('Canalizar Divindade', 'Clérigo', 'No 2º nível, você é capaz de canalizar a energia da sua divindade.Você começa com dois efeitos: Expulsar Mortos-Vivos e um efeito determinado pelo seu domínio. Você recupera os usos dessa característica ao realizar um descanso curto ou longo.<br><br> A CD para efeitos dessa característica é a mesma utilizada nas suas magias de clérigo.', 'clerigo');
        addCaracteristica('Expulsar Mortos Vivos', 'Clérigo', 'Com uma ação, cada morto-vivo que puder ver ou ouvir você em um raio de 9m (30feet), devem fazer um teste de resistência de Sabedoria, se falhar a criatura é expulsa por 1 minuto ou até sofrer algum dano.<br><br> Uma criatura expulsada utiliza seus turnos tentando se mover para o mais longe possível de você, ela não pode usar reações e não consegue se aproximar voluntariamente para um espaço dentro do raio de emanação. A criatura só consegue utilizar a ação Disparada ou tentar escapar de um efeito que evite seu deslocamento, se não houver para onde se mover, a criatura usa a ação Esquiva.', 'clerigo');
    },
    function lvl3 (){
    },
    function lvl4 (){
        addCaracteristica('Aumento de Habilidade (Clérigo)', 'Clérigo', 'Ao atingir o 4º nível dessa classe, e novamente no 8º, 12º, 16º e 19º nível, você pode aumentar um valor de habilidade a sua escolha em 2, ou você pode aumentar dois valores diferentes em 1. Você não pode atingir um valor de habilidade acima de 20 usando essa característica.', 'clerigo');
    },
    function lvl5 (){
        addCaracteristica('Destruir Mortos Vivos', 'Clérigo', 'A partir do 5º nível, quando um morto-vivo falha no teste do seu Expulsar Mortos Vivos, a criatura é destruida desde que possua CR igual ou menor a 1/2 no 5º nível, CR1 no 8º nível, CR2 no 11º nível, CR3 no 14º nível, e CR4 no 17º nível.', 'clerigo');
    },
    function lvl6 (){
    },
    function lvl7 (){
    },
    function lvl8 (){
    },
    function lvl9 (){
    },
    function lvl10 (){
        addCaracteristica('Intervenção Divina', 'Clérigo', 'desc', 'clerigo');
    },
    function lvl11 (){
    },
    function lvl12 (){
    },
    function lvl13 (){
    },
    function lvl14 (){
    },
    function lvl15 (){
    },
    function lvl16 (){
    },
    function lvl17 (){
    },
    function lvl18 (){
    },
    function lvl19 (){
    },
    function lvl20 (){
    }
]

const druidaTabela = [
    function lvl1 (){
        addCaracteristica('Druídico', 'Druida', 'Você conhece o idioma secreto dos druidas, você pode falar ou deixar mensagens escondidas nessa linguagem. Você e aqueles que conhecem o idioma automaticamente percebem a mensagem, outros precisam passar num teste de Sabedoria(Percepção) CD15, mas não conseguem decifrar o conteúdo sem usar magias.', 'druida');
        addCaracteristica('Conjurador de Ritual (Druida)', 'Druida', 'Você pode conjurar qualquer magia de druida que conheça marcada como Ritual', 'druida');
        addCaracteristica('Foco de Conjuração (Druida)', 'Druida', 'Você pode usar um foco de conjuração druídico para suas magias de druida.', 'druida');
    },
    function lvl2 (){
        addCaracteristica('Forma Selvagem', 'Druida', 'A partir do 2º nível, Você pode usar uma ação para assumir a forma de uma besta que você já tenha visto antes. Você recupera os usos dessa habilidade com um descanso curto ou longo.<br><br>No 2º nível você pode se transformar em uma besta de CR1/4 ou menor que não possua deslocamento de vôo ou aquático.No 4º nível, o CR máximo aumenta para 1/2 e a besta pode ter deslocamento aquático, no 8º nível, o CR máximo aumenta para 1 e a besta pode ter deslocamento de vôo.<br><br>Você é capaz de assumir essa forma por uma quantidade de horas igual a metade do seu nível de druida, arredondado para baixo, após esse tempo, você retorna a sua forma original a menos que gaste mais um uso dessa característica.<br><br>Você volta a sua forma normal se desejar usar uma ação bonus para isso, se ficar inconsciente, cair a 0 pontos de vida ou morrer.<br><br>Enquanto estiver transformado:<br>• Suas estatísticas de jogo são substituídas pelas da besta, exceto sua tendência, personalidade e valores de Inteligência, Sabedoria e Carisma. Você também mantem suas proficiências e recebe adicionalmente as da criatura. Você não pode usar as ações lendárias ou de covil da criatura.<br>• Você assume os pontos de vida e Dados de Vida da criatura, ao se transformar de volta você retorna a quantidade de pontos de vida que tinha antes de se transformar. Caso você sofra dano que diminua seus pontos de vida para abaixo de 0, o resulta excedente é subtraido dos pontos de vida da sua forma original. Você só cai inconsciente se esse dano reduzir os pontos de vida da sua forma original a 0.<br>• Você não consegue conjurar magias e sua capacidade de  fala ou realizar ações que necessitem de membros são limitadas as capacidades da forma assumida.Transformar não interrompe a sua concentração em magias já conjuradas nem impede que você execute ações que façam parte de tal magia.<br>• Você ainda mantem os benefícios de todas as características de classe, raça ou outras fontes e pode usa-los desde que sua nova forma seja fisicamente capaz.No entanto, você não é capaz de usar sentidos especiais como Visão no Escuro, a não ser que a nova forma também o possua.<br>• Você escolhe se o seu equipamento cai no chão, se funde a nova forma ou é usado por ela.O GM decide se é possível que a criatura faça uso de tal equipamento baseado na forma e tamanho da besta.Seu equipamento não é capaz de se modificar para se ajustar a criatura.', 'druida');
        addCaracteristica('Círculo Druídico', 'Druida', 'No 2º nível, você escolhe um circulo de druidas, sua escolha concede a você características no 2º nível e novamente no 6º, 10º e 14º níveis.', 'druida');
    },
    function lvl3 (){
    },
    function lvl4 (){
        addCaracteristica('Aumento de Habilidade (Druida)', 'Druida', 'Ao atingir o 4º nível dessa classe, e novamente no 8º, 12º, 16º e 19º nível, você pode aumentar um valor de habilidade a sua escolha em 2, ou você pode aumentar dois valores diferentes em 1. Você não pode atingir um valor de habilidade acima de 20 usando essa característica.', 'druida');
    },
    function lvl5 (){
    },
    function lvl6 (){
    },
    function lvl7 (){
    },
    function lvl8 (){
    },
    function lvl9 (){
    },
    function lvl10 (){
    },
    function lvl11 (){
    },
    function lvl12 (){
    },
    function lvl13 (){
    },
    function lvl14 (){
    },
    function lvl15 (){
    },
    function lvl16 (){
    },
    function lvl17 (){
    },
    function lvl18 (){
        addCaracteristica('Corpo Atemporal', 'Druida', 'A partir do 18º nível, seu corpo envelhece apenas 1 ano para cada 10 que se passarem.', 'druida');
        addCaracteristica('Magia Bestial', 'Druida', 'No 18º nível, você consegue realizar os componentes verbais e somáticos de suas magias mesmo usando sua Forma Selvagem.', 'druida');
    },
    function lvl19 (){
    },
    function lvl20 (){
        addCaracteristica('Arquedruida', 'Druida', 'No 20º nível, Você é capaz de usar Forma Selvagem um número ilimitado de vezes.<br><br>Adicionalmente, ao conjurar uma magia de druida você pode ignorar os componentes verbais, somáticos e materiais desde que não possuam custo e não sejam consumidos pela magia, você também consegue usar esse benefício em sua forma selvagem.', 'druida');
    }
]

const guerreiroTabela = [
    function lvl1 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl2 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl3 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl4 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl5 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl6 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl7 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl8 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl9 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl10 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl11 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl12 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl13 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl14 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl15 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl16 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl17 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl18 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl19 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    },
    function lvl20 (){
        addCaracteristica('nome', 'Guerreiro', 'desc', 'guerreiro');
    }
]

const mongeTabela = [
    function lvl1 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl2 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl3 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl4 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl5 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl6 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl7 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl8 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl9 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl10 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl11 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl12 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl13 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl14 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl15 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl16 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl17 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl18 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl19 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    },
    function lvl20 (){
        addCaracteristica('nome', 'Monge', 'desc', 'monge');
    }
]

const paladinoTabela = [
    function lvl1 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl2 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl3 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl4 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl5 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl6 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl7 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl8 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl9 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl10 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl11 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl12 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl13 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl14 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl15 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl16 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl17 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl18 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl19 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    },
    function lvl20 (){
        addCaracteristica('nome', 'Paladino', 'desc', 'paladino');
    }
]

const patrulheiroTabela = [
    function lvl1 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl2 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl3 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl4 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl5 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl6 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl7 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl8 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl9 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl10 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl11 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl12 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl13 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl14 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl15 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl16 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl17 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl18 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl19 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    },
    function lvl20 (){
        addCaracteristica('nome', 'Patrulheiro', 'desc', 'patrulheiro');
    }
]

const ladinoTabela = [
    function lvl1 (){
        addCaracteristica('Especialização (Ladino)', 'Ladino', 'No 1º nível, escolha duas pericias que você seja proficiente. Seu bônus de proficiência para essas pericias é dobrado em qualquer teste de habilidade. Você pode escolher as Ferramentas de Ladrão ao invés de uma pericia. No 6º nível, você escolhe mais duas pericias para se especializar.', 'ladino');
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl2 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl3 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl4 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl5 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl6 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl7 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl8 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl9 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl10 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl11 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl12 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl13 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl14 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl15 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl16 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl17 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl18 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl19 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    },
    function lvl20 (){
        addCaracteristica('nome', 'Ladino', 'desc', 'ladino');
    }
]

const feiticeiroTabela = [
    function lvl1 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl2 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl3 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl4 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl5 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl6 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl7 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl8 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl9 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl10 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl11 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl12 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl13 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl14 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl15 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl16 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl17 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl18 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl19 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    },
    function lvl20 (){
        addCaracteristica('nome', 'Feiticeiro', 'desc', 'feiticeiro');
    }
]

const bruxoTabela = [
    function lvl1 (){
        addCaracteristica('nome', 'bruxo', 'desc', 'bruxo');
    },
    function lvl2 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl3 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl4 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl5 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl6 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl7 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl8 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl9 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl10 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl11 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl12 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl13 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl14 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl15 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl16 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl17 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl18 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl19 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    },
    function lvl20 (){
        addCaracteristica('nome', 'Bruxo', 'desc', 'bruxo');
    }
]


const magoTabela = [
    function lvl1 (){
        addCaracteristica('nome', 'mago', 'desc', 'mago');
    },
    function lvl2 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl3 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl4 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl5 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl6 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl7 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl8 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl9 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl10 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl11 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl12 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl13 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl14 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl15 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl16 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl17 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl18 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl19 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    },
    function lvl20 (){
        addCaracteristica('nome', 'Mago', 'desc', 'mago');
    }
]

function defineCaracteristicas(){
    let caracteristicas = document.querySelectorAll('[data-fonte]');
    caracteristicas.forEach(element => {
        element.remove();
    })

    if(lvlTotal.innerHTML > 0){
        let classes = document.querySelectorAll('[data-classe]');

        classes.forEach(element => {
            let nivel = element.querySelector('[data-inputLvl]').value;
            let classe = element.dataset.classe

            if (classe == 'barbaro'){
                for (let index = 0; index < parseInt(nivel); index++) {
                    barbaroTabela[index]();
                }
            }
            if (classe == 'bardo'){
                for (let index = 0; index < parseInt(nivel); index++) {
                    bardoTabela[index]();
                }
            }
            if (classe == 'clerigo'){
                for (let index = 0; index < parseInt(nivel); index++) {
                    clerigoTabela[index]();
                }
            }
            if (classe == 'druida'){
                for (let index = 0; index < parseInt(nivel); index++) {
                    druidaTabela[index]();
                }
            }
            if (classe == 'guerreiro'){
                for (let index = 0; index < parseInt(nivel); index++) {
                    guerreiroTabela[index]();
                }
            }
            if (classe == 'monge'){
                for (let index = 0; index < parseInt(nivel); index++) {
                    mongeTabela[index]();
                }
            }
            if (classe == 'paladino'){
                for (let index = 0; index < parseInt(nivel); index++) {
                    paladinoTabela[index]();
                }
            }
            if (classe == 'patrulheiro'){
                for (let index = 0; index < parseInt(nivel); index++) {
                    patrulheiroTabela[index]();
                }
            }
            if (classe == 'ladino'){
                for (let index = 0; index < parseInt(nivel); index++) {
                    ladinoTabela[index]();
                }
            }
            if (classe == 'feiticeiro'){
                for (let index = 0; index < parseInt(nivel); index++) {
                    feiticeiroTabela[index]();
                }
            }
            if (classe == 'bruxo'){
                for (let index = 0; index < parseInt(nivel); index++) {
                    bruxoTabela[index]();
                }
            }
            if (classe == 'mago'){
                for (let index = 0; index < parseInt(nivel); index++) {
                    magoTabela[index]();
                }
            }

        })
    }
}