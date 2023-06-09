import { Link } from "react-router-dom";
import { useEstadosGlobalesContext } from "./global.context";
import { links } from "./links";
import "./NotFoundStyle.css";

const NotFound = () => {
  const { theme } = useEstadosGlobalesContext();
  return (
    <section className={`page_404 ${theme.color}`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center h404">ERROR 404</h1>
              </div>

              <div className={`contant_box_404 `}>
                <h3 className="h2">Lo sentimos esta pagina no existe!</h3>

                <Link to={links.home.path} className="link_404">
                  {" "}
                  HOME
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
