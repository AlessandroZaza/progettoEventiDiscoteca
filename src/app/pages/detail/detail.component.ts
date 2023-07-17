import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  event: any = {};
  aperitivo = false;
  dishes: any = '';
  bookedCorrectly = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'];
    this.http
      .get('https://its-events.davide-mantovani.workers.dev/events/' + id)
      .subscribe((response: any) => {
        this.event = response;
      });

    setTimeout(() => {
      console.log(this.event.isAperitivoIncluded);
      if (this.event.isAperitivoIncluded) {
        this.aperitivo = true;
        this.dishes = this.event.includedDishes;
      }
    }, 100);
  }

  openAlert(){
    this.bookedCorrectly = true;
  }
  closeAlert(){
    this.bookedCorrectly = false;
  }
}
