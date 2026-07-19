import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import imageRoutes from './routes/image.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

const allowedOrigins = [
	"http://localhost:5173",
	"https://3-d-shirt-customizer-vert.vercel.app",
];

app.use(
	cors({
		origin: (origin, callback) => {
			console.log("Request origin:", origin);

			// Allow requests without origin (Postman, curl, server-to-server)
			if (!origin) {
				return callback(null, true);
			}

			if (allowedOrigins.includes(origin)) {
				return callback(null, true);
			}

			return callback(new Error("Not allowed by CORS"));
		},
	})
);

app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/images", imageRoutes);

app.get('/', (req, res) => {
	res.status(200).json({ message: "Hello from DALL.E" });
});

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});