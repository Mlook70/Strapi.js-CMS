export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('00wd8TW+aDdbaCI9CCn7Jw==,R7fYjoMyJqAic4jiQEbvyQ==,QyMf1w7F6etP+Ji+pCUu0w==,QGbwhz/8yRzIWPzQwbuytg==, d4d7d6a2061ba7319c938ab84f858f0b65fee96991c23283033312de2081e345'),
  },
});
