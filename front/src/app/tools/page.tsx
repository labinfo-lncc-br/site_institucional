"use client";
import { useTranslations } from "next-intl";
import Layout from "../components/Layout";
import CardItem from "../components/CardItem";
import NewsList from "../components/NewsList";

const projects = [
  {
    title: "Análise de expressão gênica de Mycoplasma hyopneumoniae",
    content:
      "Esta base de dados agrega informações sobre aspectos funcionais, como a interação patógeno-hospedeiro, fatores de virulência, entre outros, de duas linhagens da bactéria Mycoplasma hyopneumoniae sequenciadas no programa Genoma Sul.",
    link: "http://www.genesul.lncc.br/proteome-bin/login1.cgi",
  },
  {
    title: "Astrocyte",
    content:
      "Experiment of Astrocytes cells infected by four virus: Chikungunya, Mayaro, Oropouche and Zik.",
    link: "http://biotools.labinfo.lncc.br/astrocitovirus_data/",
  },
  {
    title: "Atlas T4SS",
    content:
      "Esta base de dados curada manualmente descreve uma grande quantidade de proteínas do sistema de secreção do tipo IV descritas em bactérias gram-negativas e gram-positivas, bem como em Archeas.",
    link: "http://www.t4ss.lncc.br/",
  },
  {
    title: "Banco de dados Laminina",
    content:
      "Esta base de dados foi desenvolvida com o objetivo de unificar a enorme quantidade de informações sobre lâminas na literatura como em outros bancos de dados. As lâminas são proteínas da matriz extracelular que estão envolvidas em muitos processos biológicos, incluindo o processo de migração de células do sistema hematopoiético. O Banco de Dados laminina é uma grande fonte de referência em estudos com lâminas, com particular ênfase para o sistema hematopoiético. Esta base de dados tem como objetivo fornecer informações sobre curadoria de proteína e sua estrutura genética. Além disso, podemos encontrar informação relacionada com a expressão do gene, a distribuição de tecidos, aplicação terapêutica de proteínas, e as relações moleculares de proteínas em diferentes vias.",
    link: "http://www.lm.lncc.br/",
  },
  {
    title: "Bioinfo-Portal",
    content:
      "Portal disponível contendo programas de bioinformática e workflows científicos para genômica comparativa e filogenia modelados com os Sistemas de Gerência de Workflows Científicos Swift e SciCumulus, acoplado ao S.Dumont.",
    link: "https://bioinfo.lncc.br/index.php?pg=rnbio",
  },
  {
    title: "Brazilian Microbiological Resource Center (BMRC)",
    content:
      "O Centro de Recursos Microbiológicos Brasileiro (BMRC) é um centro de informação e de referência para a coleta, manutenção, caracterização (morfológica, fisiológica e genética), e sobre a disponibilidade de microorganismos (incluindo células, DNA, genes, plasmídeos e vetores) de coleções brasileiras; além de oferecer serviços de autenticação e validação de instituições e organizações. Inicialmente, o projeto teve como objetivo incluir informações sobre bactérias diazotróficas e de promotores de crescimento vegetal, a partir de coleções de culturas do Sul e do Centro-Oeste brasileiro. Devido à grande demanda de outras coleções brasileiras, o projeto foi reformulado. Atualmente, BMRC inclui uma rede mais ampla de informações sobre os microrganismos de coleções brasileiras.",
    link: "http://www.bmrc.lncc.br/",
  },
  {
    title: "CTPedia",
    content:
      "O banco de dados CTPedia contém informações já disponíveis sobre tipos específicos de antígenos, conhecidos como antígenos câncer-testículos. Estes antígenos são moléculas protéicas, as quais são expressas em dois tipos de tecidos normais: testículos e ovários. No entanto, esses antígenos também são expressos em várias formas de câncer. Estudos adicionais indicaram que estes antígenos CT podem ser úteis no desenvolvimento de terapias do cancro que sejam menos invasivas.",
    link: "http://www.cta.lncc.br/",
  },
  {
    title: "EpiCurator",
    content:
      "Ferramenta de imunoinformática para seleção mais acurada de epítopos, a partir das informações genéticas de SARS-CoV-2.",
    link: "https://epicurator.sabia.lncc.br/",
  },
  {
    title: "MamMiBase",
    content:
      "É uma base de dados desenvolvida para ajudar pesquisadores em estudos filogenéticos na recuperação de sequências genéticas mitocondriais.",
    link: "http://www.mammibase.lncc.br/",
  },
  {
    title: "Pathogenic Yeast Cryptococcus",
    content:
      "The pathogenic yeast Cryptococcus neoforms H99 treated with sakuranetin and mutated in gpp2. gpp2 is involved in glycerol biosynthesis. Sakuranetin is a flavan-on, the 7-methoxy derivative of naringenin, found in Polymnia fruticosa and rice, where it acts as a phytoalexin against spore germination of Pyricularia oryzae.",
    link: "http://biotools.labinfo.lncc.br/cryptococcus",
  },
  {
    title: "System for Automated Bacterial Integrated Annotation - SABIA",
    content:
      "Sistema para montagem e anotação funcional e estudos comparativos de genomas de procariotos, eucariotos, exomas, transcriptomas e metagenomas, acoplado ao S.Dumont.",
    link: "https://app.sabia.lncc.br/signin",
  },
  {
    title: "Target Pathogen in Klebsiella pneumoniae Kp13",
    content:
      "Ferramenta de bioinformática para estudos de priorização de alvos em patógenos.",
    link: "http://target.sbg.qb.fcen.uba.ar/patho/genome/Kp13",
  },
  {
    title: "Taxonomia Online de Procariotos",
    content:
      "Define esquemas taxonômicos padrão para a classificação, identificação e tipificação de bactérias dos gêneros Vibrios, Stenotrophomonas e Rhizobium, com base na análise da sequência multilocus. O banco de dados tem informações sobre as estirpes de relevância ecológica, agrícola, clínica e daquelas com distribuição ubíqua.",
    link: "http://www.taxvibrio.lncc.br/",
  },
  {
    title: "Tractor DB",
    content:
      "Tractor_DB (versão 2) é um conjunto de predições computacionais de sítios de ligação de fatores de transcrição (TFs) em genomas de proteobacteria. Estas predições foram geradas usando dois métodos computacionais complementares. O primeiro método trabalha com matrizes de peso, que são construídas usando os locais de ligação de TFs conhecidos, visando identificar novos Fatores de Transcrição. O segundo cria expressões comuns dos locais de ligação conhecidos e identifica potenciais locais ortólogos. Este banco de dados foi construído em uma colaboração entre Brasil, Cuba e México.",
    link: "http://www.tractor.lncc.br/",
  },
];

export default function Projects() {
  const t = useTranslations("Tools");
  return (
    <Layout breadcrumb={[{ label: t("title"), link: "#" }]}>
      <NewsList news={projects} title={t("title")} linkLabel={t('link')}/>
    </Layout>
  );
}
