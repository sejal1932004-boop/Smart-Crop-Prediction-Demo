const app = require('./app');  // app.js ko import kiya

const PORT = process.env.PORT || 5000;  // Port ko set kiya gaya (default 5000)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
