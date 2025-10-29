export function getGoogleApiResponse(para) {
  const {
    path = "https://www.googleapis.com/youtube/v3/subscriptions",
    params = {
      part: "snippet",
      mine: true,
    },
  } = para || {};

  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) throw new Error("Access token not found");

  async function start() {
    const data = await gapi.client.request({
      path: path,
      params: {
        access_token: accessToken,
        ...params,
      },
    });
    console.log(data);
  }
  gapi.load("client", start);
}
