/* =================================
   SUMIT DIGITAL ASSIST
   MAIN JAVASCRIPT
================================ */


/* ================================
   MOBILE MENU
================================ */

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");


function setMobileMenu(open) {

    mobileMenu.classList.toggle("active", open);

    menuToggle.setAttribute(
        "aria-expanded",
        String(open)
    );

    menuToggle.setAttribute(
        "aria-label",
        open ? "Close menu" : "Open menu"
    );

    mobileMenu.setAttribute(
        "aria-hidden",
        String(!open)
    );

}


menuToggle.addEventListener("click", () => {

    setMobileMenu(
        !mobileMenu.classList.contains("active")
    );

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            setMobileMenu(false);

        });

    });


document.addEventListener("click", event => {

    if (
        mobileMenu.classList.contains("active") &&
        !mobileMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        setMobileMenu(false);

    }

});


window.addEventListener("resize", () => {

    if (window.innerWidth > 850) {

        setMobileMenu(false);

    }

});


/* ================================
   DARK MODE
================================ */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("sumitTheme");


const themeColorMeta =
    document.getElementById("themeColorMeta");


function updateThemeUI(darkMode) {

    themeToggle.textContent =
        darkMode ? "☀" : "☾";

    themeToggle.setAttribute(
        "aria-pressed",
        String(darkMode)
    );

    themeToggle.setAttribute(
        "aria-label",
        darkMode
            ? "Switch to light mode"
            : "Switch to dark mode"
    );


    if (themeColorMeta) {

        themeColorMeta.setAttribute(
            "content",
            darkMode ? "#000000" : "#ffffff"
        );

    }

}


if (savedTheme === "dark") {

    document.body.classList.add("dark");

}


updateThemeUI(
    document.body.classList.contains("dark")
);


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    const darkMode =
        document.body.classList.contains("dark");


    updateThemeUI(darkMode);


    localStorage.setItem(
        "sumitTheme",
        darkMode ? "dark" : "light"
    );

});



/* HERO GET STARTED — reliable anchor scroll */
const heroGetStarted = document.getElementById("heroGetStarted");
if (heroGetStarted) {
    heroGetStarted.addEventListener("click", event => {
        const servicesSection = document.getElementById("services");
        if (!servicesSection) return;
        event.preventDefault();
        servicesSection.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            block: "start"
        });
    });
}

/* ================================
   SERVICE CAROUSEL
================================ */

const services = [

    {
        title: "Passport Assistance",
        category: "GOVERNMENT DOCUMENT",
        description:
            "Professional assistance with your passport application and related online process.",
        price: "₹499",
        fee: "+ official fee",
        icon: "PASSPORT",
        image: "images/services images/passport.png"
    },

    {
        title: "PAN Card",
        category: "TAX & IDENTITY",
        description:
            "Get assistance with your PAN Card application and online submission process.",
        price: "₹199",
        fee: "+ official fee",
        icon: "PAN CARD",
        image: "images/services images/pan.png"
    },

    {
        title: "PAN Correction",
        category: "TAX & IDENTITY",
        description:
            "Need to update or correct your PAN details? Get step-by-step assistance.",
        price: "₹199",
        fee: "+ official fee",
        icon: "PAN UPDATE",
        image: "images/services images/pan.png"
    },

    {
        title: "Voter ID",
        category: "IDENTITY DOCUMENT",
        description:
            "Assistance with new Voter ID applications and related online services.",
        price: "₹149",
        fee: "service charge",
        icon: "VOTER ID",
        image: "images/services images/voter.jpg"
    },

    {
        title: "PF / EPFO",
        category: "EMPLOYEE SERVICES",
        description:
            "Get assistance with PF-related online services, claims and EPFO processes.",
        price: "₹299",
        fee: "onwards",
        icon: "EPFO",
        image: "images/services images/epfo.jpg"
    },

    {
        title: "ESIC",
        category: "EMPLOYEE SERVICES",
        description:
            "Professional assistance for ESIC-related online services and forms.",
        price: "₹299",
        fee: "onwards",
        icon: "ESIC",
        image: "images/services images/esic.png"
    },

    {
        title: "Himcare Card",
        category: "HEALTH BENEFIT",
        description:
            "Assistance with Himcare card application and related online processes.",
        price: "₹199",
        fee: "onwards",
        icon: "HIMCARE",
        image: "images/services images/himcare.jpg"
    },

    {
        title: "Aadhaar Assistance",
        category: "IDENTITY DOCUMENT",
        description:
            "Assistance with Aadhaar-related online services and document processes.",
        price: "₹149",
        fee: "onwards",
        icon: "AADHAAR",
        image: "images/services images/adhhar.png"
    },

    {
        title: "Online Forms",
        category: "DIGITAL ASSISTANCE",
        description:
            "Professional assistance for online applications, forms and submissions.",
        price: "₹99",
        fee: "onwards",
        icon: "ONLINE FORM",
        image: "images/services images/online form.jpg"
    },

    {
        title: "Normal Train Ticket",
        category: "TRAVEL ASSISTANCE",
        description:
            "Assistance with normal train ticket booking and online reservation process.",
        price: "₹99",
        fee: "/ ticket",
        icon: "TRAIN",
        image: "images/services images/train.png"
    },

    {
        title: "Tatkal Booking Assistance",
        category: "TRAVEL ASSISTANCE",
        description:
            "Fast assistance with Tatkal train booking and related online process.",
        price: "₹199",
        fee: "/ ticket",
        icon: "TATKAL",
        image: "images/services images/train.png"
    },

    {
        title: "Other Document Services",
        category: "DIGITAL ASSISTANCE",
        description:
            "Need help with another document or online service? Contact us for assistance.",
        price: "₹199",
        fee: "onwards",
        icon: "MORE",
        image: "images/services images/other documents.jpg"
    }

];


