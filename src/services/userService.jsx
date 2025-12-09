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
        return formatUserData(data.data)
    } catch {
        // use mock
        const user = mockData.USER_MAIN_DATA.find(u => u.id === Number(id));
        return formatUserData(user);
    }
}

export async function getUserActivity(id) {
    try {
        const response = await fetch(`${API_URL}/${id}/activity`);
        if (!response.ok) throw new Error('API error');
        const data = await response.json();
        return data.data.sessions;
    } catch {
        // use mock
        const user = mockData.USER_ACTIVITY.find(u => u.id === Number(id));
        return user.sessions;
    }
}

export async function getUserAverageSessions(id) {
    try {
        const response = await fetch(`${API_URL}/${id}/average-sessions`);
        if (!response.ok) throw new Error('API error');
        const data = await response.json();
        return data.data.sessions;
    } catch {
        // use mock
        const user = mockData.USER_AVERAGE_SESSIONS.find(u => u.id === Number(id));
        return user.sessions;
    }

}

export async function getUserPerformance(id) {
    try {
        const response = await fetch(`${API_URL}/${id}/performance`);
        if (!response.ok) throw new Error('API error');
        const data = await response.json();
        return data.data;
    } catch {
        // use mock
        const user = mockData.USER_PERFORMANCE.find(u => u.id === Number(id));
        return user.data;
    }

}