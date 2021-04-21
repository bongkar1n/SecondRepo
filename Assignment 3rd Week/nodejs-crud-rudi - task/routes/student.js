const { response, request } = require('express');
const express = require('express');
const router = express.Router();
const dbConn = require("../lib/db");

router.get("/", (request, response, next) => {
    dbConn.query(
        'SELECT * FROM `library-card` ORDER BY `library-card`.grade ASC',
        // 'SELECT `library-card`.name as name, `library-card`.grade as grade, `student-gender`.gender as gender, `library-card`.library_id as library_id FROM `library-card` LEFT JOIN `student-gender` ON `library-card`.gender = `student-gender`.id ORDER BY `library-card`.grade ASC', 
        // //
        //  
        (error, rows) => { 
        if(error){
            request.flash("error", error); 
            response.render("student", { data: [] }); 
        } else {
            
            response.render("student", {
                data: rows,
                
            });
        }
    }
    );
});

router.get("/add", (request, response) => {
    response.render("add", { 
        name: "",
        grade: "",
        gender: "",
        library_id: "",

    });
});
router.post("/add", (request, response) => {
    const {name, grade, gender, library_id} = request.body; 
    let errors = false;
    let errorMessages;

    if(name.length === 0 || grade.length === 0 || gender.length === 0 || library_id.length === 0){
        errors = true;
        if (name.length === 0){
            errorMessages = "Please enter name";
        } else if (grade.length === 0){
            errorMessages = "Please enter student's grade";
        } else if (gender.length === 0){
            errorMessages = "Please enter student's gender";
        } else if (library_id.length === 0){
            errorMessages = "Please enter student's library Id";
        }
        

        request.flash("error", errorMessages);
        response.render("add", {
            name,
            grade,
            gender,
            library_id,
        });
    }
    if(!errors){
        const formData = {
            name,
            grade,
            gender,
            library_id,
        };
        dbConn.query("INSERT INTO `library-card` SET ?", formData, (error, result) => {
            if (error) {
                request.flash("error", error);
                response.render("add", {
                    name,
                    grade,
                    gender,
                    library_id,
                });
            } else {
                request.flash("success", "Member is successfully added");
                response.redirect("/student");
            }
        })
    }

});

router.get("/edit/(:id)", (request, response) => {
   const { id } = request.params;

   dbConn.query("SELECT * FROM `library-card` WHERE id =" + id, (error, rows) => {
    console.log(id);
    if (error) throw error;

       if (rows.length <= 0) {
           request.flash("error", "Data is not found");
           response.redirect("/student");
       } else {
           response.render("edit", { 
               id: rows[0].id,
               name: rows[0].name,
               grade: rows[0].grade,
               gender: rows[0].gender,
               library_id: rows[0].library_id,
           })
       } 
   }) 
    });

    router.post("/update/(:id)", (request, response) => {
        const { id } = request.params;
        const { name, grade, gender, library_id } = request.body; 
        let error = false;
        if(name.length === 0 || grade.length === 0 || gender.length === 0 || library_id.length === 0){
            errors = true;
            if (name.length === 0){
                errorMessages = "Please enter name";
            } else if (grade.length === 0){
                errorMessages = "Please enter student's grade";
            } else if (gender.length === 0){
                errorMessages = "Please enter student's gender";
            } else if (library_id.length === 0){
                errorMessages = "Please enter student's library Id";
            }
    
            request.flash("error", errorMessages);
            response.render("edit", {
                id,
                name,
                grade,
                gender,
                library_id,
            });
        }

        if(!error){
            const formData = {
                name,
                grade,
                gender,
                library_id,
            }
            dbConn.query("UPDATE `library-card` SET ? WHERE id =" + id, formData, (error, result) => {
                if (error) {
                    request.flash("error", error);
                    response.render("edit", {
                        id,
                        name,
                        grade,
                        gender,
                        library_id,
                    });
            } else {
                request.flash("success", "Member is successfully updated");
                response.redirect("/student");
            }
            
       })
    }
});

router.get("/delete/(:id)", (request, response) => {
    const { id } = request.params;

    dbConn.query("DELETE FROM `library-card` WHERE id =" + id, (error, result) => {
        if (error){
            request.flash("error", error);
           
        } else {
            request.flash("success", "Member is successfully deleted"); 
           
        } 
        response.redirect("/student");
    });
});



module.exports = router;
