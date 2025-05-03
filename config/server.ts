export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('16b1c9bab482412754c8b4992326e92572358cde882cb868ecb6496422d30671','d4d7d6a2061ba7319c938ab84f858f0b65fee96991c23283033312de2081e345'),
  },
});
