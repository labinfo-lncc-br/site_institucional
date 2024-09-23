"use client";
import { useTranslations } from "next-intl";
import Layout from "../components/Layout";
import CardItem from "../components/CardItem";
import NewsList from "../components/NewsList";

const projects = [
  {
    title:
      "Abordagem integrativa e multi-ômica na priorização de alvos contra patógenos de importância clínica combinando técnicas de bioinformática e biotecnologia",
    content:
      "As contribuições científicas, tecnológicas e de inovação a partir deste projeto vão desde a aplicação da bioinformática, modelagem molecular, machine learning, virtual screening, molecular docking, para a identificação e seleção de alvos candidatos, até a biologia e biotecnologia para a avaliação experimental de alvos específicos identificados. Ressalta-se a consolidação da interação entre grupos de pesquisa brasileiros (LNCC e Fiocruz/BA), argentinos (UBA) e mexicanos (UNAM) com expertises complementares e forte atuação em suas respectivas áreas que vem trabalhando em conjunto.",
  },
  {
    title:
      "Acordo de Cooperação: Global Biodiversity and Health Big Data Sharing Initiative",
    content:
      "Cooperação internacional com Beijing Institute of Genomics para o desenvolvimento científico em Saúde humana através de Big Data em processo de levantamento de dados.",
  },
  {
    title:
      "Apoio à manutenção da infraestrutura do centro multiusuário Unidade de Genômica Computacional “Darcy Fontoura de Almeida” (UGCDFA)",
    content:
      "A Unidade de Genômica Computacional Darcy Fontoura de Almeida (UGCDFA) é uma Unidade Multiusuário em sequenciamento de última geração. Desde 2009, sua infraestrutura tem sido usada por mais de 75 pesquisadores para a geração de dados ‘ômicos”, beneficiando cerca de 40 instituições e 30 PPGs. Esta proposta tem por objetivo a manutenção da UGCDFA visando continuar gerando grande volume de dados para diversos modelos biológicos e disponibilizar serviços para instituições nacionais e internacionais.",
  },
  {
    title:
      "Coalizão Multiômicas Covid-19 Brasil: componente sequenciamento do genoma do SARS-CoV-2",
    content:
      "A influência dos fatores individuais do hospedeiro em relação à susceptibilidade, proteção e manifestação clínica da Covid-19 pode variar amplamente entre populações. Tal fato se faz especialmente relevante quando se trata da população brasileira devido ao seu elevado grau de miscigenação, resultando em um genoma mosaico composto por fragmentos de diferentes genomas subcontinentais (europeu, ameríndio, africano e asiático). Ademais, as disparidades socioeconômicas em nosso país geram uma maior variabilidade de exposição inter individual do que a de nações mais desenvolvidas, permitindo uma melhor exploração dos efeitos da interação gene-ambiente. Face ao exposto, faz-se pungente uma melhor compreensão de como os fatores intrínsecos contribuem para a infecção do SARS-CoV-2 e o desenvolvimento do quadro clínico da Covid-19 na população brasileira.",
  },
  {
    title:
      "Corona-ômica - BR MCTI/FINEP: Rede Nacional de genomas, exoma e transcriptoma de COVID-19 para identificação de fatores associados à dispersão da epidemia e severidade",
    content:
      "O presente estudo tem por objetivo realizar uma ampla análise da variabilidade genética humana e viral associadas com a dispersão da epidemia no país, bem como aos perfis de suscetibilidade a doença. A partir da análise de genoma completo dos vírus, esperamos identificar mutações associadas a virulência ou ainda potenciais alvos terapêuticos.",
  },
  {
    title:
      "Corona-ômica - RJ: Plataforma computacional integrativa para caracterização de determinantes virais e do hospedeiro na COVID-19 utilizando abordagens ÔMICAS no estado do Rio de Janeiro",
    content:
      'O objetivo deste projeto é identificar e caracterizar fatores genômicos virais e dos hospedeiros envolvidos na patogênese da COVID-19, associados às manifestações clínicas da doença através da integração de dados de ômicas (genômica viral, metagenômica, exoma e transcritoma humanos) e técnicas de Inteligência Artificial. Os dados genômicos virais serão utilizados em estudos de vigilância genômica através de reconstruções filogenéticas e filogeográficas para avaliar a dispersão de epidemia e identificação de "clusters" de transmissão. Os dados de exoma e RNA-Seq dos pacientes serão utilizados para identificação de marcadores prognósticos e possíveis alvos terapêuticos para fornecer suporte ao diagnóstico da COVID-19 com perspectivas de aplicação ao SUS.',
  },
  {
    title:
      "Corona-ômica - RJ: PÓS-COVID um longo caminho a percorrer - extraindo informações do passado recente e procurando soluções inovativas para o futuro próximo",
    content:
      "Até o momento, a pandemia da COVID-19 atingiu mais de 240 milhões de pessoas no mundo. O Brasil é o terceiro país com maior número de casos (21.664.879) e o estado do Rio de Janeiro apresenta uma das maiores taxas de mortalidade do país (391,5 por 100 mil habitantes). Muitos países continuam a enfrentar surtos da doença impulsionados por novas variantes virais, tornando-se essencial acompanhar os aspectos genômicos do SARS-CoV-2. Além disso, a patogênese produzida pelo SARS-CoV-2 ainda é pouco conhecida, os pacientes infectados podem apresentar desde infecções assintomáticas até casos graves e evolução para óbito. Assim, o presente projeto tem como objetivo dar continuidade aos estudos de identificação e caracterização de fatores genômicos virais e além disso, estudar a interação vírus-hospedeiro associado às manifestações clínicas da doença, através da utilização de dados de ômica (genômica viral, metatranscritômica e transcritomas humanos), do desenvolvimento de ferramentas computacionais, epidemiológicas e uso de metodologias de Inteligência Artificial, bem como o desenvolvimento de modelos in vitro e in vivo para estudos de patogenia da COVID-19. Desta forma, pretendemos gerar subsídios para a investigação e compreensão dos mecanismos moleculares da doença, e fornecimento de suporte ao diagnóstico da COVID-19, com perspectivas de aplicação no sistema de saúde pública do país, no desenvolvimento de vacinas e tratamento patogenético da doença.",
  },
  {
    title:
      "Estudo das bases moleculares das comorbidades associadas ao desenvolvimento de COVID-19 grave - Uma abordagem de biologia de sistemas",
    content:
      "Para apoio no tratamento de pacientes graves com COVID-19 é preciso entender a intrincada correlação molecular da infecção pelo SARS-CoV-2 com as comorbidades associadas à gravidade e seus tratamentos. Pretendemos avançar na compreensão destes mecanismos por meio da modelagem computacional, utilizando algoritmos de aprendizado de máquina e análise de redes biológicas, analisando dados transcriptômicos e de proteoma de células humanas infectadas com SARS-CoV-2 para identificar os genes e proteínas associados à infecção. Esta análise fornecerá uma ampla visão geral das moléculas envolvidas em doenças relacionadas à COVID-19 grave e como elas podem estar relacionadas à infecção por SARS-CoV-2. A integração e análise deste complexo conjunto de informações irá gerar uma lista de fármacos (individuais ou combinados), candidatos ao reposicionamento, adequados aos diversos casos clínicos.",
  },
  {
    title:
      "Genômica Aplicada a Recursos Pesqueiros e de Aquicultura do Estado do Rio de Janeiro GARPA-RIO",
    content:
      "O projeto GARPA-RIO é constituído por uma rede de laboratórios e instituições de pesquisa dos Estados do RJ, SC e RN que visa abordar duas questões de importância fundamental para a preservação de recursos pesqueiros, através de abordagens de genômica molecular e análises de bioinformática. A primeira questão busca estratégias de melhoramento para cultivo de ostras na costa fluminense. A segunda questão visa o monitoramento da qualidade e comercialização do pescado através da identificação molecular e criação de um banco de dados com sequências de marcadores moleculares das espécies, nativas ou não, pescadas ou comercializadas no RJ.",
  },
  {
    title:
      "Imunodeficiência primária (PIDD): a medicina genômica no auxílio ao diagnóstico diferencial através do sequenciamento completo do exoma",
    content:
      "As imunodeficiências primárias (PIDD) são doenças genéticas raras que têm como principal característica alterações das funções do sistema imune, levando à maior suscetibilidade às infecções de repetição, autoimunidade, autoinflamação, alergia e câncer. A criança com imunodeficiência primária, embora relativamente rara, é um paciente de alto custo para o SUS, devido a dificuldades diagnósticas, requer o uso de antibioticoterapia e internações prolongadas que muitas vezes evoluem para óbito. Alternativas terapêuticas para alguns casos são de alto custo como transplantes de Células Tronco Hematopoiéticas ou infusão de imunoglobulina intravenosa. A indicação terapêutica adequada está diretamente relacionada ao diagnóstico diferencial, precoce e preciso, possibilitando alcançar a eficiência da intervenção clínica, com redução significativa do número de infecções e internações. Até o momento existem mais de 400 mutações causadoras de PIDD. Os testes de diagnóstico molecular existentes podem ser inconclusivos devido a sobreposição com fenótipos clínicos. Dentre os testes genéticos para variantes genéticas associados à PIDD, o sequenciamento de genes individuais usando a metodologia de Sanger é demorado e caro. Já os painéis de genes PIDD conhecidos não são capazes de detectar novos genes relacionados às PIDD. Nesse projeto propomos o estudo de diferentes grupos de imunodeficiências através de sequenciamento de exomas, com o objetivo de alcançar o diagnóstico no maior nível de complexidade e definir de forma precisa a deficiência no sistema imune. O conhecimento dessas alterações moleculares permitirá o tratamento mais efetivo do paciente e possibilitará benefícios a curto e longo prazo, com adoção de protocolos de cuidados adequados e minimizando internações graves e morte associada a essas patologias. Adicionalmente, o conhecimento dos genes envolvidos nessas patologias no contexto de doenças do nosso meio, permitirão dissecar as vias moleculares essenciais para o combate às doenças negligenciadas.",
  },
  {
    title:
      "Inteligênciômica saúde: o uso de metodologias de inteligência artificial para identificação de preditores genéticos associados aos casos severos e neurológicos por arboviroses",
    content:
      "O Brasil tem sofrido com diversas epidemias de arboviroses (doenças causadas pelos arbovírus) nos últimos séculos. Viroses como Zika, Febre Amarela, Chikungunya, Dengue, Oropouche e Mayaro são transmitidas por mosquitos vetores abundantes no Brasil. Através de estratégias de genômica viral, exoma, transcriptômica e metagenômica serão analisadas amostras humanas e de primatas por meio de métodos de inteligência artificial (Deep Learning). A integração com metadados poderá auxiliar na identificação de possíveis fatores envolvidos na susceptibilidade da população acometida por arboviroses em desenvolverem manifestações clínicas severas e fatais. Trata-se de um projeto interdisciplinar envolvendo pesquisadores de diferentes áreas do conhecimento e de diferentes instituições do Rio de Janeiro e do país.",
  },
  {
    title:
      "Otimização e integração de ferramentas de bioinformática em ambiente de computação de alto desempenho para análises de dados genômicos em doenças infecciosas",
    content:
      "Desenvolvimento de metodologias e soluções em doenças infecciosas negligenciadas, como os Flavívirus com foco em bioinformática e computação de alto desempenho como solução para os desafios no setor da saúde.",
  },
  {
    title:
      "Rede Fluminense para a Pesquisa e Desenvolvimento de Nanomateriais Nanobiossistemas",
    content:
      "Esta proposta visa a criação de uma rede de pesquisa em nanotecnologia fortemente interligada entre seis instituições (UFRJ, UFF, Inmetro, PUC-RJ, Fiocruz e LNCC) reconhecidas pela alta qualidade na formação de seus pesquisadores e estudantes e de sua produção científica. As equipes interinstitucionais aliarão suas expertises para o desenvolvimento, avaliação de inocuidade, e caracterização de nanomateriais e nanobiossistemas com grande potencial para a fabricação de nanodispositivos e nanoprodutos na área da saúde, para tecnologias de armazenamento e processamento de informação, para geração de energia limpa e preservação do meio ambiente. Além disso, a formação desta Rede contribuíra para a consolidação da pós-graduação em Nanobiossistemas.",
  },
  {
    title:
      "Rede de Vigilância Genômica para SARS-CoV-2 no Brasil, Rússia, Índia, China e África do Sul (NGS-BRICS)",
    content:
      "A Rede de Vigilância Genômica para SARS-CoV-2 no Brasil, Rússia, Índia, China e África do Sul (NGS-BRICS) formará um consórcio que pretende acelerar a transformação de dados genômicos em pesquisas e intervenções clínicas e de saúde pública. Através do sequenciamento genômico total (WGS), análises de bioinformática, métodos matemáticos e epidemiológicos, será possível fazer o rastreamento do vírus até a identificação de clusters de transmissão. A equipe brasileira é composta por cinco Instituições (LNCC, UFRJ, UFMG, UNESP e FEEVALE) que participam da Rede CoronaÔmica-BR, apoiada pelo MCTI, e que já atuam de forma colaborativa na pandemia da COVID-19.",
  },
  {
    title:
      "Sequenciamento de DNA e análises bioinformáticas para metagenômica – METAPETRO",
    content:
      "A metagenômica consiste na análise, independente de cultivo, de genomas presentes em dado habitat. As informações obtidas a partir da análise de metagenomas podem ser usadas para determinar a diversidade de uma comunidade, a presença de microrganismos específicos ou dominantes, rotas metabólicas, a presença de um gene e até a reconstrução de genomas bacterianos. Esse projeto tem por objetivo principal realizar estudos ambientais em áreas influenciadas pela indústria de óleo e gás através de análises metagenômicas. Além de gerar conhecimento sobre a diversidade do ambiente, tem importância para avaliação da degradação do ambiente e proposição de medidas de recomposição dos ecossistemas degradados.",
  },
];

export default function Projects() {
  const t = useTranslations("Projects");
  return (
    <Layout breadcrumb={[{ label: t("title"), link: "#" }]}>
      <NewsList news={projects} title={t("title")} linkLabel={t("link")}/>
    </Layout>
  );
}
