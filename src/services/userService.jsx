import mockData from '../data/data.json';

// URL pour les appels API
const API_URL = 'http://localhost:3000/user';

// Formate les données utilisateur brutes pour les adapter au format attendu par l'application
function formatUserData(rawData) {
    return {
      id: rawData.id, // id de l'utilisateur
      userInfos: rawData.userInfos, // informations personnelles (nom, âge, etc.)
      score: rawData.todayScore ?? rawData.score, // Utilise `todayScore` ou `score` 
      keyData: rawData.keyData, // Données clés (calories, protéines, etc.)
    };
}

// Récupère les données utilisateur (informations générales) depuis l'API ou le mock
export async function getUser(id) {
    try {
        // Appel à l'API pour récupérer les données utilisateur
        const response = await fetch(`${API_URL}/${id}`);
        // Gère les erreurs de réponse
        if (!response.ok) throw new Error('API error');
        const data = await response.json();
        console.log('Données récupérées depuis l’API pour l’utilisateur', id);
        return formatUserData(data.data) // Formate et retourne les données
    } catch {
        // Si erreur, utilise les données mockées
        console.log('Données récupérées depuis le mock pour l’utilisateur', id);
        const user = mockData.USER_MAIN_DATA.find(u => u.id === Number(id));
        if (!user) {
            console.error(`Utilisateur avec l'ID ${id} introuvable dans les données mockées.`);
            return null; // Retourne null si aucune donnée n'est trouvée
        }
        return formatUserData(user);
    }
}

// Récupère les données d'activité quotidienne de l'utilisateur depuis l'API ou le mock
export async function getUserActivity(id) {
    try {
        const response = await fetch(`${API_URL}/${id}/activity`);
        if (!response.ok) throw new Error('API error');
        console.log('Données récupérées depuis l’API pour l’utilisateur', id);
        const data = await response.json();
        return data.data.sessions;
    } catch {
        console.log('Données récupérées depuis le mock pour l’utilisateur', id);
        const user = mockData.USER_ACTIVITY.find(u => u.userId === Number(id));
        if (!user) {
            console.error(`Utilisateur avec l'ID ${id} introuvable dans les données mockées.`);
            return null; // Retourne null si aucune donnée n'est trouvée
        }
        return user.sessions; // Retourne les sessions d'activité mockées
    }
}

// Récupère les données de durée moyenne des sessions de l'utilisateur depuis l'API ou le mock
export async function getUserAverageSessions(id) {
    try {
        const response = await fetch(`${API_URL}/${id}/average-sessions`);
        if (!response.ok) throw new Error('API error');
        console.log('Données récupérées depuis l’API pour l’utilisateur', id);
        const data = await response.json();
        return data.data.sessions;
    } catch {
        console.log('Données récupérées depuis le mock pour l’utilisateur', id);
        const user = mockData.USER_AVERAGE_SESSIONS.find(u => u.userId === Number(id));
        if (!user) {
            console.error(`Utilisateur avec l'ID ${id} introuvable dans les données mockées.`);
            return null; // Retourne null si aucune donnée n'est trouvée
        }
        return user.sessions;
    }

}

// Récupère les données de performance de l'utilisateur depuis l'API ou le mock
export async function getUserPerformance(id) {
    try {
        const response = await fetch(`${API_URL}/${id}/performance`);
        if (!response.ok) throw new Error('API error');
        console.log('Données récupérées depuis l’API pour l’utilisateur', id);
        const data = await response.json();
        return data.data;
    } catch {
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