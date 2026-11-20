import Header from "../../components/Home/Header/Header";
import { useGetHomeAssetsQuery } from "../../services/homeService";

import "./Home.scss";
import ProjectPreview from "../../components/Home/ProjectPreview/ProjectPreview";
import QuickContact from "../../components/Home/QuickContact/QuickContact";
import EmailForm from "../../components/Home/EmailForm/EmailForm";

const HomePage = () => {
  const { data } = useGetHomeAssetsQuery();

  return (
    <>
      <Header modelUrl={data?.url ?? ""} />
      <main className="home__main">
        <ProjectPreview />
        <QuickContact />
        <EmailForm />
      </main>
    </>
  );
};

export default HomePage;
