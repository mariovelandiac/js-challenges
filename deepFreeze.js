function deepFreeze(obj) {
    // Tu código aquí 👈
    for (let key in obj) {
        if (typeof obj[key] == 'object') {
            deepFreeze(obj[key])
        }
    }
    Object.freeze(obj)
    return 
}


const mario = {
    name: "Juanito",
    approvedCourses: ["Curso 1", "Curso 2"],
    caracteristicas: {
        age: 18,
        colorCabello: 'Negro',
        gustos: {
            musica: ['rock', 'punk', 'ska'],
            peliculas: ['drama', 'horros', 'comedia'],
        },
    },
    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};
console.log(Object.getOwnPropertyDescriptors(mario.caracteristicas.gustos))
deepFreeze(mario)
console.log(Object.getOwnPropertyDescriptors(mario.caracteristicas.gustos))