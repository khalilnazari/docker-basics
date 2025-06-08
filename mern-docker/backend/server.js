import express from "express";
import cors from "cors";
import colors from "colors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: "*" }));
colors.enable();

app.get("/", (req, res) => {
  res.send("Welcome to the Express Server!");
});

app.get("/api/data", (req, res) => {
  const sampleData = {
    message: "Here is some sample data from the server!",
    timestamp: new Date().toISOString(),
    items: [
      { id: 1, name: "Item 1", value: 100 },
      { id: 2, name: "Item 2", value: 200 },
      { id: 3, name: "Item 3", value: 300 },
    ],
    success: true,
  };

  res.json(sampleData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
