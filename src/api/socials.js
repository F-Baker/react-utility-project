export default {
    fetchSocials: () => new Promise((resolve) => resolve([
        {
            name: "portfolio",
            text: "",
            icon: "fa fa-user",
            url: "https://felixbaker.com"
        },
        {
            name: "email",
            text: "fbaker.contact@gmail.com",
            icon: "fas fa-envelope",
            url: "mailto:fbaker.contact@gmail.com"
        },
        {
            name: "github",
            text: "",
            icon: "fab fa-github",
            url: "https://github.com/f-baker"
        },
        {
            name: "linkedin",
            text: "",
            icon: "fab fa-linkedin-in",
            url: "https://www.linkedin.com/in/f-baker"
        },

    ]))
};
