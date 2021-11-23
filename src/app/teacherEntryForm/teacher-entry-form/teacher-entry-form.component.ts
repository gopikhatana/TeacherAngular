import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormDataService } from 'src/app/teacherEntryForm/service/internalService/form-data.service';
import { DataService } from '../service/internalService/data-service';
// import * as $ from 'jquery';
import { OutsideServicesService } from 'src/app/service/outside-services.service';
@Component({
  selector: 'app-teacher-entry-form',
  templateUrl: './teacher-entry-form.component.html',
  styleUrls: ['./teacher-entry-form.component.css']
})
export class TeacherEntryFormComponent implements OnInit {

  // @ViewChild('teacherListTest') teacherListTest;

  teacherForm: FormGroup;
  formDataResp: any;
  fileSource: string;
  myForm: any;
  // name:any;

  @ViewChild('fr') submittedForm!:NgForm;

  nextTabView:boolean = false 
  imgFile: string;
  singleTeacherData:any;
  test:any;

  constructor(private _formBuilder: FormBuilder, private formData:FormDataService, private httpClient: HttpClient, private getDataService:DataService, private outsideServicesService:OutsideServicesService) { }

  ngOnInit(): void {



    // console.log(this.teacherListTest)
    this.getDataService.getData.subscribe((response)=>{
      this.singleTeacherData = response
      console.log(this.singleTeacherData)
      // this.singleTeacherData=this.singleTeacherData._value
      // this.test = this.singleTeacherData.name
    })
    
    this.formDataResp = this.formData.formData();

    this.teacherForm = new FormGroup({
      //Image Upload

      
      // 'file': new FormControl('', [Validators.required]),
      // 'fileSource': new FormControl('', [Validators.required]),
      'basicInfoForm': new FormGroup({    
        'name': new FormControl('', Validators.required),
        'gender': new FormControl(null, Validators.required),
        'dob': new FormControl(null, Validators.required),
        'socialcategory': new FormControl('', Validators.required),
        'email': new FormControl(null, [Validators.email, Validators.required]),
        'mobNumber': new FormControl(null,[Validators.required, Validators.minLength(10),Validators.maxLength(10)])
        
      //   'imgUpload': new FormGroup({
      //     'name1': new FormControl(),
      //     'file': new FormControl(),
      // 'imgSrc': new FormControl(),      
    // }),
      }),
      'eduAndProfessionalOne': new FormGroup({
        'typeOfTeacher': new FormControl(null, Validators.required),
        'natureOfAppointment': new FormControl(null, Validators.required),
        'doj': new FormControl(null, Validators.required),
        'hAcdQalification': new FormControl(null, Validators.required),
        'hProfQalification': new FormControl(null, Validators.required),
        'classTaught': new FormControl(null, Validators.required),
        'appointedForSub': new FormControl(null, Validators.required),
        'mainSubject1': new FormControl(null, Validators.required),
        'mainSubject2': new FormControl(null, Validators.required),
        'brcDays': new FormControl(null, [Validators.required, Validators.maxLength(5)]),
        'crcDays': new FormControl(null, [Validators.required, Validators.maxLength(5)]),
        'dietDays': new FormControl(null, [Validators.required, Validators.maxLength(5)]),
        'othDays': new FormControl(null, [Validators.required, Validators.maxLength(5)]),
        'trngRcvd': new FormControl(null, Validators.required),
        'trngNeed': new FormControl(null, Validators.required),
        'workingDaysOnNonTeachingAssg': new FormControl(null, Validators.required),
      }),
      'eduAndProfessionalTwo': new FormGroup({
        'mathsStudy': new FormControl(null, Validators.required),
        'scienceStudy': new FormControl(null, Validators.required),
        'engStudyVIII': new FormControl(null, Validators.required),
        'lagStudyVIII': new FormControl(null, Validators.required),
        'socialStudy': new FormControl(null, Validators.required),
        'wrkngInPrsntSchYear': new FormControl(null, [Validators.required, Validators.min(1950), Validators.max(2021), Validators.minLength(4), Validators.maxLength(4)]),
        'typeOfDisanility': new FormControl(null, Validators.required),
        'trndFortchngCWSN': new FormControl(null, Validators.required),
        'trndForCmptrtchng': new FormControl(null, Validators.required)
      })
      
    })
  }


  onSubmit(){
    this.myForm = this.teacherForm
    console.log(this.myForm.value.basicInfoForm)
// debugger
//     const formData = new FormData();
//     formData.append('file', this.teacherForm.get('fileSource').value);

    console.log(this.teacherForm)
    setTimeout(()=>{
      this.teacherForm.reset();
    },500)
    
  }



  updateDOB(dateObject){
    // console.log(dateObject.formatDate())
    const stringified = dateObject.value.ToString()
    console.log(stringified)
    const dob = stringified.substring(1, 11);
    console.log(dob)
    // this.applicant.contact[0].dob = dob;
  }

//   readURL(input) {
//     debugger
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function(e) {
//             $('#imagePreview').css('background-image', 'url('+e.target.result +')');
//             $('#imagePreview').hide();
//             $('#imagePreview').fadeIn(650);
//         }
//         reader.readAsDataURL(input.files[0]);
//     }
// }
// $("#imageUpload").change(function() {
//     readURL(this);
// });


  // get uf(){
  //   return this.teacherForm.controls;
  // }
   
  // onFileChange(event) {
    
  // debugger
  // const reader = new FileReader();
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     reader.readAsDataURL(file);


  //     reader.onload = () => {
  //       this.fileSource = reader.result as string;
  //       this.teacherForm.patchValue({
  //         fileSource: reader.result
  //       });
   
  //     };
  //   }
      // this.fileSource = file;
      // this.teacherForm.patchValue({
      //   fileSource: file
      // });
    // }
  
   
  // upload(){
  //   console.log(this.teacherForm.value);
  //   this.httpClient.post('http://localhost:8888/file-upload.php', this.teacherForm.value)
  //     .subscribe(response => {
  //       alert('Image has been uploaded.');
  //     })
  // }

}
