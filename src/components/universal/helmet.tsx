import React from "react"
import { Helmet } from "react-helmet-async"

export const HomeHelmet: React.FC = () => {
    return(
        <Helmet>
            <title>Home | HallowedVisions</title>
            <meta name="description" content="Hallowed Visions - Bringing your vision to life with creativity and technology."/>
            <meta name="keywords" content="Hallowed Visions, web design, creative services, portfolio, contact, business"/>
            <meta name="author" content="Hallowed Visions"/>
            <meta name="robots" content="index, follow"/>
            <link rel="canonical" href="https://www.hallowedvisions.com"/>
        </Helmet>
    )
}

export const PortfolioHelmet: React.FC = () => {
    return(
        <Helmet>
            <title>Hezer Santos - Portfolio | HallowedVisions</title>
            <meta name="robots" content="index, follow"/>
            <meta name="description" content="Explore the portfolio of Hallowed Visions — showcasing modern, secure, and responsive web development projects including e-commerce, cloud, and UI/UX solutions."/>
            <meta name="keywords" content="web developer portfolio, e-commerce projects, React portfolio, Stripe integration, PostgreSQL projects, full-stack development, Hallowed Visions"/>
            <link rel="canonical" href="https://www.hallowedvisions.com/portfolio"/>
        </Helmet>
    )
}

export const PackagesHelmet: React.FC = () => {
    return(
        <Helmet>
            <title>Packages | HallowedVisions</title>
            <meta name="robots" content="index, follow" />
            <meta 
                name="description" 
                content="Explore flexible web development packages from Hallowed Visions. Choose from customizable plans for landing pages, multi-page sites, and full-stack web applications tailored to your needs." 
            />
            <meta 
                name="keywords" 
                content="web development packages, website pricing, custom web development, landing page package, multi-page website plan, full-stack development pricing, Hallowed Visions services" 
            />
            <link rel="canonical" href="https://www.hallowedvisions.com/packages" />
        </Helmet>
    )
}

export const TermsHelmet: React.FC = () => {
    return(
        <Helmet>
            <title>Terms of Service | Hallowed Visions</title>
            <meta
                name="description"
                content="Read the official Terms and Conditions for using Hallowed Visions services. Learn about our technology stack, payments, responsibilities, and legal policies."
            />
            <link rel="canonical" href="https://www.hallowedvisions.com/terms-and-conditions" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Hallowed Visions",
                    "url": "https://www.hallowedvisions.com",
                    "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "contact@hallowedvisions.com",
                    "contactType": "customer support",
                    },
                }),
                }}
            />
        </Helmet>
    )
}

export const ContactHelmet: React.FC = () => {
    return(
        <Helmet>
            <title>Contact & Pricing | Hallowed Visions</title>
            <meta name="title" content="Contact & Pricing | Hallowed Visions – Custom Web Design Solutions"/>
            <meta name="description" content="Get in touch with Hallowed Visions to discuss your custom web design needs. Flexible pricing based on team size, integrations, and project complexity. Let's create together."/>
            <meta name="keywords" content="Hallowed Visions, web design, pricing, contact, custom websites, digital solutions, creative agency, project quote, website development, onboarding support"/>
            <meta name="author" content="Hallowed Visions"/>
            <meta name="robots" content="index, follow"/>

            <link rel="canonical" href="https://www.hallowedvisions.com/contact"/>
        </Helmet>
    )
}

export const NotFoundHelmet: React.FC = () => {
    return(
        <Helmet>
            <title>404 Not Found | HallowedVisions</title>
            <meta name="description" content="Oops! Looks like this page does not exist." />
            <meta name="robots" content="noindex, nofollow" />
        </Helmet>
    )
}