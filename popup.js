document.getElementById("sendRequest").addEventListener("click", async () => {
   const randomText = ["This is awesome!", "Not Good at all"][Math.floor(Math.random() * 2)];

   try {
      const response = await fetch("http://localhost:5000/predict", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({ comments: [randomText] })
      });

      const result = await response.json();
      console.log("API Response:", result);
      document.getElementById("response").innerText = JSON.stringify(result, null, 2);
   } catch (error) {
      console.error("Error", error);
   }
});
