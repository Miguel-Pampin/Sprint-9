import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent  implements OnInit{
  title = 'Contactos';
  constructor(){}
  ngOnInit(): void {
    
  }
  onSubmit(data: any){
    console.log(data);
  }
}

