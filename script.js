const users = [
    {
        fullName: "Emma Johnson",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        profession: "UI/UX Designer",
        description: "Creative designer specializing in user-centered interfaces and mobile app experiences.",
        tags: ["UI Design", "Figma", "User Research"]
    },
    {
        fullName: "Liam Anderson",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        profession: "Full Stack Developer",
        description: "Developer experienced in building scalable web applications using modern JavaScript frameworks.",
        tags: ["JavaScript", "React", "Node.js"]
    },
    {
        fullName: "Sophia Martinez",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
        profession: "Digital Marketer",
        description: "Marketing strategist focused on SEO, social media campaigns, and brand growth.",
        tags: ["SEO", "Content Marketing", "Analytics"]
    },
    {
        fullName: "Olivia Brown",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        profession: "Product Manager",
        description: "Experienced in leading cross-functional teams to build impactful digital products.",
        tags: ["Product Strategy", "Agile", "Roadmapping"]
    }
];


var sum = 0

users.forEach(function (elem) {
    sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`

})

var main = document.querySelector('main')

main.innerHTML=sum