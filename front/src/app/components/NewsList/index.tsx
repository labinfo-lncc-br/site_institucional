import moment from "moment-with-locales-es6";
import { useState } from "react";
import { Button, Input } from "@codeworker.br/govbr-tw-react"; // Ajuste o caminho se necessário
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CardItem from "../CardItem";

const PAGE_SIZE = 6;

const NewsList = ({ news, title, linkLabel="" }: any) => {
  moment.locale("pt-br");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSortToggle = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const handleSearchChange = (e:any) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredNews = news.filter(
    (item: any) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedNews = [...filteredNews].sort((a, b) =>
    sortOrder === "asc"
      ? (new Date(a.createdAt) as any) - (new Date(b.createdAt) as any)
      : (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any)
  );

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedNews = sortedNews.slice(startIndex, startIndex + PAGE_SIZE);
  const totalPages = Math.ceil(filteredNews.length / PAGE_SIZE);

  return (
    <div>
      <div className="flex items-center mb-12">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold">{title}</h1>
        </div>

        <div className="flex gap-6">
          <div className="w-[350px]">
            <Input
              type="text"
              placeholder="Buscar por título ou conteúdo"
              value={searchTerm}
              onChange={handleSearchChange}
              iconPosition="left"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Input>
          </div>

          <Button onClick={handleSortToggle} className="font-normal">
            {sortOrder === "asc"
              ? "Ordenar por Mais Recentes"
              : "Ordenar por Mais Antigas"}
          </Button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-[1fr_1fr_1fr] gap-6">
        {paginatedNews.length > 0 ? (
          paginatedNews.map((item, index) => (
            <CardItem key={index} item={item} linkLabel={linkLabel}/>
          ))
        ) : (
          <p>Nenhuma notícia encontrada.</p>
        )}
      </div>

      {/* Paginação */}
      <div className="flex justify-between mt-6">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="font-normal"
        >
          Página Anterior
        </Button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="font-normal"
        >
          Próxima Página
        </Button>
      </div>
    </div>
  );
};

export default NewsList;
