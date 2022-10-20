const baseUrl = `http://moodtracker.test`;

export function api() {

    fetch(`${baseUrl}/api`)
        .then((response) => response.json())
        .then((data) => {
                console.log(data);
            }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}

export function ApiUserLogin(login: string, password: string) {

    fetch(
        `${baseUrl}/api/login`
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

export function ApiUserRegistration(login: string, email: string, password: string) {

    fetch(
        `${baseUrl}/api/register`
        , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: login,
                email: email,
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