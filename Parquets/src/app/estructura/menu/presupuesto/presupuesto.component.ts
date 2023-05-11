import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lista } from '@app/interfaces/listaInterface';
import { PreciosService } from '@app/servicios/precios.service';


@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit,OnChanges  {
 myForm:FormGroup = this.fb.group({
    nombreCliente:['',Validators.required],
    tlf:['',Validators.required],
    mail:['',Validators.required],
    parquet:[false ,Validators.required],
    pulir: [false,Validators.required],
    repara:[false,Validators.required],
  })
  

get SumaTotal(){
  return this.PreciosService.totalPrice();
}

constructor(private fb:FormBuilder,private PreciosService:PreciosService ){}

mostrarPanel(campo:string){
  
  return this.myForm.controls[campo].value;
}


ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  
}

  ngOnInit()  {
    
      this.myForm.controls['parquet'].valueChanges.subscribe((parquet:boolean)  =>{
      this.PreciosService.ControlDelPanel(parquet,20)
    
    
    });
    this.myForm.controls['pulir'].valueChanges.subscribe((pulir:boolean)  =>{
      this.PreciosService.ControlDelPanel(pulir,30)
    
    
    });
    this.myForm.controls['repara'].valueChanges.subscribe((repara:boolean)  =>{
      this.PreciosService.ControlDelPanel(repara,35)
      
    
    });
   
  }
  estado !:boolean 
  get PresupuestoList() {
    return this.PreciosService.listaPresupuestos;
  }
  
  total:number = 0;
  controlarPrecio(campo:string , valor:number){
    if(this.myForm.controls[campo].value == true){
          this.PreciosService.totalHome -= valor
          
    }else if (this.myForm.controls[campo].value == false)  {
      this.PreciosService.totalHome += valor
    }
  }
  
  submitForm(){
    const NuevoPresupuesto: lista = 
    {
      nombreCliente: this.myForm.value.nombreCliente,
      tlf: this.myForm.value.tlf,
      mail: this.myForm.value.mail,
      fecha: new Date,
      total: this.PreciosService.precioTotalGlobal,
      id: 0
    }    
    if(this.myForm.invalid){
        this.myForm.markAllAsTouched();
        return;
    }else if (this.myForm.valid) { 
      this.PreciosService.totalPrice();
      this.PresupuestoList.push(NuevoPresupuesto);
      this.PreciosService.guardarEnLocal(this.PresupuestoList);
      this.PreciosService.restarTotal();
      this.myForm.reset({repara:false,pulir:false,parquet:false}); 
    } 
  }
  
}

