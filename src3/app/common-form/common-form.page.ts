import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { FileUploader } from 'ng2-file-upload';
import { ServerUrl } from 'src/environments/environment';
import { AjaxService } from '../services/ajax.service';
import { AssertJsonService } from '../services/assert-json.service';
import { CommonServices } from '../services/common.service';
import { TapestockService } from '../services/tapestock.service';
import { Location } from '@angular/common';
// import {}
@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.page.html',
  styleUrls: ['./common-form.page.scss'],
})
export class CommonFormPage implements OnInit {
  dtoData = { "userId": "", "role": { "roleName": "" }, "email": "", "password": "", "name": "", "mobile1": "", "mobile2": null, "addressLine": "", "city": null, "state": "state", "pincode": 8, "rtoZone": '', "class3": 0, "class4": 0, "hologram": 0, "createdby": "", "createdDate": null, "lastupdatedBy": null, "lastupdatedDate": null, "swhite80mm": 0, "swhite50mm": 0, "sred50mm": 0, "syellow50mm": 0, "syellow80mm": 0, "sred20mm": 0, "swhite20mm": 0, "sred80mm": 0, "syellow20mm": 0 }
  certificateDtoData = { "certificateId": "", "user": null, "registrationNumber": "", "manufactureYear": null, "chassisNumber": "", "engineNumber": "", "vehicleMake": "", "vehicleModel": "", "ownerName": "", "addressLine": "", "city": "", "state": "", "pincode": 0, "rtoZone": "", "class3": 0, "class4": 0, "hologram": 0, "frontImage": "", "backImage": "", "leftImage": "", "rightImage": "", "createdDate": null, "updatedBy": "fg", "updatedDate": null, "rtoStatus": null, "rtoStatusdate": null, "rtoComment": null, "swhite20mm": 0, "sred80mm": 0, "syellow80mm": 0, "swhite80mm": 0, "syellow50mm": 0, "sred20mm": 0, "syellow20mm": 0, "sred50mm": 0, "swhite50mm": 0, "mobile1": null, "mobile2": null, "email": null }
  stdTapeName = ["sred50mm", "swhite50mm", "syellow50mm", "class3", "class4", "sred20mm", "swhite20mm", "sred80mm", "swhite80mm", "syellow20mm", "syellow80mm", "hologram"]
  stdTapeValueJson = {};
  profileForm: FormGroup;
  loginDatas;
  selectedDealer = 'Select Role'
  data
  count = 0;
  key: number;
  keyValue;
  orginalValues: any;
  obsDatas: any;
  minusValue = []
  dealerNames = false;
  uploader = false;
  creation: any;
  formVisible: any[];
  selectedRto = "Select RTO";
  role: any;
  pageType: any;
  loginData: any;
  password_type: string = "password";
  eye_icon: string = "eye-off";
  selectedData: any;
  dashboardData: any;
  changeName: any;
  vehicleList = [];
  vehicleModal = []
  // gokul
  mobnumPattern2 = "^((\\+91-?)|0)?[0-9]{10}$";
  stateList: any = [];
  method: string = "Create";
  selectedRtos=[];
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private storage: Storage,
    private ajaxService: AjaxService,
    private commonService: CommonServices,
    private datas: TapestockService,
    private router: Router,
    private location: Location,
    private assertJson: AssertJsonService
  ) {
    let url = ServerUrl.live + "/dashboard/vehicleList"
    this.ajaxService.ajaxGet(url)
      .subscribe(res => {
        this.vehicleList = Object.keys(JSON.parse(res.value));
        this.vehicleModal = JSON.parse(res.value)
      });
    url = ServerUrl.live + "/dashboard/rtoList"
    this.ajaxService.ajaxGet(url)
      .subscribe(res => {
        this.rtoAreaCode = JSON.parse(res.value);
      })
    url = ServerUrl.live + "/dashboard/states"
    this.ajaxService.ajaxGet(url)
      .subscribe(res => {
        this.stateList = JSON.parse(res.value);
      })
  }
  public right: FileUploader = new FileUploader({});
  public front: FileUploader = new FileUploader({});
  public back: FileUploader = new FileUploader({});
  public left: FileUploader = new FileUploader({});
  file;
  rtoAreaCode = []

  users = [];
 
  addNewMember() {
    let d = new Date();
    let current_date = d.getFullYear().toString()+'-'+ ( d.getMonth()+1 ).toString().padStart(2,'0')  +'-'+ d.getDate().toString()
    let data = { type: this.profileForm.value.roleName, id: "" }
    let url = ServerUrl.live + "/user/id/generate";
    this.ajaxService.ajaxPostWithBody(url, data)
      .subscribe(res => {
        if (res.id != null) {
          for (let i = 0; i < this.formVisible.length; i++) {
            if (this.formVisible[i] != "roleName")
              this.dtoData[this.formVisible[i]] = this.profileForm.value[this.formVisible[i]];
            else if (this.formVisible[i] == "roleName")
              this.dtoData["role"][this.formVisible[i]] = this.profileForm.value[this.formVisible[i]]
          }
          let date = new Date();
          
          this.dtoData["userId"] = res.id;
          this.dtoData["createdby"] = this.loginDatas["userId"];
          this.dtoData["tradecertificateno"] = this.profileForm.value.tradecertificateno
          this.dtoData["createdDate"] = '2022-03-23'
          this.dtoData["status"] = true
          this.dtoData["reason"] = ''
          // this.dtoData.rtoZone = ["MH - 33","MH - 33","MH - 33"]
           this.dtoData["rtoZone"] =JSON.stringify(this.selectedRtos) 
          let url = ServerUrl.live + "/user/save";
          this.ajaxService.ajaxPostWithBody(url, this.dtoData)
            .subscribe(res => {
              if(res.message =="Mobile No Already Exists"){
                this.commonService.dismissLoader()
                this.commonService.presentToast(res.message)
              }else if(res.message =="Email ID Already Exists"){
                this.commonService.dismissLoader()
                this.commonService.presentToast(res.message)
              }else{
                this.loginReStore();
                this.profileForm.reset()
              } 
            })
        } else {
          this.commonService.presentToast("Invalid role, please select valid role")
        }
      })
  }

  vehicleTypeLength(vehicleModal) {
    for (let i = 0; i < this.stdTapeName.length; i++) {
      this.profileForm.controls[this.stdTapeName[i]].setValue(this.stdTapeValueJson[(this.profileForm.value["vehicleMake"] + "_" + vehicleModal["detail"]["value"]).replace(/ /g, "").toUpperCase()][this.stdTapeName[i]])
    }
  }
  closeModel(){
    //this.location.back()
    this.router.navigateByUrl('/dashboard-count');
  }
  changeEmpyVehicle() {
    this.profileForm.controls['vehicleModel'].setValue(this.vehicleModal[this.profileForm.value['vehicleModal']])
    for (let i = 0; i < this.stdTapeName.length; i++) {
      this.profileForm.controls[this.stdTapeName[i]].setValue("0")
    }
  }

  editSelectedMember() {
    Object.assign(this.selectedData, this.profileForm.value)
    this.selectedData['lastupdatedBy'] = this.loginDatas["userId"]
    this.selectedData['lastupdatedDate'] = '2022-03-23'
    this.selectedData['createdDate'] =  '2022-03-23'
    this.selectedData.role.createdDate = '2022-03-23'
    // this.selectedData.rtoZone = JSON.stringify(["MH - 33","MH - 33","MH - 33"])
    this.selectedData.rtoZone = JSON.stringify(this.selectedData.rtoZone)

    let url = ServerUrl.live + "/user/save";
    this.ajaxService.ajaxPostWithBody(url, this.selectedData)
      .subscribe(res => {
        if (res) {
          this.loginReStore();
        } else {
          this.commonService.dismissLoader()
        }
      })
  }

  stockUploader() {
    const url = ServerUrl.live + '/stock/save';
    this.loginDatas['lastupdatedBy'] = this.loginDatas.userId;
    this.loginDatas['lastupdatedDate'] = new Date();
    var data = { fromUser: this.loginDatas, toUser: null, message: "upload" }
    this.ajaxService.ajaxPostWithBody(url, data).subscribe(res => {
      if (res == "") {
        this.loginReStore();
      } else {
        this.commonService.dismissLoader()
      }
    })
  }

  stockAssign() {
    this.selectedData["swhite80mm"] = this.selectedData["swhite80mm"] != null ? this.profileForm.value["swhite80mm"] == "" ? this.selectedData["swhite80mm"] : parseInt(this.profileForm.value["swhite80mm"]) + parseInt(this.selectedData["swhite80mm"]) : parseInt(this.profileForm.value["swhite80mm"]);
    this.selectedData["swhite50mm"] = this.selectedData["swhite50mm"] != null ? this.profileForm.value["swhite50mm"] == "" ? this.selectedData["swhite50mm"] : parseInt(this.profileForm.value["swhite50mm"]) + parseInt(this.selectedData["swhite50mm"]) : parseInt(this.profileForm.value["swhite50mm"]);
    this.selectedData["sred50mm"] = this.selectedData["sred50mm"] != null ? this.profileForm.value["sred50mm"] == "" ? this.selectedData["sred50mm"] : parseInt(this.profileForm.value["sred50mm"]) + parseInt(this.selectedData["sred50mm"]) : parseInt(this.profileForm.value["sred50mm"]);
    this.selectedData["syellow50mm"] = this.selectedData["syellow50mm"] != null ? this.profileForm.value["syellow50mm"] == "" ? this.selectedData["syellow50mm"] : parseInt(this.profileForm.value["syellow50mm"]) + parseInt(this.selectedData["syellow50mm"]) : parseInt(this.profileForm.value["syellow50mm"]);
    this.selectedData["syellow80mm"] = this.selectedData["syellow80mm"] != null ? this.profileForm.value["syellow80mm"] == "" ? this.selectedData["syellow80mm"] : parseInt(this.profileForm.value["syellow80mm"]) + parseInt(this.selectedData["syellow80mm"]) : parseInt(this.profileForm.value["syellow80mm"]);
    this.selectedData["sred20mm"] = this.selectedData["sred20mm"] != null ? this.profileForm.value["sred20mm"] == "" ? this.selectedData["sred20mm"] : parseInt(this.profileForm.value["sred20mm"]) + parseInt(this.selectedData["sred20mm"]) : parseInt(this.profileForm.value["sred20mm"]);
    this.selectedData["swhite20mm"] = this.selectedData["swhite20mm"] != null ? this.profileForm.value["swhite20mm"] == "" ? this.selectedData["swhite20mm"] : parseInt(this.profileForm.value["swhite20mm"]) + parseInt(this.selectedData["swhite20mm"]) : parseInt(this.profileForm.value["swhite20mm"]);
    this.selectedData["sred80mm"] = this.selectedData["sred80mm"] != null ? this.profileForm.value["sred80mm"] == "" ? this.selectedData["sred80mm"] : parseInt(this.profileForm.value["sred80mm"]) + parseInt(this.selectedData["sred80mm"]) : parseInt(this.profileForm.value["sred80mm"]);
    this.selectedData["syellow20mm"] = this.selectedData["syellow20mm"] != null ? this.profileForm.value["syellow20mm"] == "" ? this.selectedData["syellow20mm"] : parseInt(this.profileForm.value["syellow20mm"]) + parseInt(this.selectedData["syellow20mm"]) : parseInt(this.profileForm.value["syellow20mm"]);
    this.selectedData["class3"] = this.selectedData["class3"] != null ? this.profileForm.value["class3"] == "" ? this.selectedData["class3"] : parseInt(this.profileForm.value["class3"]) + parseInt(this.selectedData["class3"]) : parseInt(this.profileForm.value["class3"]);
    this.selectedData["class4"] = this.selectedData["class4"] != null ? this.profileForm.value["class4"] == "" ? this.selectedData["class4"] : parseInt(this.profileForm.value["class4"]) + parseInt(this.selectedData["class4"]) : parseInt(this.profileForm.value["class4"]);
    this.selectedData["hologram"] = this.selectedData["hologram"] != null ? this.profileForm.value["hologram"] == "" ? this.selectedData["hologram"] : parseInt(this.profileForm.value["hologram"]) + parseInt(this.selectedData["hologram"]) : parseInt(this.profileForm.value["hologram"]);
    const url = ServerUrl.live + '/stock/save'
    var data = { fromUser: this.loginDatas, toUser: this.selectedData, message: "assign" }
    this.ajaxService.ajaxPostWithBody(url, data).subscribe(res => {
      if (res == "") {
        this.loginReStore();
      } else {
        this.commonService.dismissLoader()
      }
    })
  }

  selectedDashData(data) {
    this.selectedData = data.detail.value
    this.selectedData['lastupdatedBy'] = this.loginDatas.userId;
    this.selectedData['lastupdatedDate'] = new Date();
  }

  loginReStore() {
    this.storage.get("login").then(body => {
      let url = ServerUrl.live + "/authentic/user";
      this.ajaxService.ajaxPostWithBody(url, body)
        .subscribe(res => {
          if (res != null && res != "") {
            let messagingServiceData = res
            this.storage.set("loginRes", JSON.stringify(res)).then(res => {
              this.commonService.updateLoginInfo(messagingServiceData);
              this.commonService.dismissLoader()
              this.router.navigateByUrl('/dashboard-count', { replaceUrl: true })
            })
          }
        });
    })
  }
  updateAnswer(event) {
    this.selectedRto  =  'Select RTO'
    // this.dtoData.rtoZone =   event.target.value
    // this.selectedData.rtoZone = JSON.stringify(event.target.value)
    this.selectedRtos =  event.target.value
    this.selectedRto  =  'Select RTO'
    // if(this.){
    //   rtoZone
    // }
      }
  createDealerCertificate() {
    let digits = '0123456789';
            let OTP = '';
            for (let i = 0; i < 6; i++) {
              OTP += digits[Math.floor(Math.random() * 10)];
            }
            let d = new Date();
            let current_date = d.getDate().toString()+'-'+( d.getMonth()+1 ).toString().padStart(2,'0')+'-'+  d.getFullYear().toString()

           
    if(this.right.queue[0] && this.left.queue[0] && this.back.queue[0] && this.front.queue[0]) {
      let data = { type: this.profileForm.value.roleName, id: "" }
      let url = ServerUrl.live + "/certificate/id/generate";
      this.ajaxService.ajaxPostWithBody(url, data)
        .subscribe(res => {
          if (res.id != null) {
            this.certificateDtoData['certificateId'] = res.id;
            for (let i = 0; i < Object.keys(this.certificateDtoData).length; i++) {
              if (Object.keys(this.certificateDtoData)[i] == "manufactureYear") {
                this.certificateDtoData[Object.keys(this.certificateDtoData)[i]] = new Date(this.profileForm.value.manufactureYear).getFullYear().toString();
              } else if (Object.keys(this.certificateDtoData)[i] != "certificateId" && Object.keys(this.certificateDtoData)[i] != "User" && this.profileForm.value[Object.keys(this.certificateDtoData)[i]] != "" && this.profileForm.value[Object.keys(this.certificateDtoData)[i]] != null && this.profileForm.value[Object.keys(this.certificateDtoData)[i]] != undefined) {
                this.certificateDtoData[Object.keys(this.certificateDtoData)[i]] = this.profileForm.value[Object.keys(this.certificateDtoData)[i]];
              }
            }
           
            this.certificateDtoData['otp'] = OTP      
            this.certificateDtoData['user'] = this.loginDatas;
            this.certificateDtoData['chassisNumber'] = this.profileForm.value["chassisNum"];
            this.certificateDtoData["createdDate"] = new Date();
            this.certificateDtoData["rtoStatus"] = "Pending";
            this.certificateDtoData["ownerName"] = this.profileForm.value["name"];
            const testData: FormData = new FormData();
            testData.append('right', this.right.queue[0]._file);
            testData.append('left', this.left.queue[0]._file);
            testData.append('front', this.front.queue[0]._file);
            testData.append('back', this.back.queue[0]._file);
            testData.append('data', JSON.stringify(this.certificateDtoData));
            let url = ServerUrl.live + "/certificate/save";
            this.ajaxService.ajaxPostWithFile(url, testData)
              .subscribe(res => {
                if (res) {
                  // var digits = '0123456789';
                  // let OTP = '';
                  // for (let i = 0; i < 6; i++) {
                  //   OTP += digits[Math.floor(Math.random() * 10)];
                  // }
                  // let resu = { key: res['certificateId'], message: OTP }
                  // let url = ServerUrl.live + "/certificate/send/otp";
                  // this.ajaxService.ajaxPostWithBody(url, resu)
                  //   .subscribe(res => {
                  //     this.commonService.presentToastWithOk(res.message)
                  //   })
                  this.commonService.presentToast("Added successfully")
                  this.commonService.dismissLoader()
                  this.loginReStore();
                } else {
                  this.commonService.dismissLoader()
                }
              })
          } else {
            this.commonService.presentToast("Invalid role, please select valid role")
          }
        })
    }else{
      this.commonService.presentToast("Oops!!.. upload the image and try again")
      this.commonService.dismissLoader()
    }
  
  }


  createRtoCertificate() {

  }

  submit() {
    if (this.profileForm.valid) {
      this.commonService.presentLoader();
      if (this.pageType == "uploadStocks" && this.formVisible.includes("assign") == false) {
        this.stockUploader();
      } else if (this.pageType == "assign" && this.formVisible.includes("assign") == true) {
        this.stockAssign();
      } else if (this.pageType == "Add") {
        this.addNewMember();
      } else if (this.pageType == "Edit") {
        this.editSelectedMember();
      } else if (this.pageType == "Certificate") {
        if (this.activatedRoute.snapshot.params.type == "Dealer")
          this.createDealerCertificate();
        else
          this.createDealerCertificate();
      }
    } else {
      this.commonService.presentToast("Some datas are missing please fill all the requirements")
    }

  }
