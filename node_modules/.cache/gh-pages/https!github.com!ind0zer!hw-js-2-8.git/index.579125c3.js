let students = [];
const studentForm = document.getElementById('student-form');
const studentTableBody = document.getElementById('student-table').querySelector('tbody');
const errorMsg = document.getElementById('error-msg');
studentForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const course = document.getElementById('course').value.trim();
    const faculty = document.getElementById('faculty').value.trim();
    if (!firstName || !lastName || isNaN(age) || !course || !faculty) {
        errorMsg.textContent = "\u0412\u0441\u0456 \u043F\u043E\u043B\u044F \u043C\u0430\u044E\u0442\u044C \u0431\u0443\u0442\u0438 \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u0456!";
        return;
    }
    errorMsg.textContent = '';
    const student = {
        firstName,
        lastName,
        age,
        course,
        faculty
    };
    students.push(student);
    saveToJSON();
    renderTable();
    studentForm.reset();
});
function renderTable() {
    studentTableBody.innerHTML = '';
    students.forEach((student, index)=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>${student.faculty}</td>
            <td>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        studentTableBody.appendChild(row);
    });
}
function deleteStudent(index) {
    students.splice(index, 1);
    saveToJSON();
    renderTable();
}
function saveToJSON() {
    const json = JSON.stringify(students, null, 2);
    console.log(json);
}
function loadFromJSON(json) {
    students = JSON.parse(json);
    renderTable();
}
const exampleJSON = '[]';
loadFromJSON(exampleJSON);

//# sourceMappingURL=index.579125c3.js.map
