import { Component } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "form-demo",
  templateUrl: "./form-demo.component.html",
  styleUrls: ["./form-demo.component.css"]
})
export class formDemoComponent { 
  constructor(
    private fb : FormBuilder
  ){}
  name = new FormControl("");
  profileFormvalue: any;
  profileFormvalue2:any;
  fullName;
  fulladdress:any;
  profileForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl("")
  });
  profileForm1 = new FormGroup({
    firstName1: new FormControl(""),
    lastName1: new FormControl(""),
    address1: new FormGroup({
      city1: new FormControl(""),
      state1: new FormControl(""),
      country1: new FormControl(""),
      zip1: new FormControl("")
    }),
    phoneNumber1: new FormControl("")
  });
  profileForm2 = this.fb.group({
    firstName2: ["", Validators.required],
    lastName2: ["", Validators.required],
    address2: this.fb.group({
      city2: [""],
      state2: [""],
      country2: [""],
      zip2: [""],
    }),
    phoneNumber2: [""],
  })

  updateName() {
    this.name.setValue("perry");
  }

  onSubmit() {
    console.warn("this.profileFormvalue", this.profileForm.value);
    this.profileFormvalue = this.profileForm.value;
    this.fullName =
      this.profileForm.controls["firstName"].value +
      " " +
      this.profileForm.get("lastName").value;
  }

  onSubmit1() {
    console.warn("this.profileFormvalue", this.profileForm1.value);
        console.warn("control inside FormControl :", this.profileForm1.controls["address1"].get("city1").value);
    this.profileFormvalue = this.profileForm1.value;
    this.fullName =
      this.profileForm1.controls["firstName1"].value +
      " " +
      this.profileForm1.get("lastName1").value;
    this.fulladdress =
      this.profileForm1.get('address1').get('city1').value
      + "," +
      this.profileForm1.get("address1").get('state1').value 
      + "," +
      this.profileForm1.get('address1').get('country1').value
      + "," +
      this.profileForm1.get('address1').get('zip1').value
  }
  setupdateform(){
    this.profileForm1.get('address1').get('zip1').setValue("00000")
  }
  patchupdateform(){
     this.profileForm1.patchValue({
       firstName1:'perry',
       lastName1:'faldu',
       address1:{
         city1:'jnd',
         zip1:'88888'
       }
     })
  }
  onSubmit2(){
    this.profileFormvalue2 = this.profileForm2.value;
  }
    updateform2(){
     this.profileForm2.patchValue({
       firstName2:'perry',
       lastName2:'faldu',
       address2:{
         city2:'blr',
         zip2:'11111'
       }
     })
  }
}