changeDealer(){
  this.selectedDealer = 'Select Role'
}

  changeDatas(data, name, event) {
    if (this.formVisible.includes('assign')) {
      this.changeName = name
      this.storage.get('loginRes').then((logindata) => {
        logindata = JSON.parse(logindata)
          this.role = JSON.parse(logindata["role"]["menus"])
          this.loginDatas = logindata
        let result = this.loginDatas;
        name = this.changeName
        this.orginalValues = result
        this.datas.currentMessage.subscribe(message => this.loginDatas = message);
        if (this.orginalValues[name] >= this.profileForm.value[name]) {
          for (var i = 0; i < Object.keys(this.orginalValues).length; i++) {
            if (i == Object.keys(this.orginalValues).length) {
              break;
            }
            if (Object.keys(this.orginalValues)[i] == name) {
              if (data.value != "") {
                var total = this.orginalValues[name] - JSON.parse(data.value);
                this.loginDatas[name] = total;

                var oldValue = JSON.parse(data.value)
                var name = this.loginDatas[i];
                this.minusValue.push({ name: oldValue })
              } else {
                this.loginDatas[name] = this.orginalValues[name];
              }
            }
          }
          this.datas.changeMessage(this.loginDatas);
        } else {
          alert('your value should be less than stock value');
          this.loginDatas[name] = 0;
          this.profileForm.controls[name].setValue(this.orginalValues[name])
        }
      });
    } else {
      // this.datas.currentMessage.subscribe(message => this.loginDatas = message);
      // this.loginDatas[name] = parseInt(this.loginDatas[name]) + parseInt(this.profileForm.value[name]);
      // this.datas.changeMessage(this.loginDatas);
      this.changeName = name
      this.storage.get('loginRes').then((result) => {
        name = this.changeName
        this.orginalValues = JSON.parse(result)
        this.datas.currentMessage.subscribe(message => this.loginDatas = message);
        for (var i = 0; i < Object.keys(this.orginalValues).length; i++) {
          if (i == Object.keys(this.orginalValues).length) {
            break;
          }
          if (Object.keys(this.orginalValues)[i] == name) {
            if (data.value != "") {
              var total = this.orginalValues[name] + JSON.parse(data.value);
              this.loginDatas[name] = total;

              var oldValue = JSON.parse(data.value)
              var name = this.loginDatas[i];
              this.minusValue.push({ name: oldValue })
            } else {
              this.loginDatas[name] = this.orginalValues[name];
            }
          }
        }
        this.datas.changeMessage(this.loginDatas);

      });
    }
  }
  showHidePass = () => {
    this.password_type = this.password_type === "text" ? "password" : "text";
    this.eye_icon = this.eye_icon === "eye" ? "eye-off" : "eye";
  }
  // puc, speed govn ,hsrp ,tape,vts

  ionViewWillLeave(){
    localStorage.removeItem('editDatas')
    this.profileForm.patchValue({
      name: '',
        password: '',
        roleName: '',
        rtoZone: '',
        email: '',
        mobile1: '',
        mobile2: [''],  
        state: '',
        city: '',
        addressLine: '',
        pincode: '',
        tradecertificateno:'',
    })
  }

  ngOnInit() {
    
    this.stdTapeValueJson = this.assertJson.assertJson
    // let data: any = this.activatedRoute.snapshot.queryParamMap.get('data');
    let data: any = localStorage.getItem('editDatas')
    let data1: any = this.activatedRoute.snapshot.params.type;
    this.pageType = this.activatedRoute.snapshot.params.method;
    this.storage.get('dashboardResult').then((result) => {
      result = JSON.parse(result)
      this.dashboardData = result
    });
    this.storage.get('loginRes').then((result) => {
      result = JSON.parse(result)
      this.role = JSON.parse(result["role"]["menus"])
      this.loginDatas = result
    });
    if (data1 == "SuperAdmin" && history.state.name != 'superAdmin') {
      // data = null
      this.creation = this.method + " a DEALER"
      this.formVisible = [
        "userId",
        "password",
        "roleName",
        "email",
        "name",
        "mobile1",
        "mobile2",
        "addressLine",
        "city",
        "state",
        "pincode",
        "rtoZone",
        "tradeNumber"
      ]
      this.profileForm = this.formBuilder.group({
        name: ['', Validators.required],
        password: ['', Validators.required],
        roleName: ['', Validators.required],
        rtoZone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
        mobile1: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(this.mobnumPattern2),]],
        mobile2: [''],  
        state: ['', Validators.required],
        city: ['', Validators.required],
        addressLine: ['', Validators.required],
        pincode: ['', Validators.required],
        tradecertificateno:['', Validators.required],
      });
    } else if (data1 == "Manufacturer") {
      this.creation = this.method + " a distributor"
      this.formVisible = [
        "userId",
        "password",
        "roleName",
        "email",
        "name",
        "mobile1",
        "mobile2",
        "addressLine",
        "city",
        "state",
        "pincode",
        "rtoZone"
      ]
      this.profileForm = this.formBuilder.group({
        name: ['', Validators.required],
        password: ['', Validators.required],
        roleName: ['', Validators.required],
        rtoZone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
        mobile1: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(this.mobnumPattern2),]],
        mobile2: [''],
        state: ['', Validators.required],
        city: ['', Validators.required],
        addressLine: ['', Validators.required],
        pincode: ['', Validators.required],
      });
    } else if (data1 == "Distributor") {
      this.creation = this.method + " a dealer"
      this.formVisible = [
        "userId",
        "password",
        "roleName",
        "email",
        "name",
        "mobile1",
        "mobile2",
        "addressLine",
        "city",
        "state",
        "pincode",
        "rtoZone"
      ]
      this.profileForm = this.formBuilder.group({
        name: ['', Validators.required],
        password: ['', Validators.required],
        roleName: ['', Validators.required],
        rtoZone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
        mobile1: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(this.mobnumPattern2),]],
        mobile2: [''],
        state: ['', Validators.required],
        city: ['', Validators.required],
        addressLine: ['', Validators.required],
        pincode: ['', Validators.required],
      });
    } else if (data1 == "Dealer" || history.state.name == 'superAdmin') {
      this.creation = this.method + " a certificate"
      this.formVisible = [
        "userId",
        "roleName",
        "email",
        // "password",
        "name",
        "mobile1",
        "mobile2",
        "addressLine",
        "city",
        "state",
        "pincode",
        "rtoZone",
        "chassisNum",
        "registrationNumber",
        "manufactureYear",
        "engineNumber",
        "vehicleMake",
        "vehicleModel",
        "class4",
        "class3",
        "hologram",
        "stocks",
        "images",
        "assign"
      ]
      this.profileForm = this.formBuilder.group({
        name: ['', Validators.required],
        password: [''],
        roleName: ['', Validators.required],
        rtoZone: ['', Validators.required],
        // call: ['', Validators.required],
        email: ['', [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
        mobile1: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(this.mobnumPattern2),]],
        mobile2: ['',],
        state: ['', Validators.required],
        city: ['', Validators.required],
        addressLine: ['', Validators.required],
        pincode: ['', Validators.required],
        //  stocks
        sred20mm: ['0', Validators.required],
        sred50mm: ['0', Validators.required],
        sred80mm: ['0', Validators.required],
        swhite20mm: ['0', Validators.required],
        swhite50mm: ['0', Validators.required],
        swhite80mm: ['0', Validators.required],
        syellow20mm: ['0', Validators.required],
        syellow50mm: ['0', Validators.required],
        syellow80mm: ['0', Validators.required],
        // CERTIFICATE creation
        registrationNumber: ['', Validators.required],
        manufactureYear: ['', Validators.required],
        chassisNum: ['', Validators.required],
        engineNumber: ['', Validators.required],
        vehicleMake: ['', Validators.required],
        vehicleModel: ['', Validators.required],
        class3: ['0', Validators.required],
        class4: ['0', Validators.required],
        hologram: ['0', Validators.required],
      });
    } else if (data1 == "Rto") {
      this.creation = this.method + " a certificate"
      this.formVisible = [
        "userId",
        "roleName",
        "email",
        // "password",
        "name",
        "mobile1",
        "mobile2",
        "addressLine",
        "city",
        "state",
        "pincode",
        "rtoZone",
        "registrationNumber",
        "manufactureYear",
        "engineNumber",
        "vehicleMake",
        "vehicleModel",
        "class4",
        "class3",
        "chassisNum",
        "hologram",
        "stocks",
        "images",
        "assign"
      ]
      this.profileForm = this.formBuilder.group({
        name: ['', Validators.required],
        password: [''],
        roleName: ['', Validators.required],
        rtoZone: ['', Validators.required],
        // call: ['', Validators.required],
        email: ['', Validators.required],
        mobile1: ['', Validators.required],
        mobile2: [''],
        state: ['', Validators.required],
        city: ['', Validators.required],
        addressLine: ['', Validators.required],
        pincode: ['', Validators.required],
        //  stocks
        sred20mm: ['', Validators.required],
        sred50mm: ['', Validators.required],
        sred80mm: ['', Validators.required],
        swhite20mm: ['', Validators.required],
        swhite50mm: ['', Validators.required],
        swhite80mm: ['', Validators.required],
        syellow20mm: ['', Validators.required],
        syellow50mm: ['', Validators.required],
        syellow80mm: ['', Validators.required],
        // CERTIFICATE creation
        registrationNumber: ['', Validators.required],
        manufactureYear: ['', Validators.required],
        chassisNum: ['', Validators.required],
        engineNumber: ['', Validators.required],
        vehicleMake: ['', Validators.required],
        vehicleModel: ['', Validators.required],
        class3: ['', Validators.required],
        class4: ['', Validators.required],
        hologram: ['', Validators.required],
      });
    } else if (data1 == "uploadStocks") {
      this.creation = "upload stocks"
      this.formVisible = [
        "stocks"
      ]
      this.profileForm = this.formBuilder.group({
        sred20mm: [''],
        sred50mm: [''],
        sred80mm: [''],
        swhite20mm: [''],
        swhite50mm: [''],
        swhite80mm: [''],
        syellow20mm: [''],
        syellow50mm: [''],
        syellow80mm: [''],
        class3: [''],
        class4: [''],
        hologram: [''],
      });
    } else if (data1 == "assign") {
      this.creation = "Assign stocks to dealer"
      this.formVisible = [
        "stocks",
        "assign"
      ]
      this.profileForm = this.formBuilder.group({
        sred20mm: [''],
        sred50mm: [''],
        sred80mm: [''],
        swhite20mm: [''],
        swhite50mm: [''],
        swhite80mm: [''],
        syellow20mm: [''],
        syellow50mm: [''],
        syellow80mm: [''],
        class3: [''],
        class4: [''],
        hologram: [''],
      });
    }

    data = JSON.parse(data)
    if (data == "null" || data == null) {
      // this.profileForm = this.formBuilder.group({
      //   name: ['', Validators.required],
      //   password: ['', Validators.required],
      //   roleName: ['', Validators.required],
      //   rtoZone: ['', Validators.required],
      //   call: ['', Validators.required],
      //   email: ['', Validators.required],
      //   mobile1: ['', Validators.required],
      //   mobile2: [''],
      //   state: ['', Validators.required],
      //   city: ['', Validators.required],
      //   addressLine: ['', Validators.required],
      //   pincode: ['', Validators.required],
      //   //  stocks
      //   sred20mm: ['', Validators.required],
      //   sred50mm: ['', Validators.required],
      //   sred80mm: ['', Validators.required],
      //   swhite20mm: ['', Validators.required],
      //   swhite50mm: ['', Validators.required],
      //   swhite80mm: ['', Validators.required],
      //   syellow20mm: ['', Validators.required],
      //   syellow50mm: ['', Validators.required],
      //   syellow80mm: ['', Validators.required],
      //   // CERTIFICATE creation
      //   registrationNumber: ['', Validators.required],
      //   manufactureYear: ['', Validators.required],
      //   chassisNum: ['', Validators.required],
      //   engineNumber: ['', Validators.required],
      //   vehicleMake: ['', Validators.required],
      //   vehicleModel: ['', Validators.required],
      //   class3: ['', Validators.required],
      //   class4: ['', Validators.required],
      //   hologram: ['', Validators.required],
      // });
      this.selectedRto  =  'Select RTO'
      this.selectedDealer = 'Select Role'
    } else {
      this.selectedData = data;
      this.method = 'edit'
      // let rtoName;
      // try {
      //   rtoName = JSON.parse(data.rtoZone);
      // } catch (e) {
      //   data.rtoZone = data.rtoZone
      // }
       this.selectedRto = JSON.parse(data.rtoZone).toString()
    this.selectedDealer = data.role.roleName
    // this.profileForm.patchValue({
    //   rtoZone:JSON.parse(data.rtoZone),
    // })
      this.profileForm = this.formBuilder.group({
        name: [data.name, Validators.required],
        password: [data.password, Validators.required],
        roleName: [data.role.roleName, Validators.required],
        rtoZone:[JSON.parse(data.rtoZone)],
        call: [data.cell],
        email: [data.email, Validators.required],
        mobile1: [data.mobile1, Validators.required],
        mobile2: [data.mobile2],
        state: [data.state, Validators.required],
        city: [data.city, Validators.required],
        addressLine: [data.addressLine, Validators.required],
        pincode: [data.pincode, Validators.required],
        tradecertificateno: [data.tradecertificateno, Validators.required],
        //  stocks
        sred20mm: [data.sred20mm],
        sred50mm: [data.sred50mm],
        sred80mm: [data.sred80mm],
        swhite20mm: [data.swhite20mm],
        swhite50mm: [data.swhite50mm],
        swhite80mm: [data.swhite80mm],
        syellow20mm: [data.syellow20mm],
        syellow50mm: [data.syellow50mm],
        syellow80mm: [data.syellow80mm],
        // CERTIFICATE creation
        registrationNumber: [data.registrationNumber],
        manufactureYear: [data.manufactureYear],
        chassisNum: [data.chassisNum],
        engineNumber: [data.engineNumber],
        vehicleMake: [data.vehicleMake],
        vehicleModel: [data.vehicleModel],
        class3: [data.class3],
        class4: [data.class4],
        hologram: [data.hologram],
      });
    }
  }
}
