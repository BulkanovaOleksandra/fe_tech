//Завдання 1
document.getElementById("myForm").addEventListener("submit", function(e){
    e.preventDefault();

    let pib = document.getElementById("pib");
    let group = document.getElementById("group");
    let phone = document.getElementById("phone");
    let address = document.getElementById("address");
    let email = document.getElementById("email");

    let valid = true;

    // ПІБ: ТТТТТТ Т.Т.
    let rePib = /^[А-ЯІЇЄҐ][а-яА-ЯіїєґІЇЄҐ']+\s[А-Я]\.[А-Я]\.$/;
    if(!rePib.test(pib.value)) { pib.style.background="pink"; valid=false; } else pib.style.background="";

    // Група: ТТ-ЧЧ
    let reGroup = /^[А-ЯІЇЄҐ]{2}-\d{2}$/;
    if(!reGroup.test(group.value)) { group.style.background="pink"; valid=false; } else group.style.background="";

    // Телефон: (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ
    let rePhone = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    if(!rePhone.test(phone.value)) { phone.style.background="pink"; valid=false; } else phone.style.background="";

    // Адреса: м. ЧЧЧЧЧЧ
    let reAddress = /^м\. .+$/;
    if(!reAddress.test(address.value)) { address.style.background="pink"; valid=false; } else address.style.background="";

    // e-mail: тттттт@ттттт.com
    let reEmail = /^[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]{2,}$/;
    if(!reEmail.test(email.value)) { email.style.background="pink"; valid=false; } else email.style.background="";

    if(valid){
        alert(`Введені дані:\nПІБ: ${pib.value}\nГрупа: ${group.value}\nТелефон: ${phone.value}\nАдреса: ${address.value}\nE-mail: ${email.value}`);
    }
});

//Варіант 2

const cell10 = document.getElementById("data10");
cell10.addEventListener("mouseover", () => {
    cell10.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  });
  
cell10.addEventListener("click", () => { 
      cell10.style.backgroundColor = document.getElementById("colorPicker").value;
  });
  
cell10.addEventListener("dblclick", () => {
  const row = cell10.parentNode;              
  const cells = row.cells;                    
  const startIndex = cell10.cellIndex;        

  for (let i = startIndex; i < cells.length; i += 2) {
    cells[i].style.backgroundColor = cell10.style.backgroundColor;
  }
});
