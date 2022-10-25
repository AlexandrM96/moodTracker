import React from "react";
 import {useNavigate} from "react-router-dom";

const baseUrl = `http://moodtracker.test`;
//
// export function api() {
//
//     fetch(`${baseUrl}/api`)
//         .then((response) => response.json())
//         .then((data) => {
//                 console.log(data);
//             }
//         )
//         .catch((error) => {
//             console.error('Error:', error);
//         });
// }

export function ApiUserLogin(login: string, password: string) {

    // const navigate = useNavigate();

    fetch(
        `${baseUrl}/jwt/login`
        , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: login,
                password: password,
            })
        }).then((response) => response.json())
        .then((data) => {
                if (!data.message) {
                    alert("Успешно!");
                    console.log(data);
                    // localStorage.setItem('tokenAuth', data.data.token);
                    // Router.push("/");
                } else {
                    alert(data.message);
                }
            }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}
//
// export function ApiUserRegistration(login: string, email: string, password: string, passwordConfirmation: string) {
//
//
//     fetch(
//         `${baseUrl}/jwt/register`
//         , {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 "name": login,
//                 "email": email,
//                 "password": password,
//                 "password_confirmation": passwordConfirmation
//             })
//         }).then((response) => response.json())
//         .then((data) => {
//                 if (!data.message) {
//                     //ошибка
//                     console.log(data);
//                 } else {
//                     console.log(data.message);
//                     // localStorage.setItem('tokenAuth', data.data.token);
//                     // navigate("/auth/login");
//                 }
//             }
//         )
//         .catch((error) => {
//             console.error('Error:', error);
//         });
// }