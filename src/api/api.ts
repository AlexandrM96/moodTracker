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
