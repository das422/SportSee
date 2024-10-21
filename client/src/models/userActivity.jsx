export default class UserActivity {
    constructor(user) {
        this.sessions = user.sessions.map((session, index) => {
            return {
                day: index + 1,
                kilogram: session.kilogram,
                calories: session.calories
            }; 
        });
    }
}