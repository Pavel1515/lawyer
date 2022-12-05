document
  .querySelector("#sendMail")
  .addEventListener("click", async function postData() {
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const data = {
      service_id: "service_ntoxm18",
      template_id: "template_xpgx0w4",
      user_id: "3iQN6eVT6cB3__swR",
      template_params: {
        name: name,
        number: number,
      },
    };

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      }
    );
    alert("Отправлено!!!");

    return await console.log(response);
  });
