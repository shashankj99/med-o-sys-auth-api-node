export const config = {
    port: process.env.PORT,
    db_url: process.env.DATABASE_URL,
    jwt_secret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwt_refresh_token_secret: process.env.JWT_REFRESH_TOKEN_SECRET,
} as const;
