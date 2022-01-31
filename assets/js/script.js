(function ocultar(){
    for(i = 0; i < 23; i++){
//document.getElementById(i).style.display = "none";
    }
})();

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{ //Define a quantidade de itens por tamanho de tela
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function ato(aqui){
    let inicio = aqui.src.indexOf("(") + 1;
    let fim    = aqui.src.substring(inicio).indexOf(")") + inicio;
    let valor;
    console.log(aqui.src.substring(inicio, fim));
    valor = aqui.src.substring(inicio, fim)
        document.getElementById(valor).style.display = "none";
}

function at(aqui){
    let arraySino = [
        'Um médico dissidente e anti-social, que se especializou em medicina de diagnóstico. Faz o que for preciso para resolver casos intrigantes que estão no seu caminho, usando a sua equipe de médicos e sua inteligência.',
        'Depois que um boneco Chucky "vintage" aparece em uma venda de quintal, uma pequena e pacata cidade do interior norte americano é lançada no caos enquanto uma série de assassinatos horríveis começa a expor os segredos da localidade.',
        'Esta sequência de Karate Kid pega 30 anos depois dos eventos do All Valley Karate Tournament de 1984 e encontra Johnny Lawrence em busca de redenção reabrindo o infame dojo de karate Cobra Kai . Isso reacende sua antiga rivalidade com o bem-sucedido Daniel LaRusso, que vem trabalhado para manter o equilíbrio em sua vida sem o seu mentor Miyagi.',
        'Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.',
        'Os Simpsons moram na cidade de Springfield, uma cidade americana como qualquer outra. Homer trabalha como inspetor de segurança em uma usina de energia nuclear, Marge tenta manter a paz em sua família, Bart é um travesso garoto de 10 anos, Lisa, de 8 anos, é a inteligente da família que adora tocar saxofone e é vegetariana e a pequena Maggie conquista todos enquanto não larga sua chupeta. E a série tem um rico, e muitas vezes estranho, universo de personagens que também habitam Springfield. Com roteiros inteligentes, humor subversivo e divertidamente genial, a série faz piadas de si mesma e de todo mundo que aparecer em seu caminho.',
        'Centenas de jogadores falidos aceitam um estranho convite para um jogo de sobrevivência. Um prêmio milionário aguarda, mas as apostas são altas e mortais.',
        'Os irmãos Dean e Sam vasculham o país em busca de atividades paranormais, brigando com demônios, fantasmas e monstros no caminho.',
        'A Dra. Temperance Brennan é uma antropóloga forense altamente qualificada que trabalha no Instituto Jeffersonian e escreve romances. Ela possui um talento impressionante para enxergar pistas em ossos de vítimas, e por isso a polícia a chama para ajudar em investigações quando os restos mortais estão tão decompostos, queimados ou destruídos que métodos de identificação padrão são inúteis. Temperance frequentemente trabalha em parceria com o agente especial Seeley Booth, ex-atirador de elite do exército que não confia na ciência ou em cientistas para resolver crimes, mas desenvolveu um respeito pessoal e profissional por Temperance.',
        'Uma garota chamada Mirabel Madrigal cresce como o único membro não mágico de sua família, que vivem escondidos em uma vibrante casa encantada nas montanhas da Colômbia.',
        'Drac e sua turma acabam sendo transformados em humanos após uma invenção de Van Helsing. Agora, eles precisam viajar até a Floresta Amazônica para encontrar o que pode ser a única solução para reverter a transformação, antes que seus poderes se percam para sempre',
        'O que já foi um dia a casa da gigante farmacêutica em expansão Umbrella Corporation, Raccoon City, é agora uma cidade agonizante do meio-oeste. O êxodo da empresa transformou a cidade em um deserto, com um grande mal fermentando escondido abaixo da superfície. Quando esse mal é libertado, um grupo de sobreviventes deve trabalhar juntos para descobrir a verdade por trás da Umbrella enquanto buscam viver por mais uma noite.',
        'Em um mundo de duas realidades — a vida cotidiana e o que está por trás dela —, Thomas Anderson terá que escolher seguir o coelho branco mais uma vez. A escolha, embora seja uma ilusão, ainda é a única maneira de entrar ou sair da Matrix, que é mais forte, mais segura e mais perigosa do que nunca.',
        'Uma mãe solteira resolve se mudar para uma pequena cidade do interior com seus filhos, e acaba descobrindo uma conexão com os Caça-Fantasmas originais e o que o seu avô deixou para trás como legado.',
        'Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.',
        'Após os eventos de "Vingadores: Ultimato", os Eternos, uma raça alienígena imortal criada pelos Celestiais que vivem em segredo na Terra há mais de 7000 anos, se reúnem após uma tragédia inesperada para proteger a humanidade de seus colegas malignos: os Deviantes.',
        'Em busca de seu próximo furo de reportagem, o jornalista Eddie Brock consegue uma entrevista exclusiva com Cletus Kasady, um assassino no corredor da morte, que descobre o segredo de Eddie e se torna o hospedeiro de Carnificina, um simbionte aterrorizante e ameaçador. Eddie e Venom precisam superar sua relação atribulada e trabalhar em conjunto para derrotar Carnificina.',
        '30 de outubro de 1960, em Lanús - Argentina, nasce uma das maiores lendas do futebol mundial: Diego Armando Maradona. Acompanhe a trajetória do ex-jogador argentino em diferentes momentos, da juventude à vida adulta.',
        'Aclamado e criticado no mundo todo, Neymar compartilha os altos e baixos de sua vida pessoal e da brilhante carreira no futebol.',
        'É uma série real e cativante que investiga catástrofes aéreas recentes para descobrir como e por que elas aconteceram. Filmagens, entrevistas com testemunhas-chave e computação gráfica dos aviões durante o voo ajudam a explicar as controvérsias que existem no coração da indústria aérea.',
        'Uma aventura que se estende por bilhões de anos na evolução da vida e da consciência. Uma visita a um laboratório de 100 mil anos de idade. A história da mudança no estilo de vida que alterou radicalmente a existência humana e a vida do herege que encontrou Deus no livro da natureza, abrindo caminho para as estrelas.',
        'Pilotos, gestores e donos de equipes vivem grandes emoções – nas pistas e fora delas – durante uma implacável temporada de corridas de Fórmula 1.',
        'Situado na região rural de Michigan central, esta série de realidade segue o trabalho feito em Pol Veterinary Services. Especializado em grandes animais de fazenda, Dr. Pol trata cavalos, porcos, vacas, ovelhas, alpacas, cabras, galinhas e até uma rena ocasional. O programa também apresenta a Dra. Brenda Grettenberger, que trabalha com a Dra. Pol desde 1992.',
        'Esta mistura de documentário e épico histórico narra o período de turbulência e violência em Roma durante os impérios de Cômodo e Júlio César.',
        'Expedições levam os espectadores para longe da selva urbana para apresentar características documentais sobre os animais que vivem na selva real.'
    ];
    let inicio = aqui.src.indexOf("(") + 1;
    let fim    = aqui.src.substring(inicio).indexOf(")") + inicio;
    let valor;
    console.log(aqui.src.substring(inicio, fim));
    valor = aqui.src.substring(inicio, fim)
        document.getElementById(valor).innerHTML = arraySino[valor];
        document.getElementById(valor).style.display = "block";
        console.log(arraySino[valor]);
    return;
}    