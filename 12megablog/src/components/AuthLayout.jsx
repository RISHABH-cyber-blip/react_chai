import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function AuthLayout({children,authentication=true}) {
    const authState=useSelector(state=>state.auth.status)

    if (authentication !== authState) {
        return <Navigate to={authentication ? '/login' : '/'} replace />
    }
    return children
}