import { useNavigate, NavLink, Link } from "react-router-dom"
import * as ROUTES from '../../constants/routes'
import FirebaseContext from "../../context/firebaseContext"
import { useContext, useRef, useState, useEffect } from 'react'
import bookLogo from '../../assets/images/main-logo.svg'

interface isActiveType {
    isActive: boolean
}

const NavBar = () => {
    const styles = ({ isActive }: isActiveType) => ({ color: isActive ? "black" : "gray" });
    const firebase:any = useContext(FirebaseContext)
    const navigate = useNavigate()
    const dialogRef:any = useRef()
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    useEffect(() => {
        if (firebase.auth.currentUser)
            setIsUserLoggedIn(true)
    }, [])

    return (
        <div className="nav-wrapper">
            <nav>
                <div className="logo">
                    <h1>Rare <br/> Reads</h1>
                    <img src={bookLogo} />
                </div>

                <div className="left">
                    <div className="cart-nav-link">
                        <Link to='/cart' className="link">Cart</Link>
                    </div>

                    {
                        isUserLoggedIn ?
                            <div className="user-details" onClick={() => dialogRef?.current?.showModal()}>
                                <img src={firebase.auth.currentUser.photoURL} />
                                <p>{firebase.auth.currentUser.displayName}</p>
                            </div>
                            :
                            <NavLink to={ROUTES.SIGN_IN} style={styles}>
                                <button className="sign-in-btn" onClick={() => navigate('./signin')}>SignIn</button>
                            </NavLink>
                    }

                    <dialog ref={dialogRef} className="dialog">
                        <p className="close" onClick={() => dialogRef?.current?.close()}>x</p>
                        <button onClick={handleSignOut}>Sign out</button>
                    </dialog>
                </div>
            </nav>
        </div>
    )
    function handleSignOut() {
        firebase.signOut()
        setIsUserLoggedIn(false)
        dialogRef?.current?.close()
    }
}
export default NavBar