let currentService = 0;

let isServiceAnimating = false;


const stage =
    document.querySelector(".service-stage");


const serviceContent =
    stage.querySelector(".service-content");


const serviceVisual =
    stage.querySelector(".service-visual");


const serviceNumber =
    document.getElementById("serviceNumber");


const serviceCategory =
    document.getElementById("serviceCategory");


const serviceTitle =
    document.getElementById("serviceTitle");


const serviceDescription =
    document.getElementById("serviceDescription");


const servicePrice =
    document.getElementById("servicePrice");


const serviceFee =
    document.getElementById("serviceFee");


const documentNumber =
    document.getElementById("documentNumber");


const documentIcon =
    document.getElementById("documentIcon");


const serviceImage =
    document.getElementById("serviceImage");


const documentLines =
    document.getElementById("documentLines");


const nextService =
    document.getElementById("nextService");


const prevService =
    document.getElementById("prevService");


const serviceDots =
    document.getElementById("serviceDots");


/* ================================
   RENDER SERVICE
================================ */

function renderService() {

    const service =
        services[currentService];


    const number =
        String(currentService + 1)
            .padStart(2, "0");


    serviceNumber.textContent =
        number;


    serviceCategory.textContent =
        service.category;


    serviceTitle.textContent =
        service.title;


    serviceDescription.textContent =
        service.description;


    servicePrice.textContent =
        service.price;


    serviceFee.textContent =
        service.fee;


    documentNumber.textContent =
        `${number} / ${services.length}`;


    documentIcon.textContent =
        service.icon;


    if (service.image) {

        serviceImage.src = service.image;
        serviceImage.alt = service.title;
        serviceImage.hidden = false;
        documentIcon.hidden = true;
        documentLines.classList.add("has-image");

    }

    else {

        serviceImage.hidden = true;
        serviceImage.removeAttribute("src");
        serviceImage.alt = "";
        documentIcon.hidden = false;
        documentLines.classList.remove("has-image");

    }


    document
        .querySelectorAll(".service-dot")
        .forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentService
            );

        });

}


/* ================================
   CREATE DOTS
================================ */

services.forEach((_, index) => {

    const dot =
        document.createElement("button");


    dot.className =
        "service-dot";


    dot.type =
        "button";


    dot.setAttribute(
        "aria-label",
        `Go to service ${index + 1}`
    );


    dot.addEventListener("click", () => {

        if (
            isServiceAnimating ||
            index === currentService
        ) {

            return;

        }


        const direction =
            index > currentService
                ? "next"
                : "prev";


        changeService(
            direction,
            index
        );

    });


    serviceDots.appendChild(dot);

});


