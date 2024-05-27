import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {ref} from "vue/dist/vue";


export const useUser = () => {
    const save = (user): void => {
        localStorage.setItem("user", JSON.stringify(user))
    }

    const remove = (): void => {
        localStorage.removeItem("user")
    }


    const login = (email, password, callback): Promise<void> => {
        //simulate backend response
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const auth = getAuth()
                signInWithEmailAndPassword(auth, email, password).then(
                    (userData) => {
                        save(userData.user)
                        callback()
                        resolve()
                    }
                )
            }, 1000)
        })
    }
    const logout = (callback) => {

        const auth = getAuth()

        signOut(auth).then(() => {
            remove()
            callback()
        })
    }
    return {save, remove, login, logout}
}
