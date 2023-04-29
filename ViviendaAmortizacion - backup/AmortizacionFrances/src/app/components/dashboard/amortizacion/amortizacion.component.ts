import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amortizacion',
  templateUrl: './amortizacion.component.html',
  styleUrls: ['./amortizacion.component.css']
})
export class AmortizacionComponent implements OnInit {
  montoPrestamo= 0;
  tasaInteres=0;
  plazo=0;
  cuotaMensual:number=0;
  montoTotal:number=0;
  constructor() { }

  ngOnInit(): void {
   
  }
  calcularFinanciamiento() {
    const meses = this.plazo * 12;
    const tasaMensual = this.tasaInteres / 12 / 100;
    const factor = (tasaMensual * Math.pow(1 + tasaMensual, meses)) / (Math.pow(1 + tasaMensual, meses) - 1);
    const amortizacion = this.montoPrestamo * factor;

    this.cuotaMensual = parseFloat(amortizacion.toFixed(2));
    this.montoTotal = parseFloat((amortizacion * meses).toFixed(2));
  }
}