/* ================================
   ANIMATION HELPER
================================ */

function animateElement(
    element,
    keyframes,
    options
) {

    if (!element) {

        return Promise.resolve();

    }


    return new Promise(resolve => {

        const animation =
            element.animate(
                keyframes,
                options
            );


        animation.onfinish = () => {

            animation.cancel();

            resolve();

        };


        animation.oncancel = () => {

            resolve();

        };

    });

}


/* ================================
   CHANGE SERVICE
================================ */

async function changeService(
    direction,
    targetIndex = null
) {

    if (isServiceAnimating) {

        return;

    }


    isServiceAnimating = true;


    const isNext =
        direction === "next";


    /*
        NEXT

        Old → LEFT
        New ← RIGHT


        PREVIOUS

        Old → RIGHT
        New ← LEFT
    */


    const exitX =
        isNext ? -130 : 130;


    const enterX =
        isNext ? 130 : -130;


    /* =========================
       OLD SERVICE GOES OUT
    ========================= */

    await Promise.all([

        animateElement(
            serviceContent,

            [
                {
                    transform:
                        "translate3d(0,0,0)",

                    opacity: 1,

                    filter:
                        "blur(0px)"
                },

                {
                    transform:
                        `translate3d(${exitX}px,0,0)`,

                    opacity: 0,

                    filter:
                        "blur(8px)"
                }
            ],

            {
                duration: 520,

                easing:
                    "cubic-bezier(0.65,0,0.35,1)",

                fill: "forwards"
            }
        ),


        animateElement(
            serviceVisual,

            [
                {
                    transform:
                        "translate3d(0,0,0)",

                    opacity: 1,

                    filter:
                        "blur(0px)"
                },

                {
                    transform:
                        `translate3d(${exitX}px,0,0)`,

                    opacity: 0,

                    filter:
                        "blur(8px)"
                }
            ],

            {
                duration: 520,

                easing:
                    "cubic-bezier(0.65,0,0.35,1)",

                fill: "forwards"
            }
        )

    ]);


    /* =========================
       CHANGE DATA
    ========================= */

    if (targetIndex !== null) {

        currentService =
            targetIndex;

    }

    else if (isNext) {

        currentService =
            (currentService + 1)
            % services.length;

    }

    else {

        currentService =
            (
                currentService - 1
                + services.length
            )
            % services.length;

    }


    renderService();


    /* =========================
       NEW SERVICE START POSITION
    ========================= */

    serviceContent.style.transform =
        `translate3d(${enterX}px,0,0)`;


    serviceContent.style.opacity =
        "0";


    serviceContent.style.filter =
        "blur(8px)";


    serviceVisual.style.transform =
        `translate3d(${enterX}px,0,0)`;


    serviceVisual.style.opacity =
        "0";


    serviceVisual.style.filter =
        "blur(8px)";


    /* Force repaint */

    void stage.offsetWidth;


    /* =========================
       NEW SERVICE COMES IN
    ========================= */

    await Promise.all([

        animateElement(
            serviceContent,

            [
                {
                    transform:
                        `translate3d(${enterX}px,0,0)`,

                    opacity: 0,

                    filter:
                        "blur(8px)"
                },

                {
                    transform:
                        "translate3d(0,0,0)",

                    opacity: 1,

                    filter:
                        "blur(0px)"
                }
            ],

            {
                duration: 680,

                easing:
                    "cubic-bezier(0.22,1,0.36,1)",

                fill: "forwards"
            }
        ),


        animateElement(
            serviceVisual,

            [
                {
                    transform:
                        `translate3d(${enterX}px,0,0)`,

                    opacity: 0,

                    filter:
                        "blur(8px)"
                },

                {
                    transform:
                        "translate3d(0,0,0)",

                    opacity: 1,

                    filter:
                        "blur(0px)"
                }
            ],

            {
                duration: 680,

                easing:
                    "cubic-bezier(0.22,1,0.36,1)",

                fill: "forwards"
            }
        )

    ]);


    /* =========================
       CLEANUP
    ========================= */

    serviceContent.style.transform =
        "";

    serviceContent.style.opacity =
        "";

    serviceContent.style.filter =
        "";


    serviceVisual.style.transform =
        "";

    serviceVisual.style.opacity =
        "";

    serviceVisual.style.filter =
        "";


    isServiceAnimating = false;

}


