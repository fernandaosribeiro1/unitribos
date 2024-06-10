window.onload = function () {
    document.getElementById('regiao').value = 'todas';
    filtrarPorRegiao();
};

function filtrarPorRegiao() {
    var regiaoSelecionada = document.getElementById('regiao').value;
    atualizarResultado(regiaoSelecionada);
}

function atualizarResultado(regiao) {
    var resultadoDiv = document.getElementById('resultado');
    var conteudo = '';

    switch (regiao) {
        case 'norte':
            conteudo = `
            <div class="regioes-card">
                <h2 class="regiao-topo">Região Norte</h2>
            
                <br>
                <div class="regioes-single-card">
                    <a target="_blank" href="https://www.hutukara.org/" class="filtro">
                        <h3 class="filtro">Povo Yanomami</h3>
                    </a>
                    <div>
                        <p>Um dos maiores grupos indígenas da América do Sul, com uma população que vive principalmente na região
                            fronteiriça entre o Brasil e a Venezuela.</p>
                    </div>
                    <div class="containertxtfiltro">
                        <a target="_blank" href="https://www.hutukara.org/">
                            <img src="img/yanomami.jpg" class="imgs">
                        </a>
                        <div class="textoimg">
                            <p>Os Yanomami são um exemplo vívido da riqueza cultural e da diversidade dos povos indígenas do Brasil.
                                Sua história, tradições e lutas contemporâneas oferecem uma visão importante sobre os desafios
                                enfrentados pelos povos indígenas na Amazônia e em todo o país.</p>
                        </div>
                    </div>
                </div>
                <div class="regioes-single-card">
                    <a target="_blank" href="https://www.kabu.org.br/" class="filtro">
                        <h3 class="filtro">Povo Kayapó</h3>
                    </a>
                    <div>
                        <p>Os Kayapó são conhecidos por suas ricas tradições culturais, que incluem complexos rituais, danças, e uma
                            língua própria. As pinturas corporais e o uso de adornos feitos de plumas de aves são características
                            marcantes de sua cultura, refletindo sua profunda conexão com a natureza.</p>
                    </div>
                    <div class="containertxtfiltro">
                        <a target="_blank" href="https://www.kabu.org.br/">
                            <img src="img/kayapo.jpg" class="imgs">
                        </a>
                        <div class="textoimg">
                            <p>O Povo Kayapó é um exemplo de resistência e preservação cultural. Sua dedicação à proteção de suas
                                terras e à promoção de práticas sustentáveis é crucial não apenas para a sobrevivência de sua
                                cultura, mas também para a conservação da Amazônia e do meio ambiente global.</p>
                        </div>
                    </div>
                </div>
                <div class="regioes-single-card">
                    <a target="_blank" href="https://apina.org.br/" class="filtro">
                        <h3 class="filtro">Povo Wajãpi</h3>
                    </a>
                    <div>
                        <p>São um grupo indígena que vive principalmente no estado do Amapá, na região Norte do Brasil. Sua
                            população é estimada em cerca de 1.500 pessoas, distribuídas em várias aldeias ao longo dos rios e
                            igarapés da região.</p>
                    </div>
                    <div class="containertxtfiltro">
                        <a target="_blank" href="https://apina.org.br/">
                            <img src="img/wajapi.jpg" class="imgs">
                        </a>
                        <div class="textoimg">
                            <p>Um exemplo inspirador de resiliência e sustentabilidade. Sua cultura rica, práticas de manejo
                                ambiental e lutas pela proteção de seus direitos e terras ressaltam a importância de apoiar e
                                defender os povos indígenas.</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
            break;
        case 'sul':
            conteudo = `
            <div class="regioes-card">
                <h2>Região Sul</h2>
            
                <br>
                <div class="regioes-single-card">
                <a target="_blank" href="https://cimi.org.br/" class="filtro">
                    <h3 class="filtro">Guarani-Kaiowá</h3>
                </a>
                <div>
                    <p>Uma das maiores populações indígenas do Brasil, conhecidos pela sua rica cultura e história. Eles habitam
                        principalmente a região do Mato Grosso do Sul, mas também estão presentes em partes do Paraguai e da
                        Argentina.</p>
                </div>
                <div class="containertxtfiltro">
                    <a target="_blank" href="https://cimi.org.br/">
                        <img src="img/guaranikaiowa.jpeg" class="imgs">
                    </a>
                    <div class="textoimg">
                        <p>Apesar das dificuldades, os Guarani-Kaiowá têm resistido e lutado pela preservação de sua cultura,
                            tradições e território ancestral. Eles são conhecidos por sua música, dança e artesanato, que refletem
                            sua profunda conexão com a natureza e sua espiritualidade.</p>
                    </div>
                </div>
            </div>
            <div class="regioes-single-card">
                <a target="_blank" href="https://www.socioambiental.org/" class="filtro">
                    <h3 class="filtro">Kaingang</h3>
                </a>
                <div>
                    <p>Predominantemente localizados nos estados do Paraná, Santa Catarina, Rio Grande do Sul e São Paulo. Eles
                        pertencem ao tronco linguístico Jê e têm uma rica cultura e história.</p>
                </div>
                <div class="containertxtfiltro">
                    <a target="_blank" href="https://www.socioambiental.org/">
                        <img src="img/kaingang.jpg" class="imgs">
                    </a>
                    <div class="textoimg">
                        <p>Possuem uma rica tradição oral, com mitos e histórias que explicam a origem do mundo e das pessoas. A
                            música e a dança também são partes importantes da sua cultura, realizadas em celebrações e cerimônias.
                        </p>
                    </div>
                </div>
            </div>
            <div class="regioes-single-card">
                <a target="_blank" href="http://www.museudoindio.gov.br/" class="filtro">
                    <h3 class="filtro">Guató</h3>
                </a>
                <div>
                    <p>Um grupo indígena do Brasil que habita principalmente a região do Pantanal, abrangendo os estados de Mato
                        Grosso, Mato Grosso do Sul e uma pequena parte da Bolívia. Eles são conhecidos por sua cultura fluvial e
                        pela íntima relação que mantêm com o ambiente aquático do Pantanal.</p>
                </div>
                <div class="containertxtfiltro">
                    <a target="_blank" href="http://www.museudoindio.gov.br/">
                        <img src="img/guato.jpg" class="imgs">
                    </a>
                    <div class="textoimg">
                        <p>Os Guató têm uma história marcada por deslocamentos forçados e contatos com diferentes grupos e frentes
                            de colonização. Durante o século XIX e início do século XX, muitos foram forçados a abandonar suas
                            terras tradicionais devido à expansão agrícola e à criação de gado na região.</p>
                    </div>
                </div>
            </div>
            </div>
            `;
            break;
        case 'nordeste':
            conteudo = `
            <div class="regioes-card">
                <h2>Região Nordeste</h2>
            
                <br>
                <div class="regioes-single-card">
                <a target="_blank" href="https://anaind.org.br/" class="filtro">
                    <h3 class="filtro">ANAI – Associação Nacional de Ação Indigenista</h3>
                </a>
                <div>
                    <p>Uma organização não governamental brasileira fundada em 1977, atuando em diversas áreas, a ANAI tem como
                        missão apoiar as comunidades indígenas na preservação de suas culturas, territórios e modos de vida.</p>
                </div>
                <div class="containertxtfiltro">
                    <a target="_blank" href="https://anaind.org.br/">
                        <img src="img/anai.jpg" class="imgs">
                    </a>
                    <div class="textoimg">
                        <p>Ao longo de mais de quatro décadas de atuação, a ANAI tem sido reconhecida por seu impacto positivo nas
                            comunidades indígenas e por sua contribuição para a construção de uma sociedade mais justa e inclusiva.
                            A organização tem sido um pilar importante na luta pela demarcação de terras, preservação cultural e
                            melhoria das condições de vida das populações indígenas no Brasil.</p>
                    </div>
                </div>
            </div>
            <div class="regioes-single-card">
                <a target="_blank" href="https://apoinme.org/" class="filtro">
                    <h3 class="filtro">APOINME – Articulação dos Povos Indígenas do Nordeste, Minas Gerais e Espírito Santo</h3>
                </a>
                <div>
                    <p>Importante organização que representa os interesses e direitos dos povos indígenas nas regiões mencionadas.
                        Fundada em 1995, a APOINME desempenha um papel crucial na luta pela demarcação e proteção dos territórios
                        indígenas.</p>
                </div>
                <div class="containertxtfiltro">
                    <a target="_blank" href="https://apoinme.org/">
                        <img src="img/apoinme.jpg" class="imgs">
                    </a>
                    <div class="textoimg">
                        <p>A APOINME continua a ser uma força ativa e influente na luta pelos direitos indígenas, trabalhando
                            incansavelmente para garantir que as comunidades indígenas possam viver com dignidade, segurança e
                            respeito a suas tradições e territórios.</p>
                    </div>
                </div>
            </div>
            <div class="regioes-single-card">
                <a target="_blank" href="https://reservapataxodajaqueira.com.br/" class="filtro">
                    <h3 class="filtro">Povo Pataxó – Reserva Pataxó da Jaqueira</h3>
                </a>
                <div>
                    <p>A comunidade indígena localizada na cidade de Porto Seguro, no estado da Bahia, Brasil. Esta reserva,
                        estabelecida em 1998, é um exemplo de conservação ambiental e cultural, onde os Pataxós mantêm suas
                        tradições vivas através de atividades sustentáveis e educativas.</p>
                </div>
                <div class="containertxtfiltro">
                    <a target="_blank" href="https://reservapataxodajaqueira.com.br/">
                        <img src="img/pataxo.jpg" class="imgs">
                    </a>
                    <div class="textoimg">
                        <p>Apesar dos sucessos, o povo Pataxó e a Reserva Pataxó da Jaqueira enfrentam desafios contínuos, como a
                            luta pela demarcação de terras, pressões de desenvolvimento e conflitos com interesses econômicos
                            externos. A comunidade continua a trabalhar para garantir seus direitos e preservar sua cultura para as
                            futuras gerações.</p>
                    </div>
                </div>
            </div>
            </div>
            `;
            break;
        case 'centro-Oeste':
            conteudo = `
            <div class="regioes-card">
                <h2>Região Centro-Oeste</h2>
            
                <br>
                <div class="regioes-single-card">
                <a target="_blank" href="https://www.socioambiental.org/" class="filtro">
                    <h3 class="filtro">Kadiwéu</h3>
                </a>
                <div>
                    <p>Também conhecidos como "Índios Cavaleiros," habitam principalmente a região do Pantanal no estado de Mato
                        Grosso do Sul. Eles são descendentes do grupo linguístico Guaicuru e são conhecidos por sua resistência e
                        habilidades militares.</p>
                </div>
                <div class="containertxtfiltro">
                    <a target="_blank" href="https://www.socioambiental.org/">
                        <img src="img/kadiweu.jpg" class="imgs">
                    </a>
                    <div class="textoimg">
                        <p>Os Kadiwéu têm trabalhado em parceria com várias ONGs e organizações governamentais para preservar sua
                            cultura e melhorar suas condições de vida. Projetos focados na educação, saúde e sustentabilidade têm
                            sido implementados para ajudar a comunidade.</p>
                    </div>
                </div>
            </div>
            <div class="regioes-single-card">
                <a target="_blank" href="https://www.socioambiental.org/" class="filtro">
                    <h3 class="filtro">Pareci</h3>
                </a>
                <div>
                    <p>Historicamente habitava as regiões dos estados de Mato Grosso e Rondônia, principalmente na região do rio
                        Juruena. No entanto, a pressão colonizadora e as atividades econômicas, como a exploração madeireira e a
                        agropecuária, deslocaram muitos Parecis de suas terras tradicionais.</p>
                </div>
                <div class="containertxtfiltro">
                    <a target="_blank" href="https://www.socioambiental.org/">
                        <img src="img/pareci.jpg" class="imgs">
                    </a>
                    <div class="textoimg">
                        <p>Eles são conhecidos por sua cultura rica e diversificada, que inclui artesanato, música, dança e
                            mitologia própria. Tradicionalmente, os Parecis subsistem da caça, pesca, coleta e agricultura de
                            subsistência.</p>
                    </div>
                </div>
            </div>
            <div class="regioes-single-card">
                <a target="_blank" href="https://www.socioambiental.org/" class="filtro">
                    <h3 class="filtro">Tapirapé</h3>
                </a>
                <div>
                    <p>Tradicionalmente localizado na região do rio Araguaia, no estado do Mato Grosso. Eles fazem parte do tronco
                        linguístico Macro-Jê e têm uma história cultural rica e distintiva.</p>
                </div>
                <div class="containertxtfiltro">
                    <a target="_blank" href="https://www.socioambiental.org/">
                        <img src="img/tapirape.png" class="imgs">
                    </a>
                    <div class="textoimg">
                        <p>Antes do contato com os colonizadores europeus, os Tapirapé viviam de maneira semi-nômade, baseando sua
                            subsistência na caça, pesca, coleta e agricultura de subsistência. Eles possuem uma organização social
                            baseada em clãs, com uma estrutura hierárquica que inclui líderes religiosos e políticos.</p>
                    </div>
                </div>
            </div>
            </div>
            `;
            break;

        case 'sudeste':
            conteudo = `
            <div class="regioes-card">
                <h2>Região Sudeste</h2>
                
            <br>
            <div class="regioes-single-card">
            <a target="_blank" href="https://cimi.org.br/" class="filtro">
                <h3 class="filtro">Tupiniquim</h3>
            </a>
            <div>
                <p>Associado à família linguística Tupi-Guarani. Eles são originários da região costeira do Sudeste brasileiro, particularmente ao longo do litoral dos estados do Rio de Janeiro e Espírito Santo.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="https://cimi.org.br/">
                    <img src="img/tupiniquim.jpg" class="imgs">
                </a>
                <div class="textoimg">
                    <p>Os Tupiniquim ficaram historicamente conhecidos por sua habilidade em construir canoas, por seu domínio na pesca e na produção de farinha de mandioca, e também por sua participação em redes de comércio e alianças com outros povos indígenas.</p>
                </div>
            </div>
            </div>
            <div class="regioes-single-card">
            <a target="_blank" href="https://cimi.org.br/" class="filtro">
                <h3 class="filtro">Carijó</h3>
            </a>
            <div>
                <p>Uma etnia indígena historicamente associada à família linguística Tupi-Guarani e que habitava a região litorânea do Sudeste brasileiro, em especial áreas próximas à atual cidade do Rio de Janeiro.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="https://cimi.org.br/">
                    <img src="img/carijo.jpeg" class="imgs">
                </a>
                <div class="textoimg">
                    <p>Foram os primeiros povos indígenas com os quais os colonizadores europeus tiveram contato ao chegarem à região da Baía de Guanabara. Esse contato inicial resultou em conflitos, alianças temporárias e, eventualmente, no deslocamento e na marginalização dos Carijó de suas terras tradicionais.</p>
                </div>
            </div>
            </div>
            <div class="regioes-single-card">
            <a target="_blank" href="https://cimi.org.br/" class="filtro">
                <h3 class="filtro">Puris</h3>
            </a>
            <div>
                <p>Um grupo indígena do Brasil que historicamente habitava áreas dos atuais estados de Minas Gerais e Rio de Janeiro. Eles fazem parte da família linguística macro-jê e têm uma história cultural rica e distintiva.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="https://cimi.org.br/">
                    <img src="img/puris.jpg" class="imgs">
                </a>
                <div class="textoimg">
                    <p>Com a colonização europeia e a expansão do território brasileiro, os Puris foram gradualmente deslocados de suas terras tradicionais e enfrentaram pressões assimilacionistas. Muitos foram submetidos a violência, doenças e perda de território, resultando em um declínio significativo de sua população e cultura.</p>
                </div>
            </div>
            </div>
            `;
            break;
        default:
            conteudo = `
            <div class="regioes-single-card">
            <a target="_blank" href="https://www.hutukara.org/" class="filtro">
                <h3 class="filtro">Povo Yanomami</h3>
            </a>
            <div>
                <p>Um dos maiores grupos indígenas da América do Sul, com uma população que vive principalmente na região fronteiriça entre o Brasil e a Venezuela.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="https://www.hutukara.org/">
                    <img src="img/yanomami.jpg" class="imgs">
                </a>
                <div class="textoimg">
                    <p>Os Yanomami são um exemplo vívido da riqueza cultural e da diversidade dos povos indígenas do Brasil. Sua história, tradições e lutas contemporâneas oferecem uma visão importante sobre os desafios enfrentados pelos povos indígenas na Amazônia e em todo o país.</p>
                </div>
            </div>
</div>
            <div class="regioes-single-card">
            <a target="_blank" href="https://www.kabu.org.br/" class="filtro">
                <h3 class="filtro">Povo Kayapó</h3>
            </a>
            <div>
                <p>Os Kayapó são conhecidos por suas ricas tradições culturais, que incluem complexos rituais, danças, e uma língua própria. As pinturas corporais e o uso de adornos feitos de plumas de aves são características marcantes de sua cultura, refletindo sua profunda conexão com a natureza.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="https://www.kabu.org.br/">
                    <img src="img/kayapo.jpg" class="imgs">
                </a>
                <div class="textoimg">
                    <p>O Povo Kayapó é um exemplo de resistência e preservação cultural. Sua dedicação à proteção de suas terras e à promoção de práticas sustentáveis é crucial não apenas para a sobrevivência de sua cultura, mas também para a conservação da Amazônia e do meio ambiente global.</p>
                </div>
            </div>
</div>
            <div class="regioes-single-card">
            <a target="_blank" href="https://apina.org.br/" class="filtro">
                <h3 class="filtro">Povo Wajãpi</h3>
            </a>
            <div>
                <p>São um grupo indígena que vive principalmente no estado do Amapá, na região Norte do Brasil. Sua população é estimada em cerca de 1.500 pessoas, distribuídas em várias aldeias ao longo dos rios e igarapés da região.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="https://apina.org.br/">
                    <img src="img/wajapi.jpg" class="imgs">
                </a>
                <div class="textoimg">
                    <p>Um exemplo inspirador de resiliência e sustentabilidade. Sua cultura rica, práticas de manejo ambiental e lutas pela proteção de seus direitos e terras ressaltam a importância de apoiar e defender os povos indígenas.</p>
                </div>
            </div>
</div>
            <div class="regioes-single-card">
            <a target="_blank" href="https://anaind.org.br/" class="filtro">
                <h3 class="filtro">ANAI – Associação Nacional de Ação Indigenista</h3>
            </a>
            <div>
                <p>Uma organização não governamental brasileira fundada em 1977, atuando em diversas áreas, a ANAI tem como missão apoiar as comunidades indígenas na preservação de suas culturas, territórios e modos de vida.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="https://anaind.org.br/">
                    <img src="img/anai.jpg" class="imgs">
                </a>
                <div class="textoimg">
                    <p>Ao longo de mais de quatro décadas de atuação, a ANAI tem sido reconhecida por seu impacto positivo nas comunidades indígenas e por sua contribuição para a construção de uma sociedade mais justa e inclusiva. A organização tem sido um pilar importante na luta pela demarcação de terras, preservação cultural e melhoria das condições de vida das populações indígenas no Brasil.</p>
                </div>
            </div>
</div>
            <div class="regioes-single-card">
            <a target="_blank" href="https://apoinme.org/" class="filtro">
                <h3 class="filtro">APOINME – Articulação dos Povos Indígenas do Nordeste, Minas Gerais e Espírito Santo</h3>
            </a>
            <div>
                <p>Importante organização que representa os interesses e direitos dos povos indígenas nas regiões mencionadas. Fundada em 1995, a APOINME desempenha um papel crucial na luta pela demarcação e proteção dos territórios indígenas.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="https://apoinme.org/">
                    <img src="img/apoinme.jpg" class="imgs">
                </a>
                <div class="textoimg">
                    <p>A APOINME continua a ser uma força ativa e influente na luta pelos direitos indígenas, trabalhando incansavelmente para garantir que as comunidades indígenas possam viver com dignidade, segurança e respeito a suas tradições e territórios.</p>
                </div>
            </div>
</div>
            <div class="regioes-single-card">
            <a target="_blank" href="https://reservapataxodajaqueira.com.br/" class="filtro">
                <h3 class="filtro">Povo Pataxó – Reserva Pataxó da Jaqueira</h3>
            </a>
            <div>
                <p>A comunidade indígena localizada na cidade de Porto Seguro, no estado da Bahia, Brasil. Esta reserva, estabelecida em 1998, é um exemplo de conservação ambiental e cultural, onde os Pataxós mantêm suas tradições vivas através de atividades sustentáveis e educativas.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="https://reservapataxodajaqueira.com.br/">
                    <img src="img/pataxo.jpg" class="imgs">
                </a>
                <div class="textoimg">
                    <p>Apesar dos sucessos, o povo Pataxó e a Reserva Pataxó da Jaqueira enfrentam desafios contínuos, como a luta pela demarcação de terras, pressões de desenvolvimento e conflitos com interesses econômicos externos. A comunidade continua a trabalhar para garantir seus direitos e preservar sua cultura para as futuras gerações.</p>
                </div>
            </div>
</div>
            <div class="regioes-single-card">
            <a target="_blank" href="https://www.socioambiental.org/" class="filtro">
                <h3 class="filtro">Kadiwéu</h3>
            </a>
            <div>
                <p>Também conhecidos como "Índios Cavaleiros," habitam principalmente a região do Pantanal no estado de Mato Grosso do Sul. Eles são descendentes do grupo linguístico Guaicuru e são conhecidos por sua resistência e habilidades militares.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="https://www.socioambiental.org/">
                    <img src="img/kadiweu.jpg" class="imgs">
                </a>
                <div class="textoimg">
                    <p>Os Kadiwéu têm trabalhado em parceria com várias ONGs e organizações governamentais para preservar sua cultura e melhorar suas condições de vida. Projetos focados na educação, saúde e sustentabilidade têm sido implementados para ajudar a comunidade.</p>
                </div>
            </div>
</div>
            <div class="regioes-single-card">
            <a target="_blank" href="https://www.socioambiental.org/" class="filtro">
                <h3 class="filtro">Pareci</h3>
            </a>
            <div>
                <p>Historicamente habitava as regiões dos estados de Mato Grosso e Rondônia, principalmente na região do rio Juruena. No entanto, a pressão colonizadora e as atividades econômicas, como a exploração madeireira e a agropecuária, deslocaram muitos Parecis de suas terras tradicionais.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="https://www.socioambiental.org/">
                    <img src="img/pareci.jpg" class="imgs">
                </a>
                <div class="textoimg">
                    <p>Eles são conhecidos por sua cultura rica e diversificada, que inclui artesanato, música, dança e mitologia própria. Tradicionalmente, os Parecis subsistem da caça, pesca, coleta e agricultura de subsistência.</p>
                </div>
            </div>
</div>
            <div class="regioes-single-card">
            <a target="_blank" href="https://www.socioambiental.org/" class="filtro">
                <h3 class="filtro">Tapirapé</h3>
            </a>
            <div>
                <p>Tradicionalmente localizado na região do rio Araguaia, no estado do Mato Grosso. Eles fazem parte do tronco linguístico Macro-Jê e têm uma história cultural rica e distintiva.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="https://www.socioambiental.org/">
                    <img src="img/tapirape.png" class="imgs">
                </a>
                <div class="textoimg">
                    <p>Antes do contato com os colonizadores europeus, os Tapirapé viviam de maneira semi-nômade, baseando sua subsistência na caça, pesca, coleta e agricultura de subsistência. Eles possuem uma organização social baseada em clãs, com uma estrutura hierárquica que inclui líderes religiosos e políticos.</p>
                </div>
            </div>
</div>
            <div class="regioes-single-card">
            <a target="_blank" href="https://cimi.org.br/" class="filtro">
                <h3 class="filtro">Tupiniquim</h3>
            </a>
            <div>
                <p>Associado à família linguística Tupi-Guarani. Eles são originários da região costeira do Sudeste brasileiro, particularmente ao longo do litoral dos estados do Rio de Janeiro e Espírito Santo.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="https://cimi.org.br/">
                    <img src="img/tupiniquim.jpg" class="imgs">
                </a>
                <div class="textoimg">
                    <p>Os Tupiniquim ficaram historicamente conhecidos por sua habilidade em construir canoas, por seu domínio na pesca e na produção de farinha de mandioca, e também por sua participação em redes de comércio e alianças com outros povos indígenas.</p>
                </div>
            </div>
</div>
            <div class="regioes-single-card">
            <a target="_blank" href="https://cimi.org.br/" class="filtro">
                <h3 class="filtro">Carijó</h3>
            </a>
            <div>
                <p>Uma etnia indígena historicamente associada à família linguística Tupi-Guarani e que habitava a região litorânea do Sudeste brasileiro, em especial áreas próximas à atual cidade do Rio de Janeiro.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="https://cimi.org.br/">
                    <img src="img/carijo.jpeg" class="imgs">
                </a>
                <div class="textoimg">
                    <p>Foram os primeiros povos indígenas com os quais os colonizadores europeus tiveram contato ao chegarem à região da Baía de Guanabara. Esse contato inicial resultou em conflitos, alianças temporárias e, eventualmente, no deslocamento e na marginalização dos Carijó de suas terras tradicionais.</p>
                </div>
            </div>
</div>
            <div class="regioes-single-card">
            <a target="_blank" href="https://cimi.org.br/" class="filtro">
                <h3 class="filtro">Puris</h3>
            </a>
            <div>
                <p>Um grupo indígena do Brasil que historicamente habitava áreas dos atuais estados de Minas Gerais e Rio de Janeiro. Eles fazem parte da família linguística macro-jê e têm uma história cultural rica e distintiva.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="https://cimi.org.br/">
                    <img src="img/puris.jpg" class="imgs">
                </a>
                <div class="textoimg">
                    <p>Com a colonização europeia e a expansão do território brasileiro, os Puris foram gradualmente deslocados de suas terras tradicionais e enfrentaram pressões assimilacionistas. Muitos foram submetidos a violência, doenças e perda de território, resultando em um declínio significativo de sua população e cultura.</p>
                </div>
            </div>
</div>
            <div class="regioes-single-card">
            <a target="_blank" href="https://cimi.org.br/" class="filtro">
                <h3 class="filtro">Guarani-Kaiowá</h3>
            </a>
            <div>
                <p>Uma das maiores populações indígenas do Brasil, conhecidos pela sua rica cultura e história. Eles habitam principalmente a região do Mato Grosso do Sul, mas também estão presentes em partes do Paraguai e da Argentina.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="https://cimi.org.br/">
                    <img src="img/guaranikaiowa.jpeg" class="imgs">
                </a>
                <div class="textoimg">
                    <p>Apesar das dificuldades, os Guarani-Kaiowá têm resistido e lutado pela preservação de sua cultura, tradições e território ancestral. Eles são conhecidos por sua música, dança e artesanato, que refletem sua profunda conexão com a natureza e sua espiritualidade.</p>
                </div>
            </div>
</div>
            <div class="regioes-single-card">
            <a target="_blank" href="https://www.socioambiental.org/" class="filtro">
                <h3 class="filtro">Kaingang</h3>
            </a>
            <div>
                <p>Predominantemente localizados nos estados do Paraná, Santa Catarina, Rio Grande do Sul e São Paulo. Eles pertencem ao tronco linguístico Jê e têm uma rica cultura e história.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="https://www.socioambiental.org/">
                    <img src="img/kaingang.jpg" class="imgs">
                </a>
                <div class="textoimg">
                    <p>Possuem uma rica tradição oral, com mitos e histórias que explicam a origem do mundo e das pessoas. A música e a dança também são partes importantes da sua cultura, realizadas em celebrações e cerimônias.</p>
                </div>
            </div>
</div>
            <div class="regioes-single-card">
            <a target="_blank" href="http://www.museudoindio.gov.br/" class="filtro">
                <h3 class="filtro">Guató</h3>
            </a>
            <div>
                <p>Um grupo indígena do Brasil que habita principalmente a região do Pantanal, abrangendo os estados de Mato Grosso, Mato Grosso do Sul e uma pequena parte da Bolívia. Eles são conhecidos por sua cultura fluvial e pela íntima relação que mantêm com o ambiente aquático do Pantanal.</p>
            </div>
            <div class="containertxtfiltro">
                <a target="_blank" href="http://www.museudoindio.gov.br/">
                    <img src="img/guato.jpg" class="imgs">
                </a>
                <div class="textoimg">
                    <p>Os Guató têm uma história marcada por deslocamentos forçados e contatos com diferentes grupos e frentes de colonização. Durante o século XIX e início do século XX, muitos foram forçados a abandonar suas terras tradicionais devido à expansão agrícola e à criação de gado na região.</p>
                </div>
            </div>
</div>
            `;


    }

    resultadoDiv.innerHTML = conteudo;


}