const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value;

            const phone =
                document.getElementById("phone").value;

            const message =
                document.getElementById("message").value;


            const formMessage =
                document.getElementById("formMessage");


            if (
                name === "" ||
                phone === "" ||
                message === ""
            ) {

                formMessage.style.color = "red";

                formMessage.textContent =
                    "Please fill all required fields.";

                return;

            }


            formMessage.style.color = "green";

            formMessage.textContent =
                "Thank you! Your enquiry has been submitted successfully.";


            contactForm.reset();

        }
    );

}