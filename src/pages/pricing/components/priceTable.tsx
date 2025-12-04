const packageNames = ["Basic", "Standard", "Premium"]
const packageBody = [
  {
    name: "Description",
    content: [
      "Single-page website / landing page Responsive design",
      "Multi-page website or small web app Responsive design",
      "Full custom web app or website\nAdvanced frontend (React) + backend (Express) Database integration"
    ]
  },
  {
    name: "Delivery Time",
    content: [
      "3 days",
      "7 days",
      "14 days"
    ]
  },
  {
    name: "Functional Website",
    content: [
      "Yes",
      "Yes",
      "Yes"
    ]
  },
  {
    name: "Number of Pages",
    content: [
      "1",
      "3",
      "8"
    ]
  },
  {
    name: "Revisions",
    content: [
      "1",
      "2",
      "5"
    ]
  },
  {
    name: "Content Upload",
    content: [
      "No",
      "Yes",
      "Yes"
    ]
  },
  {
    name: "E-commerce Functionality",
    content: [
      "No",
      "No",
      "No"
    ]
  }
];

const PriceTable: React.FC = () => {
    return(
        <>
            <section className="page-section">
                <div className="page-section__child price-table">
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    {packageNames.map((n, i) => {
                                        return(
                                            <th key={i}>
                                                {n}
                                            </th>
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {packageBody.map((row, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{row.name}</td>
                                            {row.content.map((content, index) => {
                                                return(
                                                    <td key={index}>{content}</td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <p>*Packages are customizable and may be adjusted according to your project’s needs. Higher rates may apply for expanded features or advanced functionality.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PriceTable