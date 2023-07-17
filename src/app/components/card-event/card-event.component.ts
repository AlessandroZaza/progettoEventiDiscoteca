import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.css']
})
export class CardEventComponent {

  events: any = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://its-events.davide-mantovani.workers.dev/events')
      .subscribe(response => {
          const HomepageEvents = response
          this.events = HomepageEvents
      });
  }
  getData(){
    console.log(this.events);
  }
}
