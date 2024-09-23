"use client";
import moment from "moment-with-locales-es6";
import { useTranslations } from "next-intl";
import Layout from "../components/Layout";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@codeworker.br/govbr-tw-react/dist/components/Button";
import { Input, Button } from "@codeworker.br/govbr-tw-react"; // Importando Input e Button
import { useState } from "react";

export default function Team() {
  moment.locale("pt-br");
  const t = useTranslations("Team");

  const [filter, setFilter] = useState("");
  const [isSorted, setIsSorted] = useState(true);

  const team = [
    {
      _id: "620ae494d64dae4a19637029",
      nome: "Alexandra Lehmkuhl Gerber",
      cargo: "Técnica de laboratório",
      lattes: "http://lattes.cnpq.br/9438292906838128",
      createdAt: "2022-02-14T23:24:04.621Z",
      avatar: "Alexandra Lhemkuhl Gerber.png",
      __v: 0,
    },
    {
      _id: "620ae4bcd64dae4a1963702f",
      nome: "Amanda Andrade",
      cargo: "Estudante de doutorado",
      lattes: "http://lattes.cnpq.br/9504660826034401",
      createdAt: "2022-02-14T23:24:44.496Z",
      __v: 0,
    },
    {
      _id: "620ae4cdd64dae4a19637032",
      nome: "Ana Paula de Campos Guimarães",
      cargo: "Técnica de laboratório",
      lattes: "http://lattes.cnpq.br/0414530315068512",
      createdAt: "2022-02-14T23:25:01.288Z",
      __v: 0,
    },
    {
      _id: "620ae4dfd64dae4a19637035",
      nome: "Ana Tereza Vasconcelos",
      cargo: "Coordenador do grupo",
      lattes: "http://lattes.cnpq.br/8989199088323836",
      createdAt: "2022-02-14T23:25:19.251Z",
      __v: 0,
    },
    {
      _id: "620ae523d64dae4a19637041",
      nome: "Ellen dos Santos Corrêa",
      cargo: "Analista de Sistemas",
      lattes: "http://lattes.cnpq.br/1316388357541014",
      createdAt: "2022-02-14T23:26:27.434Z",
      __v: 0,
    },
    {
      _id: "620ae536d64dae4a19637044",
      nome: "Fabiola Marques de Carvalho",
      cargo: "Pós-doutorando",
      lattes: "http://lattes.cnpq.br/6462801566642820",
      createdAt: "2022-02-14T23:26:46.038Z",
      __v: 0,
    },
    {
      _id: "620ae549d64dae4a19637047",
      nome: "Guilherme Cordenonsi da Fonseca",
      cargo: "Pós-doutorando",
      lattes: "http://lattes.cnpq.br/9426130714041956",
      createdAt: "2022-02-14T23:27:05.147Z",
      __v: 0,
    },
    // {
    //   _id: "620ae568d64dae4a1963704d",
    //   nome: "Kary Ann del Carmen O. Guatherot",
    //   cargo: "Pesquisador",
    //   lattes: "http://lattes.cnpq.br/1435339422167961",
    //   createdAt: "2022-02-14T23:27:36.847Z",
    //   __v: 0,
    // },
    {
      _id: "620ae58fd64dae4a19637053",
      nome: "Luciane Prioli Ciapina Guedes",
      cargo: "Pesquisador",
      lattes: "http://lattes.cnpq.br/1906825541995385",
      createdAt: "2022-02-14T23:28:15.846Z",
      __v: 0,
    },
    {
      _id: "620ae5a0d64dae4a19637056",
      nome: "Luiz Gonzaga Paula de Almeida",
      cargo: "Analista de Sistemas",
      lattes: "http://lattes.cnpq.br/3708867677533851",
      createdAt: "2022-02-14T23:28:32.154Z",
      __v: 0,
    },
    {
      _id: "620ae5afd64dae4a19637059",
      nome: "Maiana de Oliveira Cerqueira e Costa",
      cargo: "Pós-doutorando",
      lattes: "http://lattes.cnpq.br/8028103771845084",
      createdAt: "2022-02-14T23:28:47.662Z",
      __v: 0,
    },
    // {
    //   _id: "620ae5c0d64dae4a1963705c",
    //   nome: "Marco Antonio Silva Cabral",
    //   cargo: "Iniciacao Cientifica",
    //   lattes: "http://lattes.cnpq.br/0081931606846738",
    //   createdAt: "2022-02-14T23:29:04.849Z",
    //   __v: 0,
    // },
    {
      _id: "620ae5d3d64dae4a1963705f",
      nome: "Marisa Fabiana Nicolas",
      cargo: "Pesquisador",
      lattes: "http://lattes.cnpq.br/0717161560405537",
      createdAt: "2022-02-14T23:29:23.510Z",
      __v: 0,
    },
    // {
    //   _id: "620ae5e7d64dae4a19637062",
    //   nome: "Micaella Coelho Valente de Paula",
    //   cargo: "Estudante de mestrado",
    //   lattes: "http://lattes.cnpq.br/0070606281306061",
    //   createdAt: "2022-02-14T23:29:43.707Z",
    //   __v: 0,
    // },
    {
      _id: "620ae5f9d64dae4a19637065",
      nome: "Natália Fernandes Aquino",
      cargo: "Administrativo",
      lattes: "http://lattes.cnpq.br/4035185730726056",
      createdAt: "2022-02-14T23:30:01.733Z",
      __v: 0,
    },
    {
      _id: "620ae60ad64dae4a19637068",
      nome: "Otávio José Bernardes Brustolini",
      cargo: "Pós-doutorando",
      lattes: "http://lattes.cnpq.br/0928279245502410",
      createdAt: "2022-02-14T23:30:18.085Z",
      __v: 0,
    },
    // {
    //   _id: "620ae652d64dae4a19637074",
    //   nome: "Vinícius Prata Klôh",
    //   cargo: "Analista de Sistemas",
    //   lattes: "http://lattes.cnpq.br/3159426558354291",
    //   createdAt: "2022-02-14T23:31:30.213Z",
    //   __v: 0,
    // },
    // {
    //   _id: "63875fd063f8fc06f85bed20",
    //   nome: "Rafael de Souza Terra",
    //   cargo: "Estudante de doutorado",
    //   lattes: "http://lattes.cnpq.br/8426017745859480",
    //   createdAt: "2022-11-30T13:51:12.526Z",
    //   __v: 0,
    // },
    {
      _id: "6387602863f8fc06f85bed25",
      nome: "Douglas Terra Machado",
      cargo: "Estudante de doutorado",
      lattes: "http://lattes.cnpq.br/2411582284298442",
      createdAt: "2022-11-30T13:52:40.604Z",
      __v: 0,
    },
    {
      _id: "6387608963f8fc06f85bed28",
      nome: "Beatriz do Carmo Dias",
      cargo: "Estudante de doutorado",
      lattes: "http://lattes.cnpq.br/0307907070813779",
      createdAt: "2022-11-30T13:54:17.985Z",
      __v: 0,
    },
    // {
    //   _id: "638760b863f8fc06f85bed2b",
    //   nome: "Samella Pontes Salles",
    //   cargo: "Estudante de mestrado",
    //   lattes: "http://lattes.cnpq.br/4640412083856656",
    //   createdAt: "2022-11-30T13:55:04.115Z",
    //   __v: 0,
    // },
    {
      _id: "6387632f63f8fc06f85bed45",
      nome: "Cristina dos Santos Ferreira",
      cargo: "Pós-doutorando",
      lattes: "http://lattes.cnpq.br/1887253647357060",
      createdAt: "2022-11-30T14:05:35.073Z",
      __v: 0,
    },
    // {
    //   _id: "638764e963f8fc06f85bed49",
    //   nome: "Marcele Laux",
    //   cargo: "Pós-doutorando",
    //   lattes: "http://lattes.cnpq.br/0409296274206133",
    //   createdAt: "2022-11-30T14:12:57.389Z",
    //   __v: 0,
    // },
    // {
    //   _id: "6390e6b363f8fc06f85bee7e",
    //   nome: "Lucas da Cruz Silva",
    //   cargo: "Iniciacao Cientifica",
    //   lattes: "http://lattes.cnpq.br​/2643095279010495",
    //   createdAt: "2022-12-07T19:17:07.567Z",
    //   __v: 0,
    // },
    // {
    //   _id: "6390e72863f8fc06f85bee81",
    //   nome: "Guilherme Freire da Silva Dornelas",
    //   cargo: "Iniciacao Cientifica",
    //   lattes: "http://lattes.cnpq.br/5344055287871399",
    //   createdAt: "2022-12-07T19:19:04.481Z",
    //   __v: 0,
    // },
    {
      _id: "6509ef71cb9aef06f14f3120",
      nome: "Alan Tardin da Silva",
      cargo: "Pós-doutorando",
      lattes: "http://lattes.cnpq.br/1958107705552393",
      createdAt: "2023-09-19T18:58:57.203Z",
      __v: 0,
    },
  ];

  const filteredTeam = team.filter((member) =>
    member.nome.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedTeam = [...filteredTeam].sort((a, b) => {
    return isSorted
      ? a.nome.localeCompare(b.nome)
      : b.nome.localeCompare(a.nome);
  });

  const toggleSort = () => {
    setIsSorted((prev) => !prev);
  };

  return (
    <Layout breadcrumb={[{ label: t("title"), link: "#" }]}>
      <div className="flex items-center mb-12">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold">{t("title")}</h1>
        </div>
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Filtrar por nome"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-60"
          />
          <Button onClick={toggleSort} className="font-normal">
            {isSorted ? "Ordenar Z-A" : "Ordenar A-Z"}
          </Button>
        </div>
      </div>
      <div>
        <ul className="grid grid-cols-[1fr_1fr] gap-12">
          {sortedTeam.map((item) => (
            <li key={item._id} className="flex gap-3 border-b border-govbr-gray-10 pb-3 items-center">
              <div>
                <img
                  src={`/images/${item.nome}.png`}
                  title={item.nome}
                  className="rounded-full w-20"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <span className="text-govbr-blue-warm-vivid-70 font-semibold">
                  {item.nome}
                </span>
                <span className="italic text-govbr-gray-60">{item.cargo}</span>
              </div>
              <div>
                <a
                  href={item.lattes}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "font-normal"
                  )}
                >
                  {t("link")}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
