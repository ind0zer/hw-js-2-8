let t=[];const e=document.getElementById("student-form"),n=document.getElementById("student-table").querySelector("tbody"),d=document.getElementById("error-msg");function l(){n.innerHTML="",t.forEach((t,e)=>{let d=document.createElement("tr");d.innerHTML=`
            <td>${t.firstName}</td>
            <td>${t.lastName}</td>
            <td>${t.age}</td>
            <td>${t.course}</td>
            <td>${t.faculty}</td>
            <td>
                <button onclick="deleteStudent(${e})">Delete</button>
            </td>
        `,n.appendChild(d)})}e.addEventListener("submit",n=>{n.preventDefault();let u=document.getElementById("first-name").value.trim(),m=document.getElementById("last-name").value.trim(),r=parseInt(document.getElementById("age").value),o=document.getElementById("course").value.trim(),a=document.getElementById("faculty").value.trim();if(!u||!m||isNaN(r)||!o||!a){d.textContent="Всі поля мають бути заповнені!";return}d.textContent="",t.push({firstName:u,lastName:m,age:r,course:o,faculty:a}),console.log(JSON.stringify(t,null,2)),l(),e.reset()}),t=JSON.parse("[]"),l();
//# sourceMappingURL=index.53d4fff4.js.map
