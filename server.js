import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "dist");
const port = Number(process.env.PORT) || 3000;

const app = express();

app.get(["/admin", "/admin/"], (_req, res) => {
  res.redirect(302, "/admin/index.html");
});

app.use(express.static(dist));

app.get("*", (req, res) => {
  if (req.path.startsWith("/admin")) {
    res.sendFile(path.join(dist, "admin", "index.html"));
    return;
  }
  res.sendFile(path.join(dist, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Serving dist/ on http://0.0.0.0:${port}`);
});
