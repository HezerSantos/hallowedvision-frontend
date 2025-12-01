interface ProjectDetailProps {
    imageUrl: string | undefined
    description: string | undefined
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({imageUrl, description}) => {
    return(
        <>
            <section className="page-section">
                <div className="page-section__child project-detail">
                    <div>
                        <p>{description}</p>
                    </div>
                    <div>
                        <img src={imageUrl} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectDetail