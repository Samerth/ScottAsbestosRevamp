(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

})(jQuery);

//Read More/Less
function toggleContent() {
    var additionalContent = document.getElementById("additionalContent");
    var readMoreBtn = document.getElementById("readMoreBtn");
    
    if (additionalContent.style.display === "none") {
        additionalContent.style.display = "block";
        readMoreBtn.innerHTML = "Read Less";
    } else {
        additionalContent.style.display = "none";
        readMoreBtn.innerHTML = "Read More";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const images = gallery.getElementsByTagName("img");

    const modal = document.getElementById("galleryModal");
    const modalContent = modal.querySelector(".modal-content");

    for (let img of images) {
        img.addEventListener("click", function () {
            const expandedImgSrc = this.src;

            // Clear previous content
            modalContent.innerHTML = "";

            // Create Swiper container
            const swiperContainer = document.createElement("div");
            swiperContainer.classList.add("swiper-container");

            // Create Swiper wrapper
            const swiperWrapper = document.createElement("div");
            swiperWrapper.classList.add("swiper-wrapper");

            // Create image slides
            for (let i = 0; i < images.length; i++) {
                const swiperSlide = document.createElement("div");
                swiperSlide.classList.add("swiper-slide");

                // Create image element
                const imgElement = document.createElement("img");
                imgElement.src = images[i].src;
                imgElement.classList.add("expanded-img");

                // Append image to slide
                swiperSlide.appendChild(imgElement);

                // Append slide to wrapper
                swiperWrapper.appendChild(swiperSlide);
            }

            // Append wrapper to container
            swiperContainer.appendChild(swiperWrapper);

            // Append container to modal content
            modalContent.appendChild(swiperContainer);

            // Add navigation buttons
            const nextButton = document.createElement("div");
            nextButton.classList.add("swiper-button-next");
            const prevButton = document.createElement("div");
            prevButton.classList.add("swiper-button-prev");
            swiperContainer.appendChild(nextButton);
            swiperContainer.appendChild(prevButton);
    
            // Initialize Swiper
            const swiper = new Swiper(swiperContainer, {
                // Swiper options here...
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

            // Show modal
            modal.style.display = "block";
        });
    }

    // Close modal when clicking close button
    const closeBtn = modal.querySelector(".close-btn");
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    
});

// Show/hide file upload options based on radio button selection
  document.addEventListener("DOMContentLoaded", function () {
    var uploadHazmatReport = document.getElementById("uploadHazmatReport");
    var uploadPhotosConcern = document.getElementById("uploadPhotosConcern");

    // Add message elements
    var hazmatMessage = document.createElement("p");
    hazmatMessage.style.color = "red"; // You can customize the styling
    hazmatMessage.innerHTML = "Please select a Hazmat Report file with a maximum size of 3MB.";
    uploadHazmatReport.appendChild(hazmatMessage);

    var photosMessage = document.createElement("p");
    photosMessage.style.color = "red"; // You can customize the styling
    photosMessage.innerHTML = "Please select Photos of Concern files with a maximum size of 3MB each.";
    uploadPhotosConcern.appendChild(photosMessage);

    // Event listeners for hazmat options
    document.getElementById("hazmatYes").addEventListener("change", function () {
        uploadHazmatReport.style.display = this.checked ? "block" : "none";
        hazmatMessage.style.display = this.checked ? "block" : "none";
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        const gallery = document.getElementById("gallery");
        const images = gallery.getElementsByTagName("img");
    
        for (let img of images) {
            img.addEventListener("click", function () {
                alert("Image clicked: " + this.src);

                console.log("Image clicked:", this.src);
                if (this.classList.contains("expanded")) {
                    this.classList.remove("expanded");
                } else {
                    // Remove expanded class from all images
                    for (let img of images) {
                        img.classList.remove("expanded");
                    }
                    this.classList.add("expanded");
                }
            });
        }
    });
    
    
    document.getElementById("hazmatNo").addEventListener("change", function () {
        uploadHazmatReport.style.display = "none";
        hazmatMessage.style.display = "none";
    });

    // Event listeners for photos of concern options
    document.getElementById("photosYes").addEventListener("change", function () {
        uploadPhotosConcern.style.display = this.checked ? "block" : "none";
        photosMessage.style.display = this.checked ? "block" : "none";
    });

    document.getElementById("photosNo").addEventListener("change", function () {
        uploadPhotosConcern.style.display = "none";
        photosMessage.style.display = "none";
    });

     // Event listener for file input change
     document.getElementById("fileHazmatReport").addEventListener("change", function () {
        checkFileSize(this, "fileHazmatReport", 3 * 1024 * 1024); // 3MB limit
    });

    document.getElementById("fileAreaConcern").addEventListener("change", function () {
        checkFileSize(this, "fileAreaConcern", 3 * 1024 * 1024); // 3MB limit
    });
});

function checkFileSize(input, fileId, maxSize) {
    var fileSize = input.files[0].size;
    var errorMessage = document.getElementById(fileId + "ErrorMessage");

    if (fileSize > maxSize) {
        // Display a prompt
        if (confirm("File size exceeds the limit (3MB). Do you want to remove the file?")) {
            input.value = ""; // Clear the file input
            errorMessage.style.display = "none";
            errorMessage.innerHTML = "";
        } else {
            // Keep the file and display an error message
            errorMessage.style.display = "block";
            errorMessage.innerHTML = "File size exceeds the limit (3MB). Please choose a smaller file.";
        }
    } else {
        errorMessage.style.display = "none";
        errorMessage.innerHTML = "";
    }
}


function emailSend() {
    // Get form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var hazmatReport = document.querySelector('input[name="hazmatReport"]:checked').value;
    var photosOfConcern = document.querySelector('input[name="photosOfConcern"]:checked').value;
    var fileHazmatReport = document.getElementById("fileHazmatReport").files[0];
    var fileAreaConcern = document.getElementById("fileAreaConcern").files[0];
    var subject = document.getElementById("firstName").value + " is requesting an Estimate";
    var message = document.getElementById("message").value;

    // Construct email body

    var emailBody = "<p><strong>First Name:</strong> " + firstName + "</p>" +
        "<p><strong>Last Name:</strong> " + lastName + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Phone:</strong> " + phone + "</p>" +
        "<p><strong>Hazmat Report:</strong> " + hazmatReport + "</p>" +
        "<p><strong>Photos of Concern:</strong> " + photosOfConcern + "</p>" +
        "<p><strong>Brief Description:</strong> " + message + "</p>";


    // Create FormData for file attachments
    var formData = new FormData();
    formData.append("fileHazmatReport", fileHazmatReport);
    formData.append("fileAreaConcern", fileAreaConcern);
    // Convert file contents to Base64
    readFileAsBase64(fileHazmatReport, function (fileHazmatReportBase64) {
        readFileAsBase64(fileAreaConcern, function (fileAreaConcernBase64) {

            // Add Base64-encoded files to FormData
            formData.append("fileHazmatReportBase64", fileHazmatReportBase64);
            formData.append("fileAreaConcernBase64", fileAreaConcernBase64);
            // Add form values to FormData
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("hazmatReport", hazmatReport);
            formData.append("photosOfConcern", photosOfConcern);
            formData.append("subject", subject);
            formData.append("message", message);

            // Add additional fields as needed

            // Send email with form data
            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "digitedget@gmail.com",
                Password: "4F0AC85FD3767CAF8392E47AA51C4B19575E",
                To: 'digitedget@gmail.com',
                From: "kirti@scottasbestos.com",
                Subject: "Estimate Request: " + subject,
                Body: emailBody,
                Attachments: [
                    { name: "fileHazmatReport", data: fileHazmatReportBase64 },
                    { name: "fileAreaConcern", data: fileAreaConcernBase64 }
                ]
            }).then(function (message) {
                showConfirmationModal(message);
            });
        });
    });
}
function readFileAsBase64(file, callback) {
    if (file) {
        var reader = new FileReader();
        reader.onloadend = function () {
            var base64String = reader.result.split(',')[1];
            callback(base64String);
        };
        reader.readAsDataURL(file);
    } else {
        callback(null);
    }
}
function showConfirmationModal(message) {
    // Set the content of the modal6
    var modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = '<span class="text-success"><i class="bi bi-check-circle"></i> Message Sent Successfully</span><br>' + message;

    // Show the modal
    var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}

