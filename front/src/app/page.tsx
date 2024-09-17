"use client";
import { useTranslations } from "next-intl";
import Layout from "./components/Layout";
import { Button, Card, FeaturedTitle } from "@codeworker.br/govbr-tw-react";
import moment from "moment-with-locales-es6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const news = [
  {
    title:
      "Ferramentas de bioinformática e computação de alto desempenho auxiliam médicos na aplicação de tratamento individualizado para pacientes.",
    abstract:
      "Pesquisadores do Labinfo-LNCC realizaram o sequenciamento genético de 13 pacientes com Erros Inatos da Imunidade (EIIs), atendidos pelo SUS no Rio de Janeiro. O estudo identificou as causas genéticas das doenças, possibilitando tratamentos individualizados e mais eficazes, melhorando a qualidade de vida dos pacientes.",
    imageUrl: "./images/supercomputador-santos-dumont.png",
    createdAt: "Mon Sep 16 2024 15:34:55 GMT-0300",
  },
  {
    title:
      "Grupo de Pesquisa compartilha dados para auxiliar pesquisadores e médicos no diagnóstico de doenças.",
    abstract:
      "Pesquisadores do Labinfo-LNCC sequenciaram o DNA de 20 pacientes com Erros Inatos da Imunidade (EIIs) e compartilharam dados genéticos com a comunidade científica global. O estudo visa melhorar o diagnóstico dessas doenças genéticas raras, facilitando o desenvolvimento de tratamentos mais eficazes em todo o mundo.",
    imageUrl: "./images/supercomputador-santos-dumont.png",
    createdAt: "Mon Sep 16 2024 15:34:55 GMT-0300",
  },
  {
    title:
      "Grupo de pesquisa Labinfo-LNCC desenvolve e disponibiliza gratuitamente ferramenta computacional como um pacote em linguagem R.",
    abstract:
      "Pesquisadores do Labinfo-LNCC desenvolveram o DEGRE, uma nova ferramenta computacional que melhora a identificação de Genes Diferencialmente Expressos (GDEs) ao incluir efeitos aleatórios em análises de RNA-Seq. Disponível gratuitamente em R, o DEGRE foi validado com dados simulados e reais, mostrando-se eficaz na identificação de GDEs em experimentos complexos, como em pacientes com transtorno bipolar.",
    imageUrl: "./images/supercomputador-santos-dumont.png",
    createdAt: "Mon Sep 16 2024 15:34:55 GMT-0300",
  },
];

function SideContent({ contentKey, imageUrl }: any) {
  const t = useTranslations("Home");
  return (
    <Card className="w-1/2">
      <img src={imageUrl} />
      <Card.Main>
        <ul className="flex flex-col">
          {t(contentKey)
            .split("#")
            .map((text: string) => (
              <li className="border-b border-govbr-gray-10 py-6">{text}</li>
            ))}
        </ul>
      </Card.Main>
    </Card>
  );
}

export default function Home() {
  moment.locale("pt-br");
  const t = useTranslations("Home");
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex gap-6 mb-6">
          <SideContent
            imageUrl="./images/supercomputador-santos-dumont.png"
            contentKey="leftContent"
          />
          <SideContent
            imageUrl="./images/virus.png"
            contentKey="rightContent"
          />
        </div>
        <FeaturedTitle>
          <FontAwesomeIcon icon={faNewspaper} />
          <h1>
            <span className="text-nowrap">Últimas Notícias</span>
          </h1>
        </FeaturedTitle>
        <div className="flex gap-6">
          {news.map(({ title, imageUrl, abstract, createdAt }: any) => (
            <Card className="w-1/3">
              <img src={imageUrl} />
              <Card.Header>
                <h2 className="text-govbr-blue-warm-vivid-70 mb-3 text-base">{title}</h2>
                <span className="text-sm font-normal text-govbr-gray-60">
                  Publicado em {moment(createdAt).format("LL")}
                </span>
              </Card.Header>
              <Card.Main className="pb-6 text-sm">{abstract}</Card.Main>
            </Card>
          ))}
        </div>
        <div className="py-6 block mx-auto">
          <Button variant="outline" density="low">Mais Notícias</Button>
        </div>
      </div>
    </Layout>
  );
}
