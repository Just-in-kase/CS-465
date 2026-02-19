import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../models/trip';
import { Router } from '@angular/router';
import { TripData } from '../services/trip-data';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css',
})
export class TripCard implements OnInit {
  @Input('trip') trip: any;
  
  @Output() tripDeleted = new EventEmitter<void>();

  constructor(
    private router: Router,
    private tripData: TripData, 
    private authentication: Authentication) {}
    

  ngOnInit(): void {

  }
  public isLoggedIn(): boolean 
  { 
  return this.authentication.isLoggedIn(); 
  } 
  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }
 public deleteTrip(trip: Trip) {
  if (!confirm('Delete this trip?')) {
    return;
  }

  this.tripData.deleteTrip(trip.code).subscribe({
    next: () => {
      this.tripDeleted.emit();   // refresh the list
    },
    error: (error: any) => {
      console.error('Error: ' + error);
    }
  });
}
  
}
