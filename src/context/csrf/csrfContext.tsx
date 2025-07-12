import { createContext } from "react";

interface CsrfContextType {
    csrfToken: string | null
    decodeCookie: (cookie: string) => void
}

const CsrfContext = createContext<CsrfContextType | null>(null)

export default CsrfContext