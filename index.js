let note_form = document.getElementById("note_form");
let note = document.getElementById("note")
let storage_data = [];
let root = document.getElementById("root");

note_form.addEventListener("submit",(event)=>{
    // stop form reload page
    event.preventDefault();
    // step 
    // 1. masukkan parameter function, target, note(nama id yang di input), value(untuk mendapat value)
    let note_value = {
        note : event.target.note.value
    }
    

    // push data note_value kedalam array storage_data
    storage_data.push(note_value);
    // console.table(storage_data);

    // delete note value(text area)
    note.value = "";

    // panggil function renderToHtml 
    renderToHtml();

});

// membuat function untuk render storage data ke html
let renderToHtml =()=>{

    // reset element root
    root.innerHTML = "";

    // membuat perulangan foreach dari array storage_data
    // e adalah element
    storage_data.forEach((e,i)=>{
   
    root.innerHTML += `
    <div class = "card">
    <pre> ${e.note} </pre>
    <button class="delete_btn" onclick= "deleteNote(${i})">Hapus mantan</button>
    </div>
    `
        });
    }

    function deleteNote (index){
        
        let confirmDelete = confirm("Yakin mau hapus mantan dari kenangan ?");
        // konfimasi delete
        if(!confirmDelete){
            return;
        }

        // delete array pada strorage data
        storage_data.splice(index,3);
        renderToHtml();
    }