/* ================================
   NEXT
================================ */

nextService.addEventListener(
    "click",
    () => {

        changeService("next");

    }
);


/* ================================
   PREVIOUS
================================ */

prevService.addEventListener(
    "click",
    () => {

        changeService("prev");

    }
);


/* ================================
   INITIAL SERVICE
================================ */

renderService();


/* ================================
   APPLY NOW
================================ */

const serviceApply =
    document.getElementById(
        "serviceApply"
    );


serviceApply.addEventListener(
    "click",
    () => {

        const contact =
            document.getElementById(
                "contact"
            );


        const serviceSelect =
            document.getElementById(
                "serviceSelect"
            );


        const currentTitle =
            services[currentService].title;


        const option =
            [
                ...serviceSelect.options
            ].find(
                option =>
                    option.value.toLowerCase()
                    === currentTitle.toLowerCase()
            );


        if (option) {

            serviceSelect.value =
                option.value;

        }


        if (contact) {
            contact.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                block: "start"
            });
            const firstField = contact.querySelector("#name");
            if (firstField) {
                window.setTimeout(() => firstField.focus({ preventScroll: true }), 350);
            }
        }

    }
);


/* ================================
   TOUCH SWIPE
================================ */

let touchStartX = 0;

let touchEndX = 0;


stage.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    {
        passive: true
    }
);


stage.addEventListener(
    "touchend",
    event => {

        touchEndX =
            event.changedTouches[0].screenX;


        const difference =
            touchEndX - touchStartX;


        if (
            Math.abs(difference) < 50
        ) {

            return;

        }


        if (difference < 0) {

            changeService("next");

        }

        else {

            changeService("prev");

        }

    },
    {
        passive: true
    }
);


/* ================================
   KEYBOARD
================================ */

document.addEventListener(
    "keydown",
    event => {

        const activeTag =
            document.activeElement?.tagName;


        const isEditing =
            [
                "INPUT",
                "TEXTAREA",
                "SELECT"
            ].includes(activeTag) ||
            document.activeElement?.isContentEditable;


        if (
            event.key === "Escape" &&
            mobileMenu.classList.contains("active")
        ) {

            setMobileMenu(false);

            menuToggle.focus();

            return;

        }


        if (isEditing) {

            return;

        }


        if (
            event.key === "ArrowRight"
        ) {

            changeService("next");

        }


        if (
            event.key === "ArrowLeft"
        ) {

            changeService("prev");

        }

    }
);


/* ================================
   SCROLL REVEAL
================================ */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target
                        .classList
                        .add("visible");


                    revealObserver
                        .unobserve(
                            entry.target
                        );

                }

            });

        },

        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(
        element
    );

});


/* ================================
   SUPABASE
================================ */

const SUPABASE_URL = "https://pyjbzxoqmufzfowimpei.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_xb8XttZ80WaVMjEaQ8arig_YoH-77pS";
const AADHAAR_BUCKET = "Adhhar Documents";

function supabaseHeaders(extra = {}) {
    return {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
        ...extra
    };
}

function generateSafeFileName(originalName) {
    const extension = originalName.split(".").pop().toLowerCase();
    return `${crypto.randomUUID()}.${extension}`;
}

/* ================================
   CONTACT FORM
================================ */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const trackingSuccess = document.getElementById("trackingSuccess");
const submittedTrackingId = document.getElementById("submittedTrackingId");
const copyTrackingId = document.getElementById("copyTrackingId");

// Clear the previous success state when the user starts editing a new application.
function clearPreviousSubmissionNotice() {
    if (trackingSuccess) trackingSuccess.hidden = true;
    if (formMessage) formMessage.textContent = "";
    if (submittedTrackingId) submittedTrackingId.textContent = "";
}

contactForm.addEventListener("input", clearPreviousSubmissionNotice);
contactForm.addEventListener("change", clearPreviousSubmissionNotice);

