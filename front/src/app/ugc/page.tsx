"use client";
import moment from "moment-with-locales-es6";
import Layout from "../components/Layout";
import { useTranslations } from "next-intl";
import { Card } from "@codeworker.br/govbr-tw-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@codeworker.br/govbr-tw-react/dist/components/Button";

export default function UGC() {
  moment.locale("pt-br");
  const t = useTranslations("UGC");
  return (
    <Layout breadcrumb={[{ label: t("title"), link: "#" }]}>
      <div className="flex items-center mb-12">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-govbr-blue-warm-vivid-70">
            {t("title")}
          </h1>
        </div>
      </div>
      
      <div className="flex gap-6">
        <Card className="w-1/2">
          <img src="images/ugc-1.png" />
          <Card.Main className="flex flex-col gap-3 py-3">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
          </Card.Main>
        </Card>
        <Card className="w-1/2">
          <img src="images/ugc-2.png" />
          <Card.Main className="flex flex-col gap-3 py-3">
            <p>{t("p3")}</p>
            <p>{t("p4")}</p>
          </Card.Main>
        </Card>
      </div>
      <div className="py-6 my-6 text-center border-y border-govbr-gray-10
      ">
      <a href="#" className={cn(buttonVariants({variant:"default"}), "font-normal")}>{t('link')}</a>
      </div>
    </Layout>
  );
}
