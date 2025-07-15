import { ReactNode, useState } from "react";
import CsrfContext from "./csrfContext";
import { jwtDecode } from 'jwt-decode'
import axios from "axios";
import api from "../../app.config";

interface CsrfProviderProps {
    children: ReactNode
}

interface GetCookieType {
    (cookie: string): string | undefined
}

interface DecodeCookieType {
    (cookie: string): string
}

interface DecodedType {
    csrfToken: string
}

const CsrfProvider:React.FC<CsrfProviderProps> = ({children}) => {
    const [ csrfToken, setCsrfToken ] = useState<string | null>(null)

    const getCookie: GetCookieType = (cookie) => {
        const cookies: string[] = document.cookie.split(";")
        const cookieMap: Map<string, string> = new Map(
        cookies
            .map(cookie => cookie.split("=").map(str => str.trim())) // Split and trim
            .filter(([key, value]) => key && value) // Ensure both key and value are present
            .map(([key, value]) => [key, value] as [string, string]) // Type cast to [string, string] for safety
        );
        return cookieMap.get(cookie)
    }

    const decodeCookie: DecodeCookieType = (cookie) => {
        const targetCookie: string | undefined = getCookie(cookie)
        const decoded: DecodedType = jwtDecode(String(targetCookie))
        setCsrfToken(decoded.csrfToken)
        return decoded.csrfToken
    }

    const getCsrf = async() => {
        try{
            await axios.get(`${api.url}/api/csrf`)
            const newCsrf = decodeCookie("__Secure-auth.csrf")
            return newCsrf
        } catch(error){
            console.error(error)
        }
    }

    return(
        <CsrfContext.Provider value={{csrfToken, decodeCookie, getCsrf}}>
            {children}
        </CsrfContext.Provider>
    )
}

export default CsrfProvider