contactForm.addEventListener("submit", async event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("serviceSelect").value;
    const note = document.getElementById("message").value.trim();
    const aadhaarFile = document.getElementById("aadhaarFile").files[0];
    const submitButton = contactForm.querySelector('button[type="submit"]');

    if (!name || !mobile || !email || !service || !aadhaarFile) {
        formMessage.textContent = "Please fill in all required details.";
        return;
    }

    if (!/^[6-9][0-9]{9}$/.test(mobile)) {
        formMessage.textContent = "Please enter a valid 10-digit mobile number.";
        return;
    }

    if (!["image/jpeg", "image/png"].includes(aadhaarFile.type)) {
        formMessage.textContent = "Please upload only a JPG, JPEG or PNG image.";
        return;
    }

    if (aadhaarFile.size > 1024 * 1024) {
        formMessage.textContent = "Aadhaar image must be 1 MB or smaller.";
        return;
    }

    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    formMessage.textContent = "Submitting your application...";
    trackingSuccess.hidden = true;

    let application = null;

    try {
       const createResponse = await fetch(
    `${SUPABASE_URL}/rest/v1/rpc/create_application`,
    {
        method: "POST",
        headers: supabaseHeaders({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify({
            p_name: name,
            p_mobile: mobile,
            p_email: email,
            p_service: service,
            p_note: note || null
        })
    }
);

        if (!createResponse.ok) {
        let details = "";
        try {
            const errorData = await createResponse.json();
            details =
                errorData?.message ||
                errorData?.details ||
                errorData?.hint ||
                errorData?.code ||
                "";
        } catch (_) {}

        throw new Error(
            details
                ? `Could not create application: ${details}`
                : `Could not create application (HTTP ${createResponse.status}).`
        );
    }

        const trackingId = await createResponse.json();

if (!trackingId) {
    throw new Error("Tracking ID was not generated.");
}

application = {
    tracking_id: trackingId
};

        const fileName = generateSafeFileName(aadhaarFile.name);
        const filePath = `${application.tracking_id}/${fileName}`;

        const uploadResponse = await fetch(
            `${SUPABASE_URL}/storage/v1/object/${AADHAAR_BUCKET}/${filePath}`,
            {
                method: "POST",
                headers: supabaseHeaders({
                    "Content-Type": aadhaarFile.type,
                    "x-upsert": "false"
                }),
                body: aadhaarFile
            }
        );

        if (!uploadResponse.ok) {
            const errorText = await uploadResponse.text();
            throw new Error(
                errorText
                    ? `Aadhaar upload failed: ${errorText}`
                    : `Aadhaar upload failed (HTTP ${uploadResponse.status}).`
            );
        }

        const updateResponse = await fetch(
            `${SUPABASE_URL}/rest/v1/applications?tracking_id=eq.${encodeURIComponent(application.tracking_id)}`,
            {
                method: "PATCH",
                headers: supabaseHeaders({ "Content-Type": "application/json" }),
                body: JSON.stringify({ aadhaar_file_path: filePath })
            }
        );

        if (!updateResponse.ok) {
            throw new Error("Application was created, but file information could not be saved.");
        }

        // Best-effort FormSubmit notification after the existing database workflow succeeds.
        // No uploaded document is sent to FormSubmit; only basic application details are included.
        let emailNotice = "";
        try {
            const mailData = new FormData();
            mailData.append("_subject", `New application: ${service}`);
            mailData.append("_template", "table");
            mailData.append("_captcha", "false");
            mailData.append("Name", name);
            mailData.append("Mobile", mobile);
            mailData.append("Email", email);
            mailData.append("Service", service);
            mailData.append("Note", note || "—");
            mailData.append("Tracking ID", application.tracking_id);
            const mailResponse = await fetch(
                "https://formsubmit.co/ajax/sumiit.singh@zohomail.in",
                { method: "POST", headers: { "Accept": "application/json" }, body: mailData }
            );
            if (!mailResponse.ok) {
                emailNotice = " (Email notification could not be confirmed; application is saved.)";
            }
        } catch (mailError) {
            emailNotice = " (Email notification could not be sent; application is saved.)";
        }

        formMessage.textContent = "Application submitted successfully." + emailNotice;
        submittedTrackingId.textContent = application.tracking_id;
        trackingSuccess.hidden = false;
        document.getElementById("trackingIdInput").value = application.tracking_id;
        contactForm.reset();

    } catch (error) {
        formMessage.textContent = error.message || "Unable to submit your application. Please try again.";
    } finally {
        submitButton.disabled = false;
        submitButton.removeAttribute("aria-busy");
    }
});

copyTrackingId.addEventListener("click", async () => {
    const id = submittedTrackingId.textContent.trim();
    if (!id) return;
    try {
        await navigator.clipboard.writeText(id);
        copyTrackingId.textContent = "Copied";
        setTimeout(() => copyTrackingId.textContent = "Copy Tracking ID", 1600);
    } catch {
        copyTrackingId.textContent = "Copy failed";
    }
});

/* ================================
   APPLICATION TRACKING
================================ */

const trackingForm = document.getElementById("trackingForm");
const trackingIdInput = document.getElementById("trackingIdInput");
const trackingMessage = document.getElementById("trackingMessage");
const trackingResult = document.getElementById("trackingResult");
const trackingSteps = ["Application Received", "Documents Under Review", "Processing", "Completed"];

function renderTrackingResult(application) {
    const status = application.status || "Application Received";
    document.getElementById("resultTrackingId").textContent = application.tracking_id;
    document.getElementById("resultService").textContent = application.service;
    document.getElementById("resultStatus").textContent = status;
    document.getElementById("resultUpdated").textContent = new Date(application.updated_at).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });

    const statusIndex = trackingSteps.indexOf(status);
    document.querySelectorAll(".status-step").forEach((step, index) => {
        step.classList.remove("completed", "active", "rejected");
        const dot = step.querySelector(".status-dot");
        if (dot) dot.textContent = index + 1;

        if (status === "Rejected") {
            if (index < trackingSteps.length) {
                if (index < trackingSteps.length - 1) {
                    step.classList.add("completed");
                    if (dot) dot.textContent = "✓";
                } else {
                    step.classList.add("rejected");
                }
            }
        } else if (index < statusIndex) {
            step.classList.add("completed");
            if (dot) dot.textContent = "✓";
        } else if (index === statusIndex) {
            step.classList.add("active");
        }
    });

    const box = document.getElementById("resultAdminMessage");
    const text = document.getElementById("resultAdminMessageText");
    if (application.admin_message) {
        text.textContent = application.admin_message;
        box.hidden = false;
    } else {
        text.textContent = "";
        box.hidden = true;
    }
    trackingResult.hidden = false;
}

