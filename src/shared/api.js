const projects = [
    {
        name: "Skagen",
        url: "https://skagen.com",
        img: "/assets/images/skagen.png"
    }
]
export function fetchProjects(){
    return new Promise(res=>{
        res({projects})
    })
}