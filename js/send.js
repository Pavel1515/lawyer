document
  .querySelector("#sendMail")
  .addEventListener("click", async function postData() {
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const data = {
      service_id: "service_2j214f7",
      template_id: "template_6ch3ucl",
      user_id: "aPRv17hWBUrAL6o0w",
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