trackingForm.addEventListener("submit", async event => {
    event.preventDefault();
    const trackingId = trackingIdInput.value.trim().toUpperCase();
    if (!trackingId) {
        trackingMessage.textContent = "Please enter your Tracking ID.";
        trackingResult.hidden = true;
        return;
    }

    trackingMessage.textContent = "Checking your application...";
    trackingResult.hidden = true;

    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_public_application_status`, {
            method: "POST",
            headers: supabaseHeaders({ "Content-Type": "application/json" }),
            body: JSON.stringify({ p_tracking_id: trackingId })
        });

        if (!response.ok) throw new Error("Tracking service is unavailable.");
        const rows = await response.json();
        if (!rows?.length) {
            trackingMessage.textContent = "No application found for this Tracking ID.";
            return;
        }
        renderTrackingResult(rows[0]);
        trackingMessage.textContent = "";
    } catch (error) {
        trackingMessage.textContent = error.message || "Unable to check the application right now.";
    }
});

/* ================================
   WHATSAPP
================================ */

const whatsappBtn =
    document.getElementById(
        "whatsappBtn"
    );


whatsappBtn.addEventListener(
    "click",
    () => {

        const selectedService =
            document
                .getElementById(
                    "serviceSelect"
                )
                .value ||
            services[currentService].title;


        const message =
            `Hello Sumit Digital Assist, I need help with ${selectedService}.`;


        whatsappBtn.href =
            `https://wa.me/?text=${encodeURIComponent(message)}`;

    }
);


/* ================================
   SMOOTH NAVIGATION
================================ */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            function(event) {

                const targetId =
                    this.getAttribute(
                        "href"
                    );


                if (
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    });
