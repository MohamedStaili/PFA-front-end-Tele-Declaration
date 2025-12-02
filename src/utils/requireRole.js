import { redirect } from "react-router-dom";
import {queryClient} from "../lib/queryClient.js";
import {getMe} from "../api/auth/auth.api.js";
import {queryKeys} from "../api/queryKeys.js";
import authStore from "../stores/authStore.js";

export function requireRole(allowedRole) {
    return async () => {
        //chercher dans le cashe
        console.log("----requireRole----")
        let user = queryClient.getQueryData(["me"]);
        console.log("user de cashe", user);
        if (user) {
            authStore.getState().setUser(user);
        }

        if(!user){
            try {
                const data = await queryClient.fetchQuery({
                    queryKey: [queryKeys.me],
                    queryFn: getMe
                });
                user = data;
                authStore.getState().setUser(user);
                console.log("user de getMe", user);
            }catch(err){
                return redirect("/auth/login");
            }
        }
        const ok = user?.roles.includes(allowedRole);
        if(!ok){
            return redirect("/unauthorized");
        }
        return null;
    };
}
