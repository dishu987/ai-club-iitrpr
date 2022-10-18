module.exports = {
    jwtSecret: 'iitroparaiclubwebsitetoken',
    jwtSignOptions: { expiresIn: '1h' },
    mongoUri: '{mongodb://localhost:27017}',
    port: process.env.PORT || 3001,
    saltRound: 10,
};