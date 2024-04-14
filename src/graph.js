// graph.js

export async function callMsGraph(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    const graphEndpoint = "https://graph.microsoft.com/v1.0/me";

    return fetch(graphEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export async function getUsersInGroup(accessToken, groupId) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    const graphEndpoint = `https://graph.microsoft.com/v1.0/groups/e308a483-938b-4caf-a690-1b0df79b325d/members`;

    return fetch(graphEndpoint, options)
        .then(response => response.json())
        .then(data => {
            const users = data.value.map(user => {
                return {
                    id: user.id,
                    displayName: user.displayName,
                    email: user.mail
                };
            });
            return users;
        })
        .catch(error => console.log(error));
}

