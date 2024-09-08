document.addEventListener("DOMContentLoaded", () => {
  const fetchButton = document.getElementById("fetchButton");
  const responseContainer = document.getElementById("responseContainer");

  fetchButton.addEventListener("click", async () => {
    const apiUrl = "file:///Users/amansharma/Desktop/btpBOT/index.html"; // Replace with your proxy server URL

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("accesstoken", "your-access-token"); // Replace with your access token

    const raw = JSON.stringify({
      user_input: "what is ",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      const result = await response.text();
      responseContainer.textContent = result;
    } catch (error) {
      console.error("Error:", error);
      responseContainer.textContent = "An error occurred.";
    }
  });
});
