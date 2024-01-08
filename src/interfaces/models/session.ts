export interface ISession {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    type: 'Bearer';
    expiresAt: string;
}
