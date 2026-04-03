import axios from "axios";

export const getAccessToken = async () => {
  try {
    const params = new URLSearchParams();
    params.append("client_id", process.env.CLIENT_ID);
    params.append("client_secret", process.env.CLIENT_SECRET);
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", process.env.REFRESH_TOKEN);

    const res = await axios.post(
      `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`,
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return res.data.access_token;
  } catch (err) {
    console.error("❌ TOKEN ERROR:", err.response?.data || err.message);
    throw err;
  }
};