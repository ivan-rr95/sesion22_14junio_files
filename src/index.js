const express = require('express')
const multer = require('multer')
const fs = require('fs') // this is no longer necessary   fs-extra: libreria para subir, borrar, etc archivos
const app = express()

app.get('/', (req, res)=>{
    res.send('estas en la raíz')
})

//******Multer***** */

//definimos el nombre de los archivos y donde (ruta) se van a subir
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'archivos/')
    },
    filename: function (req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalmente.split('.')[1])
    }
})

//Creamos el objeto multer con la ubicación y nombre (storage)
var upload = multer({ storage : storage})
//Creamos la ruta usando upload.single como middleware
app.post('/files', upload.single('file'),(req, res)=>{
    try {
        res.json({
            mensaje: 'OK',
            nombreArchivo: req.file.originalmente
        })
    } catch (error) {
        res.json({
            mensaje: 'error', error
        })
    }
})

//Borrar avatar
app.delete('/files/:files', async (req, res)=>{
    try {
        const file = req.params.file
      await fs.remove('archivos/' + files)
      res.json({
        mensaje: 'OK'+file+' ha sido borrado',
        
    })
    } catch (error) {
        res.json({
            mensaje: 'error', error
        })
    }
  }
)
//********fs_extra******* */ 

// // With async/await:
// const borrar = async (src, dest) ({
//     try {
//       await fs.remove('/tmp/myfile')
//       console.log('success!')
//     } catch (err) {
//       console.error(err)
//     }
//   })
  
//   example()

//puerto donde escucha
app.listen(8080, ()=>{
    console.log('escuchando en 8080');
})
