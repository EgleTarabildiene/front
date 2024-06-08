import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { KmiService } from '../../services/kmi.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kmi',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kmi.component.html',
  styleUrl: './kmi.component.css'
})
export class KmiComponent {
public result: string|null=null;
public svoris:number|null=null;
public ugis:number|null=null;

constructor (private kmiService:KmiService){

}

  public calculate(){
    if (this.svoris!=null && this.ugis!=null){
      this.kmiService.sendCalculate(this.svoris,this.ugis).subscribe((data:any)=>{
          this.result="Gautas rezultatas: "+data.rezultatas;
      });
    }
  }

}
