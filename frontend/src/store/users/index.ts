// import { createSlice } from "@reduxjs/toolkit"
// import { Permission, UserState } from "../../components/types"

// const initialState: UserState = {
//     isLogged: false,
//     accessToken: "",
//     permission: Permission.Nothing,
//     user_id: undefined
// }

// const usersSlice = createSlice({
//     name: "@user",
//     initialState,
//     reducers:{
//         //SignIn
//         signIn(state, action){
//             Object.assign(state, {
//                 isLogged: true,
//                 accessToken: action.payload.accessToken,
//                 permission: Permission[action.payload.permission],
//                 user_id: action.payload.user.id,
//                 name: action.payload.user.nome,
//                 email: action.payload.user.email,
//                 apartament: action.payload.user.apartamento
//             })
//         },
//         //SignOut
//         signOut(state){
//             Object.assign(state, initialState)
//         }
//     }
// })

// export const { signIn, signOut } = usersSlice.actions

// export default usersSlice.reducer;