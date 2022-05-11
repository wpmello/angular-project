import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

// aqui está sendo usado o 'OnChanges' para garantir que toda e qualquer alteracão será feita independente de assincronicidade
export class StartComponent implements OnChanges {
  // '@Input' é usado para tornar uma variável legível para outros componentes 
  @Input()
  rating: number = 0;

  starWidth: number = 0;
  
  ngOnChanges(): void {
    this.starWidth = this.rating * 74 / 5;
  }
}