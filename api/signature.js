import crypto from "crypto";

export default async function handler(req, res) {
  const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  const API_KEY = "679431861611368";
  const API_SECRET = "Jt2XotbfOCZufGADTsE4Paryppc";
  const CLOUD_NAME = "dbnqte8qd";

  const { folder } = body;

  const timestamp = Math.floor(Date.now() / 1000);

  const stringToSign = `folder=${folder}&timestamp=${timestamp}${API_SECRET}`;

  const signature = crypto
    .createHash("sha1")
    .update(stringToSign)
    .digest("hex");

  res.json({
    signature,
    timestamp,
    apiKey: API_KEY,
    cloudName: CLOUD_NAME
  });
}
