
interface EmailErrorProps {
    message: string
}
const EmailMessage: React.FC<EmailErrorProps> = ({message}) => {
    return(
        <>
            <div className={"email-error"}>
                <p>Alert: {message}</p>
            </div>
        </>
    )
}

export default EmailMessage