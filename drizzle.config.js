/** @type { import("drizzle-kit").Config } */
export default {
  schema: './utils/schema.js',
  dialect: 'postgresql',
  //dbCredentials: {
  // url: 'postgresql://ai-interview-mockup_owner:pjS74likNWZz@ep-rapid-field-a5jltqr3.us-east-2.aws.neon.tech/ai-interview-mockup?sslmode=require',
  // },
  dbCredentials: process.env.URL,
};
