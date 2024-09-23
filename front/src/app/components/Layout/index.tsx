import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  Button,
  FlyOut,
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
          <Header locator={t("locator")} headerTitle={t("title")} login={false}>
            <Header.PrimaryMenu>
            <a href="/" className="text-sm">
                Página Inicial
              </a>
              <a href="/posts" className="text-sm">
                Notícias
              </a>
              <a href="/projects" className="text-sm">
                Projetos
              </a>
              <a href="/papers" className="text-sm">
                Publicações
              </a>
              <a href="/tools" className="text-sm">
                Ferramentas
              </a>

              <FlyOut>
                <FlyOut.Toggle>
                  <a href="#" className="text-sm">
                    COVID-19
                  </a>
                </FlyOut.Toggle>
                <FlyOut.Content>
                  <ul className="flex flex-col gap-3 w-auto bg-govbr-gray-2 p-6 rounded-md text-nowrap border border-govbr-gray-10">
                    <li>
                      <a
                        href="http://www.corona-omica.br-mcti.lncc.br/"
                        className="text-sm"
                        target="_blank"
                      >
                        Corona-ômica BR
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://www.corona-omica.rj.lncc.br/"
                        className="text-sm"
                        target="_blank"
                      >
                        Corona-ômica RJ
                      </a>
                    </li>
                  </ul>
                </FlyOut.Content>
              </FlyOut>

              <a href="/team" className="text-sm">
                Participantes
              </a>
              <a href="/ugc" className="text-sm">
                UGC
              </a>
            </Header.PrimaryMenu>
            {/* <Header.IconMenu>
              <Button variant="ghost" size="icon">
                <FontAwesomeIcon icon={faCookieBite} />
              </Button>
              <Button variant="ghost" size="icon">
                <FontAwesomeIcon icon={faCircleHalfStroke} />
              </Button>
            </Header.IconMenu> */}
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
