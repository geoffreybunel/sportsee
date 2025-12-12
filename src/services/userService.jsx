import mockData from '../data/data.json';

const API_URL = 'http://localhost:3000/user';

function formatUserData(rawData) {
    return {
      id: rawData.id,
      userInfos: rawData.userInfos,
      score: rawData.todayScore ?? rawData.score,
      keyData: rawData.keyData,
    };
}

export async function getUser(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error('API error');
        const data = await response.json();
        console.log('Données récupérées depuis l’API pour l’utilisateur', id);
        return formatUserData(data.data)
    } catch {
        // use mock
        console.log('Données récupérées depuis le mock pour l’utilisateur', id);
        const user = mockData.USER_MAIN_DATA.find(u => u.id === Number(id));
        if (!user) {
            console.error(`Utilisateur avec l'ID ${id} introuvable dans les données mockées.`);
            return null; // Retourne null si aucune donnée n'est trouvée
        }
        return formatUserData(user);
    }
}

export async function getUserActivity(id) {
    try {
        const response = await fetch(`${API_URL}/${id}/activity`);
        if (!response.ok) throw new Error('API error');
        console.log('Données récupérées depuis l’API pour l’utilisateur', id);
        const data = await response.json();
        return data.data.sessions;
    } catch {
        // use mock
        console.log('Données récupérées depuis le mock pour l’utilisateur', id);
        const user = mockData.USER_ACTIVITY.find(u => u.userId === Number(id));
        if (!user) {
            console.error(`Utilisateur avec l'ID ${id} introuvable dans les données mockées.`);
            return null; // Retourne null si aucune donnée n'est trouvée
        }
        return user.sessions;
    }
}

export async function getUserAverageSessions(id) {
    try {
        const response = await fetch(`${API_URL}/${id}/average-sessions`);
        if (!response.ok) throw new Error('API error');
        console.log('Données récupérées depuis l’API pour l’utilisateur', id);
        const data = await response.json();
        return data.data.sessions;
    } catch {
        // use mock
        console.log('Données récupérées depuis le mock pour l’utilisateur', id);
        const user = mockData.USER_AVERAGE_SESSIONS.find(u => u.userId === Number(id));
        if (!user) {
            console.error(`Utilisateur avec l'ID ${id} introuvable dans les données mockées.`);
            return null; // Retourne null si aucune donnée n'est trouvée
        }
        return user.sessions;
    }

}

export async function getUserPerformance(id) {
    try {
        const response = await fetch(`${API_URL}/${id}/performance`);
        if (!response.ok) throw new Error('API error');
        console.log('Données récupérées depuis l’API pour l’utilisateur', id);
        const data = await response.json();
        return data.data;
    } catch {
        // use mock
        console.log('Données récupérées depuis le mock pour l’utilisateur', id);
        const user = mockData.USER_PERFORMANCE.find(u => u.userId === Number(id));
        // console.log('Utilisateur trouvé dans le mock :', user);
        if (!user) {
            console.error(`Utilisateur avec l'ID ${id} introuvable dans les données mockées.`);
            return null; // Retourne null si aucune donnée n'est trouvée
        }
        // console.log('Données trouvées dans le mock :', user.data);
        return user.data;
    }

}