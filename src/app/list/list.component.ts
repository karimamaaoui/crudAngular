import { Component, OnInit, ViewChild } from '@angular/core';
import {  FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { logging } from 'protractor';
import { student } from './student';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild  ('signupForm') public form:NgForm;

  Students= new Array<student>();
  



  ngOnInit () {
    this.Students=[
      new student("Maaoui","Karima","L2DSI2"),
      new student("aaaa","bbbb","L2RSI"),
      
    ]
/*    NgForm= new FormControl({
      nom:new FormControl('',Validators.required),
      prenom:new FormControl(''),
      classe: new FormControl('')
    })

  */  
    }


  onAdd(student)
    {
      this.Students.push(student);
      //localStorage.setItem("student",JSON.stringify(this.Students));

    }
    

  onSubmit(form : NgForm)
    {     
      console.log(form.value);
      let student : student= {
        nom : form.value.nom,
        prenom : form.value.prenom,
        classe : form.value.classe
        }
        this.onAdd(student);
    }

  onReset() 
    { 
     this.form.onReset();
     
    }

  

  deleteStudent(nom : String) {
    let student = this.Students.find(x=>x.nom===nom);
    let index=this.Students.indexOf(student,0);
    this.Students.splice(index, 1);
    localStorage.setItem("student", JSON.stringify(this.Students));
      alert("Student deleted.");
    

   }
   editStudent(s:student,i:number)
   {
     
    }

  
}
