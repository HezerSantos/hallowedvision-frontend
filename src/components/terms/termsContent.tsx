import React from "react"


interface TermsItemProps {
    header: string,
    descriptions: string[]
}
const TermsItem: React.FC<TermsItemProps> = ({header, descriptions}) => {
    return(
        <>
            <div className="terms__item" id={header.toLowerCase().replace(/\s+/g, '')}>
                <h1>{header}</h1>
                {descriptions.map((description, index) => {
                    return(
                        <p key={index}>{description}</p>
                    )
                })}
            </div>
        </>
    )
}

interface TermItemObject {
    header: string,
    descriptions: string[]
}
const termItems: TermItemObject[] = [
    {
        header: "About Hallowed Visions",
        descriptions: [
            "We build tools that help startups and creators launch faster with less friction. Our mission is to simplify the early-stage journey by offering intuitive, secure, and scalable solutions tailored to real-world needs."
        ]
    },
    {
        header: "Our Main Tech Stack",
        descriptions: [
            "The platform is built primarily with Node.js, leveraging its core features for performance and scalability. The frontend is developed using React.js, while Express.js powers the backend API architecture. Authentication is custom-implemented using a suite of trusted and well-maintained NPM libraries, ensuring both flexibility and security.",
            "Data is managed with PostgreSQL, optimized for efficiency with carefully structured queries. All traffic is routed through Cloudflare, providing basic bot protection and performance enhancements. Object storage is handled via Cloudflare’s S3-compatible service, ensuring fast and reliable file delivery."
        ]
    },
    {
        header: "Deployment",
        descriptions: [
            "Deployment is handled via Railway at railway.app, offering streamlined infrastructure management and continuous deployment. User account creation is required to access the platform's core features. While Railway is the primary deployment target, the application is designed to be flexible and can be adapted for other Platform-as-a-Service (PaaS) providers with minimal configuration adjustments.",
        ]
    },
    {
        header: "Services",
        descriptions: [
            "We offer a range of services with a primary focus on web development, catering to eCommerce platforms, startups, small businesses, and personal projects. While mobile app development is currently unavailable, future support is planned.",
            "Each website can be equipped with a custom CMS for an additional cost, tailored to the client’s needs. All projects include basic security integrations to protect against common vulnerabilities such as XSS, CSRF, and unauthorized access, with thorough input validation and data sanitation practices in place."
        ]
    },
    {
        header: "Payment",
        descriptions: [
            "Our pricing is flexible and tailored to each project’s unique needs, with a base rate of $35/hour. Final costs depend on factors such as system design, complexity, third-party integrations, PaaS requirements, external APIs, and project timeline.",
            "A 20% upfront deposit is required to initiate work, covering project planning, communication, and initial design. Final payments can be made upfront or via monthly installments.",
            "We also offer a fully managed deployment service, starting at $20/month, which scales based on site usage and traffic. This option is ideal for non-technical clients, as it includes database management, hosting, and system upkeep. Alternatively, for those who prefer full ownership, we also support complete code handoff and deployment independence.",
        ]
    },
    {
        header: "Maintenance",
        descriptions: [
            "If you opt into our managed deployment, we will handle updates, hosting, backups, and monitoring.",
            "If self-managed, you are responsible for maintaining and hosting the project post-delivery."
        ]
    },
    {
        header: "Client Responsibilities",
        descriptions: [
            "You agree to provide timely communication, feedback, and necessary materials (such as branding assets, copy, etc.)",
            "Failure to communicate within 14 days may result in project suspension."
        ]
    },
    {
        header: "Security",
        descriptions: [
            "We implement basic security measures including:",
            "-CSRF protection",
            "-XSS prevention",
            "-Input validation and data sanitation",
            " However, we do not guarantee complete protection against all threats and recommend clients maintain proper security hygiene on their end."
        ]
    },
    {
        header: "Refund Policy",
        descriptions: [
            "The 20% upfront deposit is non-refundable.",
            "Additional refunds (if any) are handled on a case-by-case basis depending on work completed and justification."
        ]
    },
    {
        header: "Limitation of Liability",
        descriptions: [
            "We are not liable for any direct or indirect losses, downtime, or damages arising from the use of our services or third-party integrations."
        ]
    },
    {
        header: "Modifications",
        descriptions: [
            "We reserve the right to modify these Terms at any time. Continued use of our services after updates constitutes acceptance of the new Terms."
        ]
    }
]

const TermsContent: React.FC = () => {
    return(
        <>
            <main>
                {termItems.map((term, index) => {
                    return(
                        <TermsItem 
                            key={`TI${index}`}
                            header={term.header}
                            descriptions={term.descriptions}
                        />
                    )
                })}
            </main>
        </>
    )
}

export default TermsContent