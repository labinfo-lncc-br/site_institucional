import { cn } from "@/lib/utils";
import { Button, Card } from "@codeworker.br/govbr-tw-react";
import { buttonVariants } from "@codeworker.br/govbr-tw-react/dist/components/Button";
import moment from "moment-with-locales-es6";
import { useTranslations } from "next-intl";

const CardItem = ({ item, width="", linkLabel = "" }: any) => {
  const t = useTranslations("CardItem");
  const { title, imageUrl, content, createdAt, link } = item;
  return (
    <Card className={cn(width)}>
      {imageUrl && (
        <img src={imageUrl} alt={`${t("coverAlt")} ${title}`} title={title} />
      )}
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
