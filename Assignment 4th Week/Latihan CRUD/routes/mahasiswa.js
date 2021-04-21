const express = require('express');
const router = express.Router();
const db = require('../config/database/mysql');
const controller = require('../controller/index');

router.get('/', controller.mahasiswa.getAll);
router.get('/:nim', controller.mahasiswa.getOne);
router.get('/search', controller.mahasiswa.getSearch);
router.post('/', controller.mahasiswa.post);
router.put('/:nim', controller.mahasiswa.put);
router.delete('/:nim', controller.mahasiswa.delete);






// router.get('/', (req, res, next) => {
//     let sql = 'SELECT * FROM mahasiswa';
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         res.status(200).json({
//             message: 'Get Method Mahasiswa',
//             data : result
//         })
//     })
// })

// router.post('/', (req, res, next) => {
//     const nim = req.body.nim;
//     const nama = req.body.nama;
//     const jurusan = req.body.jurusan;
//     let sql = "INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (`"+nim+"`, `"+nama+"`, `"+jurusan+"`)";

//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         res.status(200).json({
//             message: 'Berhasil tambah Mahasiswa',
//         })
//     })
// });

// router.get('/:nim', (req, res, next) => {
//     const nim = req.params.nim;
//     let sql = 'SELECT * FROM mahasiswa WHERE nim = ' + nim;
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         if(result.length > 0){
//             res.status(200).json({
//                 message: 'Mahasiswa ditemukan',
//                 data : result
//             })
//         } else {
//             res.status(200).json({
//                 message: 'Mahasiswa tidak ditemukan',
//                 data : result      
//         }) 
//     }
// })
// });


// router.put('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'Put Method Mahasiswa'
//     });
// });


// router.delete('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'Delete Method Mahasiswa'
//     });
// });


module.exports = router;