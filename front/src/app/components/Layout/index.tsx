import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  Button,
  GovBRLogo,
  GovLogo,
  Header,
} from "@codeworker.br/govbr-tw-react";
import { buttonVariants } from "@codeworker.br/govbr-tw-react/dist/components/Button";
import {
  faCircleHalfStroke,
  faCookieBite,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
const Layout = ({ children, breadcrumb }: any) => {
  const t = useTranslations("Header");
  return (
    <>
      <div className="block w-[80%] mx-auto">
        <div>
          <Header locator={t("locator")} headerTitle={t("title")}>
            <Header.PrimaryMenu>
              <a href="#">Órgãos do Governo</a>
              <a href="#">Acesso à Informação</a>
              <a href="#">Legislação</a>
              <a href="#">Acessibilidade</a>
            </Header.PrimaryMenu>
            <Header.IconMenu>
              <Button variant="ghost" size="icon">
                <FontAwesomeIcon icon={faCookieBite} />
              </Button>
              <Button variant="ghost" size="icon">
                <FontAwesomeIcon icon={faCircleHalfStroke} />
              </Button>
            </Header.IconMenu>
          </Header>
        </div>
        <div className="block pb-6">
          <img
            src="./images/labinfo-topo.png"
            title={t("title")}
            alt={t("altBanner")}
          />
        </div>
        {breadcrumb && (
          <div className="mb-6">
            
            <Breadcrumb>
              <Button size="icon" variant="ghost">
                <FontAwesomeIcon icon={faHouse} />
              </Button>
              {breadcrumb.map((item: any, index: number) => {
                if (breadcrumb.length === index + 1) {
                  return <span key={index}>{item.label}</span>;
                } else {
                  return (
                    <a
                      href={item.link}
                      className={cn(buttonVariants({ variant: "link" }))}
                      key={index}
                    >
                      {item.label}
                    </a>
                  );
                }
              })}
            </Breadcrumb>
          </div>
        )}
        <main>{children}</main>
      </div>

      <div className="w-[80%] mx-auto flex gap-6 py-12 items-center">
        <div className="flex-1 flex flex-col gap-1 text-sm">
          <span className="font-semibold">
            Laboratório Nacional de Computação Científica
          </span>
          <span>
            Av. Getúlio Vargas, 333, Quitandinha, Petrópolis, RJ, CEP 25651-075
            - Brasil
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <img
            src="./images/marca-lncc-completa-horizontal_aplicacao-com-marca-do-governo_png_positiva.png"
            className="w-[400px]"
          />
        </div>
      </div>
      <div className="bg-govbr-blue-warm-vivid-90 py-6 mt-6">
        <div className="block w-[80%] mx-auto">
          <div className="w-[110px]">
            <GovBRLogo variant="white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
