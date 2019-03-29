import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
    selector:'doc-comp',
    templateUrl: './doctor.component.html',
    styleUrls:['./doctor.component.css']
})

export class DoctorComponent{
    public myColor={color:'Red'};
    public isHide=false;
    public isHidden=false;
    public isClicked:false;
    public title:string='Welcome to Pune';
    public numList=[1,2,3,4];
    name: string;
    isDisable:boolean=false;
    imagePath:string="https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
    public student:any=[
        {name:'sakshi', city:'pune'},
        {name:'pushpa', city:'indore'},
        {name:'sachin', city:'Jabalpur'},
        {name:'kshitij', city:'Mumbai'}

    ];
    public studentMore:any=[
        {name:'sakshi', city:'pune'},
        {name:'pushpa', city:'indore'},
        {name:'sachin', city:'Jabalpur'},
        {name:'kshitij', city:'Mumbai'},
        {name:'suvi', city:'Mumbai'},
        {name:'nidhi', city:'Ujjain'}

    ];
    public toggle(){
        this.isHidden=!this.isHidden;
    }
  colspan:number=2;
   
    public showMore(){
       //this.isClicked=!this.isClicked;
        this.student=[
            {name:'sakshi', city:'pune'},
            {name:'pushpa', city:'indore'},
            {name:'sachin', city:'Jabalpur'},
            {name:'kshitij', city:'Mumbai'},
            {name:'suvi', city:'Mumbai'},
            {name:'nidhi', city:'Ujjain'}

        ];

        

    }
    firstName:string;
    lastName:string;
    city:string;
    show:boolean=false;
    goToList():string{
        
       return this.firstName='Sakshi';
        /*this.lastName='Lonkar';
        this.city='JBP'*/
    }
    onClick(){
        this.show=!this.show;
    }


     employees:any[]=[
        {id:101,name:'sakshi',gender:'female',salary:20000,dob:'05/19/1994' },
        {id:102,name:'sushi',gender:'female',salary:30000,dob:'05/09/1994' },
        
        {id:'103',name:'sameeksha',gender:'female',salary:40000,dob:'05/19/1994' },
        {id:'104',name:'kshi',gender:'female',salary:70000,dob:'05/16/1994' },
        {id:'105',name:'sujit',gender:'male',salary:20000,dob:'05/19/1994' },
        {id:'106',name:'Pankaj',gender:'male',salary:60000,dob:'05/17/1994' },
        {id:'107',name:'shubham',gender:'male',salary:70000,dob:'06/19/1994' },
        {id:'108',name:'Nidhi',gender:'female',salary:30000,dob:'05/19/1994' },
    ]

    totalEmployees():number{
        return this.employees.length;
    }
    totalMaleEmployees():number{
        return this.employees.filter(e=>e.gender=='male').length;
    }
    totalFemaleEmployees():number{
        return this.employees.filter(e=>e.gender=='female').length;
    }
}