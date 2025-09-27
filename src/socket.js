import Note from './models/Note.js'
export default (io)=>{
   
    io.on('connection',(socket)=>{

       const emitNotes=async ()=>{ 
        const notes=await Note.find()
io.emit('server:loadnotes',notes)
    }
    emitNotes()

    socket.on('client:newnote', async (data)=>{
   const newNote=await new Note(data)
   const saveNote=await newNote.save()
   io.emit('server:newnote',saveNote)
    })

    socket.on('client:deletenote',async(id)=>{
        await Note.findByIdAndDelete(id)
        emitNotes() 
    })

     socket.on('client:getNote',async(id)=>{
        const note=await Note.findById(id)
        socket.emit('server:selectedNote',note)
    }) 

    socket.on('client:updateNote',async(data)=>{
        const {_id,title,description}=data
        await Note.findByIdAndUpdate(_id,{title,description})
        emitNotes()
    })


    })

   
}