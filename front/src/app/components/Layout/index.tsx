import { Button, GovBRLogo, Header } from "@codeworker.br/govbr-tw-react";
import {
  faCircleHalfStroke,
  faCookieBite,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
const Layout = ({ children }: any) => {
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
        <main>{children}</main>
      </div>
      <div className="bg-govbr-blue-warm-vivid-90 py-6 mt-6">
        <div className="block w-[80%] mx-auto">
            <div className="w-[110px]">
                <GovBRLogo variant="white"/>
            </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
