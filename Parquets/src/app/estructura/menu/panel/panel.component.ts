import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PreciosService } from '../../../servicios/precios.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private PreciosService: PreciosService,
    public modal: NgbModal
  ) {}
  myPanellForm: FormGroup = this.fb.group({
    m2: [0, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
  });
  ngOnInit() {}
  numM2: number = 0;

  panelPrice() {
    this.PreciosService.totalPanel = this.numM2 * 30;
  }

  sumar(campo: string) {
    if (campo === 'parquet') {
      this.numM2++;
    }
    this.panelPrice();
  }

  restar(valor: number, campo: string) {
    if (valor > 0 && campo === 'parquet') {
      this.numM2--;
    }

    this.panelPrice();
  }
}
