import PriceTable from "../../components/Pricing/PriceTable/PriceTable";
import PricingHeader from "../../components/Pricing/PricingHeader/PricingHeader";
import "./PricingOverview.scss";

const PricingOverview: React.FC = () => {
  return (
    <div className="pricing-overview">
      <PricingHeader />

      <main className="pricing-overview__main">
        <PriceTable />
      </main>
    </div>
  );
};

export default PricingOverview;
