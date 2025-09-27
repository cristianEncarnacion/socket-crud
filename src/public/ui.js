import {saveNote,deleteNotes,getNoteById,updateNote} from './socket.js'

const noteList=document.querySelector('#note')
const title=document.querySelector('#title')
const description=document.querySelector('#description')
let saveId=''

export const noteUI=note=>{4
    const div=document.createElement('div')
    div.innerHTML=`
       <div class='card card-body rounded-0 mb-2 animate__animated animate__fadeInUp'>
     <div class='d-flex justify-content-between'>
        <h1>${note.title}</h1>
        <div>
        <button class='btn btn-danger btn-sm delete' data-id='${note._id}'>Delete</button>
        <button class='btn btn-secondary btn-sm update' data-id='${note._id}'>Update</button>
        </div>
        </div>
        <p>${note.description}</p>
        </div>
    `

    const btnDelete=div.querySelector('.delete')
    
    btnDelete.addEventListener('click',e => deleteNotes(btnDelete.dataset.id))

    const btnUpdate=div.querySelector('.update')
    btnUpdate.addEventListener('click', e=> getNoteById(btnUpdate.dataset.id))

    return div
}

export const renderNotes=(notes)=>{
    noteList.innerHTML=''
    notes.forEach(note=> noteList.append(noteUI(note)))

}

export const onHandleSubmit=(e)=>{
     e.preventDefault()

if(saveId){
        updateNote(
        saveId,
        title.value,
        description.value
    )
} else{
        saveNote(
        title.value,
        description.value
    )
}
    noteForm.reset()
}

export const appendNote=(note)=>{
    noteList.append(noteUI(note))
}


export const fillForm=(note)=>{
    title.value=note.title
    description.value=note.description
    saveId=note._id
}