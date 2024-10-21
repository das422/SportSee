export default class UserAvgSessions {
    constructor(user) {
        this.sessions = user.sessions;      
    }

    getSessions() {       
        const days = ["L", "M", "M", "J", "V", "S", "D"]
        
        this.sessions = this.sessions.map((session, index) => {
            return {
                day: days[index],
                session: session.sessionLength
            }
        });
        return this.sessions;
    }
}