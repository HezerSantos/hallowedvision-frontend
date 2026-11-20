import React from "react";
import "./PriceTable.scss";

const packageNames = ["Basic", "Standard", "Premium"];

const packageBody = [
  {
    name: "Description",
    content: [
      "Single-page website / landing page\nResponsive design",
      "Multi-page website or small web app\nResponsive design",
      "Full custom web app or website\nAdvanced frontend (React) + backend (Express)\nDatabase integration",
    ],
  },
  {
    name: "Delivery Time",
    content: ["3 days", "7 days", "14 days"],
  },
  {
    name: "Functional Website",
    content: ["Yes", "Yes", "Yes"],
  },
  {
    name: "Number of Pages",
    content: ["1", "3", "8"],
  },
  {
    name: "Revisions",
    content: ["1", "2", "5"],
  },
  {
    name: "Content Upload",
    content: ["No", "Yes", "Yes"],
  },
  {
    name: "E-commerce Functionality",
    content: ["No", "No", "No"],
  },
];

const PriceTable: React.FC = () => {
  return (
    <section className="price-table">
      <div className="price-table__container">
        <div className="price-table__heading">
          <span className="price-table__eyebrow">WHAT'S INCLUDED</span>
          <h2>Compare Our Packages</h2>
          <p>
            Find the right starting point for your next project. Every package
            can be tailored to your needs.
          </p>
        </div>

        <div className="price-table__scroll">
          <table className="price-table__table">
            <thead>
              <tr>
                <th className="price-table__feature-heading">Features</th>
                {packageNames.map((name) => (
                  <th
                    key={name}
                    className={`price-table__package-heading price-table__package-heading--${name.toLowerCase()}`}
                  >
                    {name}
                    {name === "Premium" && (
                      <span className="price-table__recommended">
                        MOST ADVANCED
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {packageBody.map((row) => (
                <tr key={row.name}>
                  <th scope="row" className="price-table__feature">
                    {row.name}
                  </th>

                  {row.content.map((content, index) => (
                    <td
                      key={`${row.name}-${packageNames[index]}`}
                      className={
                        index === 2
                          ? "price-table__value price-table__value--premium"
                          : "price-table__value"
                      }
                    >
                      {content.split("\n").map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          {lineIndex < content.split("\n").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="price-table__disclaimer">
          *Packages are customizable and may be adjusted according to your
          project’s needs. Higher rates may apply for expanded features or
          advanced functionality.
        </p>
      </div>
    </section>
  );
};

export default PriceTable;
