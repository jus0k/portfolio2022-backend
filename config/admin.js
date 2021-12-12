module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9119945f8c48ad5290ba6a653fdb3c4f'),
  },
});
