import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-useredit',
  standalone: true,
  imports: [],
  templateUrl: './useredit.component.html',
  styleUrl: './useredit.component.scss'
})
export class UsereditComponent {

  userid : string;

    constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.userid = this.route.snapshot.paramMap.get('userid')
  }

}
