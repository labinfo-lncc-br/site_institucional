import { cn } from "@/lib/utils";
import { Button, Card } from "@codeworker.br/govbr-tw-react";
import { buttonVariants } from "@codeworker.br/govbr-tw-react/dist/components/Button";
import moment from "moment-with-locales-es6";
import { useTranslations } from "next-intl";

const CardItem = ({ item, width="", linkLabel = "" }: any) => {
  const t = useTranslations("CardItem");
  const { title, imageUrl, content, createdAt, link } = item;
  const hasVideo = (imageUrl.split("."))[1] === "youtube"



  const YoutubeEmbed = ({ imageUrl }:any) => {
    const embedId = (imageUrl.split("v="))[1];
    console.log(embedId)
    return <div className="overflow-hidden h-[0px] relative pb-[56.25%]">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="left-0 top-0 h-full w-full absolute"
      />
    </div>
  };

  return (
    <Card className={cn(width)}>
      {imageUrl && 

        hasVideo ? <YoutubeEmbed imageUrl={imageUrl} /> :
        <img src={imageUrl} alt={`${t("coverAlt")} ${title}`} title={title} />
      }
      <Card.Header className="max-h-[150px] flex flex-col items-center w-full text-left">
        <h2 className="text-govbr-blue-warm-vivid-70 text-base w-full text-left">{title}</h2>
      </Card.Header>
      <Card.Main className="pb-6 text-sm ">
       { createdAt &&  <span className="text-sm font-normal text-govbr-gray-60 block mb-2">
          {t("publish")} {moment(createdAt).format("LL")}
        </span> }
        <span className="max-h-[300px] overflow-auto block pr-6">{content}</span>
      </Card.Main>
      {link && (
        <Card.Footer>
          <a href={link} className={cn(buttonVariants({variant:"default"}), "font-normal")}>{linkLabel}</a>
        </Card.Footer>
      )}
    </Card>
  );
};

export default CardItem;
