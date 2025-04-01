fetch('https://ip-api.com/json?token=71d23b2484a51d')  // Change "http" to "https"
  .then(response => response.json())
  .then(data => {
      console.log("API Response:", data); // Debugging output

      const userSuburb = data.city || "Unknown";  

      const franchiseLinks = {
          "Bryanston": "https://info.cleanmybed.com/allergy-booking-page-bs",
          "Somerset West": "https://info.cleanmybed.com/allergy-booking-page-ssw",
          "Atlantic Seaboard": "https://info.cleanmybed.com/allergy-booking-page-as",
          "Western Seaboard": "https://info.cleanmybed.com/allergy-booking-page-ws",
          "Garden Route": "https://info.cleanmybed.com/allergy-booking-page-gr",
          "Umhlanga Durban North": "https://info.cleanmybed.com/allergy-booking-page-udn",
          "Paarl": "https://info.cleanmybed.com/allergy-booking-page-pl",
          "Franschhoek": "https://info.cleanmybed.com/allergy-booking-page-pl",
          "Southern Suburbs": "https://info.cleanmybed.com/allergy-booking-page-ss",
          "Lonehill": "https://info.cleanmybed.com/allergy-booking-page-bs",
          "Midrand": "https://info.cleanmybed.com/allergy-booking-page-bs",
          "Randburg": "https://info.cleanmybed.com/allergy-booking-page-bs",
          "Ruimsig": "https://info.cleanmybed.com/allergy-booking-page-bs",
          "Knysna": "https://info.cleanmybed.com/allergy-booking-page-gr",
          "Mossel Bay": "https://info.cleanmybed.com/allergy-booking-page-gr",
          "Milnerton": "https://info.cleanmybed.com/allergy-booking-page-ws",
          "Blouberg": "https://info.cleanmybed.com/allergy-booking-page-ws",
          "Eden on the Bay": "https://info.cleanmybed.com/allergy-booking-page-ws",
          "Atlantis": "https://info.cleanmybed.com/allergy-booking-page-ws"
      };

      if (userSuburb === "Unknown") {
          console.log("Suburb data unavailable, staying on page.");
      } else if (franchiseLinks[userSuburb] && window.location.href !== franchiseLinks[userSuburb]) {
          console.log("Redirecting to:", franchiseLinks[userSuburb]);
          window.location.href = franchiseLinks[userSuburb];  
      } else {
          console.log("User is on the correct page or no match found.");
      }
  })
  .catch(error => console.error("Error fetching location:", error));

