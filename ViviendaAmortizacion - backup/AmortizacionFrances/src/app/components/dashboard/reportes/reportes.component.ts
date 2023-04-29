import { Component, OnInit } from '@angular/core';
import { Reportes } from 'src/app/interfaces/reporte';

const ListReporte: Reportes[] = [
  {nombre:'Ricardo',pagoMensual: 659.96,interes:416.67,capital:243.29,saldoPendiente: 99756.71,totalpago:659.96},
  {nombre:'Pedro',pagoMensual: 954.83,interes:666.67,capital: 288.16,saldoPendiente:69971.71,totalpago:954.83},
  {nombre:'Luisa',pagoMensual: 454.03,interes:320.67,capital: 290.12,saldoPendiente:69899.01,totalpago:759.12},
  {nombre:'Carlos',pagoMensual: 954.83,interes:666.67,capital: 243.29,saldoPendiente:59765.00,totalpago:469.43},
  {nombre:'Sara',pagoMensual: 954.83,interes:666.67,capital: 243.29,saldoPendiente:39798.43,totalpago:809.65},

];

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  displayedColumns: string[] = ['nombre','pagoMensual','interes','capital','saldoPendiente','totalpago','acciones'];
  dataSource = ListReporte;
  constructor() { }

  ngOnInit(): void {
  }

}
